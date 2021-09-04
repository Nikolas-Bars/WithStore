import {authAPI, authMe, authMeAPI, userAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReduser = (state= initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}
export const setAuthUserData = (email, id, login, isAuth) => ({type: SET_USER_DATA, payload: {email, id, login}, isAuth})
export const getAuthUserData = () => (dispatch) => {
   return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                dispatch(setAuthUserData(email, id, login, true));
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {



    authAPI.login(email, password, rememberMe)
        .then(response => {

            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }else{
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch)=>{
    authAPI.logout()
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReduser