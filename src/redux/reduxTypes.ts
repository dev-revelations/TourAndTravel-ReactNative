import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

export interface AppAction<T, P> {
    type: T,
    payload: P;
}

export type RootState = {
    video: VideoState,
    package: PackageState,
    service: ServiceState;
    gallery: GalleryState;
};

export type AsyncResult<R> = ThunkAction<R, RootState, {}, AnyAction>;
export type AsyncDispatch = ThunkDispatch<RootState, {}, AnyAction>;

export type VideoAction = AppAction<string, Array<any>>;
export type VideoState = {
    videoList: Array<any>;
};

export type PackageAction = AppAction<string, Array<Package>>;
export type PackageState = {
    packageList: Array<Package>;
};

export type ServiceAction = AppAction<string, Array<Service>>;
export type ServiceState = {
    serviceList: Array<Service>;
};

export type GalleryAction = AppAction<string, Array<any>>;
export type GalleryState = {
    imageList: Array<any>;
};