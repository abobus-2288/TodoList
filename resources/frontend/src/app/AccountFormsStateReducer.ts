import * as actionTypes from "./actionTypes";

const defaultState = {
    RegisterEmail: "",
    RegisterPassword: "",
    RegisterPasswordConfirm: "",
    RegisterEmailErrors: [],
    RegisterPasswordErrors: [],
    RegisterPasswordConfirmErrors: [],
    RegisterEmailIsDirty: false,
    RegisterPasswordIsDirty: false,
    RegisterPasswordConfirmIsDirty: false,

    LoginEmail: "",
    LoginPassword: "",
    LoginEmailErrors: "",
    LoginPasswordErrors: "",
    LoginEmailIsDirty: false,
    LoginPasswordIsDirty: false,

}

const AccountFormsStateReducer = (state = defaultState, action: any) => {

    switch (action.type) {

        /*
         Register / Email
         */

        case actionTypes.SET_ACCOUNT_FORMS_REGISTER_EMAIL_STATE: {
            return {
                ...state,
                RegisterEmail: action.payload
            }
        }

        case actionTypes.SET_ACCOUNT_FORMS_REGISTER_EMAIL_ERRORS_STATE: {

            // @ts-ignore
            if (state.RegisterEmailErrors.includes(action.payload)) {
                return state;
            } else {

                return {
                    ...state,

                    RegisterEmailErrors: [
                        ...state.RegisterEmailErrors,
                        action.payload
                    ]
                }
            }
        }

        case actionTypes.DELETE_ACCOUNT_FORMS_REGISTER_EMAIL_ERROR: {

            let registerEmailErrors = state.RegisterEmailErrors;


            registerEmailErrors.splice(action.payload, 1);

            return {
                ...state,

                RegisterEmailErrors: registerEmailErrors
            }
        }

        case actionTypes.SET_ACCOUNT_FORMS_REGISTER_EMAIL_IS_DIRTY_STATE: {
            return {
                ...state,

                RegisterEmailIsDirty: action.payload
            }
        }

        /*
         Register / Password
         */

        case actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_STATE: {
            return {
                ...state,

                RegisterPassword: action.payload
            }
        }

        case actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_ERRORS_STATE: {

            // @ts-ignore
            if (state.RegisterEmailErrors.includes(action.payload)) {
                return state;
            } else {

                return {
                    ...state,

                    RegisterPasswordErrors: [
                        ...state.RegisterPasswordErrors,
                        action.payload
                    ]
                }
            }
        }

        case actionTypes.DELETE_ACCOUNT_FORMS_REGISTER_PASSWORD_ERROR: {

            let registerPasswordErrors = state.RegisterPasswordErrors;

            registerPasswordErrors.splice(action.payload, 1);

            return {
                ...state,
                RegisterPasswordErrors: registerPasswordErrors
            }
        }

        case actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_IS_DIRTY_STATE: {
            return {
                ...state,

                RegisterPasswordIsDirty: action.payload
            }
        }

        /*
         Register / Password Confirm
         */

        case actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_CONFIRM_STATE: {
            return {
                ...state,
                RegisterPasswordConfirm: action.payload
            }
        }

        case actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_CONFIRM_ERRORS_STATE: {

            // @ts-ignore
            if (state.RegisterEmailErrors.includes(action.payload)) {
                return state;
            } else {
                return {
                    ...state,
                    RegisterPasswordConfirmErrors: [
                        ...state.RegisterPasswordConfirmErrors,
                        action.payload
                    ]
                }
            }
        }

        case actionTypes.DELETE_ACCOUNT_FORMS_REGISTER_PASSWORD_CONFIRM_ERROR: {

            let registerPasswordConfirmErrors = state.RegisterPasswordConfirmErrors;

            registerPasswordConfirmErrors.splice(action.payload, 1);

            return {
                ...state,
                RegisterPasswordConfirmErrors: registerPasswordConfirmErrors
            }
        }

        case actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_CONFIRM_IS_DIRTY_STATE: {
            return {
                ...state,
                RegisterPasswordConfirmIsDirty: action.payload
            }
        }

        /*
         Login / Email @todo - Make Arrays in Errors
         */

        case actionTypes.SET_ACCOUNT_FORMS_LOGIN_EMAIL_STATE: {
            return {
                ...state,
                LoginEmail: action.payload
            }
        }

        case actionTypes.SET_ACCOUNT_FORMS_LOGIN_EMAIL_ERRORS_STATE: {
            return {
                ...state,
                LoginEmailErrors: action.payload
            }
        }

        case actionTypes.SET_ACCOUNT_FORMS_LOGIN_EMAIL_IS_DIRTY_STATE: {
            return {
                ...state,
                LoginEmailIsDirty: action.payload
            }
        }

        /*
         Login / Password
         */

        case actionTypes.SET_ACCOUNT_FORMS_LOGIN_PASSWORD_STATE: {
            return {
                ...state,
                LoginPassword: action.payload
            }
        }

        case actionTypes.SET_ACCOUNT_FORMS_LOGIN_PASSWORD_ERRORS_STATE: {
            return {
                ...state,
                LoginPasswordErrors: action.payload
            }
        }

        case actionTypes.SET_ACCOUNT_FORMS_LOGIN_PASSWORD_IS_DIRTY_STATE: {
            return {
                ...state,
                LoginPasswordIsDirty: action.payload
            }
        }

        /*
         * Default
         */

        default: {
            return state;
        }
    }
}

export default AccountFormsStateReducer;
