import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
const Users = (props) => {


       let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)


        let pages = [];

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p =>{

                   return <span className={props.currentPage === p && s.silectPage}
                   onClick={(e) =>{props.onPageChange(p)}}>{p}</span>
                })
                }

            </div>
            {
                props.users.map(u => <div key={u.id}>
                <div>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img
                        src={u.photos.small != null ? u.photos.small : "https://help.flbord.com/s/cache/81/11/8111068c8d4aae0d7bbbc2d8c7ff7453.png"}
                        className={s.img1}/>
                        </NavLink>
                </div>


                    {u.followed
                        ? <button disabled={props.followingProgress.some(jopa => jopa === u.id)} onClick={() =>{
                            props.unfollowThunk(u.id)
                            }}>unfollow</button>
                        : <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() =>{
                            props.followThunk(u.id)}}>follow</button>
                    }


                </div>
                    <span>
                    <span>
                        <div>
                            {u.name}-

                        </div>
                        <div>

                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {"u.location.country"}
                        </div>
                        <div>
                            {"u.location.city"}
                        </div>
                    </span>
                </span>
                </div>)
            }
        </div>


}


 export default Users