import React, { useState, useEffect } from "react";
import "./Header.css";
import {
  get_screen_index,
  total_screen,
} from "../../../utilities/ComponentUtilities";
// import ScrollServices from "../../../services/ScrollServices";

import ScrollServices from "../../../utilities/ScrollServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOption, setShowHeaderOption] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;
    let screenIndex = get_screen_index(currentScreen.screenInView);
    if (screenIndex < 0) return;
    setSelectedScreen(screenIndex);
  };
  useEffect(() => {
    let currentScreenSubscription =
      ScrollServices.currentScreenBroadcaster.subscribe(updateCurrentScreen);
    return () => currentScreenSubscription.unsubscribe();
  }, []);

  const getHeaderOptions = () => {
    return total_screen.map((screen, i) => {
      return (
        <div
          key={screen.screen_name}
          className={getHeaderOptonsClass(i)}
          onClick={() => switchScreen(i, screen)}
        >
          <span>{screen.screen_name}</span>
        </div>
      );
    });
  };

  const getHeaderOptonsClass = (index) => {
    let classes = "header-option";
    if (index < total_screen.length - 1) classes += " header-option-seperator";
    if (selectedScreen === index) classes = "selected-header-option";
    return classes;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;
    screenComponent.scrollIntoView({ behavior: "smooth" });
    setSelectedScreen(index);
    setShowHeaderOption(false);
  };

  return (
    <div
      className="headerContainer"
      onClick={() => setShowHeaderOption(!showHeaderOption)}
    >
      <div className="header-parent">
        <div
          className="header-hamburger"
          onClick={() => setShowHeaderOption(!showHeaderOption)}
        >
          <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
        </div>
        <div className="header-logo">
          <span>MITUN</span>
        </div>
        <div
          className={
            showHeaderOption
              ? "header-options show-hamburger-options"
              : "header-options"
          }
        >
          {getHeaderOptions()}
        </div>
      </div>
    </div>
  );
};

export default Header;
