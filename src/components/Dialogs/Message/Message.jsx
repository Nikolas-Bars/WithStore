import React from 'react'
import s from './../Dialogs.module.css'


const Message = (props) => {

    let refMessage = React.createRef();

    let sendMessageElement = () => {
        let send = refMessage.current.value;
        alert(send);
        props.upNewMessageInTextArea(" ");
    }

  let addChanged =()=> {
    let text = refMessage.current.value;
    props.upNewMessageInTextArea(text);
  }

  /*  <div>
        <textarea onChange={addChanged} ref={refMessage} value={props.newMessageInTextArea}></textarea>
        <button onClick={sendMessageElement}>Send</button>
    </div>*/


    return (
        <div>
        <div className={s.message}>{props.message}</div>
     </div>
    )
}

export default Message;