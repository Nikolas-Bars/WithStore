import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsersCreator, setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";




class UsersAPI extends React.Component {


    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)

      /*  toggleIsFetching(true)
        userAPI.getUsers(currentPage, pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setUsers(data.items)
        }) */

    }

    onPageChange = (pageNumber) =>{
        this.props.getUsersThunk(pageNumber, this.props.pageSize)

        /*this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })*/
    }

    render(){

        return <>
            {this.props.IsFetching ? <Preloader /> : null }
                <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChange={this.onPageChange}
                      users={this.props.users}
                       followingProgress={this.props.followingProgress}
                       unfollowThunk={this.props.unfollowThunk}
                       followThunk={this.props.followThunk}
                       isAuth={this.props.isAuth}/>
                </>

    }
}


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        IsFetching: state.usersPage.IsFetching,
        followingProgress: state.usersPage.followingProgress,
        isAuth: state.auth.isAuth
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

    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunk: getUsersCreator,
    unfollowThunk: unfollow,
    followThunk: follow,


})(UsersAPI)