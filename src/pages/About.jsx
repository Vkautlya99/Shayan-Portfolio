import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import AboutCard from '../components/AboutCard';
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
import about15image from "../assets/images/about15.jpg";
import about16image from "../assets/images/about16.jpg";
import about17image from "../assets/images/about17.avif";
import about18image from "../assets/images/about18.jpeg";
import about19image from "../assets/images/about19.jpg";
import about20image from "../assets/images/about20.jpg";
import about21image from "../assets/images/about21.jpg";
import about22image from "../assets/images/about22.jpg";
import about23image from "../assets/images/about23.jpg";
import about24image from "../assets/images/about24.jpg";
import about25image from "../assets/images/about25.jpg";
import { Helmet } from 'react-helmet-async';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  const images = [
    about1image, about2image, about3image, about4image, about5image,
    about6image, about7image, about8image, about9image, about10image,
    about11image, about12image, about13image, about14image, about15image,
    about16image, about17image, about18image, about19image, about20image,
    about21image, about22image, about23image, about24image, about25image,
  ];

  return (
    <>
      <Helmet>
        <title>About Shayan Krishna - Model, Actor & Activist</title>
        <meta 
          name="description" 
          content="Learn more about Shayan Krishna, an internationally published model, actor, and activist. Featured in major media outlets worldwide." 
        />
        <meta 
          name="keywords" 
          content="Shayan Krishna, biography, model, actor, activist, Bollywood, Hollywood, fashion, media personality" 
        />
        <meta name="author" content="Shayan Krishna" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="About Shayan Krishna - Model, Actor & Activist" />
        <meta 
          property="og:description" 
          content="Discover the inspiring journey of Shayan Krishna, from modeling and acting to activism and global recognition." 
        />
        <meta property="og:url" content="https://shayan-portfolio.onrender.com/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://shayan-portfolio.onrender.com/profile.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Shayan Krishna - Model, Actor & Activist" />
        <meta 
          name="twitter:description" 
          content="Explore the background of Shayan Krishna, an internationally recognized model, actor, and activist." 
        />
        <meta name="twitter:image" content="https://shayan-portfolio.onrender.com/profile.jpg" />

        {/* Indexing */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4">
        {images.map((image, index) => (
          <div data-aos="fade-up" key={index}>
            <AboutCard imageUrl={image} altText={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div id="accordion" className="w-[90%] p-5 mx-auto">
        {["What is Flowbite?", "Is there a Figma file available?", "What are the differences between Flowbite and Tailwind UI?"].map((title, index) => (
          <div key={index}>
            <h2>
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border border-b-0 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordion === index}
              >
                {title}
                <svg
                  className={`w-3 h-3 transform ${openAccordion === index ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                </svg>
              </button>
            </h2>
            {openAccordion === index && (
              <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="text-gray-500 dark:text-gray-400">This is the content for {title}.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
