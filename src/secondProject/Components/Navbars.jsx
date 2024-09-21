import Flashicon from "../../assets/Icons/Flashicon.svg";

const Navbars = () => {
  return (
    <nav className="bg-ash w-full text-white m-0">
        <div className="flex flex-shrink-0 items-center ">
            <img src={Flashicon} alt="" />
        
            <div className=" mx-auto container flex justify-end gap-4 text-l px-20">
            <ul className="flex items-center justify-center gap-8 ">
                <li><a href="">Home</a></li>
                <li><a href="">About Me</a></li>
                <li><a href="">Works</a></li>
                <li><a href="">Blog</a></li>
                </ul>
            </div>
            </div>
            </nav>
  )
}

export default Navbars