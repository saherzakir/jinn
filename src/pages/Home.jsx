import React from "react";
import TopBar from "../components/Topbar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BottomBanner from "../components/bottombanner";
import Footer from "../components/footer";
import FreshPicks from "../components/freshpicks";
import FeaturedCategory from "../components/featuredcategory";
import WomensCollection from "../components/womenscollectionHero";
import WomensProducts from "../components/womensproducts";
import MensCollection from "../components/menscollectionHero";
import MensProducts from "../components/mensproducts";
import PerfectMatch from "../components/perfectmatch";
import CustomerReviews from "../components/customerreviews";
import ChooseUs from "../components/chooseus";

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
      <MensProducts/>
      <PerfectMatch/>
      <CustomerReviews/>
      <ChooseUs/>
      <Footer />
    </>
  );
}

export default Home;
