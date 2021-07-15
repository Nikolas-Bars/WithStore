import React from 'react'
import s from './Music.module.css'


const Music = (props) => {

    let musicLink = React.createRef();

    let addCompositionElement =()=>{
        let text = musicLink.current.value;
        props.Add_Comp(text)
        musicLink.current.value = '';

    }


    return (
        <div className={s.music}>
            <p>Самые популярные хиты последних месяцев!</p>
            <textarea ref={musicLink} placeholder='Напишите вашу любимую композицию' />
            <button onClick={addCompositionElement}>send</button>
        </div>
    )
}

export default Music;