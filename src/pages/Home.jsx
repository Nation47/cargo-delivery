import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {FaRegUser} from "react-icons/fa"
import {BiLogOut} from "react-icons/bi"

const Home = ({token}) => {
   const navigate = useNavigate();

    const Logout = () => {
        sessionStorage.removeItem('token');
        navigate('/login')
        toast.success('Logging Out successfully')
    }
    return (
        <>
            <div className="px-10 py-5">
                <div className="bg-white max-w-md p-3 rounded ">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <h3 className="bg-white rounded-full shadow-xl  p-4 w-14 "><FaRegUser className="h-6 w-6" /></h3>
                            <span className=" ml-5">
                                <h1 className="uppercase text-md text-emerald-800 font-semibold">{token.user.user_metadata.name}</h1>
                                <h3 className="uppercase text-sm text-emerald-800 font-semibold">{token.user.user_metadata.phone}</h3>
                            </span> 
                        </div>
                        <button className="btn-pri " onClick={Logout}>
                            <h3 className="ml-2"><BiLogOut className="h-6 w-6" /></h3>
                            logout
                        </button>
                    </div>
                    <h2 className="uppercase text-xs ml-2 mt-2 text-emerald-800 font-semibold">{token.user.user_metadata.user}</h2>
                </div>
            </div>
        </>
    );
}
 
export default Home;