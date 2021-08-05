import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) =>{

    return  (
        <div className={s.header1}>

            {props.isAuth ? <button className={s.auth}>{props.login}</button> : <button className={s.auth}><NavLink to='/login'>LOGIN</NavLink></button>}

                <div><img src="https://cryptologos.cc/logos/aave-aave-logo.png" alt="logo"  /> </div>




        </div>
    );
}
export default Header;