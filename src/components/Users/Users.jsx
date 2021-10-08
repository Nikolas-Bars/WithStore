import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from './Users.module.css'

const Users = ({currentPage, onPageChange, totalUserCount, pageSize, users, ...props}) => {
    return <div>


        <Paginator currentPage={currentPage} onPageChange={onPageChange} totalItemsCount={totalUserCount}
                   pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     followingProgress={props.followingProgress}
                                     unfollowThunk={props.unfollowThunk}
                                     followThunk={props.followThunk}/>)
            }
        </div>
    </div>

}


export default Users