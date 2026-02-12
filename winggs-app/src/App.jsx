import Footer from "./compt/Footer"
import Highilights, { Highilight2 } from "./compt/Highilights"
import Home, { HomeFooter } from "./compt/Home"
import Nav from "./compt/Nav"
import Services from "./compt/Services"


function App() {

  return (
    <>
    <Nav />
    <Home />
    <HomeFooter />
    <Highilights />
    <Services />
    <Highilight2 />

    <hr />
    <Footer />
    </>
  )
}

export default App
