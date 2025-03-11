import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from "./Components/Footer"
import Nav from "./Components/Nav"
import AboutPage from "./Pages/AboutPage"
import ContactPage from './Pages/ContactPage'
import IndexPage from "./Pages/IndexPage"
import ServicePage from './Pages/ServicePage'
import Login from './Pages/LoginPage'
import Signup from './Pages/SignupPage'
import ProfilePage from './Pages/ProfilePage'

function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/profile";

  return (
    <>
      {!hideNavFooter && <Nav />}
      
      <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<ProfilePage />} />
      </Routes>

      {!hideNavFooter && <Footer />}
    </>
  )
}

export default App;
