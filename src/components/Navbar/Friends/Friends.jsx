import React from 'react';
import s from "./Friends.module.css"
import {NavLink} from "react-router-dom";


const Friends = () => {
    return (
        <nav className={s.friends}>
            <div className={s.text}>FRIENDS</div>
            <div>
               <img src='https://i1.sndcdn.com/avatars-2VDFI8Svny9l00jD-lPZnVA-t500x500.jpg' className={s.img} />
                <img src="https://avatars.githubusercontent.com/u/44254290?v=4" className={s.img} />
                <img src="https://static.truckersmp.com/avatarsN/2950734.1619898029.png" className={s.img} />





            </div>
        </nav>
    );
}
export default Friends;