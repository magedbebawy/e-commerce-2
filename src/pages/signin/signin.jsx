import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from '../../redux/actions/signInActions';
import { ToastContainer, toast } from 'react-toastify';
import './signin.css';


function SignIn() {
    const dispatch = useDispatch();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

    const handleErrorToast = (message) => {
        toast.error(message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 4000
        });
    };


    const handleSignIn = async (e) => {
        try{
            e.preventDefault();
            const response = await fetch('http://localhost:3002/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                },
                credentials: 'include',
                body: JSON.stringify({email, password})
            });

            const data = await response.json();

            if(!data.error) {
                localStorage.setItem('authToken', data.token);
                dispatch(signIn());
                navigate('/');
            } else {
                console.log('Failed to login');
                dispatch(signOut());
                handleErrorToast(data.message || 'Error signing in');
            }
        } catch(error) {
            console.log(error);
            handleErrorToast(error.message || 'Error signing in. Please try again');
        }
    }

    return(
        <div className='formContainer'>
            <form onSubmit={handleSignIn}>
                <input type="email" placeholder="Email address" onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <button type='submit'>Sign In</button>
            </form>
            <a href="#">Forgot password?</a>
            <a href="/signup">Don't have an account?</a>
            <ToastContainer />
        </div>
    )
}

export default SignIn;