import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '96c1cbe8-ce69-487c-a58b-caa1f1a08239'
    }
})






export const usersAPI = {
    getUsers(currentPage, pageSize, friend = null) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}&friend=${friend}`)    
        .then(response => {
            return response.data

            })
           
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
            
    },
    postUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    // getFriends(currentPage, pageSize, friend = true) {
    //     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    //         .then(response => response.data)
    // },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data)
    },
    savePhoto(photo) {
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        })
        .then(response => response.data)
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
            .then(response => response.data)
    },
 
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe,captcha})
        .then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`)
        .then(response => response.data)
    },
    getCaptchaUrl(){
        return instance.get(`security/get-captcha-url`)
        .then(response => response.data)
    },
}

