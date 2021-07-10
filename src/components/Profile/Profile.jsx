import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import s from "./Profile.module.css"
import ProfileInfo from "./Profile info/ProfileInfo";

const Profile = (props) => {

 return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} upText={props.upText} addPost={props.addPost} newPostText={props.state.newPostText}/> {/*state в пропсе ЭТО УЖЕ profilePage -/*передаем в props MyPosts массив posts*/}
        </div>
    );
}
export default Profile;