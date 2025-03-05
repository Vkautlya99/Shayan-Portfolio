// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Layout from "./Layout";

// const App = () => {
//   return (
//     <HelmetProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="photos" element={<About />} />
//             <Route path="contact" element={<Contact />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </HelmetProvider>
//   );
// };

// export default App;

import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./Layout";

const App = () => {
  return (
    <HelmetProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="photos" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
};

export default App;