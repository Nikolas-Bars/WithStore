import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import s from "./Profile.module.css"
import ProfileInfo from "./Profile info/ProfileInfo";

const Profile = (props) => {

 return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}/> {/*state в пропсе ЭТО УЖЕ profilePage -/*передаем в props MyPosts массив posts*/}
        </div>
    );
}
export default Profile;