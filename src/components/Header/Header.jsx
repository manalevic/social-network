import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Header = (props) => {

    let [loginMode, setLoginMode] = useState(false)



    let onLogin = () => {
        if (loginMode) {
            setLoginMode(false)
        } else {
            setLoginMode(true)
        }
    }

    return (
        <header className={s.header}>
            <div className={s.content}>
                <NavLink to={'/profile'} className={s.logoBlock}>
                    <img className={s.logo} src='http://cdn.onlinewebfonts.com/svg/img_176857.png' alt="" />
                    <span>panda</span>
                </NavLink>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div> <span onClick={onLogin} >{props.login}</span>  {loginMode && <div> <div className={s.loginModeMenu} onClick={props.logoutThunk}>Logout</div> </div>} </div>
                        : <NavLink to={'/login'}>Sign in</NavLink>}

                </div>
            </div>
        </header>
    )
}

export default Header

