import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import logo from "../../assets/horizontallogo.svg"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [jwtToken, setJwtToken] = useState(null);
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const signOut = () => {
    Cookies.remove("jwtToken");
    setJwtToken(null);
  };

  return (
    <div
      className={`fixed top-0 left-0 md:w-full shadow-md sm:w-[390px] h-20  z-50 ${
        scrolled ? "bg-white text-black " : "bg-white text-[#18b8b0]"
      } transition-colors duration-300 ease-in-out ${scrolled && "shadow-lg"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        <Link to="/">
        <img className="w-52" src={logo}></img>
        </Link>
        <nav
          className={`${
            showMobileMenu
              ? "fixed inset-0 h-screen w-full md:w-3/4 bg-blue-400 flex flex-col items-center justify-center z-40"
              : "hidden"
          } ${
            scrolled ? "text-black" : "text-text-pink-400"
          } md:flex md:flex-row md:items-center md:space-x-8`}
        >
          <Link to="/browse" className=" my-2 md:my-0">
            Home
          </Link>
          <Link to="/details/:name" className=" my-2 md:my-0">
            Services
          </Link>
          <Link to="/care-plan" className=" my-2 md:my-0">
            Care Plan
          </Link>
          <Link to="/blog" className=" my-2 md:my-0">
            Blog
          </Link>
          <Link to="/about-us" className=" my-2 md:my-0">
            About
          </Link>
          {jwtToken ? (
            <>
              <Link to="/dashboard" className=" my-2 md:my-0">
                Dashboard
              </Link>
              <Button
                className="bg-btn-1 hover:bg-blue-800  my-2 md:my-0"
                onClick={signOut}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className=" my-2 md:my-0">
                Sign In
              </Link>
              <Link to="/register">
                <Button className="bg-btn-1 hover:bg-btn-1 my-2 md:my-0">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </nav>
        <div
          className="md:hidden cursor-pointer  ml-64 p-4"
          onClick={toggleMobileMenu}
        >
          ☰
        </div>
      </div>
    </div>
  );
};

export default Header;
