import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentCustomerSelector, downloadAllCommentsSelector } from "../../../store/selectors/selectors";
import { addComment, editComment } from "../../../store/thunks/comments.thunks";

export const useRating = (data) => {
    const [ratingValue, setRatingValue] = useState(0);
    const dispatch = useDispatch();
    const comments = useSelector(downloadAllCommentsSelector);
    const customer = useSelector(currentCustomerSelector);
  
    const rating = () => comments?.
      filter(comment => comment.product._id === data._id).
      map(comment => comment.rate).
      reduce((acc, amount, index, array) => {
        const total = acc + amount;
        if( index === array.length - 1) { 
          return total/array.length;
        }
        return total;
        }, 0); 

    useEffect(() => {
      setRatingValue(rating());
    }, [comments]);
  
    const rateProduct = (e) => {
      if(!customer) return;
      const productRateComments = comments.filter(comment => comment.product._id === data._id).filter(comment => comment.content === "rate only");
      productRateComments.filter(comment => comment.customerId !== customer._id).length === productRateComments.length ? 
      dispatch(addComment({customerId: customer._id, product: data, content: "rate only", date: Date.now(), rate: +e.target.value})) :
      dispatch(editComment(productRateComments.find(comment => comment.customerId === customer._id)._id, {rate: +e.target.value}));
      setRatingValue(rating());
    }

    return [ratingValue, rateProduct];
}