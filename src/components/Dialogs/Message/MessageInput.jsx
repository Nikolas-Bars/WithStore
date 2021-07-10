import React from 'react'
import s from './MessageInput.module.css'


const MessageInput = (props) => {

    let refMessage = React.createRef();

    let sendMessageElement = () => {
        let send = refMessage.current.value;
        props.upMessageForDialogPage(send);
        props.upNewMessageInTextArea(" ");
    }

    let addChanged =()=> {
        let text = refMessage.current.value;
        props.upNewMessageInTextArea(text);
    }

    return (
        <div>
            <div className={s.area}>
                <textarea className={s.area1} onChange={addChanged} ref={refMessage} value={props.newMessageInTextArea}></textarea>
                <button className={s.area1} onClick={sendMessageElement}>Send</button>
            </div>
        </div>
    )
}

export default MessageInput;