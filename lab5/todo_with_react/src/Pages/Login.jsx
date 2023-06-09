import { logInWithGoogle, logInWithGithub, registerWithEmail, loginWithEmail, logout, useUser } from "../Firebase/AuthService";
import { useState } from "react";

const Login = () => {
    const user = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");

    const handleRegister = () => registerWithEmail(email, password, displayName);
    const handleLogin = () => loginWithEmail(email, password);

    if (user) {
        return (
            <div className="App">
                <h2>You are logged in as {user.displayName}</h2>
                <button onClick={logout}>Log me out</button>
            </div>
        );
    } 

    return (
        <div className="App">
            <h2>Please log in</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
            <button onClick={handleRegister}>Register with Email</button>
            <button onClick={handleLogin}>Login with Email</button>
            <button onClick={logInWithGoogle}>Login with Google</button>
            <button onClick={logInWithGithub}>Login with Github</button>
        </div>
    );
}

export default Login;
