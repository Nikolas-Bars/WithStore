import {ProfileAPI, userAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {photosType, contactsType, postType} from "../type/types";

const ADD_POST = 'ADD-POST';
const UP_TEXT = 'UPTEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE = 'SAVE_PROFILE'





type profileType ={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts:contactsType
    photos:photosType
}




let initialState = {
    profile: null as profileType | null,
    posts: [
        {id: '1', message: 'Hi! How are you?', likeCounts: ' likes: 25'},
        {id: '1', message: 'It`s my first post.', likeCounts: ' likes: 12'},
        {id: '1', message: 'Loh!', likeCounts: ' likes: 38'},
        {id: '1', message: 'Pidr!', likeCounts: ' likes: 11'},
        {id: '1', message: 'Idi nah!', likeCounts: ' likes: 7'}
    ] as Array<postType>,
    status: '',
    newPostText: ''
}

export type initialStateType = typeof initialState










const profileReducer = (state = initialState, action: any):initialStateType => { // присвоили state значение по умолчанию

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {
                    id: 5,
                    message: action.newPostText,
                    likeCounts: 0
                }]
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return{

                ...state,
                profile: {...state.profile, photos: action.photos}as profileType
            }
        }
        case SAVE_PROFILE: {
            debugger
            return{
                ...state,
                profile: action.profile
            }
        }
        case UP_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
           return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;

    }
}




type addPostActionCreatorType = {type: typeof ADD_POST, newPostText: string}
export const addPostActionCreator = (newPostText: string):addPostActionCreatorType => ({type: ADD_POST, newPostText})


type setStatusActionType = {type: typeof SET_STATUS, status: string}
export const setStatus =(status:string):setStatusActionType =>({type: SET_STATUS, status})


type deletePostActionType = {type: typeof DELETE_POST, id: number}
export const deletePost =(number: number): deletePostActionType=>({type: DELETE_POST, id: number})


type savePhotoSuccessActionType = {type: typeof SAVE_PHOTO_SUCCESS, photos:string}
export const savePhotoSuccess =(photos:string):savePhotoSuccessActionType=>({type: SAVE_PHOTO_SUCCESS, photos})


type UPTEXTActionCreatorType = {type: typeof UP_TEXT, text: string }
export const UPTEXTActionCreator =(text:string):UPTEXTActionCreatorType => ({type: UP_TEXT, text: text})




// export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId:number) => async (dispatch:any) => {
    let response = await userAPI.getProfile(userId)

        dispatch({type: SET_USER_PROFILE, profile: response.data})

}

export const getStatusThunk = (userId:number) => async (dispatch:any) =>{
    let response = await ProfileAPI.getStatus(userId)
                dispatch(setStatus(response.data))
}

export const updateStatusThunk = (status:string) => async (dispatch:any) =>{
    let response = await ProfileAPI.updateStatus(status)
        if(response.data.resultCode === 0){
        dispatch(setStatus(status))
        }
}

export const savePhoto = (file:any) => async (dispatch:any) => {
    let response = await ProfileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile:profileType) => async (dispatch:any, getState:any) =>{
    const userID = getState().auth.id
    const response = await ProfileAPI.saveProfile(profile)
     if(response.data.resultCode === 0){
        dispatch(getUserProfile(userID))
    }else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject({_error: response.data.messages[0]})
    }
}


export default profileReducer;
