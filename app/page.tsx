import About from "./components/About";
import Banner from "./components/Banner";
import Client from "./components/Client";

import Footer from "./components/Footer";

import Header from "./components/navigation/Header";
import ServicesSection from "./components/StudioServices";

export default function Home() {
  return (
    <div className=" min-h-screen w-full relative  ">
      <Header />

      <main className="   w-full ">
        <Banner />
        <About />

        <ServicesSection />
        <Client />
      </main>
      <Footer />
    </div>
  );
}
