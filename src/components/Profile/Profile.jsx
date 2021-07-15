import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import s from "./Profile.module.css"
import ProfileInfo from "./Profile info/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

 return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store} /> {/*state в пропсе ЭТО УЖЕ profilePage -/*передаем в props MyPosts массив posts*/}
        </div>
    );
}
export default Profile;