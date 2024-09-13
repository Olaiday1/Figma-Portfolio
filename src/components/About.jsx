import Mask1 from "../assets/Icons/Mask1.svg"
import Vue from "../assets/Icons/Vue.svg"
import Css from "../assets/Icons/Css.svg"
import Reacts from "../assets/Icons/Reacts.svg"
import Mask2 from "../assets/Icons/Mask2.svg"
const About = () => {
  return (
    <>
        <div className="bg-deepBlue text-white flex ">
            
            <div className="mb-10 m-40">
            <div className="justify-start flex  flex-col ">
                <div className="relative ">
                    <img src={Mask2} alt="" className="absolute top-4  " width={43} height={48}/>
                   
                </div>
                <div className="relative"> <img src={Css} alt="" className="absolute top-4 left-60 m-10 " width={43} height={48}/></div>

                <div className="  ">
                     <img src={Reacts} alt="" className="absolute m-40" width={45} height={45}/>
                    </div>

                    <div className="relative py-60">
            <img src={Vue} alt="" className="absolute left-2" width={43} height={37}/> 
            </div>
            <div className="relative left-60 ">
                <img src={Mask1} alt=" " className="absolute bottom-40" width={43} height={48}/></div>
            
            </div>
            
            <div className="flex flex-wrap px-11 justify-end items-end ">
            <div className="w-full lg:w-1/2 ">
                <div className="w-full lg:w-1/2 lg:p-8" >
                    <h2 className="">About Me</h2>
                </div>
                <div className="h-1 bg-pink rounded">
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start">
                <p className="my-2 maxw-xl" >My passion for building websites started since 2013 and since then i have helped companies around the world build amazing websites and products that create real value for the business and users.</p>
                    <p className="my-2  maxw-xl "> I enjoy solving problems with clean scalable solutions and I also have a genuine passion for inspiring design.</p> 
                   <p className="my-2 maxw-xl"> I am a fullstack developer focusing on core frontend and backend technologies which include HTML, CSS, Javascript, React and other core languages</p>
            </div>
                
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default About