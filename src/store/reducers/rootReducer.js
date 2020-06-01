import { combineReducers } from "redux"
import { bookReducer } from './bookReducer'
import { userReducer } from "./userReducer"

export const rootReducer = combineReducers({
    books: bookReducer,
    users: userReducer
})