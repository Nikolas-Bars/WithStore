import React from 'react'
import s from './../Dialogs.module.css'


const Message = (props) => {

    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message;


/*    let refMessage = React.createRef();

    let sendMessageElement = () => {
        let send = refMessage.current.value;
        alert(send);
        props.dispatch ({type: 'UPNEWMESSAGEINTEXTAREA', text: ""});
    }

  let addChanged =()=> {
    let text = refMessage.current.value;
      props.dispatch ({type: 'UPNEWMESSAGEINTEXTAREA', text: text});
  }

  /*  <div>
        <textarea onChange={addChanged} ref={refMessage} value={props.newMessageInTextArea}></textarea>
        <button onClick={sendMessageElement}>Send</button>
    </div>*/




