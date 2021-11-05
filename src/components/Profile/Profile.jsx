import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo {...props}/>
            <MyPosts postsData = {props.postsData} addPostThunk={props.addPostThunk} profile={props.profile} likeThunk={props.likeThunk} unlikeThunk={props.unlikeThunk}/>
            
        </div>
    )
}

export default Profile