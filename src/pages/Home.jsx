import React from "react";
import TopBar from "../components/topbar";
import Header from "../components/header";
import Hero from "../components/hero";
import BottomBanner from "../components/bottombanner";
import Footer from "../components/footer";
import FreshPicks from "../components/freshpicks";
import FeaturedCategory from "../components/featuredcategory";
import WomensCollection from "../components/womenscollection";
import WomensProducts from "../components/womensproducts";
import MensCollection from "../components/menscollection";

function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <BottomBanner />
      <FreshPicks />
      <FeaturedCategory/>
      <WomensCollection/>
      <WomensProducts/>
      <MensCollection/>
      <Footer />
    </>
  );
}

export default Home;
