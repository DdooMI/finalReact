import { Route, Routes } from 'react-router-dom'
import Footer from "./Components/Footer"
import Nav from "./Components/Nav"
import AboutPage from "./Pages/AboutPage"
import IndexPage from "./Pages/IndexPage"

function App() {

  return (
    <>
      <Nav/>
      <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
