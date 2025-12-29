import { Link } from 'react-router-dom'

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Login attempt!')
        navigate('/')
    }
    return (
        <div>
            <h1>
                <Link to="/">Home</Link>
            </h1>
            <h2>Log in to your account</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    //value=
                    //onChange=
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    //value=
                    //onChange=
                    required
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login