import React from 'react';
import s from "./Header.module.css"
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reduser";
import * as axios from "axios";
import {userAPI} from "../../API/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()


       /* userAPI.pageMe()
        .then(response => {

            if (response.data.resultCode === 0) {
                let {email, id, login} = response.data.data
                this.props.setUserData(email, id, login);
            }
            })*/}


    render(){
    return  (
        <Header {...this.props}/>
    );
}
}

let mapStateToProps =(state)=> {
 return {
     isAuth: state.auth.isAuth,
     login: state.auth.login
    }
 }

export default connect (mapStateToProps, {getAuthUserData})(HeaderContainer);