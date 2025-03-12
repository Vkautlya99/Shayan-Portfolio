import React from "react";
import { Link } from "react-router-dom";
import founderimage from "../assets/images/founderimageVnY.jpg";
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer data-aos="fade-up" className="select-none bg-gradient-to-r from-teal-400 to-teal-700 text-white py-8 text-center relative overflow-hidden">
      {/* Animated Glow Effect */}
      <div data-aos="fade-left" className="flex justify-center space-x-6 mb-4">
        <a href="https://www.facebook.com/vikram.ranawat.9655" className="text-white hover:text-yellow-300 transition-colors duration-300">
          <FaFacebookF className="w-6 h-6" />
        </a>
        <a href="https://x.com/VKautalya?t=eu8aHR4gkQBoTA_hYzT-VQ&s=09" className="text-white hover:text-yellow-300 transition-colors duration-300">
          <FaXTwitter className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com/thisisvrk?igsh=cm9heTVkYm9mZWx3" className="text-white hover:text-yellow-300 transition-colors duration-300">
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>

      <h2 data-aos="fade-right" className="text-xl items-center justify-center font-semibold flex">
        &copy; {currentYear} VnY Corporation
        <img data-aos="flip-right" src={founderimage} alt="" className="w-16 h-10 rounded-bl-full hover:scale-110 transition-all duration-500" />
      </h2>

      <span className="text-sm font-bold hover:text-yellow-400 select-none">All Rights Reserved</span>

      <p data-aos="zoom-in" className="mt-2 text-sm max-w-md mx-auto">
        Contact For Your {" "}
        <a href="https://www.instagram.com/thisisvrk?igsh=cm9heTVkYm9mZWx3">
          <span className="font-bold transition-all duration-300 text-yellow-300 hover:text-white hover:underline cursor-pointer">
            Business Needs
          </span>
        </a>
      </p>

      {/* Contact Button */}
      <a href="mailto: vikramkautlya2020@gmail.com">
        <button data-aos="flip-left" className="mt-4 px-6 py-2 bg-yellow-400 text-white font-bold rounded-full hover:bg-white hover:scale-105 hover:text-teal-700 transition-all duration-300 shadow-lg">
          Get in Touch
        </button>
      </a>
      {/* Stylish Hover Line Effect */}
      <div data-aos="slide-up" className="w-1/3 mx-auto mt-4 h-[2px] bg-white/50 hover:w-2/3 hover:bg-yellow-300/70 transition-all duration-500"></div>

      {/* Navigation Links */}
      <div data-aos="fade-up">
        <h2 data-aos="fade-down" className="text-xl text-white font-semibold cursor-pointer">Shayan Krishna 👇🏻</h2>
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold">
          <Link to="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link>
          <Link to="/photos" className="hover:text-yellow-300 transition-colors duration-300">Photo</Link>
          <Link to="/workandachievements" className="hover:text-yellow-300 transition-colors duration-300">Work & achievement</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-colors duration-300">Contact</Link>
          <Link to="/privacy" className="hover:text-yellow-300 transition-colors duration-300">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
