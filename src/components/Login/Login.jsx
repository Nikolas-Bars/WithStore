import React from "react";
import {Field, reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControl.module.css'

const maxLengthCreators = maxLengthCreator(20)
const minLengthCreators = minLengthCreator(5)

const LoginForm = ({handleSubmit, error}) => {
    return (
           <form onSubmit={handleSubmit}>
               {CreateField('Email','email', Input,[required, maxLengthCreators, minLengthCreators]  )}
               {CreateField('password','password', Input,[required, maxLengthCreators, minLengthCreators], {type: 'password'}, 'jopa') }
               {CreateField(null,'Remember Me', Input,null, {type: 'checkbox'})}

               {error && <div className={s.FormSummuryError}>
                   {error}
               </div>}
                <div>
                    <button>Login</button>
                </div>
           </form>

    )
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

    const onSubmit=(formData)=>{

        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state)=>({
        isAuth: state.auth.isAuth
    })

export default connect(mapStateToProps, {login})(Login) // null вместо mapStateToProps и login вместо mapDispatchToProps