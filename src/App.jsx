import "./App.css";
import Nav from "./Components/Nav.jsx"; 
import AbouteBround from "./Components/AbouteBround.jsx";
import Projectcom from "./Components/Projectcom.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Footer from "./Components/Footer.jsx";
// import Home from "./Components/Home.jsx";
import Hero from "./Components/Hero.jsx";

function App() {


  return (
    <>
      <Nav />
      <Hero/>
      <AbouteBround />
      <Projectcom />
      <Testimonials/>
      <ContactUs />
      {/* <Home/> */}
      <Footer/>
    </>
  );
}

export default App;
