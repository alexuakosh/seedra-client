import PropTypes from "prop-types";
import * as icons from "./icons"

const Icon = (props) => {
// SelectedIcon - псевдоним той иконки, которая будет выбрана.
    const {icon: SelectedIcon, ...other} = props;
    return (
        <SelectedIcon {...other} />
    )
}

Icon.propTypes = {
    icon: PropTypes.func.isRequired
}

Icon.icons = icons;

export default Icon;