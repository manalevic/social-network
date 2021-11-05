import React from "react"
import { Field, reduxForm, reset } from "redux-form"
import { maxLengthCreator, required } from "../../validators/validators"
import { Element } from "../common/FormControls/FormControls"
import DialogItem from "./DialogItem/DialogItem"
import s from "./Dialogs.module.css"
import MessageItem from "./MessageItem/MessageItem"

const Textarea = Element("textarea")

let maxLength50 = maxLengthCreator(50)

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((item) => <DialogItem  key={item.id} name={item.name} id={item.id} />)
    let messagesElements = props.messagesData.map((item) => <MessageItem key={item.id} message={item.message} />)

    const addNewMessage = (formData, dispatch) => {
        props.addMessageThunk(formData.newTextMessage)
        dispatch(reset("dialogsForm"))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.list}>
                {dialogsElements}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <DialogsReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder="Write a message" component={Textarea} validate={[required,maxLength50]} name="newTextMessage"></Field>
            <button>Add message</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogsForm'}) (DialogsForm)

export default Dialogs

