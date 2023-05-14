import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import "./Home.css";
import Header from "./Header/Header";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header></Header>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
