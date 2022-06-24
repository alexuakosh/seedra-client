import { Container, Link, Typography, Grid } from "@mui/material";
import img1 from "./img/fresh-sweet-basil-leaves-isolated-white-background 1.svg";
import img2 from "./img/fresh-sweet-basil-leaves-isolated-white-background 4 (1).svg";
import img3 from "./img/logo.svg";
import { usePageNotFoundStyles } from "./usePageNotFoundStyles";

function PageNotFound() {
  const PageNotFoundClasses = usePageNotFoundStyles();

  return (
    <Container className={PageNotFoundClasses.container404}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            className={PageNotFoundClasses.text404}
            variant="body1"
            color="text.secondary"
            align="center"
          >
            404
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={PageNotFoundClasses.textPageNotFound}
            align="center"
            variant="body1"
            color="text.secondary"
          >
            PAGE NOT FOUND
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography align="center">
            <Link href="#">Return to home page</Link>
          </Typography>
        </Grid>

        <Grid 
        container spacing={1} 
        justifyContent="center" 
        alignItems="center">
          <Grid item xs={"auto"}>
            <img src={img1} alt="leaf" />
          </Grid>
          <Grid item xs={"auto"}>
            <Link href="#">
              <img src={img3} alt="logo" />
            </Link>
          </Grid>
          <Grid item xs={"auto"}>
            <img src={img2} alt="leaf" />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

// const routesConfig = [
//     {
//         path: '/not-found',
//         element: <PageNotFound />
//     },
//     {
//         path: '*',
//         element: <PageNotFound />
//     },
// ];

export default PageNotFound;
