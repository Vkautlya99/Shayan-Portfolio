import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import NotFoundPage from "./pages/404Page";
import Workandachievements from "./pages/Workandachievements";
import TnC from "./pages/TnC";
import ScrollToTop from "./hook/ScrollToTop";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="photos" element={<Photos />} />
            <Route path="contact" element={<Contact />} />
            <Route path="workandachievements" element={<Workandachievements />} />
            <Route path="privacy" element={<TnC />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;