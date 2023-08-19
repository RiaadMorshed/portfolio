import Navbar from "@/compnents/Navbar";
import About from "@/compnents/About";
import Banner from "@/compnents/Banner";
import Contact from "@/compnents/Contact";
import Projects from "@/compnents/Projects";
import Skills from "@/compnents/Skills";
import Footer from "@/compnents/Footer";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
