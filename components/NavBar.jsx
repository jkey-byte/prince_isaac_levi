// import { useState } from "react";
import Image from "next/image";
import {
  FaSearch,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsCalendar3 } from "react-icons/bs";
import { RiBook2Line } from "react-icons/ri";
import { LiaUniversitySolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  // const [hamburger, setHamburger] = useState("hidden");
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-evenly max-lg:justify-between items-center p-4">
          <div className="cursor-pointer">
            <Image src="/logo1.png" alt="logo" width={125} height={125} />
          </div>
          <div className="flex items-center">
            <ul className="flex gap-7 mr-10 font-montserrat max-lg:hidden">
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Booking</li>
              <li>Contact</li>
            </ul>
            <div className="bg-primary rounded-full p-5 text-white cursor-pointer ml-10 max-sm:ml-0 max-lg:hidden">
              <FaSearch />
            </div>
            <div className="text-primary lg:hidden cursor-pointer">
              <RxHamburgerMenu size={40} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white font font-montserrat p-5 flex gap-16 justify-end max-lg:justify-center">
        <div className="flex gap-10 max-lg:gap-5">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="">
              <RiBook2Line size={25} />
            </div>
            <p className="hover:text-orange">Books</p>
          </div>

          <div className="w-[1px] h-12 bg-white"></div>

          <div className="flex items-center gap-3 cursor-pointer">
            <div className="">
              <LiaUniversitySolid size={25} />
            </div>
            <p className="hover:text-orange">Books</p>
          </div>

          <div className="w-[1px] h-12 bg-white"></div>

          <div className="flex items-center gap-3 cursor-pointer">
            <div className="">
              <BsCalendar3 size={25} />
            </div>
            <p className="hover:text-orange">Events</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mr-20 max-sm:hidden">
          <FaFacebookF size={25} />
          <FaWhatsapp size={25} />
          <FaLinkedinIn size={25} />
          <FaYoutube size={25} />
          <FaInstagram size={25} />
          <FaXTwitter size={25} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
