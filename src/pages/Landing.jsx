
const Landing = () => {
    return (
        <>
            <div className="p-5 md:p-10 md:flex">
                <div className="bg-white px-4 md:px-8 py-5 rounded-md shadow-md text-emerald-900 space-y-5">
                    <h2 className="text-left  font-semibold text-2xl md:text-5xl">Try <span className="uppercase">Cargodel</span>  Services.</h2>
                    <p className="text-left md:ml-2 md:mt-4 font-semibold text-xs md:text-sm">We provide a delivery Services around the city, <br /> On time, reasonable Fee and Costs with high level Security. </p>
            
                    <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex md:space-x-3">
                        <div className="bg-emerald-900 px-4 py-2  rounded shadow text-white">
                            <h1 className="uppercase text-sm">Goods Delivery</h1>
                        </div>
                        <div className="bg-emerald-900 px-4 py-2 rounded shadow text-white">
                            <h1 className="uppercase text-sm leading-tight">Transportation</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste autem tempora labore corporis fugiat nisi possimus sequi ut, ducimus doloremque repellat aspernatur accusantium?</p>
                        </div>
                        <div className="bg-emerald-900 px-4 py-2 rounded shadow text-white">
                            <h1 className="uppercase text-sm">Ease access</h1>
                        </div>
                        <div className="bg-emerald-900 px-4 py-2 rounded shadow text-white">
                            <h1 className="uppercase text-sm">customer care</h1>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start space-x-2 md:space-x-4">
                        {/* <span className="bg-white px-2 py-1 md:px-3 md:py-2 border-emerald-600 border md:mt-10">contact us via email </span>
                        <span className="bg-white px-2 py-1 md:px-3 md:py-2 border-emerald-600 border md:mt-10">contact us via phone </span> */}
                    </div>
                        <a className="btn" href="https://trkrspace.com/show.php?l=0&u=1513070&id=54538&tracking_id=">click to get offer</a>
                    
                </div>
            </div>
        </> 
    );
}
 
export default Landing;