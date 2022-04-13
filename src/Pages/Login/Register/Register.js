import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();


    const navigateLogin = e => {
        navigate('/login')
    }

    const handleRegister = e => {
        e.preventDefault();;

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Your Name' />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="password" name="password" id="" placeholder='password' required />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;