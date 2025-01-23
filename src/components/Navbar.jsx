import { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logoP from '../assets/img/logoP.png';
import { LongContext } from './ContextProvider';
import { FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, tNavbar, setLanguage } = useContext(LongContext); // Access context

  const handleClick = () => setNav(!nav);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' }
  ];

  return (
    <nav className={`fixed w-full h-[70px] z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full ">
          {/* Logo */}
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <img src={logoP} alt="logo" className="w-auto h-10 rounded-full" />
          </Link>

        

          
      

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-6 mr-8">
              {links.map(({ id, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    className="text-gray-300 hover:text-secondary cursor-pointer capitalize text-sm tracking-wider font-medium transition-colors"
                  >
                    {tNavbar[link]}
                  </Link>
                </li>
              ))}
            </ul>

        
            
            <select
           onChange={(e) => setLanguage(e.target.value)}
           className=" text-center px-4 py-2 border border-secondary text-secondary bg-secondary/10 rounded-md text-sm font-medium transition-colors"
         >
           <option className='text-blue-800 font-bold text-sm' value="en">EN</option>
           <option className='text-blue-800 font-bold text-sm ' value="ar">AR</option>
         </select>
        
       
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleClick}
            className="md:hidden text-gray-300 hover:text-secondary transition-colors z-20"
          >
            {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary/98 backdrop-blur-lg md:hidden flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="space-y-8">
          {links.map(({ id, link }) => (
            <li key={id} className="text-center">
              <Link
                onClick={handleClick}
                to={link}
                smooth
                duration={500}
                className="text-xl font-medium text-gray-300 hover:text-secondary capitalize tracking-wider transition-colors"
              >
                {tNavbar[link]}
              </Link>
            </li>
          ))}
          <li className="text-center pt-4">
            
               <select
              onChange={(e) => setLanguage(e.target.value)}
              className=" inline-block px-6 py-3 border border-secondary text-secondary bg-secondary/10 rounded-md text-base font-medium transition-colors"
            >
              <option className='text-blue-800 bg-secondary/10 font-bold text-sm' value="en">EN</option>
              <option className='text-blue-800  bg-secondary/10 font-bold text-sm ' value="ar">AR</option>
            </select>
           
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
