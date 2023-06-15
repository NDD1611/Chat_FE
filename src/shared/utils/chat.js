import store from '../../store/store'
import { setMessages } from '../../store/actions/chatAction'

export const updateDirectChatHistoryIfActive = (data) => {
    console.log(data)
    const { participants, messages } = data
    const receiverId = store.getState().chat?.chosenChatDetails?.id
    const userId = store.getState().auth?.userDetails?._id

    if (receiverId && userId) {
        const userInConversation = [receiverId, userId]

        updateChatHistoryIsSameConversationActive({
            participants,
            userInConversation,
            messages
        })
    }
}

const updateChatHistoryIsSameConversationActive = ({
    participants,
    userInConversation,
    messages
}) => {
    const result = participants.every((participantId) => {
        return userInConversation.includes(participantId)
    })

    if (result) {
        store.dispatch(setMessages(messages))
    }
}