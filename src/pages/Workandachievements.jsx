import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

import video1thumbnail from "../assets/videothumbnail/video1thumbnail.jpg"
import video2thumbnail from "../assets/videothumbnail/video2thumbnail.jpg"
import video3thumbnail from "../assets/videothumbnail/video3thumbnail.jpg"

// Achievements Images
import youtube from "../assets/AchievementsImages/youtube.jpg";
import netflix from "../assets/AchievementsImages/netflix.jpg";

import VideoCard from "../components/VideoCard";
import { Helmet } from "react-helmet-async";

const WorkAndAchievements = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  const achievements = [
    "Starred in Netflix's Monsters (Extra)",
    "Lead role in MAN UP, Waiting For Uber, and Drug Kills",
    "Upcoming Bollywood debut in The Unknown Mind",
    "Graduated from AMDA (American Musical and Dramatic Academy) in 2024",
    "Walked the ramp for top international designers and featured in global fashion magazines",
    "Recognized for humanitarian work and activism, featured on CNN, Hindustan Times, and Times Now Navbharat",
    "Social media influencer with a reach of over 40 million, promoting - South Asian culture and unity",
    "100 million views on Instagram in the period of 150 days",
    "Known for his famous dialogue, 'America Mata Ki Jai'",
    "Has given interviews to world-famous news channels and well-known international news anchors",
  ];

  return (
    <>
      <Helmet>
        <title>Work & Achievements - Shayan Krishna | Actor, Model & Influencer</title>
        <meta name="description" content="Explore Shayan Krishna's work and achievements as an actor, model, and influencer including Netflix appearances, Bollywood debuts, and international recognition." />
        <meta name="keywords" content="Shayan Krishna, actor, model, social media influencer, Bollywood, Netflix, Monsters, MAN UP, fashion model, AMDA graduate, humanitarian work" />
        <meta name="author" content="Shayan Krishna" />
      </Helmet>

      <div>
        <div data-aos="fade-left" data-aos-mirror="true" className="">
          <h1 className="text-4xl lg:text-6xl text-center text-gray-800 font-bold my-4">Work</h1>
          <div className="space-y-6">
            <div data-aos="fade-right" data-aos-mirror="true" data-aos-duration="1200">
              <VideoCard videoSrc={video1} thumbnail={video1thumbnail} />
            </div>
            <div data-aos="fade-left" data-aos-mirror="true" data-aos-duration="1500" data-aos-delay="200">
              <VideoCard videoSrc={video2} thumbnail={video2thumbnail} />
            </div>
            <div data-aos="zoom-in-up" data-aos-mirror="true" data-aos-duration="1800" data-aos-delay="300">
              <VideoCard videoSrc={video3} thumbnail={video3thumbnail} />
            </div>
          </div>
          <div>
            <h2 className="text-4xl lg:text-6xl text-center text-gray-800 font-bold my-4" data-aos="fade-up" data-aos-mirror="true">Achievements</h2>
            <div className="w-[68%] mx-auto my-4 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-mirror="true">
              <img src={youtube} alt="Shayan Krishna YouTube feature" className="my-8 h-[90vw]" />
              <img src={netflix} alt="Shayan Krishna on Netflix" />
            </div>
            <div className="bg-gradient-to-r from-teal-300 to-teal-700 w-full max-w-[90vw] lg:max-w-[60vw] mx-auto my-10 border-gray-200 shadow-lg rounded-xl p-6" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" data-aos-mirror="true">
              <ul data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" data-aos-mirror="true" className="text-white list-disc pl-6 text-lg px-10 space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} data-aos="fade-right" data-aos-delay={index * 100} data-aos-mirror="true" className="hover:text-yellow-300 transition-colors duration-200">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkAndAchievements;