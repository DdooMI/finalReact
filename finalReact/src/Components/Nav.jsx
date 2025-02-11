import { useState } from "react";
import { NavLink } from 'react-router-dom';

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg shadow-md z-50">
                <div className="container mx-auto px-12 py-7 flex justify-between items-center">
                    <div className="text-2xl font-bold font-playfair logo">
                        Harmony<span className="text-[#C19A6B]">Interiors</span>
                    </div>
                    <ul className="hidden md:flex space-x-6 text-lg font-medium">
                        <li>
                        <NavLink to="/" className="hover:text-[#C19A6B] transition">Home</NavLink>  
                        </li>
                        <li>
                        <NavLink to="/about" className="hover:text-[#C19A6B] transition">About</NavLink>  

                        </li>
                        <li>
                            <a href="#projects" className="hover:text-[#C19A6B] transition">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="services.html" className="hover:text-[#C19A6B] transition">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="contact.html" className="hover:text-[#C19A6B] transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="md:hidden flex flex-col space-y-1 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="w-8 h-1 bg-gray-800"></span>
                        <span className="w-8 h-1 bg-gray-800"></span>
                        <span className="w-8 h-1 bg-gray-800"></span>
                    </div>
                </div>
            </nav>
            <div className={`${menuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center space-y-4 text-lg font-medium text-center bg-white py-4 shadow-md absolute top-[85px] left-0 w-full`}>                
                <a href="#home" className="hover:text-[#C19A6B] transition">Home</a>
                <a href="about.html" className="hover:text-[#C19A6B] transition">About</a>
                <a href="#projects" className="hover:text-[#C19A6B] transition">Projects</a>
                <a href="services.html" className="hover:text-[#C19A6B] transition">Services</a>
                <a href="contact.html" className="hover:text-[#C19A6B] transition">Contact</a>
            </div>
        </header>
    );
}

export default Nav;
