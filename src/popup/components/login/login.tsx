import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../config/firebase-config';

export const LoginWidget = () => {
    const [loggingIn, setLoggingIn] = useState(false);
    const [logInError, setLogInError] = useState(undefined);
    const [cred, setCred] = useState('');

    const navigate = useNavigate();

    const loginHandler = () => {
        setLoggingIn(true);
        setLogInError(undefined);
        try {
            chrome.identity.getAuthToken({ interactive: true}, async (token) => {
                var credential = GoogleAuthProvider.credential(null, token);
                try {
                    const res = await signInWithCredential(auth, credential)
                    setCred(res.user.email)
                    setLoggingIn(false);

                    navigate("/home", {replace: true})
                } catch(e) {
                    setLoggingIn(false);
                    setLogInError(e.message);
                }
            })
        } catch(e) {
            setLoggingIn(false);
            setLogInError(e.message);
        }
    }

    return (
        <div className='mt-4 mx-6 flex h-[550px] justify-center items-center flex-col'>
            <button className='px-3 py-2 rounded bg-black text-white hover:bg-gray-800' disabled={loggingIn} onClick={loginHandler}>
                {loggingIn ? 'Logging In...' : 'Login'}
            </button>
            {cred}
            {logInError && <p className='text-red-500 text-md mt-3 font-light text-center'>An error occurred while attempting to login. Please try again!</p>}
            {logInError && <p className='text-red-500 text-md mt-3 font-light text-center'>{logInError}</p>}
        </div>
    )
}