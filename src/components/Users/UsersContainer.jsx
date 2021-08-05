import React from "react";
import {connect} from "react-redux";
import {
    follows, setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollows
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";



class UsersAPI extends React.Component {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setUsers(response.data.items)
        })}

    onPageChange = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render(){

        return <>
            {this.props.IsFetching ? <Preloader /> : null }
                <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChange={this.onPageChange}
                      users={this.props.users}
                      unfollows={this.props.unfollows}
                      follows={this.props.follows}/>
                </>

    }
}


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        IsFetching: state.usersPage.IsFetching

    }
}
/* let mapDispatchToProps

        follows: followAC
        unfollows: unfollowAC
        setUsers: setUsersAC
        setCurrentPage: setCurrentPageAC
        setTotalUsersCount: setTotalUsersCountAC
        toggleIsFetching:toggleIsFetchingAC
        }
    }
} */

export default connect(mapStateToProps, {
    follows,
    unfollows,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersAPI)