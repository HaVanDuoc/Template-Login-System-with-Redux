import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
    Auth: AuthReducer,
})

export default rootReducer