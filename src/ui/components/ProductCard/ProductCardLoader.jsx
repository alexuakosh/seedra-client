import { Card, CardActions, CardContent, CardHeader, Grid, IconButton, Skeleton } from "@mui/material";
// import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useMainStyles } from "./useMainStyles";

export const ProductCardLoader = () => {
  const mainClasses = useMainStyles();

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className={mainClasses.productCard}>
        <CardHeader
          className={mainClasses.productCardHeader}
          action={
            <IconButton
              className={mainClasses.productCardButton}
              color="info"
            >
              <FavoriteBorderIcon />
            </IconButton>
          }
        />

        <Skeleton className={mainClasses.productCardMedia} variant="rectangular" width={294} height={294} />
        <Skeleton className={mainClasses.productCardRating} variant="rectangular" width={80} height={16} />

        <CardContent className={mainClasses.productCardContent}>
          <Skeleton style={{ height: "50px" }} variant="rectangular" width={291} height={50} />
          <Skeleton className={mainClasses.productCardPrice} variant="rectangular" width={88} height={54} />
        </CardContent>
        <CardActions className={mainClasses.productActionsBox}>
          <IconButton
            className={mainClasses.productCardButtonBasket}
            color="info"
            variant="contained"
          >
            <ShoppingCartOutlinedIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCardLoader;


