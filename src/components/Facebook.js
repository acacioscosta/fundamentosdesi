import React from 'react'
import FacebookLogin from 'react-facebook-login'

export default function Facebook() {

    const responseFacebook = response => {
        console.log(response)
    }
    const componentClicked = response => {
        console.log('clicked')
    }

    return(
        <div className='container'>
            <form>
                <p>Login</p>
                <input type="text" placeholder='E-mail do facebook' />
                <input type="password" placeholder='Senha do facebook' />
                <button type='button' className='login'>ENTRAR</button>
                <FacebookLogin
                    appId="2637183803015483"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook} />
            </form>
        </div>
    )
}