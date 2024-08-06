import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/horizontallogo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
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
          <Link to="/browse" className="my-2 md:my-0">
            Home
          </Link>
          <Link to="/details/:name" className="my-2 md:my-0">
            Services
          </Link>
          <Link to="/care-plan" className="my-2 md:my-0">
            Care Plan
          </Link>
          <Link to="/blog" className="my-2 md:my-0">
            Blog
          </Link>
          <Link to="/about-us" className="my-2 md:my-0">
            About
          </Link>
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
