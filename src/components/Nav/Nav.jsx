import { NavLink } from "react-router-dom"
import s from './Nav.module.css'


const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to='/profile' className={s.link} activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/users'className={s.link} activeClassName={s.active}>Users</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/friends' className={s.link} activeClassName={s.active}>Friends</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs'className={s.link} activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings' className={s.link} activeClassName={s.active}>Settings</NavLink>
                </li>
                
            </ul>
            
        </nav>
    )
}

export default Nav