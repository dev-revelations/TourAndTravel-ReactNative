import { combineReducers } from "redux";
import { RootState } from "./reduxTypes";
import videoReducer from "./backgroundVideo/videoReducer";
import packageReducer from "./packages/packageReducer";
import serviceReducer from "./service/serviceReducer";
import galleryReducer from "./gallery/galleryReducer";
import reviewReducer from "./review/reviewReducer";

export default combineReducers<RootState>({
    video: videoReducer,
    package: packageReducer,
    service: serviceReducer,
    gallery: galleryReducer,
    review: reviewReducer,
});