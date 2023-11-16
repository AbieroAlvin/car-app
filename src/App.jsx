import Header from "./components/Header";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import About from "./components/About";
import Why from "./components/Why";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import BTTopBtn from "./components/BTTopBtn";

function App() {
  return (
    <main className="max-w-[1928px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonials />
      <Cta />
      <Footer />
      <BTTopBtn />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}

export default App;
