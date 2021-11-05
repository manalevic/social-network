import { NavLink } from "react-router-dom"
import s from "./../Dialogs.module.css"


const DialogItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to= {"/dialogs/" + props.id} className={s.link} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem