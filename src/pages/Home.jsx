import React from "react";
import { Helmet } from "react-helmet-async";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Shayan Krishna - Model, Actor & Global Activist</title>
        <meta
          name="description"
          content="Shayan Krishna is a globally recognized model, actor, and activist known for his work in fashion, TV, and social causes."
        />
        <meta
          name="keywords"
          content="Shayan Krishna, model, actor, activist, fashion, Bollywood, Hollywood, The Blonde Desi"
        />
        <meta name="author" content="Shayan Krishna" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Shayan Krishna - Model, Actor & Activist" />
        <meta
          property="og:description"
          content="Explore the journey of Shayan Krishna, an internationally recognized model, actor, and activist."
        />
        <meta property="og:url" content="https://shayan-portfolio.onrender.com/" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://shayan-portfolio.onrender.com/profile.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shayan Krishna - Model, Actor & Activist" />
        <meta
          name="twitter:description"
          content="Shayan Krishna is an internationally published model, actor, and activist featured in major media outlets."
        />
        <meta name="twitter:image" content="https://shayan-portfolio.onrender.com/profile.jpg" />

        {/* Indexing */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Intro />
    </>
  );
};

export default Home;