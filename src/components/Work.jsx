import Ecommerce from "../assets/Images/Ecommerce.svg"
import Basketball from "../assets/Images/Basketball.svg"
import Perfume from "../assets/Images/Perfume.svg"
import Health from "../assets/Images/Health.svg"
import Estate from "../assets/Images/Estate.svg"
import Bank from "../assets/Images/Bank.svg"


const Work = () => {
  return (
    <>
    
    <div className="container mx-32">
        <div  className="flex pt-10">
            <h1 className="text-white ">My Recent Works</h1>
        </div>
        <div className="h-1 bg-pink w-28 mt-2 rounded">
                </div>

                <div className=" flex grid-col pt-10 gap-4">
                    <div className=" text-white">
                        <h2 className="pb-2">Ecommerce Landing page</h2>
                        <img src={Ecommerce} alt="" />
                    </div>
                    <div className=" text-white">
                        <h2 className="pb-2">Basketball Studio</h2>
                        <img src={Basketball} alt="" />
                    </div>
                    <div className=" text-white">
                        <h2 className="pb-2">Perfume Company</h2>
                        <img src={Perfume} alt="" />
                    </div>

                    </div>

                    <div className=" flex grid-col pt-10 gap-4">

                    <div className=" text-white ">
                        <h2 className="pb-2">Health care site</h2>
                        <img src={Health} alt="" />
                    </div>
                    <div className=" text-white">
                        <h2 className="pb-2">Real Estate</h2>
                        <img src={Estate} alt="" />
                    </div>
                    <div className=" text-white">
                        <h2 className="pb-2">Bank Wallet</h2>
                        <img src={Bank} alt="" />
                    </div>

                    </div>

                    <div className="flex mr-60 justify-center py-10 items-center">
                        <button className="bg-deepBlue border-2 border-pink px-10 py-2 rounded text-pink">See More</button>
                    </div>
    </div>
    </>
  )
}

export default Work