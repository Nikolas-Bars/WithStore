import Preloader from "../components/common/Preloader/Preloader";
import {ProfileAPI, userAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const UP_TEXT = 'UPTEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    profile: null,
    posts: [
        {id: '1', message: 'Hi! How are you?', likeCounts: ' likes: 25'},
        {id: '1', message: 'It`s my first post.', likeCounts: ' likes: 12'},
        {id: '1', message: 'Loh!', likeCounts: ' likes: 38'},
        {id: '1', message: 'Pidr!', likeCounts: ' likes: 11'},
        {id: '1', message: 'Idi nah!', likeCounts: ' likes: 7'}
    ],
    status: ''

}

const profileReducer = (state = initialState, action) => { // присвоили state значение по умолчанию

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
        case UP_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text;
            return stateCopy;
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
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setStatus =(status)=>({type: SET_STATUS, status})


export const UPTEXTActionCreator =(text) => ({type: UP_TEXT, text: text})

// export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch({type: SET_USER_PROFILE, profile: response.data})
    })
}

export const getStatusThunk = (userId) => (dispatch) =>{
    ProfileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatusThunk = (status) => (dispatch) =>{
    ProfileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0){
        dispatch(setStatus(status))
        }
    })
}

export default profileReducer;
