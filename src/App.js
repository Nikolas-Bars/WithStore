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
import {addPost, upMessageForDialogPage} from "./redux/state";
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
                    <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}
                                                                  newMessageInTextArea={props.state.dialogsPage.newMessageInTextArea}
                                                                  upNewMessageInTextArea={props.upNewMessageInTextArea}
                                                                  upMessageForDialogPage={props.upMessageForDialogPage} />}/>
                    <Route path='/profile' render={() => <Profile upText={props.upText}
                                                                  state={props.state.profilePage}
                                                                  addPost={props.addPost} />}/> {/*передаем в Profile в props массив posts, который сейчас в index.js*/}

                    <Route path='/news' component={News}/>
                    <Route path='/music' render={ () => <Music addComposition={props.addComposition}/>}/>
                    <Route path='/setting' component={Setting}/>
                </div>
                {/*<Profile />*/}
            </div>
        </BrowserRouter>
    );
}


export default App;


