import { getVideos } from "../../data";
import { AsyncResult, AsyncDispatch, VideoAction } from "../reduxTypes";

import { ACTION_FETCH_VIDEO_REQUEST } from "./videoActionTypes";


export const fetchVideosRequest = (videos: Array<any>): VideoAction => {
    return {
        type: ACTION_FETCH_VIDEO_REQUEST,
        payload: videos
    };
};

export const fetchVideosAsync = (): AsyncResult<Promise<void>> => {
    return async (dispatch: AsyncDispatch): Promise<void> => {
        const videos = getVideos();
        dispatch(fetchVideosRequest(videos));
        return Promise.resolve();
    };
};
