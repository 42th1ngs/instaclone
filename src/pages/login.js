import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import FirebaseContext from '../context/firebase';

export default function Login() {
    const history = useNavigate();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setErrror] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => { };

    useEffect(() => {
        document.title = 'Login - Instagram';
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" className="max-w-full" />
            </div>
            <div className="flex flex-col w-2/5">
                <h1 className="flex justify-center w-full">
                    <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                </h1>

                {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                <form onSubmit={handleLogin} method="POST">
                    <input
                        aria-label="Enter your email address"
                        type="text"
                        placeholder="Email address"
                        className="text-sm text-gray-base w-full mr-3 py-5 px-4 h2 border border-gray-primary rounded mb-2"
                    />
                </form>
            </div>
        </div>
    );
}

// text-red-primary -> hex values
// text-gray-base -> hex values
// border-gray-primary