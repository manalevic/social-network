const ADD_MESSAGE = 'ADD-MESSAGE'


let initialState = {
    dialogsData: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Vasya'},
        {id: 5, name: 'Kaban'}
    ],
    messagesData: [
        {id: 1, message: "The posts section is still in development"},
        {id: 2, message: "there is no api support yet"}
    ]
 
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length + 1,
                message: action.newTextMessage
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }
        default:
            return state
    }

}

export const addMessageThunk = (newTextMessage) => (dispatch) => {
    dispatch(addMessageActionCreator(newTextMessage))
}

export const addMessageActionCreator = (newTextMessage) => ({ type: ADD_MESSAGE, newTextMessage})




export default dialogsReducer