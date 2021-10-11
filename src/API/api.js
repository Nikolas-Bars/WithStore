import * as axios from "axios";


const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0a240200-39b6-4234-b041-5fc101063f21'
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
        return ProfileAPI.getProfile(userId)
}
}

export const ProfileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`/profile/status`, {status: status})
    },
    savePhoto(file){
        const formData = new FormData()
        formData.append('image', file)
        return instance.put(`/profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    }
}

export const authAPI = {
    me(){
        return instance.get(`auth/me`, {
            withCredentials: true
        })
    },
    login(email, password, rememberMe){
        return instance.post(`auth/login`, {email, password, rememberMe})

    },
    logout (){
        return instance.delete(`auth/login`)
    }
}

export const loginAPI = {
    login(){
        return instance.post(`/auth/login`)
    }
}