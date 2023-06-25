import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import supabase from "../config/Supabase";

const Requests = () => {
    const [cargoLocation, setCargoLocation] = useState('');
    const [delivery, setDelivery] = useState('');
    const navigate = useNavigate();
  

    const handleRequest = async (e) => {
        e.preventDefault();

        const {error} = await supabase
            .from('request')
            .insert({cargoLocation, delivery});

            if(error){
                toast.error(' failed to request!');
            } else{
                toast.success('Request sent!');
                navigate('/');
            }        

    }
    return (
        <>
            <div>
                <form className="form" onSubmit={handleRequest}>
                    <label htmlFor="cargo location" className="label">Cargo location</label>
                    <select name="cargo location" className="input" required value={cargoLocation} onChange={(e) => setCargoLocation(e.target.value)}>
                        <option >Chaguo eneo</option>
                        <option value="ubungo">Ubungo</option>
                        <option value="Sinza">Sinza</option>
                        <option value="Kimara">Kimara</option>
                        <option value="Mawasiliano">Mawasiliano</option>
                        <option value="Kariakoo">Kariakoo</option>
                        <option value="Mabibo">Mabibo</option>
                        <option value="Mliman City">Mliman City</option>
                        <option value="Shekilango">Shekilango</option>
                        <option value="Kivukoni">Kivukoni</option>
                    </select>

                    <label htmlFor="deliver location" className="label">Delivery location</label>
                    <select name="cargo location" className="input" required value={delivery} onChange={(e) => setDelivery(e.target.value)} >
                        <option >Chaguo eneo</option>
                        <option value="ubungo">Ubungo</option>
                        <option value="Sinza">Sinza</option>
                        <option value="Kimara">Kimara</option>
                        <option value="Mawasiliano">Mawasiliano</option>
                        <option value="Kariakoo">Kariakoo</option>
                        <option value="Mabibo">Mabibo</option>
                        <option value="Mliman City">Mliman City</option>
                        <option value="Shekilango">Shekilango</option>
                        <option value="Kivukoni">Kivukoni</option>
                    </select>                    
                    <button className="btn">Request</button>
                </form>
            </div>
        </>
    );
}
 
export default Requests;