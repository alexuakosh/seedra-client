import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";


const SocialNetworks = () => (
    <>
      <IconButton>
        <InstagramIcon sx={{color: "#359740", pl: "0"}} />
      </IconButton>
      <IconButton>
        <FacebookOutlinedIcon sx={{color: "#359740", pl: "0"}} />
      </IconButton>
    </>
  );

export default SocialNetworks;
