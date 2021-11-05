import { connect } from "react-redux";
import { getUsersThunk, onPageChangedThunk, followThunk, unfollowThunk, setPortionNumberThunk } from "../../redux/users-reducer";
import Users from './Users'
import React from "react"
import { compose } from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.onPageChangedThunk(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingUsers={this.props.followingUsers}
                followThunk={this.props.followThunk}
                unfollowThunk= {this.props.unfollowThunk}
                portionSize= {this.props.portionSize}
                isLoading= {this.props.isLoading}
                setPortionNumberThunk= {this.props.setPortionNumberThunk}
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
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingUsers: state.usersPage.followingUsers,
        currentPortionNumber: state.usersPage.currentPortionNumber
    }
}

export default compose(
    connect(mapStateToProps, { getUsersThunk, onPageChangedThunk, followThunk, unfollowThunk, setPortionNumberThunk})
)(UsersContainer)