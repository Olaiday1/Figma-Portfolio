import Man1 from "../assets/Images/Man1.png";
const Navbar = () => {
  return (
    <nav className="bg-customBlue text-white m-0">
        <div className="flex flex-shrink-0 items-center ">
            <h3 className="flex p-20">IWMYWF</h3>
        
            <div className=" mx-auto container flex justify-end gap-4 text-l px-20">
            <ul className="flex items-center justify-center gap-8 ">
                <li><a href="">Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Works</a></li>
                <li><a href="">Blog</a></li>
                
                 <button className="text-white items-center justify-center bg-pink py-2 px-2 rounded-sm">Get in Touch</button>
            </ul>
        </div>
        </div>
        <hr className=" border-customBlue"/>
        <div className="bg-customBlue border-customBlue pb-4 lg:mb-35 px-20 my-10 ">
            <div className="flex flex-wrap">
                <div className="max-w-md mx-20">
                <div className="flex flex-col items-center lg:items-start">
               <div className="flex justify-between items-center">
                <h1 className=" text-4xl text-white ">Create your website  
               <span className="flex gap-2 ">in  <span className="text-pink  "> less than 12days</span> </span> 
            </h1>
            </div>
                <div className="my-2 text-white "><p className="justify-start items-start flex  ">Hey, I’m Mark Essein. A fullstack web developer with 7 years experience building successful websites and applications. I can build a high converting website for you as quick as possible!</p></div>
            
                </div>
                <div className="my-2 py-4 w-40 h-10 pb-10 px-7 rounded bg-pink">
                    <button className="justify-center items-center text-white">Get in touch</button>
                </div>
                </div>
                <div className="relative mx-36 w-40 h-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                <div className=" w-30 h-30 bg-ash opacity-50 rounded-full"> </div>
                    <img src={Man1} alt="man" className="absolute z-10 object-cover w-60 h-60 rounded-full " />
                    </div>

                </div>
            </div>
        </div>
        <br className="bg-transparent" />
    </nav>

  
)
}

export default Navbar