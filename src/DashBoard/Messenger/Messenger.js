
import React from 'react'
import { styled } from '@mui/system'
import { connect } from 'react-redux'
import WelcomeMessage from './WelcomeMessage'
import MessagerContent from './MessagerContent'

const MainContainer = styled('div')({
    flexGrow: 1,
    marginTop: '48px',
    display: 'flex',
    backgroundColor: '#36393f'
})

const Messenger = ({ chosenChatDetails }) => {
    return (
        <MainContainer>
            {
                !chosenChatDetails ? <WelcomeMessage /> : <MessagerContent chosenChatDetails={chosenChatDetails} />
            }
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat
    }
}

export default connect(mapStoreStateToProps, null)(Messenger);