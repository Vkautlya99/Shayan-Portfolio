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
        <meta
          property="og:title"
          content="Contact Shayan Krishna - Model & Public Figure"
        />
        <meta
          property="og:description"
          content="Reach out to Shayan Krishna for media, collaborations, and industry-related inquiries."
        />
        <meta
          property="og:url"
          content="https://shayan-portfolio.onrender.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://shayan-portfolio.onrender.com/contact-banner.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Shayan Krishna - Model & Public Figure"
        />
        <meta
          name="twitter:description"
          content="Connect with Shayan Krishna for professional collaborations, media appearances, and brand promotions."
        />
        <meta
          name="twitter:image"
          content="https://shayan-portfolio.onrender.com/contact-banner.jpg"
        />

        {/* Indexing */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact for projects */}
          <form className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Contact For Projects
            </h1>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="youremail@project.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="project"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Project
              </label>
              <input
                type="text"
                id="project"
                className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Project Title"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Short description about your project..."
              ></textarea>
            </div>
            <button
            type="submit"
            className="w-full mt-6 p-3 cursor-pointer text-white text-md font-medium rounded-lg bg-gradient-to-r from-teal-400 to-teal-700 hover:bg-teal-500 uppercase hover:scale-105 transition-all duration-300"
          >
            Send Request
          </button>

          </form>

          {/* Contact for collaboration */}
          <form className="p-6 bg-white dark:bg-teal-800 shadow-lg rounded-lg">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Contact For Collaboration
            </h1>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="youremail@collaboration.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="collaboration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Collaboration Detail
              </label>
              <input
                type="text"
                id="collaboration"
                className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Collaboration For"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Short idea of collaboration..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full mt-6 p-3 text-white text-md font-medium rounded-lg bg-gradient-to-r from-teal-400 to-teal-700 uppercase hover:scale-105 transition-all duration-300"
            >
              Send Request
            </button>
          </form>

          {/* Contact Form your Own Web Application */}
          <form className="p-6 bg-white dark:bg-teal-800 shadow-lg rounded-lg">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6">
              Contact For Your Bussiness Web Application
            </h1>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="youremail@collaboration.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="collaboration"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Web Application Type
              </label>
              <input
                type="text"
                id="collaboration"
                className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Type Of Website"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Requirement
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 text-sm border rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Short idea of your web application..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full mt-6 p-3 text-white text-md font-medium rounded-lg bg-gradient-to-r from-teal-400 to-teal-700 uppercase hover:scale-105 transition-all duration-300"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
