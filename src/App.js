import React from 'react';
import './App.css'; //файл в этом же каталоге
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Navbar/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reduser";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialize){
            debugger
            return <Preloader />
        }
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <Friends/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() =>
                            <ProfileContainer/>}/> {/*передаем в Profile в props массив posts, который сейчас в index.js*/}
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' render={() => <MusicContainer/>}/>
                        <Route path='/setting' component={Setting}/>
                        <Route path='/login' component={Login}/>
                    </div>
                    {/*<Profile />*/}
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps=(state)=>({
    initialize: state.app.initialize
})


export default compose(withRouter, connect(mapStateToProps,{initializeApp}))(App);


