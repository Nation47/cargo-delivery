import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/Supabase";
import { toast } from "react-hot-toast";

const Login = ({setToken}) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e) =>{
        e.preventDefault();

        const {data,error} = await supabase
            .auth
            .signInWithPassword({
                email:email,
                password:password
            })

            if(error){
                toast.error('Invalid email or password');
            }else{
                toast.success('Successful login')
                setError(null);
                setToken(data)
                navigate('/')
                
            }
        console.log(password, email);
    }

    
  
    return (
        <>
            <div>
                <form className="form " onSubmit={handleLogin}>
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
                    <button className="btn">Login </button>
                </form>
                <h2 className="text-center text-sm   text-white">Don't have an account ? <Link to='/signup'>Sign-Up now</Link></h2> 
            </div>
        </>
    );
}
 
export default Login;