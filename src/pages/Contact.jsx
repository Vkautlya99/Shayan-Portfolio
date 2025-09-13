import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    project: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .send(
        "service_kcq5f8l",
        "template_qabnrsd",
        formData,
        "HKAltfNatDH2owIvW"
      )
      .then((response) => {
        console.log("Success:", response);
        setIsSubmitting(false);
        setSubmitResult({ success: true });
        setFormData({ email: "", project: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setIsSubmitting(false);
        setSubmitResult({ success: false });
      });

    console.log(formData);
  };

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

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Column */}
          <div data-aos="flip" className="flex flex-col ">
            <div className="f mb-8">
              <h1
                data-aos="fade-right"
                className="text-3xl font-bold text-gray-900  mb-4"
              >
                Let's Work Together
              </h1>
              <p data-aos="fade-left" className="text-gray-600">
                Looking for a collaboration? Have a project in mind? Fill out
                the form below and the team of{" "}
                <strong className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                  SHAYAN KRISHNA
                </strong>{" "}
                 will get back to you as soon as possible.
              </p>
            </div>

            <form
              data-aos="zoom-in-right"
              onSubmit={handleSubmit}
              className=" bg-gradient-to-r from-red-600 to-blue-600 shadow-xl rounded-xl p-8 flex-grow"
            >
              <div className="space-y-4 bg-gradient-to-br p-6 rounded-lg">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-200"
                    placeholder="youremail@example.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-white dark:text-gray-300 mb-2"
                  >
                    Project Title
                  </label>
                  <input
                    type="text"
                    id="project"
                    className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-200"
                    placeholder="Brief title of your project"
                    required
                    value={formData.project}
                    onChange={(e) =>
                      setFormData({ ...formData, project: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300  mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-3 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-200"
                    placeholder="Tell me about your project and how I can help..."
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-4 text-white font-medium rounded-lg bg-gradient-to-r from-red-600 to-green-600 transform hover:scale-[1.02] transition-all duration-300 shadow-md flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Request"
                  )}
                </button>

                {submitResult && submitResult.success && (
                  <div className="mt-4 p-3 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information Column */}
          <div className="flex flex-col justify-center mt-10 ">
            <h1 className="text-center text-2xl mb-4 font-semibold ">
              Watch Out For Quick Response
            </h1>
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className=" lg:mt-26 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl shadow-xl p-8 text-white"
            >
              <h2 data-aos="fade-down" className="text-2xl font-bold mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <h3 className="font-medium">Email</h3>
                    <p className="mt-1">contact@shayankrishna.com</p>
                  </div>
                </div>

                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    <h3 className="font-medium">Location</h3>
                    <p className="mt-1">Los Angeles, California</p>
                  </div>
                </div>

                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Response Time</h3>
                    <p className="mt-1">Usually within 48 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="font-medium mb-4"
                >
                  Connect with me
                </h3>
                <div
                  data-aos="fade-down"
                  className="flex items-center space-x-4"
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=100082734665720#"
                    className="p-2 bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/theblondedesi/?hl=en"
                    className="p-2 bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/shayan_speaks"
                    className="text-white hover:text-yellow-300 transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
