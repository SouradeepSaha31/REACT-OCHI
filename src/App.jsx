import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect, useState } from "react";
import Landingpage from "./Components/Landingpage";
import Navbar from "./Components/Navbar";
import Marq from "./Components/Marq";
import About from "./Components/About";
import Play from "./Components/Play";
import Featured from "./Components/Featured";
import Reviews from "./Components/Reviews";
import Play2 from "./Components/Play2";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

const App = () => {
  const [screenwidth, setscreenwidth] = useState(window.innerWidth);
  const updateScreenWidth = () => {
    setscreenwidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

useEffect(()=>{
  if(window.innerWidth < 768){
    return
  }
  const locomotiveScroll = new LocomotiveScroll();
})

  return (
    <>
      <div className="relative w-full h-screen bg-black hidden max-[380px]:block px-[5vw]">
        <h1 className="absolute top-[50%] translate-y-[-50%] text-white text-[7vw]">
          Your screen width is: {screenwidth}px. Please open the website over
          380px.
        </h1>
      </div>
      <div className="main w-full block max-[380px]:hidden min-h-screen bg-zinc-900">
        <Loader />
        <Navbar />
        <Landingpage />
        <Marq />
        <About />
        <Play />
        <Featured />
        <Reviews />
        <Play2 />
        <Footer />
      </div>
    </>
  );
};

export default App;
