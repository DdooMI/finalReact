function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 flex flex-wrap justify-between">
                {/* About Section */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h3 className="text-2xl font-playfair font-bold">
                        Harmony<span className="text-[#C19A6B]">Interiors</span>
                    </h3>
                    <p className="mt-4 text-gray-400">
                        At Harmony Interiors, we create personalized and elegant interior designs that transform your house into a home. Our passion is bringing your vision to life with our expertise.
                    </p>
                </div>

                {/* Map Section */}
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <h4 className="text-xl font-semibold mb-4">Our Location</h4>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18...(Your Google Maps Embed URL)" 
                        width="100%" 
                        height="200" 
                        className="rounded-md border-0"
                        allowFullScreen 
                        loading="lazy">
                    </iframe>
                </div>

                {/* Quick Links */}
                <div className="w-full md:w-1/3">
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="index.html" className="text-gray-400 hover:text-[#C19A6B] transition">Home</a></li>
                        <li><a href="about.html" className="text-gray-400 hover:text-[#C19A6B] transition">About Us</a></li>
                        <li><a href="#projects" className="text-gray-400 hover:text-[#C19A6B] transition">Projects</a></li>
                        <li><a href="services.html" className="text-gray-400 hover:text-[#C19A6B] transition">Services</a></li>
                        <li><a href="#blog" className="text-gray-400 hover:text-[#C19A6B] transition">Blog</a></li>
                        <li><a href="contact.html" className="text-gray-400 hover:text-[#C19A6B] transition">Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Social Media & Copyright */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                <div className="flex justify-center space-x-6">
                    <a href="https://facebook.com/yourpage" target="_blank">
                        <img src="src\assets\facebook.svg" alt="Facebook" className="w-6 h-6 hover:opacity-75 transition" />
                    </a>
                    <a href="https://instagram.com/yourprofile" target="_blank">
                        <img src="src\assets\instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-75 transition" />
                    </a>
                    <a href="https://pinterest.com/yourprofile" target="_blank">
                        <img src="src\assets\pinterest.svg" alt="Pinterest" className="w-6 h-6 hover:opacity-75 transition" />
                    </a>
                </div>
                <p className="mt-4 text-gray-500">&copy; 2023 Harmony Interiors. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
