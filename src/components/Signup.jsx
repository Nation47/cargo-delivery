import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/Supabase";
import { toast } from "react-hot-toast";

const Signup = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) =>{
        e.preventDefault();
        

        const {error} = await supabase
            .auth
            .signUp({
                email: email,
                password: password,
                options:{
                    data: {
                        name:name,
                        phone:phone,
                        user:user,
                        email:email
                    }
                }
            })

            if(error){
                toast.error('failed to sign up')
            } else{
                toast.success('Account Created')
                setError(null);
                navigate('/home')

            }

        console.log(name, phone, email, password, user);

        setEmail('');
        setName('');
        setPassword('');
        setUser('');
        setPhone('');
    }
    return (
        <>
            <div>
                <h3 className="text-sm text-emerald-600 text-center mt-4">Signup now if you don't have an account</h3>
                <form className="form" onSubmit={handleSignup}>
                    <label htmlFor="fullname" className="label">Full name</label>
                    <input
                         type="text" 
                         className="input"
                         placeholder="full name"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email" className="label">email</label>
                    <input
                         type="email" 
                         className="input"
                         placeholder="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="phone" className="label">phone</label>
                    <input
                         type="text" 
                         className="input"
                         placeholder="phone number"
                         value={phone}
                         onChange={(e) => setPhone(e.target.value)}
                    />

                    <label htmlFor="usertype" className="label">user type</label>
                    <select className="input" required value={user} onChange={(e) => setUser(e.target.value)}>
                        <option >Client type</option>
                        <option value="client"  >Client</option>
                        <option value="driver"  >Driver</option>
                    </select>

                    <label htmlFor="fullname" className="label">password</label>
                    <input
                         type="password" 
                         className="input"
                         placeholder="password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn">signup</button>
                </form>
                <h2 className="text-center text-sm   text-white">Don't have an account ? <Link to='/login'>Login now</Link></h2> 
            </div>
        </>
    );
}
 
export default Signup;