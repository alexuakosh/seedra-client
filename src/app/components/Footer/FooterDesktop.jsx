import { Box, Typography, Link, Divider } from "@mui/material";
import SocialNetworks from "../SocialNetworks/SocialNetworks.jsx";
import LogoBtn from "./FooterBtns/LogoBtn.jsx";

export default function FooterDesktop() {
  return (
    <Box>
      <Box
        display="flex"
        sx={{ pl: "5%", pr: "5%", justifyContent: "space-between" }}
      >
        <Box
          display="flex"
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="#"
            underline="none"
            sx={{ mb: "24px", fontSize: 14, color: "#70737C" }}
          >
            {"ALL PRODUCTS"}
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ mb: "24px", fontSize: 14, color: "#70737C" }}
          >
            {"ABOUT SEEDRA"}
          </Link>
        </Box>
        <Box mb="25px">
          <LogoBtn />
        </Box>
        <Box
          display="flex"
          sx={{
            flexGrow: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="#"
            underline="none"
            sx={{ mb: "24px", fontSize: 14, color: "#70737C" }}
          >
            {"Terms&Conditions"}
          </Link>
          <Link
            href="#"
            underline="none"
            sx={{ fontSize: 14, color: "#70737C" }}
          >
            {"Privacy Policy"}
          </Link>
        </Box>
      </Box>
      <Divider />
      <Box
        display="flex"
        sx={{
          pl: "5%",
          pr: "5%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <SocialNetworks />
        </Box>

        <Typography component="span" sx={{ fontSize: 14, color: "#70737C" }}>
          All rights reserved
        </Typography>
      </Box>
    </Box>
  );
}
