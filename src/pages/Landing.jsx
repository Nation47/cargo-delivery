import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
            <div>
                <h2>welcome</h2>
                <Link to='/login' className="btn-sec" >login</Link>
                <Link to='/signup' className="btn-sec" >signup</Link>
            </div>
        </>
    );
}
 
export default Landing;