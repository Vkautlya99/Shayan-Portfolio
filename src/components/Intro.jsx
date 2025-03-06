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
  className="lg:w-[35vw] mx-auto flex flex-wrap sm:flex-col sm:items-center justify-center gap-6 p-6 border-gray-300 shadow-xl rounded-2xl bg-white"
  data-aos="zoom-in"
>
  {[
    "Hollywood Actor",
    "Published Model",
    "Television Panelist",
    "Social Media Influencer",
  ].map((title, index) => (
    <h3
      key={index}
      className="text-xl lg:text-5xl font-semibold text-yellow-500 font-mono hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer hover:text-yellow-400"
    >
      {title}
    </h3>
  ))}
</div>


      <div
        className="mt-8 flex flex-wrap justify-center gap-10 bg-black p-4 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        {[
          {
            name: "IMDb",
            url: "https://www.imdb.com/name/nm16441191/",
            icon: <SiImdb />,
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/theblondedesi/?hl=en",
            icon: <FaInstagram />,
          },
          {
            name: "X",
            url: "https://www.instagram.com/theblondedesi/?hl=en",
            icon: <FaXTwitter />,
          },
          {
            name: "YouTube",
            url: "https://www.youtube.com/@ShayanKrishna",
            icon: <IoLogoYoutube />,
          },
        ].map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 text-xl font-bold flex items-center gap-2 hover:text-yellow-400 hover:scale-110 transition-all duration-300"
          >
            {social.icon} {social.name}
          </a>
        ))}
      </div>

      <div
  className="mt-8 flex flex-col md:flex-row justify-around items-center p-4 sm:gap-4"
  data-aos="fade-up"
>
  <img
    src={mainimage}
    alt="Shayan Krishna"
    className="w-[60vw] lg:w-[30vw] rounded-xl border-4 border-yellow-500 shadow-xl 
       cursor-pointer hover:scale-105 duration-500 transition-transform transform-flat "
    
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
