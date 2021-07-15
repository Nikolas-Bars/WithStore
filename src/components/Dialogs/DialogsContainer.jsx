import React from 'react'
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import storeContext from "../../storeContext";

const DialogsContainer = (props) => {


    return (
        <storeContext.Consumer>{
            (store) => {
                let state = store.getState()
                let dialogsPage = store.getState().dialogsPage

                let onNewMessageChange = (body) => {
                    let action = updateNewMessageBodyCreator(body)
                    store.dispatch(action)
                }

                let onMessageClick =()=> {
                    let action = sendMessageCreator()
                    store.dispatch(action);
                }

                let newMessageBody = state.dialogsPage.newMessageBody;

                return <Dialogs newMessageBody={newMessageBody}
                     updateNewMessageBody={onNewMessageChange}
                     onMessageClick={onMessageClick}
                     dialogsPage={dialogsPage}
            />
            }
        }
        </storeContext.Consumer>
    )
}

export default DialogsContainer;