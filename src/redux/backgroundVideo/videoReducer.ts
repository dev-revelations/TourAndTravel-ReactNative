import { VideoAction, VideoState } from "../reduxTypes";
import { ACTION_FETCH_VIDEO_REQUEST } from "./videoActionTypes";

const initialState: VideoState = {
    videoList: []
};

const videoReducer = (state: VideoState = initialState, action: VideoAction): VideoState => {
    switch (action.type) {
        case ACTION_FETCH_VIDEO_REQUEST:
            return {
                ...state,
                videoList: action.payload
            };
        default: return state;
    }
};

export default videoReducer;