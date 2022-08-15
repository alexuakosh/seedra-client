import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  Modal,
  Box,
  Typography,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Stack,
  Chip,
  CardActions,
  ButtonGroup,
  Button,
  FilledInput,
} from "@mui/material";
import { useModalStyles } from "./useModalStyles";
import { changeProductQuantity } from "../../../store/thunks/cart.thunks";
import { sentItemToCart } from "../../../store/actions/mainPageCarousel.actions";

const AddToCartModal = ({
  data,
  discontStart,
  localPrice,
  totalPrice,
  isOnModal,
  toggleIsOnModal,
}) => {
  const { name, currentPrice, imageUrls, quantity, discountPrice, _id } = data;
  const slidesItemId = useSelector((state) => state.slides.slidesItemId);
  const [productAmount, setProductAmount] = useState(1);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setOpen(isOnModal);
  }, [isOnModal]);

  useEffect(() => {
    if (!open) {
      toggleIsOnModal(false);
      dispatch(sentItemToCart());
    }
  }, [open]);

  const modalClasses = useModalStyles();

  return (
    <Modal
      open={open}
      

      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={modalClasses.modalWidow}>
        <Card className={modalClasses.productCard}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid
              item
              className={modalClasses.productCardMediaWrapper}
              xs={12}
              md={3}
              lg={3}
            >
              <CardMedia
                className={modalClasses.productCardMedia}
                component="img"
                image={`${imageUrls}`}
                alt={name}
              />
            </Grid>

            <Grid item xs={12} md={9} lg={9}>
              <CardContent className={modalClasses.productCardContent}>
                <Typography
                  className={modalClasses.productCardName}
                  variant="h3"
                  color="text.primary"
                >
                  {name}
                </Typography>

                <Stack direction="row" spacing={1}>
                <Chip
                    label={quantity > 0 ? "AVAILABLE" : "NOT AVAILABLE"}
                    className={modalClasses.chipLabel}
                    sx={ quantity > 0 
                      ? { backgroundColor: 'rgba(53, 151, 64, 0.1)', 
                          color: 'rgb(53, 151, 64)', } 
                      : { backgroundColor: 'rgba(254, 109, 109, 0.1)', 
                          color: 'rgb(254, 109, 109)' }
                      }
                  />
                </Stack>
              </CardContent>
              <CardActions className={modalClasses.productActionsBox}>
              <Box className={modalClasses.productCardActionBtns}>
                  <ButtonGroup
                    className={modalClasses.amountInputGroup}
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
                          setProductAmount(+e.target.value)
                        }
                      }} 
                      id="product-amount"
                      className={modalClasses.productAmountInput}
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

                  <Box className={modalClasses.productCardButtons}>
                    <Box>
                      {(productAmount > discontStart ||
                        slidesItemId.includes(_id)) && (
                        <Typography
                          className={modalClasses.productCardOldPrice}
                          component="div"
                          variant="h5"
                          color="text.primary"
                        >
                          {localPrice.format(productAmount * +currentPrice)}
                        </Typography>
                      )}

                      {productAmount > discontStart ||
                      slidesItemId.includes(_id) ? (
                        <Typography
                          className={modalClasses.productCardPrice}
                          component="div"
                          variant="h5"
                          color="text.primary"
                        >
                          {localPrice.format(productAmount * discountPrice)}
                        </Typography>
                      ) : (
                        <Typography
                          className={modalClasses.productCardPrice}
                          component="div"
                          variant="h5"
                          color="text.primary"
                        >
                          {localPrice.format(productAmount * currentPrice)}
                        </Typography>
                      )}
                    </Box>
                    {quantity <= 0 ? (
                      <Button
                        className={modalClasses.productCardButtonBasket}
                        variant="contained"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Out of stock
                      </Button>
                    ) : (
                      <Button
                        className={modalClasses.productCardButtonBasket}
                        variant="contained"
                        onClick={() => {
                          setOpen(false);
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
                            );
                        }}
                      >
                        Add to card
                      </Button>
                    )}
                  </Box>
                </Box>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Modal>
  );
};

AddToCartModal.propTypes = {
  data: PropTypes.object.isRequired,
  discontStart: PropTypes.number.isRequired,
  localPrice: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
  isOnModal: PropTypes.bool.isRequired,
  toggleIsOnModal: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};

AddToCartModal.defaultProps = {
  totalPrice: 1,
};

export default AddToCartModal;
