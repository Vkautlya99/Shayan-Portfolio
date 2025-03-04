import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Shayan Krishna</title>
        <meta name="description" content="Get in touch with Shayan Krishna. Contact me for web development projects, collaborations, and more." />
        <meta name="keywords" content="Shayan Krishna, contact, web developer, React, JavaScript, Tailwind CSS" />
        <meta property="og:title" content="Contact Shayan Krishna" />
        <meta property="og:description" content="Reach out to me for web development, freelance work, or tech collaborations." />
        <meta property="og:url" content="https://shayan-portfolio.onrender.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://shayan-portfolio.onrender.com/preview-contact.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h1>Contact Me</h1>
      <p>Feel free to reach out to me for collaborations, job opportunities, or any inquiries.</p>
    </>
  );
};

export default Contact;