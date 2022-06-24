import {styled, Tab as MUITab, tabClasses} from '@mui/material';

const StyledTab = styled((props) => (
    <MUITab {...props} />
))(
    ({theme}) => `
    color: ${theme.palette.text.primary};
    border: 1px solid ${theme.palette.grey["300"]};
    margin: 10px 0; 
    box-sizing: border-box;
    border-radius: 8px;


    &:hover {
        border-color: ${theme.palette.action.hover};
        transition: border-color 0.3s;
    }
    &.${tabClasses.selected}  {
        border: 1px solid ${theme.palette.primary.main};
        color: ${theme.palette.primary.main}
    }
    `
)

const Tab = (props) => (
        <StyledTab {...props}/>
    )

export default Tab;