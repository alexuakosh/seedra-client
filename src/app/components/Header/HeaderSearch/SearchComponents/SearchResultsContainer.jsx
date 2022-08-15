import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import useStyles from "./SearchResultsContainerStyles";

const pressets = {
  styles: {
    optionCard: {
      margin: '5px 0', 
      padding: "10px",
      display: "flex",
      alignItems: "center",
      flexFlow: "row wrap",
      justifyContent: "flex-start",
      backgroundColor: "rgba(0, 0, 0, 0.01)",
      height: "60px",
      '@media (max-width: 900px)': {
        padding: '5px',
      },
      
    },
  },
};
function RenderUnit({ imgUrl, name, price, itemNo, onClose }) {
  const classes = useStyles();

  const navigate = useNavigate();

  const goToProduct = (e) => {
    navigate(`products/${itemNo}`);
    onClose(e); 
  };

  return (
    <Link data-link="search" onClick={e => goToProduct(e)} className={classes.link}>
      <Card className={classes.searchOption} sx={pressets.styles.optionCard}>
        <CardMedia
          className={classes.searchImage}
          component="img"
          sx={{ width: 70, height: 70 }}
          image={imgUrl}
        />
        <CardContent>
          <Typography
            className={classes.searchName}
            gutterBottom
            variant="caption"
            component="div"
            sx={{ textDecoration: 'underline', 
                  textDecorationColor: 'white' }}
          >
            {name.match(/^.+?(?=seeds)/i)}
          </Typography>
          <Typography
            sx={{ textDecoration: 'underline',
                  textDecorationColor: 'white' }}
            className={classes.searchPrice}
            variant="body1"
          >
            {price} $
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

RenderUnit.defaultProps = {
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU",
  name: "test name",
  price: "$ 1000",
};

RenderUnit.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  style: PropTypes.object,
  itemNo: PropTypes.string,
  onClose: PropTypes.func, 
};



export default function SearchResultContainer({
  products = 0,
  active,
  oneCard,
  onClose
}) {
  const classes = useStyles();
  const [productsToRender, setProductsToRender] = useState([]);
  useEffect(() => {
    setProductsToRender(products);
  }, [products]);

  return (
    <Container
      className={classes.searchContainer}
      id="search-container"
      sx={{
        position: "absolute",
        zIndex: "100",
        backgroundColor: "white",
        right: "0",
        top: "150%",
        '@media (max-width: 900px)': {
          right: "-40px",
        },
        borderRadius: "5px",
        width: ((activeContainer, oneCardFromProps) => {
          if (activeContainer) {
            return oneCardFromProps ? "300px" : "70vw";
          }
          return "0";
        })(active, oneCard),
        maxHeight: active ? "400px" : "0",
        scrollbarWidth: "0.3",
        transition: "all 0.5s",
        opacity: active ? "1" : "0",
        overflow: active ? "auto" : "hidden",
      }}
    >
      <Grid spacing={1} container>
        {productsToRender.map((prod, i) => (
          <Grid sm={12} item key={prod.itemNo + i} >
            <RenderUnit
              imgUrl={prod.imageUrls[0] ?? "https://images.assetsdelivery.com/compings_v2/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016.jpg"}
              name={prod.name}
              price={prod.currentPrice}
              itemNo={prod.itemNo}
              onClose={onClose}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

SearchResultContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.bool,
  oneCard: PropTypes.bool,
  onClose: PropTypes.func, 
};
