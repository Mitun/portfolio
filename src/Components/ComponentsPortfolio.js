import React from "react";
import { total_screen } from "../utilities/ComponentUtilities";

const ComponentsPortfolio = () => {
  const mapAllScreen = () => {
    return total_screen.map((screen) => {
      return screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        ></screen.component>
      ) : (
        <div key={screen.screen_name}></div>
      );
    });
  };
  return <div className="portfolio-containerMain">{mapAllScreen()}</div>;
};

export default ComponentsPortfolio;
