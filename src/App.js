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
import Services from './Services';
import Contact from './Contact';
import About from './component/About';
import Hero from './component/Hero';
import Footer from './component/Footer';
import Inquiry from './component/Inquiry';
function App() {
  return (
    <div className="App overflow-clip">

    <Router>
        <Nav/>
        <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/inquiry" element={<Inquiry/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
        </Router>
        </div>
  );
}

export default App;
