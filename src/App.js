import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Inquiry from "./component/Inquiry";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Basic from "./component/Packages/Basic";
import Best from "./component/Packages/Best";
import Premium from "./component/Packages/Premium";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App overflow-clip">
      {/* Adding the Meta Pixel code using Helmet */}
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '556976457254577');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>{`
          <img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=556976457254577&ev=PageView&noscript=1"
          />
        `}</noscript>
      </Helmet>

      {/* App Routes */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Inquiry />} />
          <Route path="/basic" element={<Basic />} />
          <Route path="/best" element={<Best />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
