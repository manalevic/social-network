import { connect } from 'react-redux'
import { setProfileThunk, setStatusThunk, updateStatusThunk, setPhotoThunk, saveProfileThunk, addPostThunk, likeThunk, unlikeThunk} from "../../redux/profile-reducer";
import { followThunk, unfollowThunk } from "../../redux/users-reducer";
import React from 'react'
import Profile from './Profile'
import { withRouter } from 'react-router';

import { compose } from 'redux';



class ProfileContainer extends React.Component {

    DoingProfileStuffFc() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push("/login")
                return
            }
        }
        this.props.setProfileThunk(userId)
        this.props.setStatusThunk(userId)
    
    }

    componentDidMount() {
        this.DoingProfileStuffFc()
    }
    
    componentDidUpdate(prevP, prevS) {
        if (this.props.match.params.userId !== prevP.match.params.userId) {
            this.DoingProfileStuffFc()
        }
        
    }

    render() {
        return (
            <div>
                <Profile {...this.props} isOwner={!this.props.match.params.userId} />
            </div>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        users: state.usersPage.users,
        postsData: state.profilePage.postsData

    }
}

export default compose(
    connect(mapStateToProps, { setProfileThunk, setStatusThunk, updateStatusThunk, setPhotoThunk, saveProfileThunk, followThunk, unfollowThunk, addPostThunk, likeThunk, unlikeThunk}),
    withRouter

)(ProfileContainer)