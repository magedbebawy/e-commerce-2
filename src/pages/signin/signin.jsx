import './signin.css';


function SignIn() {
    return(
        <div className='formContainer'>
            <form >
                <input type="text" placeholder="Email address"/>
                <input type="password" placeholder="Password"/>
                <button>Sign In</button>
            </form>
            <a href="#">Forgot password?</a>
            <a href="/signup">Don't have an account?</a>
        </div>
    )
}

export default SignIn;