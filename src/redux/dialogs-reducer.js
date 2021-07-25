const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_NEW_MESSAGE_BODY = 'SEND_NEW_MESSAGE_BODY';

let initialState = {
        newMessageBody: 'fuck!',
        dialogs: [
            {
                id: '1',
                name: 'Dimych',
                img: <img
                    src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg"
                    width='30'/>
            },
            {
                id: '2',
                name: 'Andrey',
                img: <img src="https://i.pinimg.com/originals/52/ea/be/52eabecf424b217807d0e557b9a0c38e.jpg"
                          width='30'/>
            },
            {
                id: '3',
                name: 'Sveta',
                img: <img
                    src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg"
                    width='30'/>
            },
            {
                id: '4',
                name: 'Sasha',
                img: <img
                    src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg"
                    width='30'/>
            },
            {
                id: '5',
                name: 'Victor',
                img: <img
                    src="https://ih1.redbubble.net/image.969938492.4298/st,small,507x507-pad,600x600,f8f8f8.jpg"
                    width='30'/>
            },
            {
                id: '6',
                name: 'Valera',
                img: <img src="https://icon-library.com/images/icon-programmer/icon-programmer-10.jpg" width='30'/>
            }
        ],
        messages: [
            {id: '1', message: 'Hi',},
            {id: '2', message: 'How is your it kamasutra?'},
            {id: '3', message: 'Yo'},
            {id: '4', message: 'Yo'},
            {id: '5', message: 'Yo'},
            {id: '6', message: 'Yo'}
        ]

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }


        case  SEND_NEW_MESSAGE_BODY:{
            let stateCopy = {...state}
            let body = state.newMessageBody;
            stateCopy.newMessageBody = "";
            stateCopy.messages.push({id: 10, message: body});
            return stateCopy;
        }
        default: return state;

    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_NEW_MESSAGE_BODY})

export const updateNewMessageBodyCreator= (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;