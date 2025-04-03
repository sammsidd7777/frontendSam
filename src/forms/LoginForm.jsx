import React, { useState } from 'react'

const LoginForm = ({ logine }) => {
    const backendUrl = import.meta.env.VITE_BACKEND_PORT;
    
    // States for login form and error handling
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false); // To manage button text

    const handleLogin = async (event) => {
        event.preventDefault();

        const { email, password } = loginForm;
        const userData = { email, password };

        try {
            setIsLoading(true); 
            let response = await fetch(`${backendUrl}/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
                credentials: "include",
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Login failed");
            }

            alert("Login successful");

            // Call IconChange function after successful login
            logine();
           
        } catch (error) {
            setErrorMessage(error.message); 
        } finally {
            setIsLoading(false);  // To stop the loading spinner after the request completes
        }
    };

    return (
        <div className="login-modal">
            <h1>Get started</h1>
            <p>Please enter your Email and password to continue</p>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    id='email'
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    placeholder="Enter Email"
                />
                <input
                    type="password"
                    name="password"
                    id='password'
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    placeholder="Enter Password"
                />
                <button type="submit">
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <h6 style={{ textAlign: 'end' }}>
                By confirming, you agree to boAt's Terms and Conditions and Privacy Policy.
            </h6>
        </div>
    );
}

export default LoginForm;
