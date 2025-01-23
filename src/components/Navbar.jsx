import { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logoP from '../assets/img/logoP.png';
import { LongContext } from './ContextProvider';
import { FaGlobe } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, tNavbar, setLanguage } = useContext(LongContext);
  const isArabic = language === 'ar';

  const handleClick = () => {
    setNav(!nav);
    document.body.style.overflow = !nav ? 'hidden' : 'unset';
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'skills', label: 'Skills' },
    { id: 4, link: 'projects', label: 'Projects' },
    { id: 5, link: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed w-full h-[70px] z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <img src={logoP} alt="logo" className="w-auto h-10 rounded-full" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <ul className={`flex ${isArabic ? 'space-x-reverse' : 'space-x-6'} ${isArabic ? 'ml-8 gap-4' : 'mr-8'}`}>
              {links.map(({ id, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth
                    duration={500}
                    offset={-70}
                    className={`text-gray-300 hover:text-secondary cursor-pointer capitalize text-sm tracking-wider font-medium transition-colors gap-4 ${
                      isArabic ? 'font-arabic text-right' : ''
                    }`}
                  >
                    {tNavbar[link]}
                  </Link>
                </li>
              ))}
            </ul>

            <select
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
              className={`text-center px-4 py-2 border border-secondary text-secondary bg-secondary/10 rounded-md text-sm font-medium transition-colors hover:bg-secondary/20 ${
                isArabic ? 'font-arabic' : ''
              }`}
            >
              <option className="text-blue-800 font-bold text-sm bg-primary" value="en">EN</option>
              <option className="text-blue-800 font-bold text-sm bg-primary font-arabic" value="ar">ع</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleClick}
            className="md:hidden text-gray-300 hover:text-secondary transition-colors z-20"
            aria-label={nav ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary/95 backdrop-blur-lg md:hidden flex flex-col justify-center items-center transition-all duration-300 ${
          nav 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible translate-y-[-100%]'
        }`}
      >
        <ul className="space-y-8 w-full px-6">
          {links.map(({ id, link }) => (
            <li key={id} className={`text-center ${isArabic ? 'text-right' : 'text-left'}`}>
              <Link
                onClick={handleClick}
                to={link}
                smooth
                duration={500}
                offset={-70}
                className={`text-xl font-medium text-gray-300 hover:text-secondary capitalize tracking-wider transition-colors inline-block w-full py-2 ${
                  isArabic ? 'font-arabic' : ''
                }`}
              >
                {tNavbar[link]}
              </Link>
            </li>
          ))}
          <li className="text-center pt-4">
            <select
              onChange={(e) => setLanguage(e.target.value)}
              value={language}
              className={`inline-block px-6 py-3 border border-secondary text-secondary bg-secondary/10 rounded-md text-base font-medium transition-colors hover:bg-secondary/20 ${
                isArabic ? 'font-arabic' : ''
              }`}
            >
              <option className="text-blue-800 font-bold text-sm bg-primary" value="en">EN</option>
              <option className="text-blue-800 font-bold text-sm bg-primary font-arabic" value="ar">ع</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
