import { useField } from 'formik';
import {TextField} from "@mui/material";
import { PropTypes } from 'prop-types';

const InputField = ({name, ...otherProps }) => {

  const [field, mata] = useField(name);
  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    size: 'small'
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (
    <TextField {...configTextfield}/>
    
  );
};

export default InputField;

InputField.propTypes = {
  name: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
};