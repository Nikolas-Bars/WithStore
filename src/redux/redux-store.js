import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import musicReducer from "./music-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";
import usersReduser from "./users-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    musicComposition: musicReducer,
    sideBar: sideBarReducer,
    usersPage: usersReduser
});

let store = createStore(redusers);

window.stort = store

export default store