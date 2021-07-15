import React from 'react';
import {addPostActionCreator, UPTEXTActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {/*в пропсе массив posts который прошел через index - app - profile*/
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator()); /*в качестве аргумента будет state.profilePage.newPostText (уже прописано в самой функции в state.js)*/
    }

    let onPostChange = (text) => {
        let action =  UPTEXTActionCreator(text);
    props.store.dispatch(action)
    }






    return (
       <MyPosts updateNewPostText = {onPostChange} addPost = {addPost} posts={state.profilePage.posts} newPostText = {state.profilePage.newPostText}/>
    )
}
export default MyPostsContainer;