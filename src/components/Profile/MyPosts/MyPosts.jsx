import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {textArea} from "../../common/FormsControls/FormsControls";

let maxLength = maxLengthCreator(30)

let minLength = minLengthCreator(5)

function MyPosts(props) {             /*в пропсе массив posts который прошел через index - app - profile*/
    console.log('componentDidUpdateYO')
    let postsElement =
        [...props.posts].reverse().map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    let OnAddPost = (jopa) => {
        props.addPost(jopa.MyPostTextarea)
        /*в качестве аргумента будет state.profilePage.newPostText (уже прописано в самой функции в state.js)*/
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddNewPostsFormRedux onSubmit={OnAddPost}/>
            </div>

            <div className={s.posts}>
                {postsElement}
                {/* <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts}/>
                <Post message={postsData[1].message} likeCounts={postsData[1].likeCounts}/>
                <Post likeCounts={postsData[2].likeCounts} />
                <Post likeCounts={postsData[3].likeCounts} />
                <Post likeCounts={postsData[4].likeCounts} />*/}


            </div>
        </div>


    )
}


const AddNewPostsForm = (props) =>{

        return(<form onSubmit={props.handleSubmit}>
        <div>
           <Field component={textArea} name={'MyPostTextarea'} placeholder={'Your new post'} validate={[required, maxLength, minLength]} />
        </div>
            <button>Add Post</button>
        </form>

    )
}

const AddNewPostsFormRedux = reduxForm({form: 'NewPost'})(AddNewPostsForm)



export default MyPosts;

{/* <div>
        <textarea ref={newPostsElement} className={s.corners} onChange={onPostChange} value={props.newPostText} />
    </div>
    <div>
        <button className={s.corners} onClick={OnAddPost}>Add Post</button> {/*концепция callback - мы не вызываем ф-ию, а отдаем ее чтобы ее кто-то вызывал*/}

