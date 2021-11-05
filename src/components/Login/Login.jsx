import { loginThunk } from "../../redux/auth-reducer";
import { Field, reduxForm } from 'redux-form'
import s from './Login.module.css'
import { connect } from "react-redux";
import { Element } from "../common/FormControls/FormControls";
import { required } from "../../validators/validators";
import { Redirect } from "react-router";
import style from './../common/FormControls/FormControls.module.css'


const Input = Element("input")


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.wrapper}>
            <Field placeholder={'Email'} name={"email"} component={Input} validate={[required]}></Field>
            <Field placeholder={'Password'} name={"password"} component={Input} validate={[required]} type="password"></Field>
            <div className={s.rememberMe}>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"} ></Field> remember me
            </div>
            <div className={style.errorMessage}>{props.error}</div>
            {props.captchaUrl && <img src={props.captchaUrl} alt=""></img>}
            {props.captchaUrl && <Field placeholder={'Captcha'} name={"captcha"} component={Input} validate={[required]}></Field>}
            <button >Sign in</button>

        </form>
    )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return (
            <Redirect to={`/profile/`} />
        )
    } else {
        return (<div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
        </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, { loginThunk })(Login)