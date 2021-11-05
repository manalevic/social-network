import s from './Post.module.css'
import UserImage from '../../../../assets/img/user.jpg'
import LikeImage from "../../../../assets/img/svg/like-ico.svg"
import clickedLikeImage from "../../../../assets/img/svg/like-ico-clicked.svg"
import { NavLink } from 'react-router-dom'
import { useState } from 'react'


const Post = (props) => {

    let [liked, setLiked] = useState(false)



    const onLike = () => {
        if (liked) {
            setLiked(false) 
            props.unlikeThunk(props.id) 
        } else if (!liked){
            setLiked(true)  
            props.likeThunk(props.id)
        }
    }

    return (
        <div className={s.post}>
            <NavLink to='/profile'> 
                {props.avatar != null ? <img className={s.avatar} src={props.avatar} alt=""></img> : <img src={`${UserImage}`} className={s.avatar} alt='smallImage' />}
            </NavLink>
            <span className={s.message}>{props.message}</span>
            <div className={s.likes} onClick={onLike}>
                {liked ? <img className={s.likesImage} src={`${clickedLikeImage}`} alt=""></img> : <img className={s.likesImage} src={`${LikeImage}`} alt=""></img>}
                <div className={s.likesMessage}>{props.likesCount}</div>
            </div>

        </div>
    )

}

export default Post