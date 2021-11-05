import { Redirect, Route, Switch, withRouter } from 'react-router';
import s from './App.module.css';
import Music from './components/Music/Music';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React from 'react';
import { initializeThunk } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const FriendsContainer = React.lazy(() => import("./components/Friends/FriendsContainer"))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunk()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
        <div className={s.wrapper}>
            <HeaderContainer />

          <div className={s.wrapper__main}>
            <Nav />
            <div className={s.content}>
              <React.Suspense fallback={<Preloader />}>
                <Switch>
                  <Route path='/dialogs' render={() => <DialogsContainer />} />
                  <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                  <Route path='/news' render={News} />
                  <Route path='/music' render={Music} />
                  <Route path='/friends' render={() => <FriendsContainer />} />
                  <Route path='/settings' render={() => <Settings />} />
                  <Route path='/users' render={() => <UsersContainer />} />
                  <Route path='/login' render={() => <Login />} />
                  <Redirect from='/' to='/profile' />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </div>
      );
    }
  }


}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, { initializeThunk }))(App)