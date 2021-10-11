import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import hacker from './../../img/hacker.png'


const User = ({user, followingProgress, unfollowThunk, followThunk}) => {
    let u = user;
    return <div>
        <div>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img
                        src={u.photos.small != null ? u.photos.small : hacker}
                        className={s.img1}/>
                </NavLink>
            </div>


            {u.followed
                ? <button disabled={followingProgress.some(jopa => jopa === u.id)} onClick={() => {
                    unfollowThunk(u.id)
                }}>unfollow</button>
                : <button disabled={followingProgress.some(id => id === u.id)} onClick={() => {
                    followThunk(u.id)
                }}>follow</button>
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
    </div>
}
 export default User