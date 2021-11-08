import React, { useEffect, useState } from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import UserImage from '../../../assets/img/user.jpg'
import ProfileStatus from './ProfileStatus'
import ProfileData from './ProfileData'
import ProfileInfoReduxForm from './ProfileInfoForm'


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [isFollowed, setIsFollowed] = useState(false);
    
    let condition = false
    
    props.users.map(u => {
        if (u.id === +props.match.params.userId) {
            condition = true
        }
    })
  
    useEffect(() => {
        setIsFollowed(condition)
    },[condition])

    const onEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData) => {
        props.saveProfileThunk(formData).then(() => {
            setEditMode(false)
        })
    }

    if (!props.profile) {
        return <Preloader />
    }

    const onFollow = () => {
        props.followThunk(props.match.params.userId)
        setIsFollowed(true)
    }

    const onUnfollow = () => {
        props.unfollowThunk(props.match.params.userId)
        setIsFollowed(false)
    }
    
    return (

        <div className={s.info}>

            <div className={s.desc}>
                <div className={s.avatar}>
                    {props.profile.photos.small != null ? <img src={props.profile.photos.small} className={s.img} alt='smallImage'></img> : <img src={`${UserImage}`} className={s.img} alt='smallImage' />}
                    {props.isOwner && <button className={s.editButton} onClick={onEditMode} disabled={editMode}>Edit profile</button>}
                    {!props.isOwner &&  isFollowed && <button className={s.followButton} onClick={onUnfollow} >Unfollow</button>}

                    
                    {!props.isOwner &&  !isFollowed && <button className={s.followButton} onClick={onFollow} >Follow</button>}
                </div>
                <div className={s.info}>
                    <div className={s.name__wrapper}>
                        <div className={s.name}>{props.profile.fullName}</div>
                        <ProfileStatus {...props} />
                    </div>
                    {editMode ? <ProfileInfoReduxForm initialValues={props.profile} onSubmit={onSubmit} {...props} /> : <ProfileData {...props} />}
                </div>


            </div>
        </div>
    )
}

export default ProfileInfo