import React from 'react';
import './App.css'; //файл в этом же каталоге
// import Header from './Header';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Navbar/Friends/Friends";
import store, {addPost, upMessageForDialogPage} from "./redux/state";
import {upText} from "./redux/state";


const App = (props) => {

debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Friends />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}
                                                                  newMessageInTextArea={props.state.dialogsPage.newMessageInTextArea}
                                                                  dispatch={props.dispatch} />}/>
                    <Route path='/profile' render={() => <Profile
                        dispatch={props.dispatch}
                        state={props.state.profilePage}/>}/> {/*передаем в Profile в props массив posts, который сейчас в index.js*/}

                    <Route path='/news' component={News}/>
                    <Route path='/music' render={ () => <Music dispatch={props.dispatch}/>}/>
                    <Route path='/setting' component={Setting}/>
                </div>
                {/*<Profile />*/}
            </div>
        </BrowserRouter>
    );
}


export default App;


