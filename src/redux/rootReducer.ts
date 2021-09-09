import { combineReducers } from "redux";
import videoReducer from "./backgroundVideo/videoReducer";
import packageReducer from "./packages/packageReducer";
import { RootState } from "./reduxTypes";

export default combineReducers<RootState>({
    video: videoReducer,
    package: packageReducer
});