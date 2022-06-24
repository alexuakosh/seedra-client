import {styled, Tabs as MUITabs, tabsClasses } from '@mui/material';

const StyledTabs = styled((props) => (
<MUITabs {...props} />
))(
    () => `
    box-sizing: border-box;
    

    & .${tabsClasses.indicator} {
        display: none;  
    }
    `
)

const Tabs = (props) => (
        <StyledTabs {...props}/>
    )

export default Tabs;