import * as axios from "axios";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7b9d1cc8-4923-4bd6-ab91-3bbcd69e7ad2'
    }
})


export const userAPI = {
    getUsers(currentPage = 1, pageSize = 5){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id){
        return instance.delete(`follow/${id}`)},
    followUser(id){
        return instance.post(`follow/${id}`)},
    /*pageMe(){
        return instance.get(`auth/me`, {
        withCredentials: true
    })}, вынесли отдельно в authMe.me */
    getProfile(userId){
        return instance.get(`profile/${userId}`)
}
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`, {
            withCredentials: true
        })
    }
}