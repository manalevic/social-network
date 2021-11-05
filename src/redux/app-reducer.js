import { getAuthThunk } from "./auth-reducer"

const INITIALIZE = 'INITIALIZE'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }

}

export const initializeThunk = () => (dispatch) => {
    let promise = dispatch(getAuthThunk())
    promise.then(() => {
        dispatch(initiaizeAC())
    })
}

export const initiaizeAC = () => ({type: INITIALIZE})


export default appReducer