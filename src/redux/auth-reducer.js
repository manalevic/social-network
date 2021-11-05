import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const DELETE_USER_DATA = "DELETE_USER_DATA"
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL"

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case DELETE_USER_DATA:
            return {
                ...state,
                userId: null,
                login: null,
                email: null,
                isAuth: false
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }

}

export const getAuthThunk = () => (dispatch) => {
    return (
        authAPI.getAuth().then(response => {

            if (response.resultCode === 0) {
                let { id, login, email } = response.data
                dispatch(setUserData(id, login, email))
            }
        }))
}
export const loginThunk = (login, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(login, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(getAuthThunk())
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrlThunk())
        }
        let message = response.messages.length > 0 ? response.messages[0] : "Some error"
        dispatch(stopSubmit("login", { _error: message }))
    
    }
}
export const logoutThunk = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.resultCode === 0) {
            dispatch(deleteUserData())
        }
    })
}
export const getCaptchaUrlThunk = () => async (dispatch) => {
    let response = await authAPI.getCaptchaUrl()
        dispatch(getCaptchaUrlAC(response.url))
}


export const deleteUserData = () => ({
    type: DELETE_USER_DATA
})

export const setUserData = (userId, login, email) => ({
    type: SET_USER_DATA, data: { userId, login, email }
})

export const getCaptchaUrlAC = (captchaUrl) => ({
    type: GET_CAPTCHA_URL, captchaUrl
})



export default authReducer

