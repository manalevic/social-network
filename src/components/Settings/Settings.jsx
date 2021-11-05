import { useState } from "react";
import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { setPhotoThunk } from "../../redux/profile-reducer";
import s from './Settings.module.css'


const Settings = (props) => {

    let [chosenPhoto, choosePhoto] = useState(null)
    let [isPhoto, setIsPhoto] = useState(false)
    let [buttonClicked, setButtonClicked] = useState(false)

    let onChoosePhoto = (e) => {
        if (e.target.files.length) {
            setIsPhoto(true)
            choosePhoto(e.target.files[0])
        }
        
    }

    let onSetPhoto = () => {
        setButtonClicked(true)
        props.setPhotoThunk(chosenPhoto)
    }

    return (
        <div className={s.settings}>
            <h1 className={s.title}>Settings</h1>
            <div className={s.changePhoto}>
                <h2 className={s.title}>1. Change your avatar</h2>
                <div className={s.inputBlock}>
                    <input className={s.input} type={'file'} id="changePhotoInput"  onChange={onChoosePhoto} hidden />
                    <label className={s.inputWrapper} htmlFor ="changePhotoInput">
                        {isPhoto ? <div className={s.fileInfo}>{chosenPhoto.name}</div> : <div className={s.fileInfo}>No selected file</div>} 
                        <div className={s.choosegFileButton} >Choose file</div>
                    </label>
                    <button className={s.button} onClick={onSetPhoto} disabled={props.isLoading}>Change Photo</button>
                    {!props.isLoading && buttonClicked && "✅"}
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isLoading: state.profilePage.isLoading
    }
}

export default compose(
    connect(mapStateToProps, { setPhotoThunk }),
    withAuthRedirect)(Settings)