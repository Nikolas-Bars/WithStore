import React from 'react';
import {addPostActionCreator, UPTEXTActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../storeContext";

const MyPostsContainer = (props) => {
    return (
        <storeContext.Consumer>{
            (store) => {
                let state = store.getState()

                let addPost = () => {
                    store.dispatch(addPostActionCreator()); /*в качестве аргумента будет state.profilePage.newPostText (уже прописано в самой функции в state.js)*/
                }

                let onPostChange = (text) => {
                    let action = UPTEXTActionCreator(text);
                    store.dispatch(action)
                }


                return <MyPosts updateNewPostText={onPostChange} addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>

            }}
        </storeContext.Consumer>)

}
export default MyPostsContainer;