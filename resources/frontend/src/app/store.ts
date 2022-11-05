import { createStore } from '@reduxjs/toolkit';
import {composeWithDevTools} from '@redux-devtools/extension'
import rootReducer from "@/frontend/src/app/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;