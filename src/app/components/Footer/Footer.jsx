import { Box, Typography, Link, Divider, Container } from "@mui/material";
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx";
import LogoBtn from "./FooterBtns/LogoBtn.jsx";
import { useFooterStyles } from "./useFooterStyles.jsx";

export default function Footer() {
  const FooterClasses = useFooterStyles();
  return (
    <Container className={FooterClasses.Wrapper}>
      <Box
        className={FooterClasses.BoxTop}
        sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
      >
        <LogoBtn iconWidth={"130px"} iconHeight={"26px"} />
      </Box>
      <Box
        className={FooterClasses.BoxMain}
        sx={{
          paddingBottom: { xs: "12px", sm: "12px", md: "23px" },
          fontSize: { xs: "12px", sm: "14px" },
        }}
      >
        <Box
          className={FooterClasses.BoxLink}
          sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
        >
          <Link className={FooterClasses.Link} href="products" variant="body1">
            {"ALL PRODUCTS"}
          </Link>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Divider
              className={FooterClasses.DividerVertical}
              orientation="vertical"
              variant="middle"
              flexItem
            />
          </Box>
          <Link className={FooterClasses.Link} href="about-us" variant="body1">
            {"ABOUT SEEDRA"}
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
          }}
        >
          <LogoBtn iconWidth={"130px"} iconHeight={"26px"} />
        </Box>
        <Box
          className={FooterClasses.BoxLink}
          sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
        >
          <Link className={FooterClasses.Link} href="terms" variant="body1">
            {"Terms&Conditions"}
          </Link>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Divider
              className={FooterClasses.DividerVertical}
              orientation="vertical"
              variant="middle"
              flexItem
            />
          </Box>
          <Link
            className={FooterClasses.Link}
            href="privacy-policy"
            variant="body1"
          >
            {"Privacy Policy"}
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box className={FooterClasses.BoxBottom}>
        <Box>
          <SocialNetworks />
        </Box>
        <Typography className={FooterClasses.FooterText}>
          All rights reserved
        </Typography>
      </Box>
    </Container>
  );
}
