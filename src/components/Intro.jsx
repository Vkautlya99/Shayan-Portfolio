import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mainimage from "../assets/images/naviage.jpg";
import { SiImdb } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import PopularVideoCards from "./PopularVideoCards";

import image1 from "../assets/ActingImages/actingpic1.jpg";
import image2 from "../assets/ActingImages/actingpic2.png";
import image3 from "../assets/ActingImages/actingpic3.png";
import image4 from "../assets/ActingImages/actingpic4.png";
import image5 from "../assets/ActingImages/actingpic5.png";
import image6 from "../assets/ActingImages/actingpic6.png";
import image7 from "../assets/ActingImages/actingpic7.png";
import image8 from "../assets/ActingImages/actingpic8.png";
import image9 from "../assets/ActingImages/actingpic9.png";
import image10 from "../assets/ActingImages/actingpic10.png";

// Modelling Pictures 
import m1 from "../assets/ModellingPictures/moddeling1.jpg"
import m2 from "../assets/ModellingPictures/modelling2.jpg"
import m3 from "../assets/ModellingPictures/modelling3.jpg"
import m4 from "../assets/ModellingPictures/modelling4.jpg"
import m5 from "../assets/ModellingPictures/modelling5.jpg"
import m6 from "../assets/ModellingPictures/modeeling6.jpg"
import m7 from "../assets/ModellingPictures/modelling7.jpg"
import m8 from "../assets/ModellingPictures/modelling8.jpg"
import m9 from "../assets/ModellingPictures/modelling9.jpg"
import m10 from "../assets/ModellingPictures/modelling10.jpg"
import m11 from "../assets/ModellingPictures/modelling11.jpg"
import m12 from "../assets/ModellingPictures/modelling12.jpg"
import m13 from "../assets/ModellingPictures/modelling13.jpg"
import m14 from "../assets/ModellingPictures/modelling14.jpg"
import m15 from "../assets/ModellingPictures/modelling15.jpg"
import m16 from "../assets/ModellingPictures/modelling16.jpg"
import m17 from "../assets/ModellingPictures/modelling17.jpg"
import m18 from "../assets/ModellingPictures/modelling18.jpg"
import m19 from "../assets/ModellingPictures/modelling19.jpg"
import m20 from "../assets/ModellingPictures/modelling20.jpg"
import m21 from "../assets/ModellingPictures/modelling21.jpg"
import m22 from "../assets/ModellingPictures/modelling22.jpg"


// News and Media Images 
import newsImage1 from "../assets/NewsandMediaImages/i1.jpg";
// import newsImage2 from "../assets/NewsandMediaImages/i2.jpg";
import newsImage3 from "../assets/NewsandMediaImages/i3.jpg";
import newsImage4 from "../assets/NewsandMediaImages/i4.jpg";
// import newsImage5 from "../assets/NewsandMediaImages/i5.jpg";
import newsImage6 from "../assets/NewsandMediaImages/i6.jpg";
import newsImage7 from "../assets/NewsandMediaImages/i7.jpg";


import ActingPictures from "./ActingPictures";
import NewsAndMediaCard from "./NewsAndMediaCard";
import ModellingPictures from "./ModellingPictures";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const modellingImages =[
  m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22
]


// News and media items 
// Create an array for news images
const newsImages = [
  newsImage1,
  // newsImage2,
  newsImage3,
  newsImage4,
  // newsImage5,
  newsImage6,
  newsImage7,
  
];


const Intro = () => {
  const videos = [
    { videoId: "uVjAGH-Nodc" ,views :"✨45 Million ➕✨" },
    { videoId: "DHP35SHOU01",views :" ✨22 Million ➕✨", isInstagram: true },
    { videoId: "C9By95CNpPh",views :"✨33 Million ➕✨", isInstagram: true },
    { videoId: "32YJsVAcDng" ,views :""},
    { videoId: "ONlkCVFWQSA",views :"" },
    { videoId: "DFrulHkRAAJ",views :"", isInstagram: true },
  ];

  useEffect(() => {
    AOS.init({ duration: 1200, once: false, mirror: true });
  }, []);

  return (
    <div className="w-full max-w-[90vw] lg:max-w-[60vw] mx-auto overflow-x-hidden my-10 border-gray-200 shadow-lg rounded-xl p-6 bg-gradient-to-b from-white to-gray-100">
      <h1
        className="text-center uppercase text-5xl lg:text-6xl text-gray-800 font-extrabold font-mono tracking-wide drop-shadow-lg"
        data-aos="fade-down"
      >
        Shayan Krishna
      </h1>
      <div className="text-center hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer hover:text-yellow-400 whitespace-nowrap">
      <a href="https://www.instagram.com/theblondedesi?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" className=" text-yellow-400 text-md font-medium hover:underline cursor-pointer ">@theblondedesi</a>
      </div>
      <div
        data-aos="flip-right"
        className="lg:w-[35vw] mt-10 mx-auto flex flex-wrap sm:flex-col sm:items-center justify-center gap-6 p-6 border-gray-300 shadow-xl rounded-2xl bg-white"
      >
        {[
          "Hollywood Actor",
          "Published Model",
          "Television Panelist",
          "Social Media Influencer",
        ].map((title, index) => (
          <h3
            key={index}
            className="text-xl lg:text-5xl font-semibold text-yellow-500 font-mono hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer hover:text-yellow-400 whitespace-nowrap text-center"
          >
            {title}
          </h3>
        ))}
      </div>

      <div
        className="mt-8 flex flex-wrap justify-center gap-10 bg-black p-4 rounded-lg shadow-lg"
        data-aos="flip-left"
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
        data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      >
        <img
          src={mainimage}
          alt="Shayan Krishna"
          className="w-[60vw] lg:w-[30vw] rounded-xl border-4 border-yellow-500 shadow-xl 
            cursor-pointer hover:scale-105 duration-500 transition-transform transform-flat "
        />
      </div>
      <h3
        className="text-4xl font-bold text-gray-800 text-center"
        data-aos="fade-left"
      >
        WHO IS SHAYAN KRISHNA?
      </h3>
      <p
        className="text-lg text-gray-700 text-center px-6 my-4"
        data-aos="fade-right"
      >
        Shayan Krishna is an actor, model, and well-known social media
        influencer with a following of over 40 million. He has appeared in
        various projects, including the popular Netflix series{" "}
        <strong>Monsters</strong>. In addition, Shayan has been featured on top
        global news channels such as CNN, Hindustan Times, News 18, TV9
        Bharatvarsh, India TV, and Times Now Navbharat due to his humanitarian
        efforts and activism. He has also represented several brands in modeling
        and participated in over 60 ramp walks for different designers.
      </p>
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

      {/* Modelling Pictures  */}
      <div className="w-full max-w-[90vw] lg:max-w-[60vw] mx-auto overflow-x-hidden  border-gray-200 rounded-xl p-6 bg-gradient-to-b from-white to-gray-100">

      <ModellingPictures images={modellingImages} />
    </div>

      {/* Acting Section */}

      <h2
        className="text-4xl font-bold text-gray-800 my-10 text-center"
        data-aos="fade-left"
      >
        Acting Journey
      </h2>
      <p className="text-lg text-gray-700 text-center px-6" data-aos="fade-up">
        Graduated with an Acting degree from America’s Biggest Acting College
        <br />
        <strong>“American Musical and Dramatic Academy (AMDA)”</strong> in 2024
      </p>
      <ul
        className="list-disc pl-6 mt-4 text-gray-700 text-lg leading-8"
        data-aos="fade-up"
      >
        <li>Monsters on Netflix (Extra)</li>
        <li>MAN UP (Lead)</li>
        <li>Waiting For Uber (Lead)</li>
        <li>Drug Kills (Lead)</li>
        <li>Sex Life of College Girls (Background)</li>
        <li>
          <strong>Bollywood Debut: THE UNKNOWN MIND (Coming Soon)</strong>
        </li>
      </ul>
      <div className="w-full max-w-[90vw] lg:max-w-[60vw] mx-auto overflow-x-hidden border-gray-200 rounded-xl  bg-gradient-to-b from-white to-gray-100">
        {/* Acting Images Section */}

        <ActingPictures images={images} />
      </div>

      {/* Acting Images Section */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 items-center justify-center"
        data-aos="fade-up"
      >
        <ActingPictures />
      </div>

      {/* News and Media  */}
      <h2
        className="text-4xl font-bold text-gray-800 mb-3 text-center"
        data-aos="fade-left"
      >
        Interviews & Media Presence
      </h2>
      <p
        className="text-lg text-gray-700 text-center px-6 mb-4"
        data-aos="fade-right"
      >
        Shayan Krishna has been interviewed by major media houses, including
        Hindustan Times, CNN, Republic, and AsiaNet, where he spoke about his
        journey in the entertainment industry and his mission to represent South
        Asian culture. He also promotes unity with his activism and humanitarian
        work.
      </p>
      
      {/* Pass the newsImages array as a prop to NewsAndMediaCard */}
      <NewsAndMediaCard images={newsImages} />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mt-4">
        Most Popular Videos
      </h1>
      {videos.map((video, views, index) => (
        <div data-aos="fade-in" key={index}>
          <PopularVideoCards {...video} />
        </div>
      ))}
    </div>
  );
};

export default Intro;
