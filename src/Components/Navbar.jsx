import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialYoutube } from "react-icons/sl";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full navtop fontfaimily py-2 flex justify-between items-center px-4 max-md:hidden">
        <h4 className="fontfaimily">Asia, Europe and North America</h4>
        <ul className="flex justify-center items-center gap-2">
          <li className="border border-white rounded-full p-2 text-sm">
            <a href="">
              <FaTwitter />
            </a>
          </li>
          <li className="border border-white rounded-full p-2 text-sm">
            <a href="">
              <FaFacebookF />
            </a>
          </li>
          <li className="border border-white rounded-full p-2 text-sm">
            <a href="">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="border border-white rounded-full p-2 text-sm">
            <a href="">
              <FaInstagram />
            </a>
          </li>
          <li className="border border-white rounded-full p-2 text-sm">
            <a href="">
              <SlSocialYoutube />
            </a>
          </li>
        </ul>
      </div>

      <nav
        className={`sticky top-0 flex justify-between items-center  w-full  z-40 transition-all duration-300 max-md:bg-white ${
          navbarBg ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="h-[120px] max-md:h-[80px]">
          <img src={logo} alt="Logo" className="h-full" />
        </div>

        <div className="hidden md:flex fontfaimily liFont">
          <ul className="flex flex-row items-center gap-7">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Career</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">
              <IoSearch className="font-bold searchColor" />
            </li>
            <li className="pr-10 cursor-pointer">
              <button className="p-2 bg-green-600 rounded downloadBtn text-white outline-sky-600">
                Download
              </button>
            </li>
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <FaBars className="text-2xl   menu border  bg-white " />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-md fontfaimily liFont">
            <ul className="flex flex-col items-center gap-2 p-2">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Career</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">
                <IoSearch className="font-bold" />
              </li>
              <li className="cursor-pointer">
                <button className="p-2 bg-green-600 rounded downloadBtn text-white outline-sky-600">
                  Download
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
