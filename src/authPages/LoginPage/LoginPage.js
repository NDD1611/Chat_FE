
import { useState } from 'react'
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInput from "./LoginPageInputs";
import LoginPageFooter from './LoginPageFooter';

function LoginPage() {
    const [email, setEmail] = useState('')
    const [passWord, setPassWord] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)
    const handleLogin = () => {
        console.log(email, passWord)
    }
    return (
        <>
            <AuthBox>
                <LoginPageHeader />
                <LoginPageInput
                    email={email}
                    setEmail={setEmail}
                    passWord={passWord}
                    setPassWord={setPassWord}
                />
                <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
            </AuthBox>
        </>
    )
}

export default LoginPage;