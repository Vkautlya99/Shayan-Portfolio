// src/pages/404Page.js
import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="bg-grey-100 h-screen flex flex-col justify-center text-center p-8 rounded">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">Sorry, the page you're looking for doesn't exist.</p>
      <div>
       <Link to="/" className="mt-4 bg-gradient-to-r from-teal-300 to-teal-700 text-white font-bold py-2 px-4 rounded inline-block">Go back to the home page</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;