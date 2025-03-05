import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import NotFoundPage from "./pages/404Page";
import Workandachievements from "./pages/Workandachievements";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="photos" element={<Photos />} />
            <Route path="contact" element={<Contact />} />
            <Route path="workandachievements" element={<Workandachievements />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;

// import React from "react";
// import { HashRouter, Route, Routes } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Layout from "./Layout";
// import NotFoundPage from "./pages/404Page";

// const App = () => {
//   return (
//     <HelmetProvider>
//       <HashRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="photos" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Route>
//         </Routes>
//       </HashRouter>
//     </HelmetProvider>
//   );
// };

// export default App;