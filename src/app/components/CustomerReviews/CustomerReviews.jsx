import { Box, Paper, Typography, Divider, Rating, LinearProgress } from '@mui/material';
import PropTypes from "prop-types";
import Star from "../../../ui/components/Icon/icons/Star.jsx";
import { useStyles } from "./styles";

/**
 * scores - object with numbers
 */

const CustomerReviews = (props) => {
    const classes = useStyles();
    const {total, scores} = props;

    const scoresTotal = Object.entries(scores).reduce((sum, currentValue) => {
        const [key, value] = currentValue;
        return sum + Number(key) * Number(value);
    }, 0);

    const average = scoresTotal / total;

    const ratings = Object.entries(scores).map(item => {
        const [key, value] = item;
        const progressInPercents = Number(value) * 100 / Number(total);
        return (
            <Box key={key} className={classes.ratingWrapper}>
            <Typography className={classes.ratingNumber} variant="subtitle1">{key}</Typography>
            <Star />
            <LinearProgress className={classes.ratingLinearProgress} variant="determinate" value={progressInPercents} />
            <Typography className={classes.votesQuantity} variant="subtitle1">{value}</Typography>
        </Box>
        )
    })
    
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
                    {average}
                    </Typography>
                    <Box className={classes.reviewsQuantityContainer}>
                        <Typography
                        className={classes.reviewsQuantity}
                        variant="subtitle1"
                        >
                            {total} reviews
                        </Typography>
                        <Rating 
                            className={classes.customerRating}
                            name="half-rating" readOnly defaultValue={average}  precision={0.5}
                            onChange={e => e}
                        />
                    </Box>
                </Box>
                <Divider variant="middle"/>
                <Box className={classes.ratingNumbersContainer}>
                    {ratings}
                </Box>

            </Paper>
        </Box>
    </Box>
    </>
    )
}

CustomerReviews.propTypes = {
    total: PropTypes.number.isRequired,
    scores: PropTypes.shape({
        5: PropTypes.number,
        4: PropTypes.number,
        3: PropTypes.number,
        2: PropTypes.number,
        1: PropTypes.number
    }).isRequired
}
  

export default CustomerReviews;