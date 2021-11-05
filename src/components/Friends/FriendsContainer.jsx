import { connect } from "react-redux";
import { getUsersThunk, onPageChangedThunk, followThunk, unfollowFriendsThunk, setFriendsPortionNumberThunk} from "../../redux/users-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import React from "react"
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import Friends from "./Friends";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, true)
    }

    onPageChanged = (pageNumber) => {
        this.props.onPageChangedThunk(pageNumber, this.props.pageSize, true)
    }
    

    render() {
        return <>
            {this.props.isLoading ? <Preloader /> : null}
            <Friends totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingUsers={this.props.followingUsers}
                followThunk={this.props.followThunk}
                unfollowFriendsThunk= {this.props.unfollowFriendsThunk}
                portionSize= {this.props.portionSize}
                getUsersThunk={this.props.getUsersThunk}
                setPortionNumberThunk= {this.props.setFriendsPortionNumberThunk}
                currentPortionNumber={this.props.currentPortionNumber}
            />

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.friendsCurrentPage,
        isLoading: state.usersPage.isLoading,
        followingUsers: state.usersPage.followingUsers,
        currentPortionNumber: state.usersPage.friendsCurrentPortionNumber
    }
}

export default compose(
    connect(mapStateToProps, { getUsersThunk, onPageChangedThunk, followThunk, unfollowFriendsThunk,setFriendsPortionNumberThunk}),
    withAuthRedirect
)(FriendsContainer)