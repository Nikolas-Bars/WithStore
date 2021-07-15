import React from 'react'
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/> );
    let messagesElement = state.messages.map(m => <Message message={m.message} />)


    let onSendMessageClick = () =>{
        props.onMessageClick()
    }

    let onNewMessageChange =(e)=>{
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={props.newMessageBody} onChange={onNewMessageChange} placeholder = "enter new message" /></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;