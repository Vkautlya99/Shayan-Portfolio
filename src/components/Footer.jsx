import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-400 to-teal-700 text-white py-6 text-center relative overflow-hidden">
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-10 blur-2xl"></div>

      <h2 className="text-lg font-semibold">
        &copy; {new Date().getFullYear()} Vikram Kumar. All Rights Reserved.
      </h2>
      <p className="mt-2 text-sm">
        Developed with ❤️ by {"  "}
        <span className="font-bold transition-all duration-300">
        Vikram Kumar
        </span>
      </p>

      {/* Stylish Hover Line Effect */}
      <div className="w-1/3 mx-auto mt-3 h-[2px] bg-white/50 hover:w-2/3 transition-all duration-500"></div>
    </footer>
  );
};

export default Footer;
