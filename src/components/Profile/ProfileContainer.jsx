import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatusThunk, getUserProfile, savePhoto, saveProfile, updateStatusThunk} from "../../redux/profile-reducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile(){

        let userId = this.props.match.params.userId
        if (!userId){ //
            userId = this.props.authorizedUserId
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile()
}

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(this.props.match.params.userId !== prevProps.match.params.userId){
        this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     savePhoto={this.props.savePhoto} // savePhoto - это санка
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatusThunk={this.props.updateStatusThunk}
                     saveProfile={this.props.saveProfile}/>

        );
    }
}

let mapStateToProps =(state)=> {
    return{
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect (mapStateToProps, {getUserProfile, getStatusThunk, updateStatusThunk, savePhoto, saveProfile}), withRouter)(ProfileContainer);