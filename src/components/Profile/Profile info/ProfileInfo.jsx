import React from 'react';
import s from "./ProfileInfo.module.css"
const ProfileInfo = () =>{
    return  (
        <div>
            <div>
                <img className={s.img} src="https://static.prian.ru/uploads/2021_07/1/20210701133751780428393.jpg" />
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.img2} src='https://img5.goodfon.ru/original/2048x2048/4/16/4k-ultra-hd-background-cat-hood-heterochromia-dark-serious-b.jpg' /><br/>
                My avatar and description
            </div>

        </div>
);
}
export default ProfileInfo;