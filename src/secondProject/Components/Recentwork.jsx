import Speed from "../../assets/Icons/Speed.svg";
import Globe from "../../assets/Icons/Globe.svg";

const Recentwork = () => {
  return (
    <>
    
    <div className="container mx-32">
        <div  className="flex pt-10">
            <h1 className="text-black">Recent Works</h1>
        </div>
        <div className="h-1 bg-yellow w-28 mt-2 rounded">
                </div>

                <div className=" flex grid-col pt-10 gap-4">
                    <div className="">
                        <img src={Globe} alt="" />
                        <h2 className="pb-2"><a href="neilpatel">neilpatel.com</a></h2>
                        <img src={Speed} alt="" />
                    </div>
                    <div className="">
                        <img src={Globe} alt="" />
                        <h2 className="pb-2"><a href="webmanga">webmanga.com</a></h2>
                        <img src={Speed} alt="" />
                    </div>
                    <div className=" ">
                        <img src={Globe} alt="" />
                        <h2 className="pb-2"><a href="wapzar">wapzar.com</a></h2>
                        <img src={Speed} alt="" />
                    </div>

                    </div>

                    
                    <div className="justify-center items-center mx-30 pt-10 flex flex-wrap gap-6">


                         <div className="w-4 h-4 bg-yellow rounded-full"> </div>
                         <div className="w-4 h-4 bg-whiteAsh rounded-full"> </div> 
                         <div className="w-4 h-4 bg-whiteAsh rounded-full"> </div>
                         <div className="w-4 h-4 bg-whiteAsh rounded-full"> </div>

                         </div>
                   
    </div>
    </>
  )
}

export default Recentwork