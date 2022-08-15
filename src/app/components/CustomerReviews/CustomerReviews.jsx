import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Paper, Divider, Rating } from '@mui/material';
import { currentCustomerSelector, downloadProductCommentsSelector, downloadProductRequestStateSelector, getCustomerRequestStateSelector, productSelector } from '../../../store/selectors/selectors';
import Spinner from '../../../ui/components/Spinner/Spinner.jsx';
import RenderComponent from '../../hoc/RenderComponent.jsx';
import { getCustomer } from '../../../store/thunks/customer.thunks';
import { useStyles } from "./styles";
import { LinearProgressReview } from "./LinearProgressRewiew.jsx";
import { downloadRequestStates } from '../../constants';
import { useRating } from './useRating.jsx';
import { fetchProductComments } from '../../../store/thunks/comments.thunks';

const CustomerReviews = () => {

    const product = useSelector(productSelector);
    const customer = useSelector(currentCustomerSelector);
    const loadingCustomer = useSelector(getCustomerRequestStateSelector);
    const loadProductState = useSelector(downloadProductRequestStateSelector);
    const ratingProductComments = useSelector(downloadProductCommentsSelector)?.filter(comment => comment.content === "rate only");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCustomer());
      }, []);
    
    const [finalRating, ratingComments, rateProduct] = useRating(product, customer, ratingProductComments);
    
    useEffect(() => {
        product._id && dispatch(fetchProductComments(product._id));
    }, [ratingComments, product._id]);

    const classes = useStyles();
    
    return (
        <>
        <Box component="section" className={classes.customerReviewsContainer}>
    
            <Typography
                className={classes.reviewsHeading}
                variant="h2"
                component="h2"
                >
                Customer Reviews.
            </Typography>
    
            <Box className={classes.reviewsRaitingContainer} 
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                    m: 1,
                    width: 350,
                    height: 318,
                    borderRadius: 6,
                    },
                }}>
    
                <Paper variant="outlined">
                    <Box className={classes.totalRatingContainer}>
                        <Typography
                        className={classes.reviewsRatingHeading}
                        variant="h2"
                        component="h2"
                        >
                        {finalRating.toPrecision(3)}
                        </Typography>
                        <Box className={classes.reviewsQuantityContainer}>
                            <Typography
                            className={classes.reviewsQuantity}
                            variant="subtitle1"
                            >
                                {ratingProductComments.length} reviews
                            </Typography>
                            <Rating 
                                readOnly={loadingCustomer !== downloadRequestStates.SUCCESS}
                                className={classes.customerRating}
                                name="rating" value={finalRating} precision={1}
                                onChange={e => {
                                    rateProduct(e);
                                }}
                            />
                        </Box>
                    </Box>
                    <Divider variant="middle"/>
                    <Box className={classes.ratingNumbersContainer}>
                        {[...Array(5)].map((item, index) => (
                            <RenderComponent 
                                key={index}
                                loading={loadProductState}
                                data={{ 
                                    ratingKey: index + 1, 
                                    ratingVal: 1,
                                    ratingComments
                                }}
                                renderSuccess={LinearProgressReview}
                                loadingFallback={<span style={{marginLeft: "5px"}}><Spinner /></span>}
                                renderError={"error"}
                            />
                        ))}
                    </Box>
                </Paper>
            </Box>
        </Box>
        </>
    )
}
  
export default CustomerReviews;