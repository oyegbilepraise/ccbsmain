import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Strategic from "../components/Stategies";
import Expressions from "../components/Expressions";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Mission/>
      <Strategic/>
      <Expressions/>
    </div>
  );
}
