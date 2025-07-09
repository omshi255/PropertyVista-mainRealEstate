
import React from "react";
import "../src/index.css"
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Exploreproperties from "../components/seeproperties/Exploreproperties";
import Properties from "../pages/Properties/Properties";
import Projectgalery from "../pages/Projectsgallery/Projectgalery";
import About from "../pages/about/About";
import Projectlist from "../pages/Projectsgallery/Projectlist"



const App = () => {
  return (
    <>
      {/* Navigation Bar */}
       <Navbar /> 

      
      <Routes>
       
        <Route path="/" element={<HomePage />} />

       
       <Route path="/login" element={<HomePage/>} />
        <Route path="/Logout" element={<HomePage/>} />
        <Route path="/profile" element={<HomePage/>}/>
        <Route path ="/exploreproperties" element={<Exploreproperties/>}/>
        <Route path="/properties" element = {<Properties/>} />
         <Route path="/projectsGallery" element={<Projectgalery/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/projectlist" element={<Projectlist/>}/>
     
      </Routes>

     
      <Footer /> 
    </>
  );
};

export default App;

