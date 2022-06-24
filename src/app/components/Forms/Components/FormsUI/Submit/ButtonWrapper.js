import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import PropTypes from "prop-types";

const ButtonWrapper = ({ children }) => {
  const { submitForm } = useFormikContext();
  const handleSubmit = () => { submitForm(); }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
  }
  

  return (
    <Button  {...configButton}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;


ButtonWrapper.propTypes = {
  children: PropTypes.string
};
