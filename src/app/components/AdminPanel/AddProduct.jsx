
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as yup from 'yup'; 

import { MenuItem, TextField, Button, CardMedia, IconButton } from '@mui/material'; 
import HighlightOffIcon from '@mui/icons-material/HighlightOff'; 
import AddIcon from '@mui/icons-material/Add';

import useStylesAddProduct from './useStylesAddProduct';

import { productCategories } from '../../constants'; 

import { adminAddProductRequestSelector } from '../../../store/selectors/selectors';
import { adminAddProductIdle } from '../../../store/actions/admin.actions'; 
import { adminAddProduct, adminUpdateProduct } from '../../../store/thunks/admin.thunks'; 




const validationSchema = yup.object({

    name: yup
        .string()
        .required('required'), 

    description: yup
        .string()
        .required('required'),

    categories: yup
        .string()
        .required('required'),

    currentPrice: yup
        .string()
        .required('required') 
        .matches(/[0-9\\.]/, 'value is not valid, please, enter a decimal number'),

    discountPrice: yup
        .string()
        .matches(/[0-9\\.]/, 'value is not valid, please, enter a decimal number'),

    packageDimensions: yup
        .string()
        .required('required'),

    currentRating: yup
        .string() 
        .max(3, 'too long value')
        .matches(/[0-9\\.]/, 'value is not valid, please, enter a decimal number'),

    quantity: yup
        .string()
        .required('required') 
        .max(4, 'too long value')
        .matches(/[0-9]/, 'value is not valid, please, enter a decimal number'), 

    itemWeight: yup
        .string()
        .required('required'),

    ASIN: yup 
        .string()
        .required('required')
        .max(10, 'too long value'),
});

  


const AddProduct = ({ product, onClose }) => {

    useStylesAddProduct(); 

    const isProductAdded = useSelector(adminAddProductRequestSelector);
    const dispatch = useDispatch();

    const [restAfterDeleteImg, setRestAfterDeleteImg] = useState(product?.imageUrls)
    const [fieldsList, setFieldsList] = useState([0]);


    const handleDeleteImage = (e) => {
        setRestAfterDeleteImg(restAfterDeleteImg.filter(item => item !== e.currentTarget.dataset.url)); 
        e.target.closest('.prod_icon').remove();
    } 

    const handleAddField = () => {
        if (fieldsList.length <= 4) {
            setFieldsList([...fieldsList, fieldsList.length]);
        }
    };



    const formik = useFormik({
        initialValues: {
            name: product?.name || '', 
            description: product?.description || '', 
            categories: product?.categories || '', 
            currentPrice: product?.currentPrice || '', 
            discountPrice: product?.discountPrice || '', 
            packageDimensions: product?.packageDimensions || '', 
            currentRating: product?.currentRating || '', 
            quantity: product?.quantity || '', 
            itemWeight: product?.itemWeight || '', 
            ASIN: product?.ASIN || '', 
            imageUrls0: '', 
            imageUrls1: '',
            imageUrls2: '',
            imageUrls3: '',
            imageUrls4: '',
        }, 

        validationSchema, 

        onSubmit: (values) => { 

            const newAddedImg = [values.imageUrls0, 
                                 values.imageUrls1,
                                 values.imageUrls2,
                                 values.imageUrls3,
                                 values.imageUrls4].filter(item => item !== ''); 
 
            const payload = { name: values.name, 
                              description: values.description, 
                              categories: values.categories, 
                              currentPrice: Number(values.currentPrice), 
                              discountPrice: Number(values.discountPrice), 
                              packageDimensions: values.packageDimensions, 
                              currentRating: Number(values.currentRating), 
                              quantity: Number(values.quantity), 
                              itemWeight: values.itemWeight, 
                              ASIN: values.ASIN.toUpperCase() };

            if (product) { 

                const resultImgList = [...new Set([...newAddedImg, ...restAfterDeleteImg])]; 

                dispatch(adminUpdateProduct(product._id, { ...payload, imageUrls: resultImgList }));
                 
                onClose();
                
                setTimeout(() => {
                    window.location.reload();
                }, 200); 

            } else { 
                
                dispatch(adminAddProduct({ ...payload, imageUrls: newAddedImg })); 
                formik.resetForm();
            }  
 
        }
    }); 


    return (
        <>
            {isProductAdded === 'idle' &&
                <form onSubmit={formik.handleSubmit} >

                    <div style={{ margin: '3% 0',
                            display: 'flex', 
                            flexFlow: 'row wrap', 
                            justifyContent: 'space-between', 
                            width: '100%', }}>

                        <div style={{ margin: '3% 0',
                                      display: 'flex', 
                                      flexFlow: 'column wrap' }}> 

                            <TextField 
                                name='name'
                                id='outlined-basic' 
                                label='name' 
                                variant='outlined'
                                className='product-input'                              
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />  

                            <TextField 
                                name='ASIN'
                                id='outlined-basic' 
                                label='ASIN' 
                                variant='outlined'
                                className='product-input'                              
                                value={formik.values.ASIN.toUpperCase()}
                                onChange={formik.handleChange}
                                error={formik.touched.ASIN && Boolean(formik.errors.ASIN)}
                                helperText={formik.touched.ASIN && formik.errors.ASIN}
                            />  

                            <TextField 
                                name='description'
                                id='outlined-basic' 
                                label='description' 
                                variant='outlined' 
                                className='product-input'                              
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                            /> 

                            <TextField
                                id='outlined-select-currency'
                                name='categories'
                                select
                                className='product-input'                               
                                label='categories'
                                value={formik.values.categories}
                                onChange={formik.handleChange}
                                error={formik.touched.categories && Boolean(formik.errors.categories)}
                                helperText={formik.touched.categories && formik.errors.categories}
                            >
                                {productCategories.map((option) => (
                                    <MenuItem key={option.code} value={option.label}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField> 
                        </div>

                        <div style={{ margin: '3% 0',
                                    display: 'flex', 
                                    flexFlow: 'column wrap' }}> 

                            <TextField 
                                name='currentPrice'
                                id='outlined-basic' 
                                label='current price' 
                                variant='outlined' 
                                className='product-input'                                
                                value={formik.values.currentPrice}
                                onChange={formik.handleChange}
                                error={formik.touched.currentPrice && Boolean(formik.errors.currentPrice)}
                                helperText={formik.touched.currentPrice && formik.errors.currentPrice}
                            /> 

                            <TextField 
                                name='discountPrice'
                                id='outlined-basic' 
                                label='discount price (optional)' 
                                variant='outlined' 
                                className='product-input'                                
                                value={formik.values.discountPrice} 
                                onChange={formik.handleChange}
                                error={formik.touched.discountPrice && Boolean(formik.errors.discountPrice)}
                                helperText={formik.touched.discountPrice && formik.errors.discountPrice}
                            /> 

                            <TextField 
                                name='currentRating'
                                id='outlined-basic' 
                                label='current rating (optional)' 
                                variant='outlined' 
                                className='product-input' 
                                value={formik.values.currentRating} 
                                onChange={formik.handleChange}
                                error={formik.touched.currentRating && Boolean(formik.errors.currentRating)}
                                helperText={formik.touched.currentRating && formik.errors.currentRating}
                            /> 
                        </div>

                        <div style={{ margin: '3% 0',
                                      display: 'flex', 
                                      flexFlow: 'column wrap' }}>

                            <TextField 
                                name='quantity'
                                id='outlined-basic' 
                                label='quantity' 
                                variant='outlined' 
                                className='product-input' 
                                value={formik.values.quantity} 
                                onChange={formik.handleChange}
                                error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                                helperText={formik.touched.quantity && formik.errors.quantity}
                            /> 

                            <TextField 
                                name='packageDimensions'
                                id='outlined-basic' 
                                label='package dimensions' 
                                variant='outlined' 
                                className='product-input' 
                                value={formik.values.packageDimensions}
                                onChange={formik.handleChange}
                                error={formik.touched.packageDimensions && Boolean(formik.errors.packageDimensions)}
                                helperText={formik.touched.packageDimensions && formik.errors.packageDimensions}
                            /> 

                            <TextField 
                                name='itemWeight'
                                id='outlined-basic' 
                                label='item weight, ounces' 
                                variant='outlined' 
                                className='product-input' 
                                value={formik.values.itemWeight} 
                                onChange={formik.handleChange}
                                error={formik.touched.itemWeight && Boolean(formik.errors.itemWeight)}
                                helperText={formik.touched.itemWeight && formik.errors.itemWeight}
                            />          

                            <div className='img-mini'>

                            {product && product.imageUrls.map((item, index) => 
                                <div key={`${index}`} 
                                     style={{ position: 'relative'}}
                                     className='prod_icon'> 

                                    <CardMedia 
                                        component='img' 
                                        image={item}
                                        sx={{ width: '67px', 
                                              m: '10px', 
                                              borderRadius: '12px', }} 
                                    /> 
                                    <IconButton 
                                        disableRipple={true}
                                        data-url={item}
                                        onClick={handleDeleteImage}>
                                            <HighlightOffIcon 
                                                sx={{ color: 'red', 
                                                      position: 'absolute', 
                                                      bottom: '80px',
                                                      left: '65px',}} /> 
                                    </IconButton>

                                </div>
                                )
                            } 
                            </div>


                            {fieldsList.map((field) => (
                                <div key={field} 
                                     style={{ display: 'flex', 
                                              flexFlow: 'row', }}>

                                    <TextField 
                                        name={`imageUrls${field}`}
                                        id='outlined-basic' 
                                        label={ product ? `add new image URL` : `image URL (optional)` }
                                        variant='outlined' 
                                        
                                        sx={{ width: 350, 
                                              m: '10px 5px 10px 10px', 
                                              '@media (max-width: 900px)': {
                                                width: '300px', 
                                              }, }}
                                        value={formik.values[`imageUrls${field}`]} 
                                        onChange={formik.handleChange}
                                    /> 

                                    <IconButton 
                                        disableRipple={true}
                                        onClick={handleAddField}
                                        sx={{ color: '#50a257', 
                                              '@media (max-width: 900px)': {
                                                 position: 'relative', 
                                                 right: '45px'
                                              }, }}
                                    >
                                        <AddIcon 
                                            sx={{ color: '#50a257' }} 
                                        />
                                    </IconButton> 

                                </div>
                            ))}


                        </div>
                    </div>

                    <div style={{ margin: '30px 10px 10%',  
                                  display: 'flex', 
                                  flexDirection: 'row' }}>
                        <Button 
                            size='large' 
                            color='success' 
                            variant='contained' 
                            type='submit'
                            sx={{
                                width: 220, 
                                backgroundColor: '#50a257', 
                                boxShadow: 1, 
                                color: 'white', 
                                ':hover': {
                                    backgroundColor: '#50a257',
                                }
                            }}
                        >
                            { product ? `Update Product` : `Add Product` }
                        </Button>
                    </div>
                </form>
            }

            {isProductAdded === 'success' && 
                <div style={{ margin: '15% 10px 15%',  
                            display: 'flex', 
                            flexDirection: 'row' }}>
                    <Button 
                        size='large' 
                        color='success' 
                        variant='contained' 
                        onClick={() => dispatch(adminAddProductIdle())}
                        sx={{
                            width: 220, 
                            backgroundColor: '#50a257', 
                            boxShadow: 1, 
                            color: 'white', 
                            ':hover': {
                                backgroundColor: '#50a257',
                            }
                        }}
                    >
                        Add One More
                    </Button> 

                    <span style={{ margin: '10px 0 0 30px', 
                                   color: '#50a257', 
                                   fontFamily: "'Lexend', sans-serif", }}>
                                        product has been added successfully
                    </span>
                </div>
            }
        </>
    );
}

export default AddProduct; 


AddProduct.propTypes = {
    product: PropTypes.object, 
    onClose: PropTypes.func,
};