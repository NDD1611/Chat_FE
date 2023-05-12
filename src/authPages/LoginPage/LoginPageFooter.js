

import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom"

function LoginPageFooter({ handleLogin, isFormValid }) {
    const navigate = useNavigate()

    const handlePushToRegisterPage = () => {
        navigate('/register')
    }
    return (
        <>
            <div>
                <CustomPrimaryButton
                    label='Log in '
                    additionalStyles={{ marginTop: '30px' }}
                    disabled={!isFormValid}
                    onClick={handleLogin}
                />
                <RedirectInfo
                    text='Need an account?'
                    redirectText="Create an account"
                    additionalStyles={{ marginTop: "10px" }}
                    redirectHandler={handlePushToRegisterPage}
                />
            </div>
        </>
    )
}

export default LoginPageFooter;