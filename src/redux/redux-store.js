import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReduser from "./users-reducer";
import authReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reduser";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    musicComposition: musicReducer,
    sideBar: sideBarReducer,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers,  composeEnhancers(applyMiddleware(thunkMiddleware)
));


export default store