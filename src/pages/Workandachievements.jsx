import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";

//Achievements Images
import youtube from "../assets/AchievementsImages/youtube.jpg";
import netflix from "../assets/AchievementsImages/netflix.jpg";

import VideoCard from "../components/VideoCard";
import { Helmet } from "react-helmet-async";

const WorkAndAchievements = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false, // This is important - set to false to animate every time the element is in view
      mirror: true, // This enables animations when scrolling up
      anchorPlacement: 'top-bottom',
    });
  }, []);

  const achievements = [
    "- Starred in Netflix's Monsters (Extra)",
    "- Lead role in MAN UP, Waiting For Uber, and Drug Kills",
    "- Upcoming Bollywood debut in The Unknown Mind",
    "- Graduated from AMDA (American Musical and Dramatic Academy) in 2024",
    "- Walked the ramp for top international designers and featured in global fashion magazines",
    "- Recognized for humanitarian work and activism, featured on CNN, Hindustan Times, and Times Now Navbharat",
    "- Social media influencer with a reach of over 40 million, promoting / - South Asian culture and unity",
    "- 100 million views on Instagram in a span of 365 days",
    "- Known for his famous dialogue, America Mata Ki Jai",
    "- Has given interviews to world-famous news channels and well-known international news anchors",
  ];

  return (
    <>
      <Helmet>
        <title>Work & Achievements - Shayan Krishna | Actor, Model & Influencer</title>
        <meta
          name="description"
          content="Explore Shayan Krishna's work and achievements as an actor, model, and influencer including Netflix appearances, Bollywood debuts, and international recognition."
        />
        <meta
          name="keywords"
          content="Shayan Krishna, actor, model, social media influencer, Bollywood, Netflix, Monsters, MAN UP, fashion model, AMDA graduate, humanitarian work"
        />
        <meta name="author" content="Shayan Krishna" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/work-and-achievements" />
        <meta property="og:title" content="Work & Achievements - Shayan Krishna | Actor, Model & Influencer" />
        <meta property="og:description" content="Discover Shayan Krishna's impressive portfolio featuring roles in Netflix productions, upcoming Bollywood projects, and international fashion recognition." />
        <meta property="og:image" content="https://yourwebsite.com/path-to-preview-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/work-and-achievements" />
        <meta property="twitter:title" content="Work & Achievements - Shayan Krishna | Actor, Model & Influencer" />
        <meta property="twitter:description" content="Discover Shayan Krishna's impressive portfolio featuring roles in Netflix productions, upcoming Bollywood projects, and international fashion recognition." />
        <meta property="twitter:image" content="https://yourwebsite.com/path-to-preview-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com/work-and-achievements" />
        
        {/* Structured data for rich results */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org/",
              "@type": "Person",
              "name": "Shayan Krishna",
              "url": "https://yourwebsite.com",
              "image": "https://yourwebsite.com/path-to-profile-image.jpg",
              "jobTitle": "Actor and Model",
              "worksFor": {
                "@type": "Organization",
                "name": "Entertainment Industry"
              },
              "description": "Actor, model and social media influencer with over 40 million followers promoting South Asian culture.",
              "sameAs": [
                "https://www.instagram.com/shayanKrishna",
                "https://www.youtube.com/channel/shayanKrishna",
                "https://twitter.com/shayanKrishna"
              ]
            }
          `}
        </script>
      </Helmet>

      <div>
        <div data-aos="fade-left" data-aos-mirror="true" className="">
          <h1 className="text-3xl lg:text-5xl text-center text-gray-700 font-bold my-4">
            Work
          </h1>
          <div className="space-y-6">
            {/* Individual animations for each video */}
            <div 
              data-aos="fade-right" 
              data-aos-mirror="true" 
              data-aos-duration="1200"
            >
              <VideoCard videoSrc={video1} />
            </div>
            
            <div 
              data-aos="fade-left" 
              data-aos-mirror="true" 
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <VideoCard videoSrc={video2} />
            </div>
            
            <div 
              data-aos="zoom-in-up" 
              data-aos-mirror="true" 
              data-aos-duration="1800"
              data-aos-delay="300"
            >
              <VideoCard videoSrc={video3} />
            </div>
          </div>

          <div>
            <h2 className="text-3xl lg:text-5xl text-center text-gray-700 font-bold my-4" 
              data-aos="fade-up" 
              data-aos-mirror="true">
              Achievements{" "}
            </h2>
            <div className="w-[68%] mx-auto my-4 rounded-lg shadow-lg" 
              data-aos="zoom-in" 
              data-aos-mirror="true">
              <img src={youtube} alt="Shayan Krishna YouTube feature" className="my-8 h-[90vw]" />
              <img src={netflix} alt="Shayan Krishna on Netflix" />
            </div>
            <div
              className="bg-gradient-to-r from-teal-300 to-teal-700 w-full max-w-[90vw] lg:max-w-[60vw] mx-auto my-10 border-gray-200 shadow-lg rounded-xl p-6"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-mirror="true"
            >
              <ul data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" 
                data-aos-mirror="true"
                className="list-disc pl-6 text-lg text-gray-700 px-10 space-y-4">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                    data-aos-mirror="true"
                    className="hover:text-yellow-300 transition-colors duration-200"
                  >
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