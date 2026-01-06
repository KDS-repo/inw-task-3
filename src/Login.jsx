import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './login.css';

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const checkEmail = (event) => {
        const val = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(event.target.value)
        console.log(val)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Login attempt!')
        navigate('/')
    }
    return (
        <div className='login'>
            <h1 className='login__header'>
                <Link to="/">Home</Link>
            </h1>
            <h2 className='login__subheader'>Log in to your account</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input className='login__email'
                    type="email"
                    placeholder="Email"
                    //value={email}
                    onChange={checkEmail}
                    required
                />
                <input className='login__password'
                    type="password"
                    placeholder="Password"
                    //value=
                    //onChange=
                    required
                />
                <button type="submit" className='login__submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login