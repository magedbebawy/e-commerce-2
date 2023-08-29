import './signup.css';


function SignUp() {
    return(
        <div>
            <form >
                <input type="text" placeholder="Email address"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Confirm password" />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;