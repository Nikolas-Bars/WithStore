import preloader from "../../../img/preloader.gif";
import React from "react";
import s from './Preloader.module.css'

const Preloader = (props) => {
    return(
        <div>
            <img src={preloader} />
        </div>
    )
}

export default Preloader