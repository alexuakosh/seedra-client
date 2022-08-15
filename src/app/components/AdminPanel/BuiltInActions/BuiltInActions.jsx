/* eslint-disable no-nested-ternary */

import PropTypes from 'prop-types'; 
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, IconButton, Modal, Typography, CardMedia, Button } from '@mui/material';
import useStylesBuiltInActions from './useStylesBuiltInActions';
import Vector from '../../MainPageCarousel/carouselImg/Vector.svg';

import { adminDeleteProduct,
         adminDelProductFromSlider, 
         adminAddProductToSlider, } from '../../../../store/thunks/admin.thunks';
import { adminAddProductIdle } from '../../../../store/actions/admin.actions'; 
import { slidesSelector } from '../../../../store/selectors/selectors';

import AddProduct from '../AddUpdProduct/AddProduct.jsx';





const BuiltInActions = ({ product }) => { 
  
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const classes = useStylesBuiltInActions(); 

    

    const slideList = useSelector(slidesSelector); 
    const matchedProdSlide = slideList.find(i => i.itemNo === product.itemNo); 

    const [onSlide, setOnSlide] = useState(false);

    useEffect(() => { 
        matchedProdSlide 
            ? setOnSlide(true) 
            : setOnSlide(false)
    }, []); 
     
 

    const [open, setOpen] = useState(false); 
    const handleOpen = () => { 
        dispatch(adminAddProductIdle());
        setOpen(true);
    } 

    const handleClose = () => setOpen(false); 

    const [openSliderModal, setOpenSliderModal] = useState(false); 
    const handleOpenSlider = () => setOpenSliderModal(true);
    const handleCloseSlider = () => setOpenSliderModal(false); 

    const [openDeleteModal, setOpenDeleteModal] = useState(false); 
    const handleOpenDelete = () => setOpenDeleteModal(true); 
    const handleCloseDelete = (event, reason) => {
        if (reason === 'backdropClick') {
            return;
        } 
        setOpenDeleteModal(false);
    } 

    const [openAd, setOpenAd] = useState(false); 
    const handleOpenAd = () => setOpenAd(true); 

    const [openZeroQuantityModal, setOpenZeroQuantityModal] = useState(false); 
    const handleOpenZeroQuantityModal = () => setOpenZeroQuantityModal(true);
    const handleCloseZeroQuantityModal = () => setOpenZeroQuantityModal(false);


    const handleAddDelToCarousel = () => { 

        onSlide 
            ? dispatch(adminDelProductFromSlider(matchedProdSlide.customId)) 
            : dispatch(adminAddProductToSlider({ customId: String(Math.random()).substring(2, 17),
                                                 name: product.name,
                                                 currentPrice: product.currentPrice,
                                                 discountPrice: product.discountPrice,
                                                 categories: product.categories,
                                                 description: product.itemAbout[0],
                                                 imageUrl: product.imageUrls[0],
                                                 itemNo: product.itemNo, 
                                                 productId: product._id, 
                                                })); 

        setTimeout(() => {
            navigation('/'); 
        }, 500);
    }



    return (
        <div className={classes.actionsContainer}>


        {/* ---------- ADD TO SLIDER ---------- */} 
        
        <IconButton onClick={product.quantity > 0 
                                ? handleOpenSlider 
                                : ( onSlide 
                                        ? handleOpenSlider  
                                        : handleOpenZeroQuantityModal )}
                    disableRipple >
        
            <span className={classes.actionsButton}>
                {onSlide ? `DEL FROM CAROUSEL` : `ADD TO CAROUSEL`}
            </span>
        </IconButton>

        <Modal
            open={openZeroQuantityModal}
            onClose={handleCloseZeroQuantityModal}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >  
            <Box className={classes.zeroQuantityModalGeneral}> 
                <Typography 
                    component='span'
                    className={classes.addProductToSlideModalLabel}
                >
                        You cannot add this product to the carousel, the product is unavailable now. Please use `UPDATE PRODUCT` option first and add quantity before next try to add this product to the carousel
                </Typography>
            </Box>
        </Modal>





        <Modal
            open={openSliderModal}
            onClose={handleCloseSlider}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box className={classes.addProductToSlideModalGeneral}>
                <div>
                    <Box className={classes.addProductToSlideModalMock}> 

                        <div className={classes.addProductToSlideModalMockData}> 

                            <span className={classes.addProductToSlideModalMockDataName}>{product.name.substring(0, 70)} . . .</span>
                            <span className={classes.addProductToSlideModalMockDataDesc}>{product.itemAbout.join().substring(0, 170)} . . .</span> 

                            <div className={classes.addProductToSlideModalMockDataPrices}>
                                <Box
                                    component='img'
                                    overflow='visible'
                                    width='28px'
                                    height='28px'
                                    src={Vector}
                                />
                                <span className={classes.addProductToSlideModalMockDataCPrice}>${product.discountPrice.toFixed(2)}</span> 
                                <span className={classes.addProductToSlideModalMockDataDPrice}>${product.currentPrice.toFixed(2)}</span>
                            </div>
                        </div> 

                        <div className={classes.addProductToSlideModalMockImage}>
                            <CardMedia 
                                component='img' 
                                image={product.imageUrls[0]}
                                sx={{ width: '150px', 
                                      ml: '10px', 
                                      borderRadius: '12px', }} 
                            />
                        </div>

                    </Box>  

                    <div className={classes.addProductToSlideModalLabelContaner}>
                        <Typography 
                            component='span'
                            className={classes.addProductToSlideModalLabel}>
                                {onSlide ? `You're about to delete slide from the carousel, confirm?` : `You're about to add new slide on the carousel, confirm?`}
                        </Typography> 

                        
                            <Button
                                color={onSlide ? 'error' : 'success'} 
                                variant='contained'
                                className={classes.addProductToSlideModalLabelButton} 
                                onClick={handleAddDelToCarousel}
                            >
                                {onSlide ? `Del From Carousel` : `Add To Carousel`} 
                            </Button>

                    </div>

                </div>
            </Box>
        </Modal> 


        {/* ---------- UPDATE PRODUCT ---------- */}

        <IconButton onClick={handleOpen}
                    disableRipple >
        
            <span className={classes.actionsButton}>
                UPDATE PRODUCT
            </span>
        </IconButton>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box className={classes.updateProductModalGeneral}>
                <Typography
                    id='modal-modal-title'
                    variant='h6'
                    component='h2'
                    className={classes.updateProductModalText}
                > 
                    What do you want to update: 
                </Typography>

                <AddProduct product={product} 
                            onClose={handleClose} 
                            match={matchedProdSlide} />
            </Box>
        </Modal> 


        {/* ---------- DELETE PRODUCT ---------- */}

            <>
                <IconButton 
                            onClick={() => {handleOpenDelete()}}
                            disableRipple >
                    <span className={classes.actionsButton}>
                        DELETE PRODUCT
                    </span>
                </IconButton> 

                <Modal
                    open={openDeleteModal}
                    onClose={handleCloseDelete}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <Box className={classes.deleteProductModalGeneral}>
                    {openAd && 
                        <>
                        <Typography 
                            component='span'
                            className={classes.addProductToSlideModalLabel}
                        >
                                Product has been deleted successfully
                        </Typography> 

                        <div className={classes.deleteProductModalGeneralButtonContainer}>
                            <Button 
                                sx={{ width: '178px', 
                                      fontSize: '13px', 
                                      boxShadow: 1, 
                                      color: 'white', 
                                      margin: '0 25px',
                                      backgroundColor: '#50a257',
                                      '&:hover': {
                                          backgroundColor: '#50a257'}, 
                                      '@media (max-width: 900px)': { 
                                            margin: '20px 0',
                                    },
                                    }}
                                color='success' 
                                variant='contained'
                                onClick={() => navigation('/')}
                            >
                                Go To Main Page
                            </Button>

                            <Button 
                                sx={{ width: '178px', 
                                      fontSize: '13px', 
                                      boxShadow: 1, 
                                      color: 'white', 
                                      margin: '0 25px',
                                      backgroundColor: '#50a257',
                                      '&:hover': {
                                          backgroundColor: '#50a257'}, 
                                      '@media (max-width: 900px)': {
                                            
                                    },
                                    }}
                                color='success' 
                                variant='contained' 
                                onClick={() => navigation('/products?perPage=9&startPage=1&sort=-currentPrice')}
                            >
                                Go To Filters Page
                            </Button>
                        </div>
                        </>
                    }
                    {openAd === false && 
                        <>
                            <Typography 
                                component='span'
                                className={classes.addProductToSlideModalLabel} 
                                sx={{ textAlign: 'center' }}
                                
                            >
                                    You`re about to  delete product from DB. This action can not be undone. Are you sure? 
                            </Typography> 

                            <div className={classes.deleteProductModalGeneralButtonContainer}>
                                <Button
                                    color='error' 
                                    variant='contained'
                                    className={classes.deleteProductModalGeneralButton}
                                    sx={{ width: '150px' }}
                                    
                                    onClick={() => {
                                        dispatch(adminDeleteProduct(product._id)); 

                                        if (onSlide) {
                                            dispatch(adminDelProductFromSlider(matchedProdSlide.customId))
                                        }; 
                                        handleOpenAd(); 
                                    }}
                                >
                                    Delete 
                                </Button>

                                <Button  
                                    color='success' 
                                    variant='contained' 
                                    type='submit'
                                    className={classes.deleteProductModalGeneralButton} 
                                    sx={{ width: '150px', 
                                          backgroundColor: '#50a257',
                                          '&:hover': {
                                              backgroundColor: '#50a257',
                                          } }}
                                    onClick={handleCloseDelete}
                                >
                                    Close
                                </Button>
                            </div>

                        </>
                    }

                    </Box>
                
                </Modal>
            </>
    
        </div>
    );
}
 

export default BuiltInActions; 
 

BuiltInActions.propTypes = {
    product: PropTypes.object,
}
