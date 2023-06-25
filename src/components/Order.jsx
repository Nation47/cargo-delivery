import { AiOutlineArrowLeft } from "react-icons/ai";

const Order = ({request}) => {
    return (
        <>
            <div className="bg-white">
                <ul className="mx-4 pt-4 bg-white px-3 py-5 mt-3 shadow-md rounded">
                    <li className="">
                        <span>
                           <div className=" ">
                                <span>From: </span> 
                                <span>{request.cargoLocation}</span>
                           </div>
                            <div className="">
                                <span>To: </span>
                                <span>{request.delivery}</span>
                            </div>
                        </span>
                    </li>
                </ul>
            </div>
        </>
    );
}
 
export default Order;