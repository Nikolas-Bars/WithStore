import {userAPI} from "../API/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {photosType, UsersType} from "../type/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE = 'TOGGLE'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 30,
    totalUserCount: 20,
    currentPage: 1,
    IsFetching: true,
    followingProgress: [] as Array<number>, //number of users id
    FAKE: 0
}

type initialStateType = typeof initialState

const usersReduser = (state = initialState, action:any):initialStateType => {
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


type followSuccessTypeAction = {type: typeof FOLLOW, userID:number}
export const followSuccess = (userID:number):followSuccessTypeAction => ({type: FOLLOW, userID})
type unfollowSuccessTypeAction = {type: typeof UNFOLLOW, userID:number}
export const unfollowSuccess = (userID:number):unfollowSuccessTypeAction => ({type: UNFOLLOW, userID})
type setUsersTypeAction = {type: typeof SET_USERS, users:UsersType}
export const setUsers = (users:UsersType):setUsersTypeAction => ({type: SET_USERS, users})
type setCurrentPageActionType = {type: typeof SET_CURRENT_PAGE, currentPage: number}
export const setCurrentPage =(pageNumber:number):setCurrentPageActionType=> ({type: SET_CURRENT_PAGE, currentPage: pageNumber})

type setTotalUsersCountTypeAction = {type: typeof SET_TOTAL_USERS_COUNT, count: number }
export const setTotalUsersCount = (count: number):setTotalUsersCountTypeAction => ({type: SET_TOTAL_USERS_COUNT, count: count})
type toggleIsFetchingActionType = {type: typeof TOGGLE, IsFetching: boolean}
export const toggleIsFetching = (IsFetching:boolean):toggleIsFetchingActionType => ({type: TOGGLE, IsFetching:IsFetching})
type toggleFollowingProgressActionType = {type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, userId: number, IsFetching: boolean }
export const toggleFollowingProgress = (userId: number, IsFetching:boolean):toggleFollowingProgressActionType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, userId, IsFetching})









export const getUsersCreator = (currentPage:number, pageSize:number) => async (dispatch:any) =>{
    dispatch(toggleIsFetching(true))
    let data = await userAPI.getUsers(currentPage, pageSize)

        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(false))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setUsers(data.items))

}

const followUnfollowFlow = async (dispatch:any, id:number, apiMethod:any, actionCreator:any)=>{
    dispatch(toggleFollowingProgress(id, true))
    let response = await apiMethod(id)

    if(response.data.resultCode === 0){
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(id, false))
}

export const unfollow = (id:number) =>{
    return async (dispatch:any) =>{
        let apiMethod = userAPI.unfollowUser.bind(userAPI)
        let actionCreator = unfollowSuccess
        followUnfollowFlow (dispatch, id, apiMethod, actionCreator)


    }
}

export const follow = (id:number) =>{
    return async (dispatch:any) => {
        let apiMethod = userAPI.followUser.bind(userAPI)
        let actionCreator = followSuccess
        followUnfollowFlow (dispatch, id, apiMethod, actionCreator)
    }
}

export default usersReduser