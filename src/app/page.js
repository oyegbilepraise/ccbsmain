import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Strategic from "../components/Stategies";
import Expressions from "../components/Expressions";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Mission/>
      <Strategic/>
      <Expressions/>
      <Footer/>
    </div>
  );
}
