
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";
import Experience from "../components/Experience";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Blogs />
      <Testimonials />
      {/* <Experience />
      <CTA /> */}
      <Contact />
      <Footer />
    </>
  );
}
