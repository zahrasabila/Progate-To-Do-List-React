import React from "react";
import "../style/component/Jumbotron.css";
import headerImage from "../assets/Talk.gif";
import icon1 from "../assets/icons8-laptop-64.png";
import icon2 from "../assets/icons8-open-book-48.png";
import icon3 from "../assets/icons8-curriculum-48.png";
import icon4 from "../assets/icons8-cyclist-48.png";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="icon">
        <div className="icon-img">
          <img src={icon1} alt="laptop" />
        </div>
        <div className="icon-img">
          <img src={icon2} alt="buku" />
        </div>
        <div className="icon-img">
          <img src={icon3} alt="sekolah" />
        </div>
        <div className="icon-img">
          <img src={icon4} alt="olahraga" />
        </div>
      </div>
      <div className="intro">
        <img src={headerImage} alt="hello zahra" />
        <div className="intro-desc">
          <p>Hello, Zahra!</p>
          <h1>What do you want to do?</h1>
        </div>
      </div>
      <h1 className="h1-2">Add your list for today.</h1>
    </div>
  );
};

export default Jumbotron;
