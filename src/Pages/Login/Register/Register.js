import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false)


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigateLogin = e => {
        navigate('/login')
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleRegister = async (e) => {
        e.preventDefault();;

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/login')


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
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2 text-primary' : ' ps-2 text-danger'} htmlFor="">Accept Genius Car Terms And Condition</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="">Accept Genius Car Terms And Condition</label>
                <br />
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-info'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;