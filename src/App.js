import logo from './logo.svg';
import './App.css';
import NavTop from './component/NavTop';
import Nav from './component/Nav';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import About from './component/About';
import Hero from './component/Hero';
import Footer from './component/Footer';
import Inquiry from './component/Inquiry';
import Services from './component/Services';
import Contact from './component/Contact';
import Basic from './component/Packages/Basic';
import Best from './component/Packages/Best';
import Premium from './component/Packages/Premium';
function App() {
  return (
    <div className="App overflow-clip">

    <Router>
        <Nav/>
        <Routes>
      <Route path="/" element={<Hero />} />
      {/* <Route path="/inquiry" element={<Inquiry/>} /> */}
      <Route path="/about" element={<About/>} />
      <Route path="/packages" element={<Inquiry/>} />
      <Route path="/basic" element={<Basic/>} />
      <Route path="/best" element={<Best/>} />
      <Route path="/premium" element={<Premium/>} />
      <Route path="/services" element={<Services/>} />
      
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
        </Router>
        </div>
  );
}

export default App;
