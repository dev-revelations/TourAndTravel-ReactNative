import { GalleryAction, GalleryState } from "../reduxTypes";
import { ACTION_FETCH_GALLERY_IMAGES_REQUEST } from "./galleryActionTypes";


const initialState: GalleryState = {
    imageList: []
};

const galleryReducer = (state: GalleryState = initialState, action: GalleryAction): GalleryState => {

    switch (action.type) {
        case ACTION_FETCH_GALLERY_IMAGES_REQUEST:
            return {
                ...state,
                imageList: action.payload
            };
        default: return state;
    }
};

export default galleryReducer;