import React from "react"
import { useEffect } from "react";
import { useState } from "react"
import s from './ProfileInfo.module.css'


const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMod = () => {
       setEditMode(true)
    }

    const deactivateEditMod = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    
        return (
            <div className={s.status} >
                {editMode ?
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMod} value={status} ></input>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={activateEditMod} >{props.status || 'set status'}</span>
                    </div>}
            </div>
        )
    
}

export default ProfileStatus