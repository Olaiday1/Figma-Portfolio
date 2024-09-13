const Project = () => {
  return (
    <div className="bg-customBlue text-white pt-20  ">
        <div className="ml-32">
        <div className="  ">
            <div className="flex ">
                <h1 className="text-white text-2xl pb-4">Tell me about your project</h1>
            </div>
          
            <div className="h-1 bg-pink rounded justify-center mb-6 items-center w-64">
                </div>
        </div>


        <div className="flex gap-6 ">

            <div>
                <input type="text" placeholder="Name" className="w-80 bg-blackBlue  py-2 rounded px-2"/>
            </div>

            <div className="">
                <input type="text" placeholder="Email Address" className="w-80 bg-blackBlue  py-2 rounded px-2 "/>
            </div>

        </div>

        <div className=" flex justify-start items-start ">


        <div className="w-full max-w-xxl pr-80 pt-2">
            <textarea className="w-full h-40  bg-blackBlue my-2 rounded p-2" placeholder="Message description"/>
            </div>

            <div className=" pb-6">
            <button className="text-white  "></button>
        </div>

        </div>

        <div className="pb-10 ">
            <button className="text-white bg-pink py-2 rounded px-10 ">send</button>
        </div>
        

    

        </div>
        

    </div>
  )
}

export default Project