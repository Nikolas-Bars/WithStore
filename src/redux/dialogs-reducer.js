const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_NEW_MESSAGE_BODY = 'SEND_NEW_MESSAGE_BODY';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
           state.newMessageBody = action.body;
           return state;
        case  SEND_NEW_MESSAGE_BODY:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 10, message: body});
            return state;
        default: return state;

    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_NEW_MESSAGE_BODY})

export const updateNewMessageBodyCreator= (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;