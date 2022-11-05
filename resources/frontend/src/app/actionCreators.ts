import * as actionTypes from "./actionTypes"

export function setAccountLoginIsOpened(payload: boolean) {
    return ({type: actionTypes.SET_ACCOUNT_LOGIN_IS_OPENED__STATE, payload});
}

export function setAccountRegisterIsOpened(payload: boolean) {
    return ({type: actionTypes.SET_ACCOUNT_REGISTER_IS_OPENED__STATE, payload});
}

/*
 Register
 */

export function setAccountFormsRegisterEmailState(payload: string) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_REGISTER_EMAIL_STATE, payload});
}

export function setAccountFormsRegisterPasswordState(payload: string) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_STATE, payload});
}

export function setAccountFormsRegisterEmailErrorsState(payload: string) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_REGISTER_EMAIL_ERRORS_STATE, payload});
}

export function deleteAccountFormsRegisterEmailError(payload: number) {
    return ({type: actionTypes.DELETE_ACCOUNT_FORMS_REGISTER_EMAIL_ERROR, payload});
}

export function setAccountFormsRegisterPasswordErrorsState(payload: string) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_ERRORS_STATE, payload});
}

export function deleteAccountFormsRegisterPasswordError(payload: number) {
    return ({type: actionTypes.DELETE_ACCOUNT_FORMS_REGISTER_PASSWORD_ERROR, payload});
}

export function setAccountFormsRegisterEmailIsDirty(payload: boolean) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_REGISTER_EMAIL_IS_DIRTY_STATE, payload});
}


export function setAccountFormsRegisterPasswordIsDirty(payload: boolean) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_IS_DIRTY_STATE, payload});
}

export function setAccountFormsRegisterPasswordConfirmState(payload: string) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_CONFIRM_STATE, payload});
}

export function setAccountFormsRegisterPasswordConfirmErrorsState(payload: string) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_CONFIRM_ERRORS_STATE, payload});
}

export function deleteAccountFormsRegisterPasswordConfirmError(payload: number) {
    return ({type: actionTypes.DELETE_ACCOUNT_FORMS_REGISTER_PASSWORD_CONFIRM_ERROR, payload});
}

export function setAccountFormsRegisterPasswordConfirmIsDirty(payload: boolean) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_REGISTER_PASSWORD_CONFIRM_IS_DIRTY_STATE, payload});
}

/*
Register Form Status
 */

export function setAccountFormsRegisterIsValid(payload: boolean) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_REGISTER_IS_VALID, payload});
}

/*
 Login
 */

export function setAccountFormsLoginEmailState(payload: any) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_LOGIN_EMAIL_STATE, payload});
}

export function setAccountFormsLoginPasswordState(payload: any) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_LOGIN_PASSWORD_STATE, payload});
}

export function setAccountFormsLoginEmailErrorsState(payload: any) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_LOGIN_EMAIL_ERRORS_STATE, payload});
}

export function setAccountFormsLoginPasswordErrorsState(payload: any) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_LOGIN_PASSWORD_ERRORS_STATE, payload});
}

export function setAccountFormsLoginEmailIsDirty(payload: any) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_LOGIN_EMAIL_ERRORS_STATE, payload});
}

export function setAccountFormsLoginPasswordIsDirty(payload: any) {
    return ({type: actionTypes.SET_ACCOUNT_FORMS_LOGIN_PASSWORD_IS_DIRTY_STATE, payload});
}
