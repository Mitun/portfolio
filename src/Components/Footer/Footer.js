import React from "react";
import "./Footer.css";
// import image from "../../Assets/shape-bg.png";

const Footer = () => {
  return (
    <div className="curve">
      <div className="curveInside">
        {/* <img src={require("/src/Assets/shape-bg.png").default} alt="No way" /> */}
        <img src={process.env.PUBLIC_URL + "/shape-bg.png"} alt="No way" />
      </div>
    </div>
  );
};

export default Footer;
