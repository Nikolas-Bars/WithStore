import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks =(props)=> {


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateMode = () =>{
        setEditMode(true)
    }
    const deActivateMode =()=>{
        setEditMode(false)
        props.updateStatusThunk(status)
    }
    const onStatusChanged =(e)=>{
        setStatus(e.currentTarget.value)
    }


        return (
    <div>

        {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{props.status || '-------'}</span>
            </div>
        }
        {editMode &&
        <div>
            <input autoFocus={true} onBlur={deActivateMode} onChange={onStatusChanged}  value={status}/>
        </div>
        }

    </div>
        )
    }


export default ProfileStatusWithHooks