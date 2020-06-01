export const USER_LOGGIN = 'USER_LOGIN'
export const userLogin = (payload) => {
    return {
        type: USER_LOGGIN,
        user: payload
    }
}