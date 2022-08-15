import PropTypes from "prop-types";
import MenuDesktop from './NavMenuComponents/MenuDesktop/MenuDesktop.jsx';
import MenuTable from './NavMenuComponents/MenuTable/MenuTable.jsx';
import MenuMobile from './NavMenuComponents/MenuMobile/MenuMobile.jsx';


export default function HeaderNavMenu({
  parentsListWithoutChildren,
  parentsListWithChildren,
  resolution,
  login, 
  admin, 
  onClose, 
}) {
  
  switch(resolution) {
  case 'desktop': 
   return (
    <MenuDesktop pressetsNoChildren={parentsListWithoutChildren} pressetsWithChildren={parentsListWithChildren}/>
  );
  case 'mobile':
      return(<MenuMobile pressetsNoChildren={parentsListWithoutChildren} pressetsWithChildren={parentsListWithChildren}  isLogin={login} isAdmin={admin} onClose={onClose}/>);
  case 'table':
    return (<MenuTable pressetsNoChildren={parentsListWithoutChildren} pressetsWithChildren={parentsListWithChildren} isAdmin={admin}></MenuTable>)
   default:
      return (<h1>TEST</h1>)
   }
}


HeaderNavMenu.defaultProps = {
  resolution: "desktop",
};

HeaderNavMenu.propTypes = {
  resolution: PropTypes.string,
  parentsListWithChildren: PropTypes.array,
  parentsListWithoutChildren: PropTypes.array,
  login: PropTypes.bool,
  admin: PropTypes.bool, 
  onClose: PropTypes.func, 
};
