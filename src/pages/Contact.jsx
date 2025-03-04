import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Shayan Krishna - Model & Public Figure</title>
        <meta 
          name="description" 
          content="Get in touch with Shayan Krishna for collaborations, modeling projects, and media inquiries. Connect via email or social media." 
        />
        <meta 
          name="keywords" 
          content="Contact Shayan Krishna, model booking, actor inquiries, fashion, collaborations, public relations, media inquiries" 
        />
        <meta name="author" content="Shayan Krishna" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Contact Shayan Krishna - Model & Public Figure" />
        <meta 
          property="og:description" 
          content="Reach out to Shayan Krishna for media, collaborations, and industry-related inquiries." 
        />
        <meta property="og:url" content="https://shayan-portfolio.onrender.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://shayan-portfolio.onrender.com/contact-banner.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Shayan Krishna - Model & Public Figure" />
        <meta 
          name="twitter:description" 
          content="Connect with Shayan Krishna for professional collaborations, media appearances, and brand promotions." 
        />
        <meta name="twitter:image" content="https://shayan-portfolio.onrender.com/contact-banner.jpg" />

        {/* Indexing */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <h1>Contact Me</h1>
      <p>Feel free to reach out to me for collaborations, job opportunities, or any inquiries.</p>
    </>
  );
};

export default Contact;