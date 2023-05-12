
import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'

function LoginPageInput(props) {
    const { email, setEmail, passWord, setPassWord } = props;
    return (
        <>
            <InputWithLabel
                value={email}
                setValue={setEmail}
                label='E-mail'
                type='text'
                placeholder='E-mail...'
            />
            <InputWithLabel
                value={passWord}
                setValue={setPassWord}
                label='password'
                type='password'
                placeholder='password...'
            />
        </>
    )
}

export default LoginPageInput;