import React from 'react'
import { ADD_COMPOSITION_ActionCreator } from "../../redux/music-reducer";
import Music from "./Music";
import {connect} from "react-redux";





let mapStateToProps =()=>{
    return{

    }
}
let mapDispatchToProps =(dispatch)=> {
    return{
        Add_Comp: (text)=>  {
            dispatch(ADD_COMPOSITION_ActionCreator(text))
        }
    }
}


const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)

export default MusicContainer;