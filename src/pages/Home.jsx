import React from "react";
import TopBar from "../components/topbar";
import Header from "../components/header";
import Hero from "../components/hero";
import BottomBanner from "../components/bottombanner";
import Footer from "../components/footer";
import FreshPicks from "../components/freshpicks";

function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <BottomBanner />
      <FreshPicks />
      <Footer />
    </>
  );
}

export default Home;
