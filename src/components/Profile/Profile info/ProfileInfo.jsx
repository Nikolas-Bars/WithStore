import React from 'react';
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = ({profile, status, updateStatusThunk}) =>{

    if (!profile){  //если props.profile = null или undefined
        return <Preloader />
    }

    return  (
        <div>
            {/* <div>
                <img className={s.img} src="https://static.prian.ru/uploads/2021_07/1/20210701133751780428393.jpg" />
            </div>*/}
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={profile.photos.small} /><br/>
                <ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/>

            </div>
            <div>

                <div>{profile.contacts.facebook}</div>
                <div>Немного обо мне:  {profile.aboutMe}</div>
                <h3>Ищу ли я работу?</h3>{profile.lookingForAJob ? <div>Нет</div> : <div>ДА</div> }

            </div>

        </div>
);
}
export default ProfileInfo;