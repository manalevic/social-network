import React from 'react'
import s from './ProfileInfo.module.css'



const ProfileData = (props) => {

    let contacts = 0

    Object.keys(props.profile.contacts).map(key => {
        if (props.profile.contacts[key] !== null && props.profile.contacts[key] !== "") {
            contacts += 1
        }
        return null
    })


    return (

        <div className={s.profileData} >
            <div className={s.mainInfo}>
                <div className={s.dataItem}>
                    <span>About Me:</span> <div>{props.profile.aboutMe}</div>
                </div>
                <div className={s.dataItem}>
                    <span>Looking for a job:</span> <div>{props.profile.lookingForAJob ? "yes" : "no"}</div>
                </div>
                {props.profile.lookingForAJob &&
                    <div className={s.dataItem}>
                        <span>Looking for a job description:</span>  <div>{props.profile.lookingForAJobDescription}</div>
                    </div>}
            </div>

            <div className={s.contacts}>

                <div className={s.dataItem}>
                    {contacts > 0 ?
                        Object.keys(props.profile.contacts).map(key => {
                                if (props.profile.contacts[key] !== null && props.profile.contacts[key] !== "") {
                                    return <Contact contactTitle={key} key={key} contactValue={props.profile.contacts[key]} />
                                }
                                return null
                            })
                        : <span className={s.noContactInfo}>No contact information</span>
                    }
                </div>

            </div>


        </div>
    )
}

const Contact = (props) => {
    return <div className={s.contact}><span>{props.contactTitle}:</span> <a href={props.contactValue}> {props.contactValue} </a></div>


}

export default ProfileData

