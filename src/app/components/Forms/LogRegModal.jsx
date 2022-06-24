import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import classes from "../Header/HeaderStyles.jsx";
import Textfield from './Components/FormsUI/Textfield';
import ButtonWrapper from './Components/FormsUI/Submit/ButtonWrapper';
import { loginCustomer } from '../../../store/thunks/customer.thunks';
import { loginRequestSelector } from '../../../store/selectors/selectors';
import ErrorHandler from '../ErrorHandler/ErrorHandler.jsx';



const style = makeStyles({
  ItemBlock:{
    position: "relative"
  },
  ItemRight: {
    position: "absolute",
    right: "-10px",
    top: "5px"
  },
  BlockCenter: {
    position: 'relative',
    margin:"100px auto",
    backgroundColor: "#FFF",
  }
});


export default function LogIn() {
    const requestState = useSelector(loginRequestSelector);
    const navigation = useNavigate()
    const styles = style();
    const dispatch = useDispatch()
    const INITIAL_FORM_STATE = {
        loginOrEmail: '',
        password: '',
    };
  
    const FORM_VALIDATION = Yup.object().shape({
        loginOrEmail: Yup.string()
        .required('Required')
        .email('Invalid email.'),
        password: Yup.string()
        .min(8, 'Password is 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .required('Required')
    })

    const [redirect, setRedirect] = useState(true)

    useEffect(() => {
      setRedirect(true)
      if(requestState === "error"){
        setRedirect(!redirect)
      }
      if(requestState === "success"){
        navigation("/")
      }
    },[requestState])



    const handleClose = () =>{
      navigation("/")
    }

    const handleSubmit = values => {
      dispatch(loginCustomer(values)) 
    }

    return (
    <>        
              <Box className={styles.BlockCenter}  onClose={handleClose} sx={{zIndex: "1000" ,border: `1px solid green`, p:4, borderRadius: 3, maxWidth:300}}>
                <Formik  
                  initialValues={{
                    ...INITIAL_FORM_STATE
                  }}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <Grid container spacing={2}>
                      <Grid className={styles.ItemBlock} item xs={12}>
                        <Typography color="primary" sx={{pb:1}}>
                          Login
                        </Typography>
                        <IconButton onClick={handleClose} className={styles.ItemRight}><CloseIcon sx={classes.iconsStyle}/></IconButton>
                      </Grid>
    
                      <Grid item xs={12}>
                        <Textfield
                          name="loginOrEmail"
                          label="Email"
                        />
                      </Grid>  

                      <Grid item xs={12}>
                        <Textfield
                          name="password"
                          label="Password"
                          type='password'
                          />
                      </Grid> 
                                
                      <Grid item xs={12}>
                        <ButtonWrapper>
                          Log In
                        </ButtonWrapper>
                      </Grid>
                    </Grid>
                  </Form>
                </Formik>
            </Box>
            { redirect ? false : (
        <ErrorHandler errorMessage={"Incorrect email or password."} />)}      
    </>);
}

