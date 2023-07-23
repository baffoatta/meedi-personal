
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar2 from "../components/Navbar2"


function HomeView() {
  return (
    <div className="relative z-0 bg-slate-900 ">
     
     <div className="bg-hero bg-cover bg-no-repeat">
     <Navbar2 />
     <HeroSection />
     </div>
     
      <Footer />
    </div>
  )
}

export default HomeView
