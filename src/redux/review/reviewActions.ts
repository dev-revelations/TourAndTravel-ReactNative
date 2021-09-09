import { AsyncDispatch, AsyncResult } from "..";
import { getReviews } from "../../data";
import { ReviewAction } from "../reduxTypes";
import { ACTION_FETCH_REVIEWS_REQUEST } from "./reviewActionTypes";

export const fetchReviewsRequest = (reviews: Reviews): ReviewAction => {
    return {
        type: ACTION_FETCH_REVIEWS_REQUEST,
        payload: reviews
    };
};

export const fetchReviewsAsync = (): AsyncResult<Promise<void>> => {
    return async (dispatch: AsyncDispatch): Promise<void> => {
        const reviews = getReviews();
        dispatch(fetchReviewsRequest(reviews));
        return Promise.resolve();
    };
};