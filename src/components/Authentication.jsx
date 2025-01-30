import { useState } from "react";
import { useAuth } from "../context/authContext";

export default function Authentication(props) {
    const { handleCloseModal } = props;
    const [isRegistered, setIsRegistered] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authenticating, setAuthenticating] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const { signup, login } = useAuth();

    async function handleAuthentication() {
        setErrorMessage("");
        setSuccessMessage("");

        if (!email.includes("@") || password.length < 6) {
            setErrorMessage("Please provide a valid email and password (at least 6 characters).");
            return;
        }

        if (authenticating) return; // Prevent multiple clicks
        
        try {
            setAuthenticating(true);

            if (isRegistered) {
                await signup(email, password);
                setSuccessMessage("Account successfully created! ✅");
                setErrorMessage(null);
                //madde changes here so after the account is created it redirects to the login button
            } else {
                await login(email, password);
                setSuccessMessage("Login successful! ✅");
                handleCloseModal();
            }
            

        } catch (error) {
            console.error(error);
            const errorMessage = error.message;
            setErrorMessage("Invalid credentials " + errorMessage);
        } finally {
            setAuthenticating(false);
        }
    }

    return (
        <>
            <h2 className="sign-up-text">{isRegistered ? "Sign Up" : "Sign In"}</h2>
            <p>{isRegistered ? "Use your email to sign up" : "Sign in to your account"}</p>
            {errorMessage && <p className="error-text">{errorMessage }</p>}
            {successMessage && <p className="success-text">{successMessage}</p>}
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            
            <button onClick={handleAuthentication}>
                {authenticating ? "Loading..." : "Submit"}
            </button>

            {/* Show a simple error message */}
            

            <hr />

            <div className="register-content">
                <p>{isRegistered ? "Already have an account?" : "Don't have an account yet?"}</p>
                <button onClick={() => setIsRegistered(!isRegistered)}>
                    {isRegistered ? "Sign In" : "Sign Up"}
                </button>
            </div>
        </>
    );
}
