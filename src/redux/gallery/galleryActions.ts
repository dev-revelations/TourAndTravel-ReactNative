import { AsyncDispatch, AsyncResult } from "..";
import { getGalleryImages } from "../../data";
import { GalleryAction } from "../reduxTypes";
import { ACTION_FETCH_GALLERY_IMAGES_REQUEST } from "./galleryActionTypes";

export const fetchGalleryImagesRequest = (images: GalleryImages): GalleryAction => {
    return {
        type: ACTION_FETCH_GALLERY_IMAGES_REQUEST,
        payload: images
    };
};

export const fetchGalleryImagesAsync = (): AsyncResult<Promise<void>> => {
    return async (dispatch: AsyncDispatch): Promise<void> => {
        const images = getGalleryImages();
        dispatch(fetchGalleryImagesRequest(images));
        return Promise.resolve();
    };
};