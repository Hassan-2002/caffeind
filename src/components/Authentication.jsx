export default function Authentication() {
    return (
        <>

       
            <h2 className="sign-up-text"> Sign up / Login</h2>
            <p>Sign in to your account</p>
            <input placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button><p>Sign in</p></button>
            <hr />
        
        <div className="register-content">
            <p>Don&apos;t have an account?</p>
            <button><p>Sign up</p></button>

        </div>
        </>
    )
}