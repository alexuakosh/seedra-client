
import { makeStyles } from '@mui/styles';




const useStylesAddProduct = makeStyles({
    '@global': {
        '.product-input': {
            width: 350, 
            margin: '10px', 
            '@media (max-width: 900px)': {
                width: '300px', 
              }, 
        },
        '.img-mini': { 
            margin: '3% 0',
            display: 'flex', 
            flexFlow: 'row wrap',  
            '@media (max-width: 900px)': {
                width: '300px'
            }
        }, 
    },
}); 


export default useStylesAddProduct; 