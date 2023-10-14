import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Weather from "../../Components/Weather/Weather";
import Footer from "../../Components/Footer/Footer";

function HomePage() {
  return (
    <>
      <div className="containe">
        <Navbar />
        <Weather />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
