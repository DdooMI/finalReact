import About from "./Components/About"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Product from "./Components/Product"
import Services from "./Components/services"
import Testimonials from "./Components/testimonials"


function App() {

  return (
    <>
      <Nav/>
      <Hero  title="Designing Spaces You&apos;ll Love" discr="Bringing harmony and elegance to your home interiors." />
      <About/>
      <Product/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
