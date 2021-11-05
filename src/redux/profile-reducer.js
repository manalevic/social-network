import { stopSubmit } from 'redux-form'
import { profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO = 'SET_PHOTO'
const LIKE = 'LIKE'
const UNLIKE = 'UNLIKE'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'


let initialState = {
    postsData: [
        { id: 1, message: "The posts section is still in development", likesCount: 12 },
        { id: 2, message: "there is no api support yet ", likesCount: 32 },
    ],
    profile: null,
    status: "",
    isLoading: false

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.postsData.length + 1,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photo }
            }
        case LIKE:
            return {
                ...state,
                postsData: state.postsData.map(e => {
                    if (e.id === action.id) {
                        return { ...e, likesCount: e.likesCount + 1 }
                    }
                    return e
                })
            }
        case UNLIKE:
            return {
                ...state,
                postsData: state.postsData.map(e => {
                    if (e.id === action.id) {
                        return { ...e, likesCount: e.likesCount - 1 }
                    }
                    return e
                })
            }
        case TOGGLE_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state;
    }
}


export const setProfileThunk = (userId) => (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response))
    })
}
export const setStatusThunk = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response))
    })
}
export const updateStatusThunk = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }

    })
}
export const addPostThunk = newPostText => (dispatch) => {
    dispatch(addPost(newPostText))
}
export const setPhotoThunk = (photo) => (dispatch) => {
    dispatch(toggleIsLoading(true))
    profileAPI.savePhoto(photo).then(response => {
        if (response.resultCode === 0) {
            dispatch(setPhoto(response.data.photos))
        }
        dispatch(toggleIsLoading(false))
    })
}
export const saveProfileThunk = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)

    if (response.resultCode === 0) {
        dispatch(setProfileThunk(userId))
    } else {
        // let message = response.messages[0].split('>')
        // message = message[1].split(')')
        // message = message[0].toLowerCase()
        // dispatch(stopSubmit("editProfile", {"contacts": {"facebook": response.messages[0] } }))

        dispatch(stopSubmit("editProfile", { _error: response.messages[0] }))
        return Promise.reject(response.messages[0])
    }
}

export const likeThunk = (id) => async (dispatch) => {
    dispatch(likeAC(id))
}

export const unlikeThunk = (id) => async (dispatch) => {
    dispatch(unlikeAC(id))
}


export const setStatus = (status) => ({ type: SET_STATUS, status })
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setPhoto = (photo) => ({ type: SET_PHOTO, photo })
export const likeAC = (id) => ({ type: LIKE, id })
export const unlikeAC = (id) => ({ type: UNLIKE, id })
export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })

export default profileReducer