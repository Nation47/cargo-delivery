import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {FaRegUser} from "react-icons/fa"
import {BiLogOut} from "react-icons/bi"
import Received from "../components/Received";
import { Suspense } from "react";

const Home = ({token}) => {
   const navigate = useNavigate();

    const Logout = () => {
        sessionStorage.removeItem('token');
        navigate('/login')
        toast.success('Logging Out successfully')
    }
    return (
        <>
            <div className="py-5 px-3 md:px-10 md:py-5">
                <div className="bg-white max-w-md mx-auto p-3 rounded ">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <h3 className="bg-white rounded-full shadow-xl p-2  md:p-4 md:w-14 "><FaRegUser className="h-4 w-4 md:h-6 md:w-6" /></h3>
                            <span className=" ml-5">
                                <h1 className="uppercase text-xs md:text-md text-emerald-800 font-semibold">{token.user.user_metadata.name}</h1>
                                <h3 className="uppercase text-xs md:text-sm text-emerald-800 font-semibold">{token.user.user_metadata.phone}</h3>
                            </span> 
                        </div>
                        <button className="btn-pri " onClick={Logout}>
                            <h3 className="ml-2"><BiLogOut className="h-4 w-4 md:h-6 md:w-6" /></h3>
                            logout
                        </button>
                    </div>
                    <h2 className="uppercase text-xs  md:ml-2 md:mt-2 text-emerald-800 font-semibold">{token.user.user_metadata.user}</h2>
                </div>
                <Suspense fallback={<p className="text-center">Loading Requests...</p>}>
                <Received />
                </Suspense>
            </div>
        </>
    );
}
 
export default Home;
