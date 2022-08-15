import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from "@mui/icons-material/Search";


export default function SearchBtn(props){
    return(
        <SvgIcon {...props}>
        <SearchIcon color='primary' />
      </SvgIcon>
    )
};