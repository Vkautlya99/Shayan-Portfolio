import React, { useEffect } from 'react';
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
import about8image from "../assets/images/about8.jpg"
import about9image from "../assets/images/about9.jpg"
import about10image from "../assets/images/about10.jpg"
import about11image from "../assets/images/about11.jpeg"
import about12image from "../assets/images/about12.jpg"
import about13image from "../assets/images/about13.jpeg"
import about14image from "../assets/images/about14.jpg"
import about15image from "../assets/images/about15.jpg"
import about16image from "../assets/images/about16.jpg"
import about17image from "../assets/images/about17.avif"
import about18image from "../assets/images/about18.jpeg"
import about19image from "../assets/images/about19.jpg"
import about20image from "../assets/images/about20.jpg"
import about21image from "../assets/images/about21.jpg"
import about22image from "../assets/images/about22.jpg"
import about23image from "../assets/images/about23.jpg"
import about24image from "../assets/images/about24.jpg"
import about25image from "../assets/images/about25.jpg"

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    about1image,
    about2image,
    about3image,
    about4image,
    about5image,
    about6image,
    about7image,
    about8image,
    about9image,
    about10image,
    about11image,
    about12image,
    about13image,
    about14image,
    about15image,
    about16image,
    about17image,
    about18image,
    about19image,
    about20image,
    about21image,
    about22image,
    about23image,
    about24image,
    about25image,
   

  ];

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-4">
        {images.map((image, index) => (
          <div data-aos="fade-up" key={index}>
            <AboutCard imageUrl={image} altText={`Shayan Krishna ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
