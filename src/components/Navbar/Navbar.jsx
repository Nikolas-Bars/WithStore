import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav1}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink} >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink} className={s.item1}>Message</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/news' activeClassName={s.activeLink} className={s.item1}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink} className={s.item1}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' activeClassName={s.activeLink} className={s.item1}>Setting</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;