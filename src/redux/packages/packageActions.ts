import { AsyncDispatch, AsyncResult } from "..";
import { getPackages } from "../../data";
import { PackageAction } from "../reduxTypes";
import { ACTION_FETCH_PACKAGE_REQUEST } from "./packageActionTypes";

export const fetchPackagesRequest = (packages: Package[]): PackageAction => {
    return {
        type: ACTION_FETCH_PACKAGE_REQUEST,
        payload: packages
    };
};

export const fetchPackagesAsync = (): AsyncResult<Promise<void>> => {
    return async (dispatch: AsyncDispatch) => {
        const packages = getPackages();
        dispatch(fetchPackagesRequest(packages));
        return Promise.resolve();
    };
};