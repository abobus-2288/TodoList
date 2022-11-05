import {combineReducers} from '@reduxjs/toolkit';
import AccountStateReducer from "@/frontend/src/app/AccountStateReducer";
import AccountFormsStateReducer from "@/frontend/src/app/AccountFormsStateReducer";

const rootReducer = combineReducers({
    AccountState: AccountStateReducer,
    AccountFormsState: AccountFormsStateReducer
});

export default rootReducer;
