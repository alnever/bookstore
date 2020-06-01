import { createReducer } from './../helpers/CreateReducer'
import { USER_LOGGIN } from '../actions/UserActions'

export const initialUserState = {
    isLogged: false,
    user: {
        username: "",
        password: ""
    }
}

export const userReducer = createReducer(initialUserState, {
    [USER_LOGGIN]: (state, action) => {
        console.log(state)
        console.log(action)
        return {
            ...state,
            isLogged: true,
            user: action.user
        }
    }   
})