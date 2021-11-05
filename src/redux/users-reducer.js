import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET__FRIENDS_CURRENT_PAGE = 'SET__FRIENDS_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'
const SET_PORTION_NUMBER = 'SET_PORTION_NUMBER'

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 200,
    currentPage: 1,
    isLoading: false,
    followingUsers: [],
    friendsCurrentPage: 1,
    currentPortionNumber: 1

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET__FRIENDS_CURRENT_PAGE:
            return { ...state, friendsCurrentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }

        case TOGGLE_IS_LOADING:
            return { ...state, isLoading: action.isLoading }

        case TOGGLE_IS_FOLLOWING:
            return {
                ...state, followingUsers: action.isLoading
                    ? [...state.followingUsers, action.userId]
                    : [state.followingUsers.filter(u => u !== action.userId)]
            }
        case SET_PORTION_NUMBER: 
            return {...state, currentPortionNumber: action.currentPortionNumber}
        default:
            return state
    }

}


export const getUsersThunk = (currentPage, pageSize, friend) => async (dispatch) => {
    dispatch(toggleIsLoading(true))
    let response = await usersAPI.getUsers(currentPage, pageSize, friend)
    dispatch(toggleIsLoading(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const onPageChangedThunk = (pageNumber, pageSize, friend = false) => async (dispatch) => {
    dispatch(toggleIsLoading(true))
    if (friend) {
        dispatch(setFriendsCurrentPage(pageNumber))
    } else {
        dispatch(setCurrentPage(pageNumber))
    }

    let response = await usersAPI.getUsers(pageNumber, pageSize, friend)
    dispatch(toggleIsLoading(false))
    dispatch(setUsers(response.items))
}

export const followThunk = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    let response = await usersAPI.postUsers(userId)

    if (response.resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleIsFollowing(false, userId))
}

export const unfollowThunk = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    let response = await usersAPI.deleteUsers(userId)
    if (response.resultCode === 0) {
        dispatch(unFollow(userId))
    }
    dispatch(toggleIsFollowing(false, userId))
}

export const unfollowFriendsThunk = (userId, currentPage, pageSize, friend) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    let response = await usersAPI.deleteUsers(userId)
    if (response.resultCode === 0) {
        dispatch(unFollow(userId))
        let response = await usersAPI.getUsers(currentPage, pageSize, friend)
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
    }
    dispatch(toggleIsFollowing(false, userId))
}


export const setPortionNumberThunk = (currentPortionNumber) => async (dispatch) => {
    dispatch(setPortionNumberAC(currentPortionNumber))
}



export const follow = (userId) => ({
    type: FOLLOW, userId
})

export const unFollow = (userId) => ({
    type: UNFOLLOW, userId
})

export const setUsers = (users) => ({
    type: SET_USERS, users
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
})

export const setFriendsCurrentPage = (currentPage) => ({
    type: SET__FRIENDS_CURRENT_PAGE, currentPage
})

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT, totalUsersCount
})

export const toggleIsLoading = (isLoading) => ({
    type: TOGGLE_IS_LOADING, isLoading
})

export const toggleIsFollowing = (isLoading, userId) => ({
    type: TOGGLE_IS_FOLLOWING, isLoading, userId
})

export const setPortionNumberAC = (currentPortionNumber) => ({
    type: SET_PORTION_NUMBER, currentPortionNumber
})

export default usersReducer