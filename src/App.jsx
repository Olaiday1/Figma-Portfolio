import About from "./components/About"
import Navbar from "./components/Navbar"
import Company from "./components/Company"
import Work from "./components/Work"
import Clients from "./components/Clients"
import Hero from "./components/Hero"
import Project from "./components/Project"
import Footer from "./components/Footer"



const App = () => {
  return (
    <>
    
      <div className="bg-customBlue">
      <Navbar />
    </div>
    <div className="bg-deepBlue">
      <About />
    </div>
    <div className="bg-blueAsh">
      <Company />
    </div>
    <div className="bg-deepBlue">
    <Work />
    </div>
    <div className="bg-blueAsh">
      <Clients />
    </div>
    <div className="customBlue">
      <Project />
    </div>
    <div className="bg-blueAsh">
      <Footer />
    </div>

    </>
  )
}

export default App
