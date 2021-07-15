import React from 'react'
import s from './Music.module.css'
import {ADD_COMPOSITION_ActionCreator} from "../../redux/music-reducer";
import Music from "./Music";
import storeContext from "../../storeContext";

debugger


const MusicContainer = (props) => {
    return <storeContext.Consumer>{
        (store)=> {
            let ADD_COMP = (text) => {
                let action = ADD_COMPOSITION_ActionCreator(text)
                store.dispatch(action);
            }

            return (
                <Music Add_Comp={ADD_COMP}/>
            )
        }
    }</storeContext.Consumer>
}

export default MusicContainer;