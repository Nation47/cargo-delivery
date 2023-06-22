import { NavLink, Outlet } from "react-router-dom";
import supabase from "../config/Supabase";

export default async function Navbar() {
    const [useri,setUser]=useState()
    useEffect(()=>{
   async function getUser(){
    const {data:{user}} = await supabase.auth.getUser();
    if(user){
        setUser(user);
    }
    else{
        setUser(null);
    }
   }
   getUser()
    }
   
    ,[])
    
    if(useri)
    return( <>
        <nav className="nav">
            <h1 className="ml-3">Cargodel</h1>
            <div className="link">
                <NavLink className="" to='/'>home</NavLink>
                <NavLink className="">about</NavLink>
                <NavLink className="">history</NavLink>
            </div>
        </nav>
        <Outlet />
    </>)
    else{
    return (
        <>
            <nav className="nav">
                <h1 className="ml-3">Cargodel</h1>
                <div className="link">
                    <NavLink className="" to='/'>home</NavLink>
                    <NavLink className="">about</NavLink>
                    <NavLink className="">history</NavLink>
                </div>
                <div className="link-sec mr-3">
                    <NavLink className="" to='/login'>login</NavLink>
                    <NavLink className="" to='/signup'>signup</NavLink>
                </div>
            </nav>
            <Outlet />
        </>
    );
    }
}
 
