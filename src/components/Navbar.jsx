import { logo } from '../assets';
import  { useState } from 'react';



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <nav className="relative px-4 py-4 flex justify-between items-center bg-emerald-800">
     
      {/* Logo */}
    
      <a className="text-3xl font-bold leading-none" href="#">
        <img className="h-10" src={logo} alt="Oasis Logo"  />
        {/* <svg className="h-10" alt="logo" viewBox="0 0 10240 10240">Happy</svg> */}
      </a>

      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button className="navbar-burger flex items-center text-white p-3" onClick={toggleMenu}>
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${isMenuOpen ? '' : 'hidden'}`}>
        <li>
          <a className="text-md font-bold text-white hover:text-gray-500" href="#">Home</a>
        </li>
        <li className="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li>
          <a className="text-md font-bold text-white " href="#">About Us</a>
        </li>
        <li className="text-black-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li>
          <a className="text-md font-bold text-white hover:text-gray-500" href="#">Services</a>
        </li>
        <li className="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li>
          <a className="text-md font-bold text-white hover:text-gray-500" href="#">Pricing</a>
        </li>
        <li className="text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </li>
        <li>
          <a className="text-md font-bold text-white hover:text-gray-500" href="#">Contact</a>
        </li>
      </ul>

      {/* Sign In and Sign Up buttons */}
      <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-md font-bold text-gray-900 font-bold rounded-xl transition duration-200" href="#">Sign In</a>
      <a className="hidden lg:inline-block py-2 px-6 bg-black hover:bg-blue-600 text-md font-bold text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="navbar-menu relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <svg className="h-12" alt="logo" viewBox="0 0 10240 10240"></svg>
              </a>
              <button className="navbar-close" onClick={toggleMenu}>
                <svg className="h-6 w-6 text-black cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a className="block p-4 text-md font-bold font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                </li>
                <li className="mb-1">
                  <a className="block p-4 text-md font-bold font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
                </li>
                <li className="mb-1">
                  <a className="block p-4 text-md font-bold font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
                </li>
                <li className="mb-1">
                  <a className="block p-4 text-md font-bold font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
                </li>
                <li className="mb-1">
                  <a className="block p-4 text-md font-bold font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
                <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
              </div>
              <p className="my-4 text-xs text-center text-white">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}

export default Navbar;