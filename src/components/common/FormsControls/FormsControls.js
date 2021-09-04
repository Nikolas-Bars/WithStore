import React from "react";
import s from './FormsControl.module.css'



const FormControl =({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error

    return <div className={s.formControl + ' ' + (hasError ? s.error : " ")}>
        <div>
            {props.children}
        </div>
        <div>
            {hasError && <span className={s.be}>{meta.error}</span>}
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

