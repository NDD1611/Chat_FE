
import { Button, Typography } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import OnlineIndocator from "./OnlineIndocator";
import { chatTypes, getActions } from "../../../store/actions/chatAction";
import { connect } from "react-redux";

const FriendsListItem = ({ username, id, isOnline, setChosenChatDetails }) => {

    const handleChosenActiveConversation = () => {
        setChosenChatDetails({ id: id, name: username }, chatTypes.DIRECT)
    }

    return (
        <Button
            onClick={handleChosenActiveConversation}
            style={{
                width: '100%',
                height: '42px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textTransform: 'none',
                color: 'black',
                position: 'relative'
            }}
        >
            <Avatar username={username} />
            <Typography
                style={{
                    marginLeft: '7px',
                    fontWeight: '700',
                    color: '#8e9297'
                }}
                variant="subtitle1"
                align="left"
            >
                {username}
            </Typography>
            {isOnline && <OnlineIndocator />}
        </Button>
    )
}

const mapActionToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionToProps)(FriendsListItem);