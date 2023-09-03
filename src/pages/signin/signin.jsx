import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';


function SignIn() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ signedIn, setSignedIn ] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        try{
            e.preventDefault();
            const response = await fetch('http://localhost:3002/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({email, password})
            });

            const data = await response.json();

            if(data.token) {
                setSignedIn(true);
                localStorage.setItem('authToken', data.token);
                navigate('/');
            } else {
                console.log('Failed to login');
            }
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <div className='formContainer'>
            <form onSubmit={handleSignIn}>
                <input type="text" placeholder="Email address" onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <button type='submit'>Sign In</button>
            </form>
            <a href="#">Forgot password?</a>
            <a href="/signup">Don't have an account?</a>
        </div>
    )
}

export default SignIn;