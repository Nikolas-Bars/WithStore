import {userAPI} from "../API/api";
import {updateObjectInArray} from "../utils/object-helpers";

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
    followingProgress: [],
    FAKE: 0
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
            ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})


             /*   ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: true}
                     }return u;
                })*/
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
                /*users: state.users.map(u => {
                    if (u.id === action.userID){
                        return {...u, followed: false}
                    }return u;
                })*/
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


export const getUsersCreator = (currentPage, pageSize) => async (dispatch) =>{
    dispatch(toggleIsFetching(true))
    let data = await userAPI.getUsers(currentPage, pageSize)

        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(false))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setUsers(data.items))

}

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator)=>{
    dispatch(toggleFollowingProgress(id, true))
    let response = await apiMethod(id)

    if(response.data.resultCode === 0){
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(id, false))
}

export const unfollow = (id) =>{
    return async (dispatch) =>{
        let apiMethod = userAPI.unfollowUser.bind(userAPI)
        let actionCreator = unfollowSuccess
        followUnfollowFlow (dispatch, id, apiMethod, actionCreator)


    }
}

export const follow = (id) =>{
    return async (dispatch) => {
        let apiMethod = userAPI.followUser.bind(userAPI)
        let actionCreator = followSuccess
        followUnfollowFlow (dispatch, id, apiMethod, actionCreator)
    }
}

export default usersReduser