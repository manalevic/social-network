import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { addMessageThunk } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"



let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    }
}

export default compose(
    connect(mapStateToProps, { addMessageThunk }),
    withAuthRedirect
)(Dialogs)