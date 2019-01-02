import { createStore } from "redux";
import rootReducer from "../reducers";

const initialState = { displayable: [0, 1, 2] };
export const store = createStore(rootReducer, initialState);
