import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";
import Redirect from "react-router-dom/es/Redirect";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId){ // если userId отсутствует то мы присваиваем ей значение 2
            userId = 2;
        }
        this.props.getUserProfile(userId)
}



    render(){
        if(!this.props.isAuth) return <Redirect to='/login'/>
 return (
       <Profile {...this.props} profile={this.props.profile}/>
    );
}}

let mapStateToProps =(state)=> {
    return{
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent) ;