import { combineReducers } from "redux";
import videoReducer from "./backgroundVideo/videoReducer";
import { RootState } from "./reduxTypes";

export default combineReducers<RootState>({
    video: videoReducer
});