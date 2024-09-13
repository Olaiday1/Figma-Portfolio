import Google from "../assets/Icons/Google.svg"
import Bolt from "../assets/Icons/Bolt.svg"
import Amazon from "../assets/Icons/Amazon.svg"
import Paypal from "../assets/Icons/Paypal.svg"
import Netflix from "../assets/Icons/Netflix.svg"
const Company = () => {
  return (
    <div className=" pb-24">
        
        <div className="flex flex-col justify-center pt-10 items-center  ">
            <h1 className=" text-center text-2xl text-white">Companies i have worked for</h1>
            <div className="h-1 w-28 mt-2 bg-pink rounded">
            </div>
        </div>
        
        
        <div className="flex flex-wrap items-center justify-center mt-2 gap-4">
            <div className="p-4">
                <img src={Google} alt="" />
            </div>
            <div className="p-4">
                <img src={Bolt} alt="" />
            </div>
            <div className="p-4">
                <img src={Amazon} alt="" />
            </div>
            <div className="p-4">
                <img src={Paypal} alt="" />
            </div>
            <div className="p-4">
                <img src={Netflix} alt="" />
            </div>
            </div>
    
    </div>
  )
}

export default Company