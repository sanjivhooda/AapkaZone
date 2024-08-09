import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/horizontallogo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setShowMobileMenu(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  return (
    <div
      className={`fixed top-0 left-0 w-full shadow-md h-20 z-50 ${
        scrolled ? "bg-white text-black shadow-lg" : "bg-white text-[#18b8b0]"
      } transition-colors duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <Link to="/">
          <img className="w-52" src={logo} alt="Logo" />
        </Link>
        <nav
          className={`${
            showMobileMenu
              ? "fixed inset-0 h-screen w-full bg-white flex flex-col items-center justify-center z-40"
              : "hidden"
          } ${
            scrolled ? "text-black" : "text-[#18b8b0]"
          } md:flex md:flex-row md:items-center md:space-x-8`}
        >
          <Link to="/" className="my-2 md:my-0" onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/details/:name" className="my-2 md:my-0" onClick={closeMobileMenu}>
            Services
          </Link>
          <Link to="/care-plan" className="my-2 md:my-0" onClick={closeMobileMenu}>
            Care Plan
          </Link>
          <Link to="/blog" className="my-2 md:my-0" onClick={closeMobileMenu}>
            Blog
          </Link>
          <Link to="/about-us" className="my-2 md:my-0" onClick={closeMobileMenu}>
            About
          </Link>
          {/* Close button for mobile menu */}
          <button
            className="md:hidden absolute top-4 right-4 text-2xl"
            onClick={closeMobileMenu}
          >
            &times;
          </button>
        </nav>
        <div
          className="md:hidden cursor-pointer p-4"
          onClick={toggleMobileMenu}
        >
          ☰
        </div>
      </div>
    </div>
  );
};

export default Header;
