import React from 'react';
import s from "./Post.module.css"
const Post = (props) =>{
      return  (
                <div>
                   <img src='https://www.mirf.ru/wp-content/uploads/2020/09/1480331127-2048x1152.jpg' className={s.imgg}/>
                   <div className={s.item}>
                    {props.message} <br/>
                   </div>
                   <div className={s.likes} >
                    {props.likeCounts}<br/><br/>
                   </div>
                    <div>
                        <span></span>
                    </div>

                </div>
    )
}
export default Post;