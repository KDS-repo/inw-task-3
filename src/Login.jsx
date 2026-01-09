import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useLoginMutation } from './redux/authAPI'

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(true)
    // Unlike query, a mutation returns an array with the function being first and the state inside an object that comes second
    // I'm destructuring both
    const [login, { isLoading, error }] = useLoginMutation();

    const usernameUpdate = (event) => {
        // Emaiil validation regex
        //const val = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(event.target.value)
        //setIsValid(val)
        setUsername(event.target.value)
    }
    const passwordUpdate = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = (event) => {
        //if(!isValid) return
        event.preventDefault()
        console.log('Login attempt!')
        login({username: username, password: password})
            .unwrap() // Necessary for RTK
            .then((result) => localStorage.setItem('token', result.accessToken)) // Move to RTK later
            .then(() => navigate('/'))
            .catch((error) => console.log("An error occured:", error)) // Should throw an error if credentials are wrong
    }

    return (
        <div className='login'>
            <h1 className='login__header'>
                <Link to="/">Home</Link>
            </h1>
            <h2 className='login__subheader'>Log in to your account</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input 
                    className={`login__email ${!isValid && 'login_incorrect'}`}
                    type="text"
                    placeholder="Username"
                    //value=
                    onChange={usernameUpdate}
                    required
                />
                <input className='login__password'
                    type="password"
                    placeholder="Password"
                    //value=
                    onChange={passwordUpdate}
                    required
                />
                <button type="submit" className='login__submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login