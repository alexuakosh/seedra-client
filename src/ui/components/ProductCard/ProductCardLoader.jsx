
import { Card, CardActions, CardContent, CardHeader, Grid, IconButton, Skeleton, Box } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useMainStyles } from "./useMainStyles";

export const ProductCardLoader = () => {
  const mainClasses = useMainStyles();

  return (
    <Grid 
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card className={mainClasses.productCard} sx={{width:"350px"}}>
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
        <Box sx={{width:"100%", position:"relative", paddingTop:"100%"}}>
          <Skeleton
            component={"div"} 
            className={mainClasses.productCardMedia} 
            variant="rectangular" 
            sx={{position:"absolute", top:"0", bottom:"0", right:"0", left:"0", display:"block", height:"auto"}}   
          />
        </Box>
        <Skeleton className={mainClasses.productCardRating} variant="rectangular" width={80} height={16} />

        <CardContent className={mainClasses.productCardContent}>
          <Skeleton style={{ height: "50px" }} variant="rectangular" width={"100%"} height={50} />
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