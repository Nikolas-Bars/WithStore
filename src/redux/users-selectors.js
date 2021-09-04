
export const getUsers = (state) =>{
    return state.usersPage.users
}

export const getPageSize =(state)=>{
    return state.usersPage.pageSize
}

export const getTotalUserCount =(state)=>{
    return state.usersPage.totalUserCount
}

export const getCurrentPage =(state)=>{
    return state.usersPage.currentPage
}

export const getIsFetching =(state)=>{
    return state.usersPage.IsFetching
}

export const getFollowingProgress =(state)=>{
    return state.usersPage.followingProgress
}