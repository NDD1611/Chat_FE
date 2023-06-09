
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import AddFriendDialog from './AddFriendDialog'
import { useState } from 'react'

const additionalStyles = {
    marginTop: '10px',
    marginLeft: '5px',
    width: '80%',
    height: '30px',
    background: '#3ba55d'
}

const AddFriendButton = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleOpenAddFriendDialog = () => {
        setIsDialogOpen(true)
    }
    const closeDialogHandler = () => {
        setIsDialogOpen(false)
    }
    return (
        <>
            <CustomPrimaryButton
                additionalStyles={additionalStyles}
                label="Add Friend"
                onClick={handleOpenAddFriendDialog}
            />
            <AddFriendDialog
                isDialogOpen={isDialogOpen}
                closeDialogHandler={closeDialogHandler}
            >

            </AddFriendDialog>
        </>
    )
}

export default AddFriendButton;