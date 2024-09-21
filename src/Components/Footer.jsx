import { IoCall } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import WaveAnimation from "./WebAnimation";
const Footer = () => {
  return (
    <>
      <WaveAnimation />
      <div className=" w-[80%] flex flex-row  flex-wrap justify-between mx-auto text-start max-sm:gap-5 max-md:justify-start my-10">
        <div>
          <h3 className="footerText">24/7 SUPPORT</h3>
          <div className=" flex flex-row items-center gap-2">
            <i className=" text-lg footerLink">
              <IoCall />
            </i>
            <a className="footerLink" href="tel:+914035721515">
              +91 40 35721515
            </a>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <i className=" text-lg footerLink">
              <IoMdMailUnread />
            </i>
            <a className="footerLink" href="mailto: vikrant@clinfinite.com">
              vikrant@clinfinite.com
            </a>
          </div>
        </div>
        <div>
          <h3 className="footerText">QUIK LINK</h3>
          <div className="flex  flex-row justify-between gap-10">
            <div className="flex flex-col footerLink">
              <a href="about">About</a>
              <a href="career">Careers</a>
              <a href="blog">Blog</a>
            </div>
            <div className="flex flex-col footerLink">
              <a href="sevices">Services</a>
              <a href="events">Events</a>
              <a href="contact">Contact</a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="footerText">OUR SERVICES</h3>
          <div className=" flex flex-col footerLink">
            <a href="">Clinical Solutions</a>
            <a href=""> Project and Site Solutions</a>
            <a href="">Biometrics Solutions</a>
            <a href="">Bio-specimen Solutions</a>
          </div>
        </div>
        <div className="">
          <h3 className=" footerText">Newsletter signup</h3>
          <div className=" border border-black flex items-center w-[310px] max-md:w-[250px] rounded ">
            <i className=" text-xl footerInput p-2  rounded-l">
              <IoMail />
            </i>
            <input
              type="text"
              name=""
              id=""
              placeholder="Username"
              className="bg-gray-50 px-2 outline-none"
            />
          </div>
          <button className="footerBtn w-[310px]  max-md:w-[250px]  p-2 my-5 rounded hover:bg-green-800">
            Submit
          </button>
        </div>
      </div>
      <div className="footerDown p-1 text-center">
        © Copyright 2023 | Clinfinite Solutions - All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
