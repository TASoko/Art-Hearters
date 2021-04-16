import React from "react";
import './index.css'
import YellowCircle from "../../assets/yellow-circle.png";
import RedCircle from "../../assets/red-circle.png";
import GreenSemiCircle from "../../assets/green-semicircle.png";
import BlueSemiCircle from "../../assets/blue-semicircle.png";
import PinkSemiCircle from "../../assets/pink-semicircle.png";
import GreenCircle from "../../assets/green-circle.png";

function Design () {
    return (
      <div className="design">
        <div className="yellow-circle">
          <img src={YellowCircle} alt="yellow circle" />
        </div>
        <div className="red-circle">
          <img src={RedCircle} alt="red circle" />
        </div>
        <div className="green-semicircle">
          <img src={GreenSemiCircle} alt="green semi-circle" />
        </div>
        <div className="green-circle">
          <img src={GreenCircle} alt="green circle" />
        </div>
        <div className="pink-semicircle">
          <img src={PinkSemiCircle} alt="pink semi-circle" />
        </div>
        <div className="blue-semicircle">
          <img src={BlueSemiCircle} alt="blue semi-circle" />
        </div>
      </div>
    );
}

export default Design;