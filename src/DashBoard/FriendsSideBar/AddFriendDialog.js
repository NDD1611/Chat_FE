
import { useState, useEffect } from 'react'
import { validateEmail } from '../../shared/utils/validators'
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Typography } from '@mui/material'
import InputWithLabel from '../../shared/components/InputWithLabel'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import { getActions } from '../../store/actions/friendsActions'
import { connect } from 'react-redux'

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => { }
}) => {

    const [mail, setMail] = useState('')
    const [isFormValid, setIsFormValid] = useState('')

    const handleSendInvitation = () => {
        sendFriendInvitation({
            targetMailAddress: mail
        }, handleCloseDialog)
    }

    const handleCloseDialog = () => {
        closeDialogHandler()
        setMail('')
    }

    useEffect(() => {
        setIsFormValid(validateEmail(mail))
    }, [mail, isFormValid])

    return (
        <>
            < Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
            >
                <DialogTitle>
                    <Typography>Invite a Friend</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            Enter E-mail address of friend with you would like to invite
                        </Typography>
                        <InputWithLabel
                            label="E-Mail"
                            type="text"
                            value={mail}
                            setValue={setMail}
                            placeholder='Enter e-mail address'
                        >
                        </InputWithLabel>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <CustomPrimaryButton
                        onClick={handleSendInvitation}
                        disabled={!isFormValid}
                        label="Send"
                        additionalStyles={{
                            marginLeft: '15px',
                            marginRight: '15px',
                            marginBottom: '10px'
                        }}
                    >
                    </CustomPrimaryButton>
                </DialogActions>
            </Dialog>
        </>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(AddFriendDialog);