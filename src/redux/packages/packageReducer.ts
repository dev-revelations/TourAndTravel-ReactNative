import { PackageAction, PackageState } from "../reduxTypes";
import { ACTION_FETCH_PACKAGE_REQUEST } from "./packageActionTypes";


const initialState: PackageState = {
    packageList: []
};

const packageReducer = (state: PackageState = initialState, action: PackageAction): PackageState => {
    switch (action.type) {
        case ACTION_FETCH_PACKAGE_REQUEST:
            return {
                ...state,
                packageList: action.payload
            };
        default: return state;
    }
}

export default packageReducer;