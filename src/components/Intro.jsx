import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mainimage from "../assets/images/naviage.jpg";
import { SiImdb } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import PopularVideoCards from "./PopularVideoCards";

const Intro = () => {
  const videos = [
    { videoId: "uVjAGH-Nodc" },
    { videoId: "Ntu8CvaxK2w" },
    { videoId: "32YJsVAcDng" },
    { videoId: "ONlkCVFWQSA" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: false, mirror: true });
  }, []);

  return (
    <div className="w-full max-w-[90vw] lg:max-w-[60vw] mx-auto overflow-x-hidden my-10 border-gray-200 shadow-lg rounded-xl p-6 bg-gradient-to-b from-white to-gray-100">
      <h1
        className="text-center uppercase text-5xl lg:text-6xl text-gray-800 font-extrabold font-mono mb-8 tracking-wide drop-shadow-lg"
        data-aos="fade-down"
      >
        Shayan Krishna
      </h1>

      <div
        className="flex flex-col md:flex-row justify-around items-center bg-gray-950 p-6 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <div
          className="text-white text-lg space-y-3 text-mono"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <p className="transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <strong>Name:</strong> Shayan Krishna
          </p>
          <p className="transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <strong>Born:</strong> 28 September, 2004
          </p>
          <p className="transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <strong>Place of Birth:</strong> Karachi, Pakistan
          </p>
          <p className="transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <strong>Residing Country:</strong> United States of America (USA)
          </p>
          <p className="transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <strong>State:</strong> Los Angeles, California - 90001
          </p>
          <p className="transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <strong>Height:</strong> 6'1" (1.85 m)
          </p>
          <p className="transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <strong>Weight:</strong> 70 KG
          </p>
          <p className="transform transition-all duration-500 hover:scale-105 hover:shadow-lg">
            <strong>Favorite Actor:</strong> Shahrukh Khan & Tom Cruise
          </p>
        </div>

        <img
          src={mainimage}
          alt="Shayan Krishna"
          className="w-[60vw] lg:w-[30vw] rounded-xl border-4 border-yellow-500 shadow-xl hover:scale-105 transition-transform duration-500"
          data-aos="zoom-in"
        />
      </div>

      {/* Modeling Section */}
      <h2
        className="text-4xl font-bold text-gray-800 my-10 text-center"
        data-aos="fade-left"
      >
        Modeling Career
      </h2>
      <p
        className="text-lg text-gray-700 text-center px-6"
        data-aos="fade-right"
      >
        Shayan Krishna has been featured in several international fashion
        magazines and has walked the ramp for renowned fashion designers across
        the globe. His ability to represent South Asian culture on a global
        stage has made him a recognized name in the fashion industry.
      </p>

      {/* Acting Section */}
      <h2
        className="text-4xl font-bold text-gray-800 my-10 text-center"
        data-aos="fade-left"
      >
        Acting Journey
      </h2>
      <ul
        className="list-disc pl-6 mt-4 text-gray-700 text-lg leading-8"
        data-aos="fade-up"
      >
        <li>
          Background Actor in{" "}
          <strong>"Sex Life of College Girls" (Comedy-Drama TV series)</strong>
        </li>
        <li>
          Featured Actor in the short film <strong>"MAN UP"</strong>
        </li>
        <li>
          Recognized for his compelling screen presence and natural acting
          talent.
        </li>
      </ul>

      {/* Interviews Section */}
      <h2
        className="text-4xl font-bold text-gray-800 my-10 text-center"
        data-aos="fade-left"
      >
        Interviews & Media Presence
      </h2>
      <p
        className="text-lg text-gray-700 text-center px-6"
        data-aos="fade-right"
      >
        Shayan Krishna has been interviewed by major media houses, including
        Hindustan Times, CNN, Republic, and AsiaNet, where he spoke about his
        journey in the entertainment industry and his mission to represent South
        Asian culture.
      </p>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 my-10 text-center">
        Most Popular Videos
      </h1>
      {videos.map((video, index) => (
        <div data-aos="fade-in" key={index}>
          <PopularVideoCards {...video} />
        </div>
      ))}
    </div>
  );
};

export default Intro;
