import HeroSection from "./components/heroSection"
import Features from "./components/features"
import Section from "./components/section"
import TestiSection from "./components/testiSection"
import PeopleSection from "./components/peopleSection"
import CtoSection from "./components/ctoSection"
import Footer from "./components/footer"


function App() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <Features />
      <Section/>
      <TestiSection/>
     <PeopleSection/>
     <CtoSection/>
     <Footer/>
      <img className="absolute w-[52%]  opacity-70  -right-32 -top-3" src="../img/hero/W-vektor.png" alt="" />
    </div>
  );
}

export default App;
