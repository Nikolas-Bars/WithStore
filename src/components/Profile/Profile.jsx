import React from 'react';
import s from "./Profile.module.css"
import ProfileInfo from "./Profile info/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    console.log('profile')

 return (
        <div className={s.profile}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk} savePhoto={props.savePhoto}/>
            <MyPostsContainer store={props.store} /> {/*state в пропсе ЭТО УЖЕ profilePage -/*передаем в props MyPosts массив posts*/}
        </div>
    );
}
export default Profile;