
import { useState, useEffect } from 'react'
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInput from "./LoginPageInputs";
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../shared/utils/validators'
import { connect } from 'react-redux'
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from "react-router-dom"

function LoginPage({ login }) {//login from mapActionsToProps
    const [mail, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        setIsFormValid(validateLoginForm({ mail, password }))
    }, [mail, password, setIsFormValid])

    const navigate = useNavigate()

    const handleLogin = () => {
        const userDetails = {
            mail,
            password
        }
        login(userDetails, navigate)
    }
    return (
        <>
            <AuthBox>
                <LoginPageHeader />
                <LoginPageInput
                    mail={mail}
                    setEmail={setEmail}
                    password={password}
                    setPassWord={setPassWord}
                />
                <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
            </AuthBox>
        </>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionsToProps)(LoginPage);