import * as actionTypes from "./actionTypes";

const defaultState = {
    LoginIsOpened: false,
    RegisterIsOpened: false
}

const AccountStateReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case actionTypes.SET_ACCOUNT_LOGIN_IS_OPENED__STATE: {
            return {
                ...state,
                LoginIsOpened: action.payload,
            }
        }

        case actionTypes.SET_ACCOUNT_REGISTER_IS_OPENED__STATE: {
            return {
                ...state,
                RegisterIsOpened: action.payload
            }
        }

        default: {
            return state;
        }
    }
}

export default AccountStateReducer;
