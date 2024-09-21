const Abouts = () => {
  return (
    <div>
        <div className="flex flex-col">

            <form action="label">
                <div>
            <div>
                <label htmlFor="form">100%</label>
                <input type="range" id="vol" className="" min={0} max={100}/>
                <p>Optimising Javascript loading time</p>
            </div>

            <div>
                <label htmlFor="form">100%</label>
                <input type="range" id="vol" className="" min={0} max={100}/>
                <p>Speeding up Queries</p>
            </div>


            </div>
            <div>
                <label htmlFor="form">100%</label>
                <input type="range" id="vol" className="" min={0} max={100}/>
                <p>Optimising image loading time</p>
            </div>

            <div>
                <label htmlFor="form">100%</label>
                <input type="range" id="vol" className="" min={0} max={100}/>
                <p>Optimising CSS</p>
            </div>

            <div>
                <label htmlFor="">100%</label>
                <input type="range" id="vol" className="" min={0} max={100}/>
                <p>Optimising Database</p>
            </div>
            </form>
        </div>

        <div className="flex flex-wrap px-11 justify-end items-end ">
            <div className="w-full lg:w-1/2 ">
                <div className="w-full lg:w-1/2 lg:p-8" >
                    <h2 className="">About Me</h2>
                </div>
                <div className="h-1 bg-yellow rounded">
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start">
                <p className="my-2 maxw-xl" >My passion for building websites started since 2013 and since then i have helped companies around the world build amazing websites and products that create real value for the business and users.</p>
                    <p className="my-2  maxw-xl "> I enjoy solving problems with clean scalable solutions and I also have a genuine passion for inspiring design.</p> 
                   <p className="my-2 maxw-xl"> I am a fullstack developer focusing on core frontend and backend technologies which include HTML, CSS, Javascript, React and other core languages</p>
            </div>
                
            </div>
            </div>


    </div>
  )
}

export default Abouts