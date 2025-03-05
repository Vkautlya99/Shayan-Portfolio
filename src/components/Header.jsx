import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import navimage from "../assets/images/naviage.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true, once: false });
  }, []);

  return (
    <nav
      className=" bg-gradient-to-r from-teal-300 to-teal-700 py-3 rounded-4xl my-2 w-[90%] max-w-[930px] mx-auto overflow-x-hidden flex items-center justify-between px-3 shadow-lg"
      data-aos="fade-down"
    >
      {/* Logo/Image */}
      <Link to="/"
        className="flex items-center gap-2 text-gray-700 text-lg font-bold font-mono"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <img
          src={navimage}
          alt="Logo"
          className="w-[45px] h-[45px] rounded-full border-2 border-gray-400 shadow-md hover:scale-115 transition-transform duration-500"
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
        Shayan Krishna
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-3 lg:gap-16 px-2 text-md">
        {[
          { name: "Home", path: "/" },
          { name: "Photos", path: "/photos" },
          { name: "Contact", path: "/contact" }
        ].map((item, index) => (
          <Link key={item.name} to={item.path} data-aos="fade-left" data-aos-delay={index * 200}>
            <h3 className="font-bold text-gray-300 hover:text-white hover:underline cursor-pointer hover:scale-110 transition-transform duration-300">
              {item.name}
            </h3>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;




