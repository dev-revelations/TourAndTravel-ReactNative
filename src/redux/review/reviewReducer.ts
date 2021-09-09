import { ReviewAction, ReviewState } from "../reduxTypes";
import { ACTION_FETCH_REVIEWS_REQUEST } from "./reviewActionTypes";


const initialState: ReviewState = {
    reviewList: []
};

const reviewReducer = (state: ReviewState = initialState, action: ReviewAction): ReviewState => {
    switch (action.type) {
        case ACTION_FETCH_REVIEWS_REQUEST:
            return {
                ...state,
                reviewList: action.payload
            };
        default: return state;
    }
};

export default reviewReducer;