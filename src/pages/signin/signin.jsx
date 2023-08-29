import './signin.css';


function SignIn() {
    return(
        <div>
            <form >
                <input type="text" placeholder="Email address"/>
                <input type="password" placeholder="Password"/>
                <button>Sign In</button>
            </form>
            <a href="#">Forgot password?</a>
        </div>
    )
}

export default SignIn;