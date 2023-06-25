import { useEffect, useState } from "react";
import supabase from "../config/Supabase";
import { toast } from "react-hot-toast";
import Order from "./Order";
import {MdDeliveryDining} from "react-icons/md"

const Received = () => {
    const [requests, setRequests] = useState(null);

    useEffect(()=> {
        const fetchData = async () => {
            const{error,data} = await supabase
                .from('request')
                .select()

                if(error){
                    toast.error('Could not fetch requests');
                } else{
                    setRequests(data);
                }
        }
        fetchData();
    },[])
    return (
        <>
            <div className="bg-white  mt-5 max-w-md mx-auto rounded shadow">
                {requests && (
                    <div>
                        <div className="flex justify-center pt-3 border border-b-gray-200">
                            <h2 className="uppercase md:text-md text-emerald-800 font-semibold text-center">Requests </h2>
                            <span ><MdDeliveryDining className="h-6 w-6 ml-1 text-emerald-800" /></span>
                        </div>
                        {requests.map(request => (
                            <Order key={request.id} request={request} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
 
export default Received;