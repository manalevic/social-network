import Post from "./Post/Post"
import s from './MyPosts.module.css'
import React from "react"
import { reduxForm, reset } from "redux-form"
import { Field } from "redux-form"
import { maxLengthCreator, required } from "../../../validators/validators"
import { Element } from "../../common/FormControls/FormControls"
import UserImage from '../../../assets/img/user.jpg'

let maxLength50 = maxLengthCreator(50)

const Textarea = Element("textarea")

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.textarea} name={'postElement'} placeholder={"Anything new?"} component={Textarea} validate={[required, maxLength50]} ></Field>
            <button >Add post</button>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({ form: 'posts' })(MyPostsForm)


const MyPosts = (props) => {
    
    const onSubmit = (formData, dispatch) => {
        props.addPostThunk(formData.postElement)
        dispatch(reset("posts"))
    }

    let postsElements = props.postsData.map((post) => 
    <Post avatar={props.profile !== null ? props.profile.photos.small : null} key={post.id} id={post.id} message={post.message} likesCount={post.likesCount} likeThunk={props.likeThunk} unlikeThunk={props.unlikeThunk}/>)
    
    return (
        <div className={s.postsWrapper}>
            <div className={s.posts}>
                <div className={s.addPostContainer}>
                    {props.profile !== null && props.profile.photos.small !== null ? <img className={s.avatar} src={props.profile.photos.small} alt=""></img> : <img src={`${UserImage}`} className={s.avatar} alt='' />}
                    <MyPostsReduxForm onSubmit={onSubmit} />
                </div>
                
                {postsElements}
            </div>
        </div>
    )
}




export default MyPosts





        // <div className={s.posts}>
        //     <h3> My Posts </h3>
        //     <textarea ref={newPostElement} value={props.newPostText} onChange={onChangeNewPostText}></textarea>
        //     <button onClick={onAddPost}>Add post</button>
        //     {postsElements}
        // </div>