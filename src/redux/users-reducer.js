const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE = 'TOGGLE'

let initialState = {
    users: [],
    pageSize: 100,
    totalUserCount: 20,
    currentPage: 1,
    IsFetching: true
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
        default:
            return state;


    }
}
export const follows = (userID) => ({type: FOLLOW, userID})
export const unfollows = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage =(pageNumber)=> ({type: SET_CURRENT_PAGE, currentPage: pageNumber})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count: count})
export const toggleIsFetching = (IsFetching) => ({type: TOGGLE, IsFetching:IsFetching})
export default usersReduser