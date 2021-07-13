import React from 'react'
import s from './Music.module.css'
import {ADD_COMPOSITION_ActionCreator} from "../../redux/music-reducer";

const Music = (props) => {

    let musicLink = React.createRef();

    let addCompositionElement =()=>{
        let text = musicLink.current.value;
        props.dispatch(ADD_COMPOSITION_ActionCreator(text));
    }


    return (
        <div className={s.music}>
            <p>Самые популярные хиты последних месяцев!</p>
            <textarea ref={musicLink}>Напишите вашу любимую композицию</textarea>
            <button onClick={addCompositionElement}>send</button>
        </div>
    )
}

export default Music;