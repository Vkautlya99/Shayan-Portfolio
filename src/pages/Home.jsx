import React from "react";
import { Helmet } from "react-helmet-async";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Shayan Krishna</title>
        <meta
          name="description"
          content="Shayan Krishna is an internationally renowned model, actor, and global activist, known for his contributions in fashion, film, and social causes. Explore his journey and impact."
        />
        <meta
          name="keywords"
          content="Shayan Krishna, model, actor, activist, fashion, Bollywood, Hollywood, global activism, social causes, fashion model, TV actor, celebrity activist, The Blonde Desi"
        />
        <meta name="author" content="Shayan Krishna" />

        <meta property="og:title" content="Shayan Krishna - Model, Actor, & Global Activist" />
        <meta
          property="og:description"
          content="Explore the multifaceted career of Shayan Krishna - model, actor, and global activist recognized for his work in fashion, film, and advocacy."
        />
        <meta property="og:url" content="https://shayan-portfolio.onrender.com/" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1840732387568996353/KeTJA2MD_400x400.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shayan Krishna - Model, Actor, & Global Activist" />
        <meta
          name="twitter:description"
          content="Shayan Krishna is a celebrated model, actor, and global activist, known for his work in fashion, film, and social impact. Discover his journey."
        />
        <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1840732387568996353/KeTJA2MD_400x400.jpg" />

        <meta name="robots" content="index, follow" />
      </Helmet>

      <Intro />
    </>
  );
};

export default Home;