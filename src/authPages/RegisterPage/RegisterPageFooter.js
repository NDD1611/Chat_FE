
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from "react-router-dom"
import { Tooltip } from "@mui/material";


const getFormNotValidMessage = () => {
    return "usename should contains between 3 and 12  characters and Enter correct e-mail address and password should contain between 6 and 12 characters"
}

const getFormValidMessage = () => {
    return "Press to register!"
}

function RegisterPageFooter({ handleRegister, isFormValid }) {
    const navigate = useNavigate()

    const handlePushToLoginPage = () => {
        navigate('/login')
    }
    return (
        <>
            <div>
                <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
                    <div>
                        <CustomPrimaryButton
                            label='Register'
                            additionalStyles={{ marginTop: '30px' }}
                            disabled={!isFormValid}
                            onClick={handleRegister}
                        />
                    </div>
                </Tooltip>
                <RedirectInfo
                    text=''
                    redirectText="Already have a account?"
                    additionalStyles={{ marginTop: "10px" }}
                    redirectHandler={handlePushToLoginPage}
                />
            </div>
        </>
    )
}

export default RegisterPageFooter;