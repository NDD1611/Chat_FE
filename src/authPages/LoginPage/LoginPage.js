
import { useState, useEffect } from 'react'
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInput from "./LoginPageInputs";
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../shared/utils/validators'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        setIsFormValid(validateLoginForm({ email, password }))
    }, [email, password, setIsFormValid])

    const handleLogin = () => {
        console.log(email, password)
    }
    return (
        <>
            <AuthBox>
                <LoginPageHeader />
                <LoginPageInput
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassWord={setPassWord}
                />
                <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
            </AuthBox>
        </>
    )
}

export default LoginPage;