import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const photo = "https://picsum.photos/id/717/1000/490";

const Home = () => {
  return (
    <div className="home">
      <div className="home-link">
        <Link to={"/enumeration"}>Enumeration</Link>
      </div>
      <img src={photo} />
    </div>
  );
};

export default Home;
