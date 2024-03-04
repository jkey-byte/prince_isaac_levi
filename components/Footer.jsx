import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className="bg-white p-10">
        {/* <div className="absolute top-44 right-[90%]">
          <Image src="/shape2.png" alt="shape" width={250} height={250} />
        </div> */}
        <div className="flex justify-evenly items-center ">
          <Image src="/picture.png" alt="logo" width={300} height={300} />

          <div className="flex gap-16 items-center">
            <div className="w-[3px] h-[200px] bg-primary"></div>
            <div className="">
              <h1 className="font-Palanquin font-bold text-5xl">
                Prince Isaac
              </h1>
              <p className="font-montserrat text-gray-800 text-lg">
                Serial Entrepreneur
              </p>
              <div className="h-[2.5px] w-[80px] bg-primary"></div>
              <p className="font-montserrat my-3">
                I help entrepreneur with essential education
                <br /> for success and business growth through
                <br /> mentorship and in-depth training in
              </p>
              <ul className="font-montserrat">
                <li>Business Branding</li>
                <li>Digital Marketing</li>
                <li>Graphic Design</li>
                <li>Finance Management</li>
                <li>Money Market</li>
              </ul>
            </div>
            <div className="w-[3px] h-[200px] bg-primary"></div>
          </div>

          <div className="">
            <Image alt="logo" src="/logo1.png" width={200} height={200} />
            <div className="flex justify-between pt-3">
              <div className="text-white bg-primary p-3 rounded-full">
                <FaFacebookF />
              </div>
              <div className="text-white bg-primary p-3 rounded-full">
                <FaXTwitter />
              </div>
              <div className="text-white bg-primary p-3 rounded-full">
                <FaLinkedinIn />
              </div>
              <div className="text-white bg-primary p-3 rounded-full">
                <FaInstagram />
              </div>
            </div>
            <h1 className="font-montserrat tracking-widest">
              Levi Prince Isaac
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[200px] mt-5">
          <div className="flex items-center gap-3">
            <div className="text-white bg-primary p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <p>+234 813 796 5176</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-white bg-primary p-3 rounded-full">
              <BsGlobe />
            </div>
            <p>
              princeisaaclevi08@gmail.com <br />
              www.princeisaac.com
            </p>
          </div>
        </div>
        {/* <div className="absolute">
          <Image src="/shape1.png" alt="shape" width={250} height={250} />
        </div> */}
      </div>
      <p className="text-right font-montserrat text-gray-500">
        Designed By Levi John Favour
      </p>
    </>
  );
};

export default Footer;
