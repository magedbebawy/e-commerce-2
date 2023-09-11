import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './signup.css';


function SignUp() {

    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confPassword, setConfPassword ] = useState('');
    const [ errors, setErrors ] = useState(new Set());


    const handleErrorToast = () => {
        errors.forEach(error => {
            toast.error(error, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 4000
            });
        });
    };

    const addItem = (item) => {
        setErrors(prevSet => {
            const newSet = new Set(prevSet);
            newSet.add(item);
            return newSet;
        })
    }

    const handelSignUp = async (e) => {
        e.preventDefault();
        try{
            if(email.length === 0) {
                addItem('Email is required');
            } 
            
            if (name.length <= 2) {
                addItem('Name must be 2 characters minimum');
            } 
            
            if (password.length <= 7) {
                addItem('Password must be 8 character minimum');
            } 
            
            if(password !== confPassword) {
                addItem("Passwords don't match");
            } 

            if (!errors) {
                const response = await fetch('http:localhost:3002/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
        
                })
            } else {
                console.log(errors);
                handleErrorToast(errors);
            }
        } catch(error) {
            console.log(error);
            addItem('Error while signing up');
            console.log(errors);
            handleErrorToast(errors);
        }
    }

    return(
        <div>
            <form onSubmit={handelSignUp}>
                <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder="Full name" onChange={(e) => setName(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm password" onChange={(e) => setConfPassword(e.target.value)}/>
                <button>Sign Up</button>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default SignUp;