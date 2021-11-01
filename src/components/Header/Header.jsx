import React from 'react';
import s from "./Header.module.css"
import logo from '../../img/logo.png'
const Header = (props) =>{


    let  getCaptchaUrl1 = ()=> {
        props.getCaptchaUrl()
    }
    return  (
        <div className={s.header1}>



            {props.isAuth
                ? <div className={s.auth}>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <div><button className={s.auth}>Fuck!</button> </div>}
            <button onClick={getCaptchaUrl1} className={s.auth}>Fuck!</button>
            <div><img src={logo} alt="logo" /> </div>
        </div>
    );
}
export default Header;