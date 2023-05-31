
import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'

function LoginPageInput(props) {
    const { mail, setEmail, password, setPassWord } = props;
    return (
        <>
            <InputWithLabel
                value={mail}
                setValue={setEmail}
                label='E-mail'
                type='text'
                placeholder='E-mail...'
            />
            <InputWithLabel
                value={password}
                setValue={setPassWord}
                label='password'
                type='password'
                placeholder='password...'
            />
        </>
    )
}

export default LoginPageInput;