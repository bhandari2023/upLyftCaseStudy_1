import React from "react";
import Header from "../components/Header";
import HomeCover from "../components/HomeCover";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import("./Home.css");

function Home() {
  return (
    <>
      <div className="bg-body-secondary">
        <Header />
        <HomeCover />
        <Slider />
        <Footer />
      </div>
    </>
  );
}

export default Home;
