import { AsyncDispatch, AsyncResult } from "..";
import { getServices } from "../../data";
import { ServiceAction } from "../reduxTypes";
import { ACTION_FETCH_SERVICE_REQUEST } from "./serviceActionTypes";

export const fetchServicesRequest = (services: Service[]): ServiceAction => {
    return {
        type: ACTION_FETCH_SERVICE_REQUEST,
        payload: services
    };
};

export const fetchServicesAsync = (): AsyncResult<Promise<void>> => {
    return async (dispatch: AsyncDispatch) => {
        const services = getServices();
        dispatch(fetchServicesRequest(services));
        return Promise.resolve();
    };
};