import React from "react";
import s from './Users.module.css'

import {setUsersAC} from "../../redux/users-reducer";
import * as axios from "axios";

const UsersOLD =(props)=> {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                <div>
                    <img
                        src={u.photos.small != null ? u.photos.small : "https://help.flbord.com/s/cache/81/11/8111068c8d4aae0d7bbbc2d8c7ff7453.png"}
                        className={s.img1}/>
                </div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollows(u.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
                            props.follows(u.id)
                        }}>follow</button>
                    }
                </span>
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



 export default UsersOLD