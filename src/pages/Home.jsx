import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Home = ({token}) => {
   const navigate = useNavigate();

    const Logout = () => {
        sessionStorage.removeItem('token');
        navigate('/login')
        toast.success('Logging Out successfully')
    }
    return (
        <>
            <div>
                <h3>om shant om</h3>
                <h2>welcome MR <span className="uppercase  text-sm text-white font-semibold">{token.user.user_metadata.name}</span> </h2>

                <ul className="flex space-x-6">
                    <li ><Link to='/login' className="btn-sec">login</Link></li>
                    <li ><Link to='/signup' className="btn-sec">signup</Link></li>
                </ul>
                <button className="btn-sec" onClick={Logout}>logout</button>
            </div>
        </>
    );
}
 
export default Home;