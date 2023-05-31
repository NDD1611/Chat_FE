
import { styled } from '@mui/system'
import FriendsListItem from './FriendsListItem'
import { connect } from 'react-redux'

const MainContainer = styled('div')({
    flexGrow: 1,
    width: "100%"
})

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    friends.forEach(f => {
        const isUserOnline = onlineUsers.find((user) => user.userId === f.id)
        f.isOnline = isUserOnline ? true : false
    })
    return friends
}

function FriendsList({ friends, onlineUsers }) {
    return (
        <MainContainer>
            {
                checkOnlineUsers(friends, onlineUsers).map((f) => {
                    return (
                        <FriendsListItem
                            id={f.id}
                            username={f.username}
                            key={f.id}
                            isOnline={f.isOnline}
                        >
                        </FriendsListItem>
                    )
                })
            }
        </MainContainer>
    )
}
const mapStoreStateToProps = ({ friends }) => {
    return {
        ...friends
    }
}
export default connect(mapStoreStateToProps)(FriendsList);