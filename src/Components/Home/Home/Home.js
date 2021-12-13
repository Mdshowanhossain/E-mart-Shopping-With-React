import React from "react";
import Feature from "../Features/Feature";
import Header from "../Header/Header";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Feature />
        <Trending />
      </div>
    </>
  );
};

export default Home;
