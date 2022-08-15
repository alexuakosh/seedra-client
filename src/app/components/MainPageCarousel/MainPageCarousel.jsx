import Carousel from "react-material-ui-carousel";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Grid, Box } from "@mui/material";
import PropTypes from "prop-types";
import img from "./carouselImg/leaf.png";
import Vector from "./carouselImg/Vector.svg";
import {
  cartSelector,
  downloadSlidesRequestStateSelector,
  slidesSelector,
} from "../../../store/selectors/selectors";
import { readyForEditStart } from "../../../store/actions/cart.actions";
import { downloadRequestStates } from "../../constants";
import ErrorHandler from "../ErrorHandler/ErrorHandler.jsx";
import { fetchItemAddToCart } from "../../../store/thunks/mainPageCarousel.thunks";
import AddToCartModal from "../../../ui/components/AddToCardModal/AddToCartModal.jsx";
import { sentItemToCart } from "../../../store/actions/mainPageCarousel.actions";

import useStyles from "./MainPageCarouselStyles";


const MainPageCarousel = () => {
  const classes = useStyles();
  const requestState = useSelector(downloadSlidesRequestStateSelector);
  const slideList = useSelector(slidesSelector);

  return (
    requestState === "success" && (
      <Box className={classes.CarouselSection}>
        <Box className={classes.CarouselContainer}>
          <Box
            bottom={{ xs: "65%", sm: "40%" }}
            component="img"
            sx={{
              width: "320px",
              position: "absolute",
              right: "80%",
            }}
            alt="img"
            src={img}
          />
          <Box
            display={{ sm: "none" }}
            component="img"
            sx={{
              width: "320px",
              position: "absolute",
              bottom: "10%",
              left: "70%",
            }}
            alt="img"
            src={img}
          />
          <Carousel
            m={"auto"}
            navButtonsAlwaysVisible={false}
            interval="5000"
            animation="fade"
            duration="2000"
            autoPlay={true}
          >
            {slideList.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Box>
        {requestState === downloadRequestStates.ERROR && (
          <ErrorHandler
            errorMessage={"There is some problem with downloading slides"}
          />
        )}
      </Box>
    )
  );
};

function Item(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const openModalWindow = useSelector(
    (state) => state.mainPageCarousel.openModalWindow
  );
  const itemAddToCart = useSelector(
    (state) => state.mainPageCarousel.itemAddToCart
  );
  const editCartState = useSelector((state) => state.cart.editCartState);
  const slidesItemId = useSelector((state) => state.slides.slidesItemId);
  const [isOnModal, toggleIsOnModal] = useState(false);
  const [discountStart] = useState(10);
  const [totalPrice, setTotalPrice] = useState(itemAddToCart.discountPrice);
  const localPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  });

  useEffect(() => {
    toggleIsOnModal(!isOnModal);
    if (!isOnModal) {
      dispatch(sentItemToCart());
      dispatch(readyForEditStart());
    }
  }, [openModalWindow]);

  useEffect(() => {
    if (editCartState === "success") {
      dispatch(sentItemToCart());
    }
  }, [editCartState]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        m="0"
        spacing={1}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          ml={{ xs: "0px", sm: "76px" }}
          pr="50%"
          xs={6}
          md={0}
          order={{ xs: 0, sm: 1 }}
          alignSelf="flex-start"
        >
          <Box display="flex" alignItems="center">
            <Typography
              display="flex"
              pt="10px"
              color={{ xs: "#E55C5C", md: "#1F2533" }}
              fontSize={{ xs: "32px", md: "42px" }}
              fontWeight="bold"
            >
              <Box
                component="img"
                pl={{ xs: "9vw", sm: "0px" }}
                pr={{ xs: "14px", sm: "14px", md: "25px" }}
                overflow="visible"
                width={{ xs: "19px", sm: "19px", md: "28px" }}
                src={Vector}
              ></Box>
              ${props.item.discountPrice}
            </Typography>
            <Typography
              component="span"
              color="#70737C"
              fontSize="22px"
              fontWeight="600"
              pt="10px"
              pl={{ xs: "12px", sm: "12px", md: "21px" }}
              style={{ textDecoration: "line-through" }}
            >
              ${props.item.currentPrice}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          mt="12px"
          ml={{ xs: "20px", sm: "76px" }}
          alignSelf="flex-start"
          xs={6}
          md={1}
          flexDirection="column"
        >
          <Typography
            className={classes.multiLineEllipsis}
            width={{ xs: "90%", sm: "60%" }}
            height={{ xs: "210px", sm: "108px" }}
            fontSize={{ xs: "28px", md: "48px" }}
            lineHeight={{ xs: "36px", md: "54px" }}
            textAlign={{ xs: "center", sm: "left" }}
            fontWeight="600"
          >
            {props.item.name}
          </Typography>
        </Grid>
        <Grid
          item
          mt={{ xs: "20px" }}
          xs={8}
          md={2}
          pr={{ xs: "10px", sm: "30px" }}
          order={{ xs: 0, sm: 1 }}
          position={{ xs: "relative", sm: "absolute" }}
          left={{ xs: "10vw", sm: "73%" }}
          justifySelf="center"
          alignSelf="center"
          flexDirection="row"
        >
          <Box
            component="img"
            pr="300px"
            width={{ xs: "55vw", sm: "18vw" }}
            src={`${props.item.imageUrl}`}
            alt={props.item.name}
          ></Box>
        </Grid>
        <Grid item xs={6} md={4} alignSelf="flex-start" flexDirection="row">
          <Typography
            width={{ sm: "55%" }}
            height={{ xs: "200px", sm: "76px" }}
            overflow={{ xs: "scroll", sm: "hidden", md: "hidden" }}
            pl={{ xs: "20px", sm: "76px" }}
            pr="40px"
            align="left"
            fontSize={{ xs: "14px", sm: "14px", md: "16px" }}
            fontWeight="300"
            color="#1F2533"
            lineHeight="28px"
            letterSpacing="-5%"
          >
            {props.item.description}
          </Typography>
        </Grid>
        <Grid
          item
          mt={{ xs: "10px" }}
          ml={{ xs: "6px", sm: "76px" }}
          alignSelf="flex-start"
          order={{ xs: 0, sm: 1 }}
          xs={6}
          md={2}
        >
          <Box
            className={classes.addToCartButton}
            component="button"
            width="142px"
            height="47px"
            border="none"
            fontSize="14px"
            color="#FFFFFF"
            borderRadius="10px"
            sx={{ cursor: "pointer" }}
            marginRight={{ xs: "12px", md: "15px" }}
            marginBottom="6px"
            onClick={() => {
              dispatch(fetchItemAddToCart(props.item.itemNo));
            }}
          >
            Add to cart
          </Box>
          {openModalWindow && (
            <AddToCartModal
              data={itemAddToCart}
              discontStart={discountStart}
              localPrice={localPrice}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              isOnModal={true}
              toggleIsOnModal={toggleIsOnModal}
              cart={cart}
              _id={itemAddToCart._id}
              slidesItemId={slidesItemId}
            />
          )}
          <Box
            className={classes.discoverButton}
            component="button"
            width="142px"
            height="47px"
            border="none"
            fontSize="14px"
            color="#359740"
            backgroundColor="#FFFFFF"
            borderRadius="10px"
            sx={{ cursor: "pointer" }}
            onClick={() =>
              navigate(
                props.item.itemNo
                  ? `/products/${props.item.itemNo}`
                  : "/will-not-match"
              )
            }
          >
            Discover
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainPageCarousel;

Item.propTypes = {
  price: PropTypes.string,
  imgRoute: PropTypes.string,
  name: PropTypes.string,
  descr: PropTypes.string,
  item: PropTypes.object,
};
