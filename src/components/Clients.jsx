import Man2 from "../assets/Images/Man2.png"
import Woman from "../assets/Images/Woman.png"
import Vector from "../assets/Icons/Vector.svg"
import Less from "../assets/Icons/Less.svg"
import Great from "../assets/Icons/Great.svg"

const Clients = () => {
  return (
    <>
    <div className="p-20">
        <div className=" flex flex-col items-center justify-center  text-white">
            <h1>What my clients say</h1>

            <div className="h-1 bg-pink w-24 mt-2 justify-center items-center rounded">
                </div>
                </div> 

         <div className=" flex gap-10">

                             <div className="mt-40"> 
                        <img src={Great} alt="" />
                         </div>

                <div className="flex flex-wrap mt-20 p-4 max-w-md bg-black rounded" > 
                    <div className="container">
                    <div className="flex ">
                        <div className="rounded-sm overflow-hidden">
                    <img src={Man2} alt="" className="object-cover w-14  pt-6"/>
                     </div>
                    
                        <div className="w-60 m-6">
                            <h2 className="text-white items-center justify-center text-xl ">Charles Dim</h2>
                        <h3 className="text-white">Lead Designer, Netflix</h3>
                        </div>

                        <div className="flex justify-end px-10">
                    <img src={Vector} alt="" className="flex " />
                    </div>

                </div>
                
                
                    </div>
                    
                        <div className="pt-2">
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in malesuada tristique arcu non eu lectus orci. Amet non, sed eget ultrices cursus diam orci. Risus sed tristique lectus fusce lacus.</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap mt-20 p-4 max-w-md bg-black rounded" > 
                    <div className="container">
                    <div className="flex">
                        <div className="rounded-sm overflow-hidden">
                    <img src={Woman} alt="" className="object-cover w-14  pt-6"/>
                     </div>
                    
                        <div className="w-60 m-6">
                            <h2 className="text-white items-center justify-center text-xl ">Margaret Wills</h2>
                        <h3 className="text-white">CEO, Ebay</h3>
                        </div>

                        <div className="flex justify-end px-10">
                    <img src={Vector} alt="" className="flex " />
                    </div>

                </div>
                
                
                    </div>
                    
                        <div className="pt-2">
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in malesuada tristique arcu non eu lectus orci. Amet non, sed eget ultrices cursus diam orci. Risus sed tristique lectus fusce lacus.</p>
                        </div>
                    </div>

                    <div className="mt-40"> 
                        <img src={Less} alt="" />
                         </div>
                

                         </div>


                         <div className="justify-center items-center mx-30 pt-10 flex flex-wrap gap-6">


                         <div className="w-4 h-4 bg-pink rounded-full"> </div>
                         <div className="w-4 h-4 bg-white rounded-full"> </div> 
                         <div className="w-4 h-4 bg-white rounded-full"> </div>
                         <div className="w-4 h-4 bg-white rounded-full"> </div>

                         </div>
    </div>
    </>
  )
}

export default Clients