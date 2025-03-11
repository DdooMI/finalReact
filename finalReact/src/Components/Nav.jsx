import { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from "../zustand/auth"; // Adjust the path if needed

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, profile, logout } = useAuth();
    const navigate = useNavigate();
    return (
        <header>
            <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-50">
                <div className="container mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold font-playfair logo">
                        Harmony<span className="text-[#C19A6B]">Interiors</span>
                    </div>

                    {/* Desktop Menu (Hidden on md and smaller) */}
                    <ul className="hidden lg:flex space-x-6 text-lg font-medium">
                        <li><NavLink to="/" className="hover:text-[#C19A6B] transition">Home</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-[#C19A6B] transition">About</NavLink></li>
                        {user ? <li><a href="#projects" className="hover:text-[#C19A6B] transition">Projects</a></li> : null}
                        <li><NavLink to="/services" className="hover:text-[#C19A6B] transition">Services</NavLink></li>
                        <li><NavLink to="/contact" className="hover:text-[#C19A6B] transition">Contact</NavLink></li>
                    </ul>

                    {/* Auth Section (Shown on large screens) */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-5">
                                <NavLink to="/profile"><img
                                    src={profile?.photoURL || "../../public/person.gif"}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full object-cover"
                                /></NavLink>
                                <span className="text-lg font-medium">{profile?.name || "User"}</span>
                            </div>
                        ) : (
                            <>
                                <NavLink to="/login" className="px-4 py-2 border border-[#C19A6B] text-[#C19A6B] rounded-lg hover:bg-[#C19A6B] hover:text-white transition">
                                    Log In
                                </NavLink>
                                <NavLink to="/signup" className="px-4 py-2 bg-[#C19A6B] text-white rounded-lg hover:bg-[#A0784A] transition">
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Toggle (Hidden on large screens) */}
                    <div className="lg:hidden flex flex-col space-y-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="w-8 h-1 bg-gray-800"></span>
                        <span className="w-8 h-1 bg-gray-800"></span>
                        <span className="w-8 h-1 bg-gray-800"></span>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu (Shown when menuOpen is true) */}
            <div className={`${menuOpen ? 'flex' : 'hidden'} lg:hidden z-50 flex-col items-center space-y-4 text-lg font-medium text-center bg-white/90 py-4 shadow-md absolute top-[72px] left-0 w-full`}>
                <NavLink to="/" className="hover:text-[#C19A6B] transition" onClick={() => setMenuOpen(!menuOpen)}>Home</NavLink>
                <NavLink to="/about" className="hover:text-[#C19A6B] transition" onClick={() => setMenuOpen(!menuOpen)}>About</NavLink>
                <a href="#projects" className="hover:text-[#C19A6B] transition" onClick={() => setMenuOpen(!menuOpen)}>Projects</a>
                <NavLink to="/services" className="hover:text-[#C19A6B] transition" onClick={() => setMenuOpen(!menuOpen)}>Services</NavLink>
                <NavLink to="/contact" className="hover:text-[#C19A6B] transition" onClick={() => setMenuOpen(!menuOpen)}>Contact</NavLink>

                {user ? (
                    <button onClick={()=>{logout(navigate);setMenuOpen(!menuOpen); }} className="text-[#C19A6B] hover:text-black ">Logout</button>
                ) : (
                    <>
                        <NavLink to="/login" className="text-[#C19A6B] hover:text-black">Log In</NavLink>
                        <NavLink to="/signup" className="text-[#C19A6B] hover:text-black">Sign Up</NavLink>
                    </>
                )}
            </div>
        </header>
    );
}

export default Nav;
