import { useTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import createCustomTheme from '../styles/theme';

const CustomThemeProvider = (props) => {
    const {children} = props;
    const theme = useTheme()
    const customTheme = createCustomTheme(theme)
    return (
        <ThemeProvider theme={customTheme}>
            {children}            
        </ThemeProvider>

    )
}

CustomThemeProvider.propTypes = {
    children: PropTypes.element
}

export default CustomThemeProvider;