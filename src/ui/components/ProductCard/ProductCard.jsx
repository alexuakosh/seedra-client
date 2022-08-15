import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Rating,
  Typography,
  Box,
  ButtonGroup,
  Chip,
  FilledInput,
  Stack,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  ListItem,
  List,
  Link,
} from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RenderComponent from "../../../app/hoc/RenderComponent.jsx";
import { useMainStyles } from "./useMainStyles";
import { useProductPageStyles } from "./useProductPageStyles";
import { useBasketStyles } from "./useBasketStyles";
import { useFiltersStyles } from "./useFiltersStyles";
import Icon from "../Icon/Icon.jsx";
import Vector from "../../../app/components/MainPageCarousel/carouselImg/Vector.svg";

import {
  cartSelector,
  mainCategoriesSelector,
  isAdminStateSelector,
  loginStateSelector,
  downloadCategoriesRequestStateSelector,
  productSelector,
} from "../../../store/selectors/selectors";
import { addedProductToCart } from "../../../store/actions/cart.actions";
import {
  addProductToCart,
  fetchCart,
  decreaseProductQuantity,
  changeProductQuantity,
} from "../../../store/thunks/cart.thunks";

import AddToCartModal from "../AddToCardModal/AddToCartModal.jsx";
import BuiltInActions from "../../../app/components/AdminPanel/BuiltInActions/BuiltInActions.jsx";
import Spinner from "../Spinner/Spinner.jsx";
import { useRating } from "./useRating.jsx";
import { useWishlist } from "./useWishlist.jsx";
import fetchSlides from "../../../store/thunks/slides.thunks";
import { fetchProductComments } from "../../../store/thunks/comments.thunks";
import { downloadRequestStates } from "../../../app/constants/index";

export const ProductCardRender = ({ data }) => {
  const {
    name,
    currentPrice,
    imageUrls,
    isProductPage,
    isFiltersPage,
    packageDimensions,
    categories,
    quantity,
    isBasket,
    discountPrice,
    itemNo,
    itemWeight,
    ASIN,
    itemAbout,
    _id,
    cartQuantity,
  } = data;

  const [isOnModal, toggleIsOnModal] = useState(false);
  const [productAmount, setProductAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(currentPrice);
  const [discontStart] = useState(10);
  const dispatch = useDispatch();
  const isLogin = useSelector(loginStateSelector);
  const isAdmin = useSelector(isAdminStateSelector);
  const cart = useSelector(cartSelector);
  const slideList = useSelector(productSelector);
  const slidesItemId = [slideList];
  const addedToCart = useSelector((state) => state.cart.editCartState);

  useEffect(() => {
    if(isFiltersPage){
      dispatch(fetchSlides())
    }
    
    dispatch(fetchCart(slidesItemId));
    dispatch(addedProductToCart());
  }, []);

  const navigate = useNavigate();
  const mainClasses = useMainStyles();
  const productPageClasses = useProductPageStyles();
  const basketClasses = useBasketStyles();
  const filtersClasses = useFiltersStyles();

  const mainCategory = useSelector(mainCategoriesSelector).find((category) =>
    categories?.includes(category.name)
  );

  const localPrice = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
  });

  const [ratingValue, rateProduct] = useRating(data);

  useEffect(() => {
    data._id && dispatch(fetchProductComments(data._id));
  }, [ratingValue, data._id]);

  const [isFavourite, toggleInWishlist] = useWishlist(_id);

  const downloadCategoriesState = useSelector(
    downloadCategoriesRequestStateSelector
  );

  if (isBasket) {
    return (
      <Card>
        <Box className={basketClasses.productCardContainer}>
          <CardMedia
            className={basketClasses.productCardMedia}
            component="img"
            width="294px"
            image={`${imageUrls}`}
            alt={name}
          />
          <Box className={basketClasses.productCardNameContainer}>
            <Typography
              className={basketClasses.productCardName}
              variant="h3"
              color="text.primary"
            >
              {name}
            </Typography>
          </Box>
          <ButtonGroup
            className={basketClasses.productCardButtonGroup}
            color="primary"
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button
              onClick={() => {
                dispatch(decreaseProductQuantity(_id, slidesItemId));
              }}
              variant="text"
              disabled={cartQuantity <= 1}
              className={basketClasses.productCardButton}
            >
              {"-"}
            </Button>
            <FilledInput
              className={basketClasses.productCardAmount}
              inputProps={{ sx: { textAlign: "center" } }}
              disableUnderline={true}
              hiddenLabel={true}
              value={cartQuantity}
              onChange={(e) =>
                dispatch(changeProductQuantity(_id, +e.target.value))
              }
              id="product-amount"
            />
            <Button
              onClick={() => {
                dispatch(addProductToCart(_id, slidesItemId));
              }}
              variant="text"
              disabled={cartQuantity >= quantity}
              className={basketClasses.productCardButton}
            >
              {"+"}
            </Button>
          </ButtonGroup>
          <Typography
            className={basketClasses.productCardName}
            variant="h3"
            color="text.primary"
          >
            {currentPrice}
          </Typography>

          <Typography
            className={basketClasses.productCardName}
            variant="h3"
            color="text.primary"
          >
            {(currentPrice * cartQuantity).toFixed(2)}
          </Typography>
        </Box>
      </Card>
    );
  }

  if (isProductPage) {
    return (
      <Container sx={{ marginTop: "50px" }}>
        <Card className={productPageClasses.productCard}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid
              item
              className={productPageClasses.productCardMediaWrapper}
              xs={12}
              md={5}
              lg={5}
            >
              <Carousel
                m={"auto"}
                navButtonsAlwaysVisible={false}
                navButtonsWrapperProps={{
                  style: {
                    maxHeight: "421px",
                  },
                }}
                interval="5000"
                animation="slide"
                duration="500"
                autoPlay={false}
                indicatorContainerProps={{
                  style: {
                    marginTop: "22px",
                  },
                }}
                IndicatorIcon={imageUrls.map((url, i) => (
                  <CardMedia
                    key={i}
                    sx={{ width: "67px" }}
                    className={productPageClasses.productCardMediaSmall}
                    component="img"
                    width="67px"
                    image={`${url}`}
                    alt={name}
                  />
                ))}
                indicatorIconButtonProps={{
                  style: {
                    margin: "8px",
                    maxWidth: "67px",
                    maxHeight: "auto",
                  },
                }}
              >
                {imageUrls.map((item, i) => (
                  <CardMedia
                    key={i}
                    className={productPageClasses.productCardMedia}
                    component="img"
                    width="294px"
                    pr="300px"
                    image={`${item}`}
                    alt={name}
                  />
                ))}
              </Carousel>
            </Grid>
            <Grid item xs={12} md={7} lg={7}>
              <CardContent className={productPageClasses.productCardContent}>
                <Typography
                  className={productPageClasses.productCardName}
                  variant="h3"
                  color="text.primary"
                >
                  {name}
                </Typography>

                <Stack
                  sx={{ marginBottom: "15px" }}
                  direction="row"
                  spacing={1}
                >
                  <Chip
                    label={quantity > 0 ? "AVAILABLE" : "NOT AVAILABLE"}
                    className={productPageClasses.chipLabel}
                    sx={
                      quantity > 0
                        ? {
                            backgroundColor: "rgba(53, 151, 64, 0.1)",
                            color: "rgb(53, 151, 64)",
                          }
                        : {
                            backgroundColor: "rgba(254, 109, 109, 0.1)",
                            color: "rgb(254, 109, 109)",
                          }
                    }
                  />
                  <Chip
                    color="primary"
                    className={productPageClasses.productCardAvailable}
                    label={mainCategory?.name.toUpperCase()}
                    icon={
                      downloadCategoriesState ===
                      downloadRequestStates.SUCCESS ? (
                        <Icon
                          className={productPageClasses.buttonIcon}
                          icon={Icon.icons[mainCategory?.icon]}
                        />
                      ) : (
                        <Spinner />
                      )
                    }
                    variant="outlined"
                  />
                </Stack>
                <TableContainer
                  className={productPageClasses.productTableInfo}
                  component={Paper}
                >
                  <Table>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Package Dimensions
                        </TableCell>
                        <TableCell align="right">{packageDimensions}</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          Item Weight
                        </TableCell>
                        <TableCell align="right">{itemWeight}</TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          ASIN
                        </TableCell>
                        <TableCell align="right">{ASIN}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
              <CardActions className={productPageClasses.productActionsBox}>
                {quantity > 0 && (
                  <Box
                    className={productPageClasses.customScrollbar}
                    sx={{ width: "100%" }}
                  >
                    <Typography component="div" color="text.primary">
                      Size{" "}
                      <Typography component="span" sx={{ fontSize: "16px" }}>
                        {+productAmount} PACK
                      </Typography>
                    </Typography>

                    {isAdmin === false && (
                      <ButtonGroup
                        className={productPageClasses.amountInputGroup}
                        color="primary"
                        variant="outlined"
                        aria-label="outlined primary button group"
                      >
                        <Button
                          onClick={() => {
                            setProductAmount(
                              (prevProductAmount) => +prevProductAmount - 1
                            );
                          }}
                          variant="text"
                          disabled={productAmount <= 1}
                        >
                          {"-"}
                        </Button>
                        <FilledInput
                          inputProps={{ sx: { textAlign: "center" } }}
                          disableUnderline={true}
                          hiddenLabel={true}
                          value={productAmount}
                          onChange={(e) => {
                            if (/[0-9]/.test(+e.target.value)) {
                              setProductAmount(+e.target.value);
                            }
                          }}
                          id="product-amount"
                          className={productPageClasses.productAmountInput}
                        />
                        <Button
                          onClick={() => {
                            setProductAmount(+productAmount + 1);
                          }}
                          variant="text"
                          disabled={productAmount >= quantity}
                        >
                          {"+"}
                        </Button>
                      </ButtonGroup>
                    )}
                  </Box>
                )}
                <Box
                  className={productPageClasses.productCardActionBtns}
                  sx={{ flexWrap: "wrap" }}
                >
                  <Box display="flex">
                    {slidesItemId.includes(_id) && (
                      <Box
                        component="img"
                        pl={{ xs: "0vw", sm: "0px" }}
                        pr={"2px"}
                        overflow="visible"
                        width={{ xs: "12px", sm: "12px", md: "12px" }}
                        src={Vector}
                      ></Box>
                    )}
                    {slidesItemId.includes(_id) ||
                    productAmount > discontStart ? (
                      <>
                        <Typography
                          className={productPageClasses.productCardPrice}
                          component="div"
                          variant="h5"
                          color="text.primary"
                        >
                          {localPrice.format(productAmount * +discountPrice)}
                        </Typography>
                        <Typography
                          className={productPageClasses.productCardOldPrice}
                          component="div"
                          variant="h5"
                          color="text.primary"
                        >
                          {localPrice.format(productAmount * +currentPrice)}
                        </Typography>
                      </>
                    ) : (
                      <Typography
                        className={productPageClasses.productCardPrice}
                        component="div"
                        variant="h5"
                        color="text.primary"
                      >
                        {localPrice.format(productAmount * +currentPrice)}
                      </Typography>
                    )}
                  </Box>

                  {isAdmin === false && (
                    <Box
                      display="flex"
                      alignItems="center"
                      className={productPageClasses.productCardButtons}
                      sx={{ position: "relative" }}
                    >
                      {isLogin && (
                        <IconButton
                          className={productPageClasses.productCardButton}
                          color="primary"
                          aria-label="add to favourite"
                          onClick={toggleInWishlist}
                        >
                          {isFavourite ? (
                            <FavoriteIcon />
                          ) : (
                            <FavoriteBorderIcon />
                          )}
                        </IconButton>
                      )}
                      {quantity > 0 && (
                        <>
                          {addedToCart === "success" ? (
                            <Button
                              className={
                                productPageClasses.productCardButtonBasket
                              }
                              variant="contained"
                              onClick={() => {
                                dispatch(addedProductToCart());
                              }}
                            >
                              Added to card
                            </Button>
                          ) : (
                            <Button
                              className={
                                productPageClasses.productCardButtonBasket
                              }
                              variant="contained"
                              onClick={() =>
                                productAmount &&
                                quantity > 0 &&
                                dispatch(
                                  changeProductQuantity(
                                    _id,
                                    productAmount,
                                    name,
                                    totalPrice / productAmount,
                                    imageUrls,
                                    currentPrice,
                                    discountPrice,
                                    slidesItemId
                                  )
                                )
                              }
                            >
                              Add to cart
                            </Button>
                          )}
                        </>
                      )}
                    </Box>
                  )}
                  {isAdmin && <BuiltInActions product={data} />}
                </Box>
              </CardActions>
            </Grid>
          </Grid>
          <CardContent className={productPageClasses.productCardContent}>
            <Typography
              className={productPageClasses.productCardAboutHeader}
              component="h2"
              variant="h2"
              color="text.primary"
            >
              Product information
            </Typography>
            <List
              className={productPageClasses.productCardAboutHeader}
              variant="body1"
              color="text.primary"
            >
              {itemAbout?.map((item, i) => (
                <ListItem key={i} sx={{ padding: "8px 0" }}>
                  <Typography>{item}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    );
  }

  if (isFiltersPage) {
    return (
      <Grid item xs={12} md={6} lg={4}>
        <Card className={filtersClasses.productCard}>
          <CardHeader
            className={mainClasses.productCardHeader}
            action={isLogin &&
              isAdmin === false && 
              (<IconButton
                className={mainClasses.productCardButton}
                color="warning"
                aria-label="add to favourite"
                onClick={toggleInWishlist}
              >
                {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>)
            }
          />

          <CardMedia
            className={filtersClasses.productCardMedia}
            component="img"
            image={`${imageUrls}`}
            alt={name}
          />

          <Rating
            className={mainClasses.productCardRating}
            name="half-rating"
            value={ratingValue}
            precision={1}
            onChange={(e) => {
              rateProduct(e);
            }}
          />

          <CardContent className={mainClasses.productCardContent}>
            <Link
              to={`/${itemNo}`}
              style={{
                color: "inherit",
                textDecoration: "inherit",
                height: "50px",
                display: "block",
                overflow: "hidden",
              }}
              color="text.primary"
              underline="hover"
              variant="h3"
            >
              <Typography
                className={mainClasses.productCardName}
                to={`/${itemNo}`}
                variant="h3"
                color="text.primary"
                onClick={() => navigate(`${itemNo}`)}
              >
                {name}
              </Typography>
            </Link>
            {slidesItemId.includes(_id) && quantity > 0 && (
              <Box
                component="img"
                pl={{ xs: "0vw", sm: "0px" }}
                pr={"2px"}
                overflow="visible"
                width={{ xs: "12px", sm: "12px", md: "12px" }}
                src={Vector}
              ></Box>
            )}
            {slidesItemId.includes(_id)
              ? quantity > 0 && (
                  <Typography
                    className={mainClasses.productCardPrice}
                    component="span"
                    variant="h6"
                    color="text.primary"
                  >
                    {localPrice.format(discountPrice)}
                  </Typography>
                )
              : quantity > 0 && (
                  <Typography
                    className={mainClasses.productCardPrice}
                    component="span"
                    variant="h6"
                    color="text.primary"
                  >
                    {localPrice.format(currentPrice)}
                  </Typography>
                )}
            {quantity <= 0 && (
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
                paddingTop="16px"
              >
                <Typography
                  className={mainClasses.notAvailableCardPrice}
                  component="span"
                  variant="h6"
                  color="text.primary"
                >
                  {localPrice.format(currentPrice)}
                </Typography>
                <Typography
                  className={mainClasses.notAvailableProduct}
                  component="span"
                  variant="h6"
                  color="text.primary"
                >
                  Out of Stock
                </Typography>
              </Box>
            )}
            {/* </CardContent> */}
            <CardActions className={mainClasses.productActionsBox}>
              {quantity > 0 && (
                <IconButton
                  className={filtersClasses.productCardButtonBasket}
                  aria-label="add to basket"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    toggleIsOnModal(true);
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                  <AddToCartModal
                    data={data}
                    discontStart={discontStart}
                    localPrice={localPrice}
                    totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                    isOnModal={isOnModal}
                    toggleIsOnModal={toggleIsOnModal}
                    cart={cart}
                    _id={_id}
                    slidesItemId={slidesItemId}
                  />
                </IconButton>
              )}
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    );
  }

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card className={mainClasses.productCard}>
        <CardHeader
          className={mainClasses.productCardHeader}
          action={
            isLogin &&
            isAdmin === false && (
              <IconButton
                onClick={toggleInWishlist}
                className={mainClasses.productCardButton}
                color="warning"
                aria-label="add to favourite"
              >
                {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            )
          }
        />
        <CardMedia
          className={mainClasses.productCardMedia}
          component="img"
          image={`${imageUrls}`}
          alt={name}
        />

        <Rating
          className={mainClasses.productCardRating}
          name="half-rating"
          precision={1}
          value={ratingValue}
          onChange={(e) => {
            rateProduct(e);
          }}
        />

        <CardContent
          className={mainClasses.productCardContent}
          sx={{ padding: "0px" }}
        >
          <Link
            style={{
              color: "inherit",
              textDecoration: "inherit",
              height: "50px",
              display: "block",
              overflow: "hidden",
            }}
            color="text.primary"
            underline="hover"
            variant="h3"
          >
            <Typography
              className={mainClasses.productCardName}
              variant="h3"
              color="text.primary"
              onClick={() => navigate(`/products/${itemNo}`)}
            >
              {name}
            </Typography>
          </Link>
          <Box display="flex" justifyContent="space-between">
            {slidesItemId.includes(_id) && quantity > 0 && (
              <Box
                component="img"
                pl={{ xs: "0vw", sm: "0px" }}
                pr={"2px"}
                overflow="visible"
                width={{ xs: "12px", sm: "12px", md: "12px" }}
                src={Vector}
              ></Box>
            )}
            {slidesItemId.includes(_id)
              ? quantity > 0 && (
                  <Typography
                    className={mainClasses.productCardPrice}
                    component="span"
                    variant="h6"
                    color="text.primary"
                  >
                    {localPrice.format(discountPrice)}
                  </Typography>
                )
              : quantity > 0 && (
                  <Typography
                    className={mainClasses.productCardPrice}
                    component="span"
                    variant="h6"
                    color="text.primary"
                  >
                    {localPrice.format(currentPrice)}
                  </Typography>
                )}
            {quantity <= 0 && (
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
                paddingTop="16px"
                width="100%"
              >
                <Typography
                  className={mainClasses.notAvailableCardPrice}
                  component="span"
                  variant="h6"
                  color="text.primary"
                >
                  {localPrice.format(currentPrice)}
                </Typography>
                <Typography
                  className={mainClasses.notAvailableProduct}
                  component="span"
                  variant="h6"
                  color="text.primary"
                >
                  Out of Stock
                </Typography>
              </Box>
            )}
            <CardActions className={mainClasses.productActionsBox}>
              {quantity > 0 && (
                <IconButton
                  className={mainClasses.productCardButtonBasket}
                  aria-label="add to basket"
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    toggleIsOnModal(true);
                  }}
                >
                  <ShoppingCartOutlinedIcon />
                  <AddToCartModal
                    data={data}
                    discontStart={discontStart}
                    localPrice={localPrice}
                    totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                    isOnModal={isOnModal}
                    toggleIsOnModal={toggleIsOnModal}
                    cart={cart}
                    _id={_id}
                    slidesItemId={slidesItemId}
                  />
                </IconButton>
              )}
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

const ProductCard = ({ product, loading }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    product?._id && dispatch(fetchProductComments(product._id));
  }, []);
  return (
    <RenderComponent
      loading={loading}
      data={product}
      renderSuccess={ProductCardRender}
      loadingFallback={Spinner}
      renderError={<span>Error</span>}
    />
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    imageUrls: PropTypes.array, 
    isProductPage: PropTypes.bool,
    isFiltersPage: PropTypes.bool,
    categories: PropTypes.string,
    quantity: PropTypes.number,
    isBasket: PropTypes.bool,
    discountPrice: PropTypes.number,
    itemNo: PropTypes.string, 
    _id: PropTypes.string,
    cartQuantity: PropTypes.number,
  }),
  loading: PropTypes.any, 
};
ProductCardRender.propTypes = {
  data: PropTypes.object,
};

export default ProductCard;