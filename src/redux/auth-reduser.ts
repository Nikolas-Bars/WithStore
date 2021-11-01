import {authAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const CAPTCHA_URL = 'CAPTCHA_URL'


/*export type initialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}*/

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
}

export type initialStateType = typeof initialState

const authReduser = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: '4',
                ...action.payload,
                isAuth: action.isAuth
            }
        case CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state
    }
}

type captchaUrlSucseccActionType = {
    type: typeof CAPTCHA_URL
    payload: {url: string}
}

export const captchaUrlSucsess =(url: string):captchaUrlSucseccActionType=>({type: CAPTCHA_URL, payload: {url}})


type payloadType ={
    email: string | null
    login: string | null
    id: number | null
}

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: payloadType
    isAuth: boolean
}



export const setAuthUserData = (email: string | null, id: number | null, login: string | null, isAuth: boolean):setAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {email, id, login},
    isAuth
})


export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {email, id, login} = response.data.data
        dispatch(setAuthUserData(email, id, login, true));
    }

}

export const login = (email: any, password: any, rememberMe: any, captcha: any) => async (dispatch: any) => {

    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    }else if(response.data.resultCode === 10){
        dispatch(getCaptchaUrl())
    }else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const logout = () => async (dispatch: any) => {

    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) =>{
    let response = await securityAPI.captcha();
    let captchaUrl = response.data.url
    dispatch(captchaUrlSucsess(captchaUrl))
}

export default authReduser