import React from 'react'
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
debugger
    let state = props.store.getState()
    let dialogsPage = props.store.getState().dialogsPage

    let onNewMessageChange = (body) => {
        let action = updateNewMessageBodyCreator(body)
        props.store.dispatch(action)
    }

    let onMessageClick =()=> {
        let action = sendMessageCreator()
        props.store.dispatch(action);
    }

    let newMessageBody = state.dialogsPage.newMessageBody;







debugger
    return (
        <Dialogs newMessageBody={newMessageBody}
                 updateNewMessageBody={onNewMessageChange}
                 onMessageClick={onMessageClick}
                 dialogsPage={dialogsPage}
        />
    )
}

export default DialogsContainer;