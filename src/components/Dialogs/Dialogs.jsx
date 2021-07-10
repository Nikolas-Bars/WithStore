import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom"; //NavLink у нас в файле DialogItem
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageInput from "./Message/MessageInput"

const Dialogs = (props) => {



    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/> );
    let messagesElement = props.state.messages.map(m => <Message message={m.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>
            <MessageInput newMessageInTextArea={props.state.newMessageInTextArea}
                          upNewMessageInTextArea={props.upNewMessageInTextArea}
                          upMessageForDialogPage={props.upMessageForDialogPage}/>

        </div>
    )
}

export default Dialogs;