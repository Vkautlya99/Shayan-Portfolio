import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

import AboutCard from "../components/AboutCard";
import headshotGif from "../assets/images/icons8-film-roll.gif";
import moreImages from "../assets/images/icons8-photo-gallery.gif";

import headshot1 from "../assets/images/headshot1.jpg"
import headshot2 from "../assets/images/headshot2.jpg"


import about1image from "../assets/images/about1.jpg";
import about2image from "../assets/images/about2.jpg";
import about3image from "../assets/images/about3.jpg";
import about4image from "../assets/images/about4.jpg";
import about5image from "../assets/images/about5.jpg";
import about6image from "../assets/images/about6.jpg";
import about7image from "../assets/images/about7.jpg";
import about8image from "../assets/images/about8.jpg";
import about9image from "../assets/images/about9.jpg";
import about10image from "../assets/images/about10.jpg";
import about11image from "../assets/images/about11.jpeg";
import about12image from "../assets/images/about12.jpg";
import about13image from "../assets/images/about13.jpeg";
import about14image from "../assets/images/about14.jpg";
import about18image from "../assets/images/about18.jpeg";
import about20image from "../assets/images/about20.jpg";
import about21image from "../assets/images/about21.jpg";
import about22image from "../assets/images/about22.jpg";
import about23image from "../assets/images/about23.jpg";
import about24image from "../assets/images/about24.jpg";
import about25image from "../assets/images/about25.jpg";
import mi1 from "../assets/MoreImages/morepic1.jpg"
import mi2 from "../assets/MoreImages/morepic2.jpg"
import mi3 from "../assets/MoreImages/morepic3.jpg"
import mi4 from "../assets/MoreImages/morepic4.jpg"
import mi14 from "../assets/MoreImages/morepic14.jpg"
import mi5 from "../assets/MoreImages/morepic5.jpg"
import mi6 from "../assets/MoreImages/morepic6.jpg"
import mi7 from "../assets/MoreImages/morepic7.jpg"
import mi8 from "../assets/MoreImages/morepic8.jpg"
import mi9 from "../assets/MoreImages/morepic9.jpg"
import mi10 from "../assets/MoreImages/morepic10.jpg"
import mi11 from "../assets/MoreImages/morepic11.jpg"
import mi12 from "../assets/MoreImages/morepic12.jpg"
// import mi13 from "../assets/MoreImages/morepic13.jpg"
import mi15 from "../assets/MoreImages/morepic15.jpg"
import mi16 from "../assets/MoreImages/morepic16.jpg"
import mi17 from "../assets/MoreImages/morepic17.jpg"
import mi18 from "../assets/MoreImages/morepic18.jpg"
import mi19 from "../assets/MoreImages/morepic19.jpg"
import mi20 from "../assets/MoreImages/morepic20.jpg"
import mi21 from "../assets/MoreImages/morepic21.jpg"
import mi22 from "../assets/MoreImages/morepic22.jpg"
import mi23 from "../assets/MoreImages/morepic23.jpg"
import mi24 from "../assets/MoreImages/morepic24.jpg"
import mi25 from "../assets/MoreImages/morepic25.jpg"
import mi26 from "../assets/MoreImages/morepic26.jpg"
import mi27 from "../assets/MoreImages/morepic27.jpg"
import mi28 from "../assets/MoreImages/morepic28.jpg"
import mi29 from "../assets/MoreImages/morepic29.jpg"
// import mi30 from "../assets/MoreImages/morepic30.jpg"
import mi31 from "../assets/MoreImages/morepic31.jpg"
import mi32 from "../assets/MoreImages/morepic32.jpg"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const HeadShotimages = [
    headshot1,
    headshot2,
    // about1image,
    about9image,
    about11image,
    
    about13image,
    about18image,
  ];

  const MoreImages = [
    mi23,mi6,mi7,mi20,mi21,about2image, about3image, about4image, about5image,
    about6image, about7image, about8image,about10image,about12image, about14image,
    about20image, about21image,
    about22image, about23image, about24image, about25image,
    mi1,mi2, mi3,mi4,mi5,mi8, mi9,mi10,mi11,mi12,mi14,mi15,mi16,mi17,mi18, mi19,mi22,mi24,mi25,mi26,mi27,mi28,mi29,mi31,mi32
  ];

  return (
    <>
      <Helmet>
        <title>About Shayan Krishna - Model, Actor & Activist</title>
        <meta
          name="description"
          content="Learn more about Shayan Krishna, an internationally published model, actor, and activist. Featured in major media outlets worldwide."
        />
        <meta name="author" content="Shayan Krishna" />
      </Helmet>

      {/* Head Shots Section with Animation */}
      <div 
        className="flex items-center justify-center gap-2" 
        data-aos="fade-down"
      >
        <h1 className="text-center text-5xl font-bold hover:font-gray-800 my-8 mb-8">
          Head Shots
        </h1>
        <img src={headshotGif} alt="" className="text-xl" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 p-4 ">
        {HeadShotimages.map((image, index) => (
          <div 
            key={index}
            className="lg:w-[20vw] aspect-square mb-4 "
            data-aos="fade-up" data-aos-delay={index * 150}
          >
            <AboutCard imageUrl={image} altText={`Image ${index + 1}`} rounded="rounded-3xl" />
          </div>
        ))}
      </div>

      {/* Bio Section */}
      <div 
        className="flex items-center justify-center gap-4" 
        data-aos="fade-down"
      >
        <h2 className="text-4xl font-extrabold mb-4 text-center">__Bio__</h2>
        <img 
          data-aos="flip-left" 
          src={about12image} 
          alt="" 
          className="w-15 h-15 rounded-full"
        />
      </div>

      <div 
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex justify-between max-w-4xl mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-gradient-to-r from-teal-300 to-teal-700 text-white text-lg mb-5 "
      >
        <ul className="space-y-2 text-center">
          <li><strong>Sex:</strong> Male</li>
          <li><strong>Height:</strong> 6'1</li>
          <li><strong>Hair Color:</strong> Blonde</li>
          <li><strong>Eye Color:</strong> Brown</li>
          <li><strong>Weight:</strong> 143 lbs</li>
          <li><strong>Waist:</strong> 30</li>
          <li><strong>Shoe Size:</strong> 11</li>
          <li><strong>Languages:</strong> English, Urdu, Hindi, Spanish, Punjabi, Sindhi</li>
        </ul>
        <img data-aos="zoom-out-down" src={about1image} alt="" className="rounded-3xl hidden md:block mb-10" />
      </div>

      {/* More Images Section with Animation */}
      <div 
        className="flex items-center justify-center gap-4" 
        data-aos="fade-down"
      >
        <h1 className="text-center text-5xl font-bold my-8">More Images</h1>
        <img src={moreImages} alt="" className="w-10 h-10 lg:w-15 lg:h-15 rounded-full mt-4" />
      </div>

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">
        {MoreImages.map((image, index) => (
          <div 
            key={index}
            className="lg:w-[20vw] rounded-4xl aspect-square"
            data-aos="fade-up" data-aos-delay={index * 100}
          >
            <AboutCard imageUrl={image} altText={`More Image ${index + 1}`} rounded="rounded-3xl" />
          </div>
        ))}
      </div>
    </>
  );
};

export default About;