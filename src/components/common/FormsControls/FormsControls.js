import React from "react";
import s from './FormsControl.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";


const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error

    return <div className={s.formControl + ' ' + (hasError ? s.error : " ")}>
        <div>
            {children}
        </div>
        <div>
            {hasError && <span className={s.be}>{error}</span>}
        </div>
    </div>
}

export const textArea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...props}/></FormControl>
}

export const CreateField = (placeholder, name, component, validate, props={}, text="") => (<div><Field placeholder={placeholder}
                                                                                    name={name}
                                                                                    component={component}
                                                                                    validate={validate}
    {...props}/> {text}
</div>)