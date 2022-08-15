import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment, editComment } from '../../../store/thunks/comments.thunks';

export const useRating = (product, customer, ratingPoductComments) => {

    const [ratingComments, setRatingComments] = useState([]);

    const dispatch = useDispatch();

    const rateProduct = (e) => {
        
        const lastRatingItem = ratingPoductComments.findLast(comment => comment.customer._id === customer?._id);

        if(lastRatingItem) {
            dispatch(editComment(lastRatingItem._id, {rate: +e.target.value, date: Date.now()}));
                setRatingComments((previousComments) => previousComments.map(comment => 
                    {
                        if (comment._id === lastRatingItem) return {...lastRatingItem, rate: +e.target.value, date: Date.now()}
                        return comment;
                    }
                ));
        } else {
            dispatch(addComment(
                {
                    customerId: customer._id, 
                    product, 
                    content: "rate only", 
                    date: Date.now(), 
                    rate: +e.target.value
                }
            ));
            setRatingComments((previousComments) => [...previousComments, {...lastRatingItem, rate: +e.target.value, date: Date.now()}])
        }
    }

    const finalRating = Math.round(ratingPoductComments.
        map(comment => comment.rate).
        reduce((acc, curr) => acc + curr, 0) / (ratingPoductComments.length !== 0 ? ratingPoductComments.length : 1) * 100) / 100;

    return [finalRating, ratingComments, rateProduct];
}