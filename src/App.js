import React, {Suspense} from 'react';
import './App.css'; //файл в этом же каталоге
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Navbar/Friends/Friends";


import MusicContainer from "./components/Music/MusicContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reduser";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(()=> import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(()=>import("./components/Users/UsersContainer"))


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialize){

            return <Preloader />
        }
        return (

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <Friends/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}
                        />
                        <Route path='/profile/:userId?' render={() =>
                        {return <Suspense fallback={<div>Loading...</div>}> <ProfileContainer/></Suspense>
                        }}
                        /> {/*передаем в Profile в props массив posts, который сейчас в index.js*/}
                        <Route path='/users' render={() =>
                        {return <Suspense fallback={<div>Loading...</div>}><UsersContainer/></Suspense>
                        }}
                        />
                        <Route path='/news' component={News}/>
                        <Route path='/music' render={() => <MusicContainer/>}/>
                        <Route path='/setting' component={Setting}/>
                        <Route path='/login' component={Login}/>


                    </div>
                    {/*<Profile />*/}
                </div>
        
        );
    }
}

const mapStateToProps=(state)=>({
    initialize: state.app.initialize
})

let AppContainer = compose(withRouter, connect(mapStateToProps,{initializeApp}))(App);

let SamuraiJSApp = (props) =>{
   return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp
