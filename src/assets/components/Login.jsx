import { useState } from "react";

const Login = ({setToken}) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    
  
    return (
        <>
            <div>
                <form className="form " onSubmit={Login} >
                    <h2 className="text-center text-sm border-b mb-4 border-emerald-600 uppercase text-white">Login</h2>
                   
                    <label htmlFor="contact" className="label">Email:</label>
                    <input 
                        type="email" 
                        className="input"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                    />

                    <label htmlFor='password'  className="label">Password:</label>
                    <input 
                        type="password" 
                        placeholder="Password"
                        required
                        value={password}
                        className="input"
                        onChange={(e) =>setPassword(e.target.value)}
                    />
                    <button className="btn">Login</button>
                </form>
                <h2 className="text-center text-sm border-b  border-emerald-600  text-white">Don't have an account ? <a to='/signin'>Sign-Up now</a></h2> 
            </div>
        </>
    );
}
 
export default Login;