import React from 'react'
import s from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Redirect from "react-router-dom/es/Redirect";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {AddNewMessageFormRedux} from "./Message/AddMessageForm";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/> );
    let messagesElement = state.messages.map(m => <Message message={m.message} />)


    let AddNewMessage = (jopa) =>{
        props.sendMessage(jopa.NewMessage)
    }

    if(!props.isAuth) return <Redirect to='/login' />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElement}</div>
               <AddNewMessageFormRedux onSubmit={AddNewMessage}/>
            </div>
        </div>
    )
}



export default Dialogs;

/*<div>
    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder = "enter new message" /></div>
    <div><button onClick={onSendMessageClick}>Send</button></div>
</div>*/