import { ServiceAction, ServiceState } from "../reduxTypes";
import { ACTION_FETCH_SERVICE_REQUEST } from "./serviceActionTypes";


const initialState: ServiceState = {
    serviceList: []
};

const serviceReducer = (state: ServiceState = initialState, action: ServiceAction): ServiceState => {
    switch (action.type) {
        case ACTION_FETCH_SERVICE_REQUEST:
            return {
                ...state,
                serviceList: action.payload
            };
        default: return state;
    }
};

export default serviceReducer;