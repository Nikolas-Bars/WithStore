import React from "react";
import {Field, reduxForm} from "redux-form";
import {textArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength1 = maxLengthCreator(30)

const AddNewMessageForm =(props)=>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={textArea} placeholder={'jopa'} name={'NewMessage'} validate={[required, maxLength1]}/>
        </div>
        <button>Add Message</button>
    </form>
}

export const AddNewMessageFormRedux = reduxForm({form: 'AddNewMessage'})(AddNewMessageForm)