import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import founderImage from "../assets/images/founderimageVnY.jpg";
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { IoMailOpen } from "react-icons/io5";

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
    <footer className="select-none bg-gradient-to-r from-teal-300 to-teal-700 text-white py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNmMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNnptMTIgMTJjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTZjLTMuMzE0IDAtNiAyLjY4Ni02IDZzMi42ODYgNiA2IDZ6TTI0IDQyYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2eiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjQiLz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - About */}
          <div data-aos="fade-right" className="text-left">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold">VnY Corporation</h3>
              <img
                src={founderImage} 
                alt="VnY Logo" 
                className="w-12 h-12 ml-2 rounded-full hover:scale-110 transition-all duration-500" 
              />
            </div>
            <p className="text-sm text-gray-200 mb-4">
              Providing exceptional business solutions and services tailored to meet your unique needs and help your business succeed.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/vikram.ranawat.9655" 
                 className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://x.com/VKautalya?t=eu8aHR4gkQBoTA_hYzT-VQ&s=09" 
                 className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/thisisvrk?igsh=cm9heTVkYm9mZWx3" 
                 className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300">
                <FaInstagram className="w-4 h-4" />
              </a>

              <a href="mailto:vikramkautlya2020@gmail.com" className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center hover:bg-yellow-400 transition-colors duration-300">
                <IoMailOpen className="w-4 h-4"/>
                 </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div data-aos="fade-up" className="text-left">
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-yellow-400"></span>
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-yellow-300 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/photos" className="text-gray-200 hover:text-yellow-300 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Photos
                </Link>
              </li>
              <li>
                <Link to="/workandachievements" className="text-gray-200 hover:text-yellow-300 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Work & Achievements
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-yellow-300 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-200 hover:text-yellow-300 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div data-aos="fade-left" className="text-left">
            <h3 className="text-lg font-bold mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-yellow-400"></span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaEnvelope className="w-4 h-4 mr-3 mt-1 text-yellow-300" />
                <a href="mailto:contact@shayankrishna.com" className="text-gray-200 hover:text-yellow-300 transition-colors duration-300">
                  contact@shayankrishna.com
                </a>
              </div>
              <a href="mailto:contact@shayankrishna.com">
                <button className="mt-3 px-6 py-2 bg-yellow-400 text-teal-800 font-bold rounded-full hover:bg-white hover:text-teal-700 transition-all duration-300 shadow-lg">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-teal-400 opacity-30 my-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {currentYear} <span className="font-bold">VnY Corporation</span>. All Rights Reserved.
          </p>
          <p data-aos="zoom-in" className="text-sm mt-2 md:mt-0">
            Contact For Your{" "}
            <a href="https://www.instagram.com/thisisvrk?igsh=cm9heTVkYm9mZWx3" className="font-bold text-yellow-300 hover:underline">
              Business Needs
            </a>
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;