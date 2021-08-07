import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReduser from "./users-reducer";
import authReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    musicComposition: musicReducer,
    sideBar: sideBarReducer,
    usersPage: usersReduser,
    auth: authReduser
});

let store = createStore(redusers,applyMiddleware(thunkMiddleware));

window.stort = store

export default store