/**
 * @copyright 2025 avtarsingh
 * @license Apache-2.0
 */

//Node Modules
import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/react";


// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatDiv from "./components/FloatDiv";
import Certificate from "./components/Certificate";


function App() {

  return (
    <ReactLenis root>
      <FloatDiv/>
      
      <Header />
      <main>
        
        <Hero />
        <About />
        <Skill />
        <Work />
        <Certificate/>
        <Contact />
      </main>
        <Footer />
      <Analytics />
    </ReactLenis>
  );

  
}

export default App;
