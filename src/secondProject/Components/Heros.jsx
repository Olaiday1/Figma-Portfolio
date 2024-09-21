const Heros = () => {
  return (
    <div className="flex w-full flex-wrap justify-center items-center bg-ashWhite pb-20">
        <div className="flex flex-wrap justify-center  container items-center"> 
          <div className="flex  flex-col items-center justify-center">
            <div className="flex justify-center items-center gap-2 pl-2 pt-10">
                <h1 className="text-3xl">Make Your Website Way </h1>
                <span className="text-yellow flex gap-2 text-3xl">Faster !</span>
            </div>
            <div className="my-4 text-black justify-center items-center flex px-96"><p className="">Hello there, your website is slow. And each second it takes to load your website loses you 60% more customers. We make your website FAST! Request a free analysis below.</p>
            </div>
            </div>
            <div className="bg-white pt-10 pb-10 justify-center items-center ">
            <div className="grid flex-col ">
              <div className="flex flex-row pl-20">
                <div className="w-96 pb-6 "><input type="text" id="Input" placeholder="Name" className="bg-ashWhite w-72 h-12 p-4 ml-8"/></div>
              <div className="w-96 "><input type="text" id="Input" placeholder="Email" className="bg-ashWhite w-72 h-12 p-4 mr-8"/></div>
              
              </div>
               
               <div className="flex flex-row pl-20">
                <div className="w-96 pb-6"><input type="text" id="Input" placeholder="Name of business" className="bg-ashWhite w-72 h-12 p-4 ml-8"/></div>
               <div className="w-96 "><input type="text" id="Input" placeholder="Website URL" className="bg-ashWhite w-72 h-12 p-4 "/></div>
               
               </div>
                
            </div>
            <div className="pl-96">
            <div className="bg-yellow justify-center items-center py-4 w-40 h-10 pb-10 px-12 rounded"><button className="text-white">Analyze</button></div>
            </div>
            </div>
        </div>


    </div>
  )
}

export default Heros