import React from "react"
import s from "./Users.module.css"
import UserImage from './../../assets/img/user.jpg'
import { NavLink } from "react-router-dom"
import Paginator from "./Paginator"

const Users = (props) => {

    return <div className={s.wrapper}>
        <Paginator setPortionNumberThunk={props.setPortionNumberThunk} currentPage={props.currentPage}
            onPageChanged={props.onPageChanged} totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize} currentPortionNumber={props.currentPortionNumber} />
        {/* {props.isLoading ? <Preloader /> : null} */}
        {
            props.users.map(u => <div key={u.id} className={s.userWrapper}>
                <div className={s.user}>
                    <NavLink to={`/profile/${u.id}`} className={s.icoWrapper}>
                        <img className={s.ico} alt="" src={u.photos.small != null ? u.photos.small : UserImage}></img>
                    </NavLink>

                    <div className={s.info}>
                        <div className={s.desc}>
                            <div className={s.fullName}>{u.name}</div>
                            <div className={s.status}>{u.status}</div>
                            {u.followed
                                ? <button disabled={props.followingUsers.some(id => id === u.id)} className={s.button} onClick={() => {
                                    props.unfollowThunk(u.id)
                                }}>Unfollow</button>

                                : <button disabled={props.followingUsers.some(id => id === u.id)} className={s.button} onClick={() => {
                                    props.followThunk(u.id)
                                }}>Follow</button>}
                        </div>
                        <div className={s.location}>
                            {/* <div className={s.city}>{u.location.city}</div> */}
                            {/* <div className={s.country}>{u.location.country}</div> */}
                        </div>
                    </div>
                </div>
            </div>)
        }

    </div>
}

export default Users


