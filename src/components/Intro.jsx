import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import mainimage from "../assets/images/naviage.jpg";
import { SiImdb } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Intro = () => {
  useEffect(() => {
    // AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="w-[90vw] lg:w-[60vw] mx-auto my-10 border-gray-200 shadow-lg rounded-xl p-6 bg-gradient-to-b from-white to-gray-100">
      {/* Name Heading */}
      <h1
        className="text-center text-3xl lg:text-5xl text-gray-800 font-extrabold font-mono mb-8 tracking-wide drop-shadow-lg"
        data-aos="fade-down"
      >
        Shayan Krishna
      </h1>

      {/* Profession Section */}
      <div
        className="lg:w-[35vw] mx-auto flex flex-wrap justify-center gap-6 p-6 border-gray-300 shadow-xl rounded-2xl bg-white"
        data-aos="zoom-in"
      >
        {[
          "Actor",
          "Model",
          "Television Panelist",
          "Social Media Influencer",
        ].map((title, index) => (
          <h3
            key={index}
            className="text-xl lg:text-2xl font-semibold text-yellow-500 font-mono hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer hover:text-yellow-400"
          >
            {title}
          </h3>
        ))}
      </div>

      {/* Social Media Section */}
      <div
        className=" mt-8 flex flex-wrap justify-center gap-13 bg-black p-4 rounded-lg shadow-lg"
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

      {/* Profile Image */}
      <div className="flex justify-center mt-10" data-aos="flip-up">
        <img
          src={mainimage}
          alt="Shayan Krishna"
          className="w-[70vw] lg:w-[35vw] lg:h-[35vw] rounded-full border-4 border-yellow-500 shadow-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Biography */}
      <p
        className="mt-8 text-gray-700 text-lg leading-8 text-justify px-4"
        data-aos="fade-right"
      >
        <span className="font-bold text-gray-900 text-xl font-mono">
          SHAYAN KRISHNA
        </span>{" "}
        also known as{" "}
        <span className="italic text-yellow-600">"The Blonde Desi"</span>, is an
        Actor, Model, Global Activist, and a TV Panelist. He graduated from the
        prestigious <strong>American Musical and Dramatic Academy (AOS)</strong>{" "}
        with a degree in Acting.
        <br />
        <br />
        He is a global icon, traveling extensively across the United States,
        United Kingdom, India, and Pakistan for film shoots, modeling, and
        motivational speeches. Recognized for his outstanding contributions, he
        has achieved:
      </p>

      {/* Achievements Section */}
      <ul
        className="list-disc pl-6 mt-4 text-gray-700 text-lg leading-8"
        data-aos="fade-up"
      >
        <li className="hover:text-gray-900 transition-all duration-300">
          <strong>Internationally Published Model</strong>
        </li>
        <li className="hover:text-gray-900 transition-all duration-300">
          Background Actor in{" "}
          <strong>"Sex Life of College Girls" (Comedy-Drama TV series)</strong>
        </li>
        <li className="hover:text-gray-900 transition-all duration-300">
          Featured Actor in the short film <strong>"MAN UP"</strong>
        </li>
        <li className="hover:text-gray-900 transition-all duration-300">
          Featured in major media outlets like
          <strong>
            Hindustan Times, The What of Insta Fashion, TV9 Bharatvarsh, India
            TV, Republic, CNN, AsiaNet
          </strong>{" "}
          and many more.
        </li>
        <li className="hover:text-gray-900 transition-all duration-300">
          <strong>Represented South Asian Culture</strong> at global fashion
          weeks and cultural festivals.
        </li>
        <li className="hover:text-gray-900 transition-all duration-300">
          <strong>Philanthropist</strong> – Active in multiple charities
          supporting underprivileged children and education initiatives.
        </li>
      </ul>

      <p
        className="mt-8 text-gray-700 text-lg leading-8 text-justify px-4"
        data-aos="fade-left"
      >
        He enjoys massive popularity in India, thanks to his dynamic acting,
        modeling, and unwavering support for India's ancient history and
        civilization. Recognizing his dedication to global peace and activism,{" "}
        <strong>UNICEF</strong> has honored him as the{" "}
        <span className="text-yellow-400 font-semibold">
          Youth Peace Ambassador for South East Asia
        </span>
        .
      </p>

      <p
        className="mt-8 text-gray-700 text-lg leading-8 text-justify px-4"
        data-aos="fade-right"
      >
        Beyond his career, Shayan Krishna is known for his deep passion for
        humanitarian work. He actively collaborates with NGOs to support child
        education, gender equality, and mental health awareness. As a strong
        advocate for cultural heritage, he has contributed to projects that
        promote South Asian history and traditions globally.
      </p>

      <p
        className="mt-8 text-gray-700 text-lg leading-8 text-justify px-4"
        data-aos="fade-left"
      >
        Apart from his professional achievements, Shayan is an individual with
        diverse interests. He is an avid traveler and has explored over 20
        countries, immersing himself in different cultures and traditions. He
        loves adventure sports, including paragliding, scuba diving, and
        trekking in the Himalayas. His passion for fitness is evident through
        his dedication to yoga and martial arts.
      </p>

      <p
        className="mt-8 text-gray-700 text-lg leading-8 text-justify px-4"
        data-aos="fade-right"
      >
        In his free time, Shayan enjoys reading books on philosophy, history,
        and personal development. He is also a skilled musician and enjoys
        playing the guitar and composing music. His love for dance has led him
        to learn various forms, including contemporary, hip-hop, and classical
        Indian dance styles.
      </p>

      <p
        className="mt-8 text-gray-700 text-lg leading-8 text-justify px-4"
        data-aos="fade-up"
      >
        A strong believer in the power of social media, Shayan utilizes his
        platform to spread positivity, awareness, and motivation. With millions
        of followers across various social media platforms, he continuously
        inspires young individuals to chase their dreams fearlessly and stand up
        for causes they believe in.
      </p>

      <p
        className="mt-8 text-gray-700 text-lg leading-8 text-justify px-4"
        data-aos="fade-left"
      >
        Shayan Krishna's journey is one of resilience, ambition, and purpose.
        From being a small-town dreamer to a globally recognized personality, he
        has redefined success through his dedication, hard work, and commitment
        to making a difference in the world.
      </p>
    </div>
  );
};

export default Intro;
