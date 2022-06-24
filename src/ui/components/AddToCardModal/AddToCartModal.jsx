import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { useModalStyles } from "./useModalStyles";
import { changeProductQuantity } from "../../../store/thunks/cart.thunks";

const AddToCartModal = ({
  data,
  discontStart,
  localPrice,
  totalPrice,
  setTotalPrice,
  isOnModal,
  toggleIsOnModal,
}) => {
  const { name, currentPrice, imageUrls, quantity, discountPrice, _id } = data;

  const [productAmount, setProductAmount] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    setTotalPrice((prevProductAmount) =>
      prevProductAmount <= discontStart
        ? productAmount * currentPrice
        : productAmount * discountPrice
    );
  }, [productAmount, discontStart]);

  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(isOnModal);
  }, [isOnModal]);

  useEffect(() => {
    if (!open) {
      toggleIsOnModal(false);
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
                    color="disable"
                    label={quantity > 0 ? "AVAILABLE" : "NOT AVAILABLE"}
                    icon={
                      quantity > 0 ? (
                        <CheckIcon className={modalClasses.buttonIcon} />
                      ) : (
                        <CloseIcon className={modalClasses.buttonIcon} />
                      )
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
                      onChange={(e) => setProductAmount(+e.target.value)}
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
                      {productAmount > discontStart && (
                        <Typography
                          className={modalClasses.productCardOldPrice}
                          component="div"
                          variant="h5"
                          color="text.primary"
                        >
                          {localPrice.format(productAmount * +currentPrice)}
                        </Typography>
                      )}
                      <Typography
                        className={modalClasses.productCardPrice}
                        component="div"
                        variant="h5"
                        color="text.primary"
                      >
                        {localPrice.format(totalPrice)}
                      </Typography>
                    </Box>
                    <Button
                      className={modalClasses.productCardButtonBasket}
                      variant="contained"
                      onClick={() => {
                        setOpen(false);
                        dispatch(
                          changeProductQuantity(
                            _id,
                            productAmount,
                            name,
                            // currentPrice,
                            totalPrice / productAmount,
                            imageUrls
                          )
                        );
                      }}
                    >
                      Add to card
                    </Button>
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
  _id: PropTypes.string.isRequired, // !!! MVP: number---> string
};

export default AddToCartModal;
