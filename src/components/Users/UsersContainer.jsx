import React from "react";
import {connect} from "react-redux";
import {
    FakeCreator,
    follow,
    getUsersCreator, setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching, unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers, getUsersSuperSelector
} from "../../redux/users-selectors";




class UsersAPI extends React.Component {


    componentDidMount() {

        let {currentPage, pageSize} = this.props
        this.props.getUsersThunk(currentPage, pageSize)


    }

    onPageChange = (pageNumber) =>{
        let {pageSize} = this.props
        this.props.getUsersThunk(pageNumber, pageSize)

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
    console.log('jopa')
    return {
        users: getUsers(state),
        //users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        IsFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}


export default compose(connect(mapStateToProps, {

    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunk: getUsersCreator,
    unfollowThunk: unfollow,
    followThunk: follow,


}))(UsersAPI)