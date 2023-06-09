
import React, { useState, useEffect } from 'react'
import { Typography } from "@mui/material";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInput from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';
import { connect } from 'react-redux'
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from "react-router-dom"

function RegisterPage({ register }) { // register from mapActionsToProps
    const [mail, setMail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        setIsFormValid(validateRegisterForm({ mail, username, password }))
    }, [mail, username, password, setIsFormValid])

    const navigate = useNavigate()

    const handleRegister = () => {
        const userDetails = {
            mail,
            username,
            password
        }
        register(userDetails, navigate)
    }

    return (
        <>
            <AuthBox>
                <Typography variant="h5" sx={{ color: "white" }}>
                    create an account
                </Typography>
                <RegisterPageInput
                    mail={mail}
                    setMail={setMail}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
                <RegisterPageFooter
                    handleRegister={handleRegister}
                    isFormValid={isFormValid}
                />
            </AuthBox>
        </>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionsToProps)(RegisterPage);