import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export interface AppAction<T, P> {
    type: T,
    payload: P
}

export type RootState = {
    video: VideoState
}

export type AsyncResult<R> = ThunkAction<R, RootState, {}, AnyAction>;
export type AsyncDispatch = ThunkDispatch<RootState, {}, AnyAction>;

export type VideoAction = AppAction<string, Array<any>>
export type VideoState = {
    videoList: Array<any>
};

