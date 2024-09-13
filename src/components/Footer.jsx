import Copy from "../assets/Icons/Copy.svg"
import Facebook from "../assets/Icons/Facebook.svg"
import Twitter from "../assets/Icons/Twitter.svg"
import Github from "../assets/Icons/Github.svg"
const Footer = () => {
  return (
    <div className="bg-blueAsh text-white m-0 " >

            <div className="flex flex-shrink-0 items-center">
            <h3 className="flex p-20">IWMYWF</h3>

            <div className=" w-full p-4 flex pl-40 justify-center items-center">
                <img src={Copy} alt="" />
            <p className="ml-2">Copyright 2021. All right reserved</p>        
            </div>
            



            <div className="pr-20 mx-auto flex justify-end gap-4 text-sm w-full">
                <div><h4>Connect with me:</h4></div>
            <ul className="flex items-end justify-end gap-4  ">
                <li><img src={Facebook} alt="" className="bg-black rounded-full"/></li>
                <li><img src={Twitter} alt="" className="bg-black rounded-full"/></li>
                <li><img src={Github} alt="" className="bg-black rounded-full"/></li>
                
            </ul>
        </div>
        </div>
        </div>
  )
}

export default Footer