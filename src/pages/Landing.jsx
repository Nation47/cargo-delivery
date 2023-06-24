
const Landing = () => {
    return (
        <>
            <div className="p-10 flex">
                <div className="bg-white px-8 py-5 rounded-md shadow-md text-emerald-900 space-y-5">
                    <h2 className="text-left  font-semibold text-5xl">Try <span className="uppercase">Cargodel</span>  Services.</h2>
                    <p className="text-left ml-2 mt-4 font-semibold  text-sm">We provide a delivery Services around the city, <br /> On time, reasonable Fee and Costs with high level Security. </p>
                    <div className="flex space-x-3">
                        <div className="bg-emerald-900 px-5 py-3 rounded shadow text-white">
                            <h1>our services!</h1>
                        </div>
                        <div className="bg-emerald-900 px-5 py-3 rounded shadow text-white">
                            <h1>our services!</h1>
                        </div>
                        <div className="bg-emerald-900 px-5 py-3 rounded shadow text-white">
                            <h1>our services!</h1>
                        </div>
                        <div className="bg-emerald-900 px-5 py-3 rounded shadow text-white">
                            <h1>our services!</h1>
                        </div>

                    </div>
                    <div className=" space-x-4">
                        <span className="bg-white px-3 py-2 border-emerald-600 border mt-10">contact us via email </span>
                        <span className="bg-white px-3 py-2 border-emerald-600 border mt-10">contact us via phone </span>
                    </div>
                    
                </div>
            </div>
        </> 
    );
}
 
export default Landing;