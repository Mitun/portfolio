import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollServices from "../../utilities/ScrollServices";

const AboutMeCOmponent = (props) => {
  let fadeInScreen = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollServices.currentScreenFadeIn.subscribe(fadeInScreen);
  const screen_constants = {
    description:
      " I completed the tutorial on skillshare and I want to deploy the website( I couldnt complete the deployment video  because my membership is expired And I want to ask you in which files should I change the url from localhost to my domain",
    highlights: {
      bullets: [
        "Full Stack Web development",
        "Full Stack Web development",
        "Full Stack Web development",
        "Full Stack Web development",
        "Full Stack Web development",
        "Full Stack Web development",
        "Full Stack Web development",
      ],
      heading: "Here is a few Highlights",
    },
  };
  const renderHighlight = () => {
    return screen_constants.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="'highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading
          title={"About Me"}
          subHeading={"Why Choose Me?"}
        ></ScreenHeading>
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {screen_constants.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{screen_constants.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-option">
              <button className="hireBtn">Hire Me</button>
              <a
                href={process.env.PUBLIC_URL + "/Resume_of_MitunShil.pdf"}
                download
              >
                <button className="resumeBtn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCOmponent;
