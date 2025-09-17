import React from "react";
import TopBar from "./components/topbar";
import Header from "./components/header";
import Hero from "./components/hero";
import BottomBanner from "./components/bottombanner";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <Hero />
      <BottomBanner />
      <Footer/>
    </div>
  );
}

export default App;