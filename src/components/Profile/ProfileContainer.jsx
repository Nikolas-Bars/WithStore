import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatusThunk, getUserProfile, updateStatusThunk} from "../../redux/profile-reducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId){ // если userId отсутствует то мы присваиваем ей значение 2
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatusThunk(userId)
}



    render(){
         return (
       <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
    );
}}

let mapStateToProps =(state)=> {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect (mapStateToProps, {getUserProfile, getStatusThunk, updateStatusThunk}), withRouter)(ProfileContainer) ;