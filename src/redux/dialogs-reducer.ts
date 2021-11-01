const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_NEW_MESSAGE_BODY = 'SEND_NEW_MESSAGE_BODY';

type initialStateType = typeof initialState

export type Dialogs = {
    id: number
    name: string
    img?: any
}

export type messageType ={
    id: number
    message: string
}

let initialState = {
        newMessageBody: 'fuck!',
        dialogs: [
            {
                id: 1 as number | string,
                name: 'Dimych',
            },
            {
                id: 2 as number | string,
                name: 'Andrey',
                            },
            {
                id: 3 as number | string,
                name: 'Sveta',

            },
            {
                id: 4 as number | string,
                name: 'Sasha',

            },
            {
                id: 5 as number | string,
                name: 'Victor',

            },
            {
                id: 6 as number | string,
                name: 'Valera',

            }
        ] as Array<Dialogs>,
        messages: [
            {id: 1, message: 'Hi',},
            {id: 2, message: 'How is your it kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'},
            {id: 6, message: 'Yo'}
        ] as Array<messageType>

}

const dialogsReducer = (state = initialState, action:any) => {
    switch (action.type) {

        case  SEND_NEW_MESSAGE_BODY:{
            let stateCopy = {...state}
            let body = action.DialogsText;
            stateCopy.messages.push({id: 10, message: body});
            return stateCopy;
        }
        default: return state;

    }

    return state;
}

export type sendMessageCreatorActionType = {type: typeof SEND_NEW_MESSAGE_BODY, DialogsText: string }

export const sendMessageCreator = (DialogsText: string) : sendMessageCreatorActionType => ({type: SEND_NEW_MESSAGE_BODY, DialogsText})

export type updateNewMessageBodyCreatorActionType =  {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: any
}

export const updateNewMessageBodyCreator= (body: any): updateNewMessageBodyCreatorActionType => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;