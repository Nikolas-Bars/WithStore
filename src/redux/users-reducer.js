import {userAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE = 'TOGGLE'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 100,
    totalUserCount: 20,
    currentPage: 1,
    IsFetching: true,
    followingProgress: []
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: true}
                     }return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: false}
                    }return u;
                })
            }

        case SET_USERS:

            return {
                ...state,
                users: [
                ...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.count
            }
        case TOGGLE:
            return {
                ...state,
                IsFetching: action.IsFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.IsFetching
                    ?[...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state;


    }
}


export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage =(pageNumber)=> ({type: SET_CURRENT_PAGE, currentPage: pageNumber})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count: count})
export const toggleIsFetching = (IsFetching) => ({type: TOGGLE, IsFetching:IsFetching})
export const toggleFollowingProgress = (userId, IsFetching) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, userId, IsFetching})

export const getUsersCreator = (currentPage, pageSize) => (dispatch) =>{
    dispatch(toggleIsFetching(true))
    userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(false))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setUsers(data.items))
    })
}

export const unfollow = (id) => (dispatch) =>{
    dispatch(toggleFollowingProgress(id, true))
    userAPI.unfollowUser(id)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(unfollowSuccess(id))
            }
            dispatch(toggleFollowingProgress(id, false))
        })
}

export const follow = (id) => (dispatch) => {
    dispatch(toggleFollowingProgress(id, true))
    userAPI.followUser(id)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(followSuccess(id))
            }
            dispatch(toggleFollowingProgress(id, false))
        })
}

export default usersReduser