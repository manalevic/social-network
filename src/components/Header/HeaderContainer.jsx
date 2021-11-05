import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logoutThunk} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    
    render() {
    return (
        <Header {...this.props}/>
    )
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.usersId,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {logoutThunk}) (HeaderContainer)