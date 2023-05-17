
import React, { useState, useEffect } from 'react'
import { Typography } from "@mui/material";
import AuthBox from "../../shared/components/AuthBox";
import RegisterPageInput from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';


function RegisterPage() {
    const [mail, setMail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        console.log(validateRegisterForm({ mail, username, password }))
        setIsFormValid(validateRegisterForm({ mail, username, password }))
    }, [mail, username, password, setIsFormValid])

    const handleRegister = () => {
        console.log(mail, username, password)
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

export default RegisterPage;