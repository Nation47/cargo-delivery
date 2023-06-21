import { Link } from "react-router-dom";

const Home = ({token}) => {
    return (
        <>
            <div>
                <h3>om shant om</h3>
                <h2>welcome MR <span className="uppercase  text-sm text-white font-semibold">{token.user.user_metadata.name}</span> </h2>

                <ul className="flex space-x-6">
                    <li ><Link to='/login' className="btn-sec">login</Link></li>
                    <li ><Link to='/signup' className="btn-sec">signup</Link></li>
                </ul>
            </div>
        </>
    );
}
 
export default Home;