import TopBar from "../utilities/topbar"
import AboutUs from "../utilities/aboutUs"
import Map from "../utilities/MapFooter"
import Footer from "../utilities/footer"

function index() {
  return (
    <div>
       <TopBar/>
       <AboutUs/>
       <Map/>
       <Footer/>
    </div>
  )
}

export default index