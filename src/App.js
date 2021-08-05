import React from 'react';
import './App.css'; //файл в этом же каталоге
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Navbar/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MusicContainer from "./components/Music/MusicContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar/>
                <Friends />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/> {/*передаем в Profile в props массив posts, который сейчас в index.js*/}
                    <Route path='/users' render={() => <UsersContainer />}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' render={ () => <MusicContainer />} />
                    <Route path='/setting' component={Setting} />
                </div>
                {/*<Profile />*/}
            </div>
        </BrowserRouter>
    );
}


export default App;


