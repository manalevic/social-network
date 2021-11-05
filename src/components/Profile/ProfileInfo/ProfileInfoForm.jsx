import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './ProfileInfo.module.css'


const ProfileInfoForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.formInfo}>
                <div className={s.formItem}>
                    <span>Full name:</span> <Field placeholder={'Full name'} name={'fullName'} component={'input'} />
                </div>
                <div className={s.formItem}>
                    <span>About Me:</span> <Field placeholder={'About Me'} name={'aboutMe'} component={'input'} />
                </div>
                <div className={s.formItem}>
                    <span>Looking for a job:</span> <Field type={"checkbox"} name={'lookingForAJob'} component={'input'} />
                </div>
                <div className={s.formItem}>
                    <span>Looking for a job description:</span> <Field placeholder={'Looking for a job description'} name={'lookingForAJobDescription'} component={'textarea'} />
                </div>
            </div>
            <div className={s.formContacts}>

                {Object.keys(props.profile.contacts).map(key => {
                    return <Contact contactTitle={key} key={key} contactValue={props.profile.contacts[key]} />
                })}

            </div>
            {props.error && <div className={s.error}>{props.error}</div>}
            <button >save</button>
        </form>

    )

}

const Contact = (props) => {
    return <div className={s.formContact}><span>{props.contactTitle}:</span> <Field placeholder={`Your ${props.contactTitle}`} name={`contacts.${props.contactTitle}`} component={'input'} /> </div>
}

const ProfileInfoReduxForm = reduxForm({ form: 'editProfile' })(ProfileInfoForm)

export default ProfileInfoReduxForm