import React from "react";
import { Subject } from "rxjs";
import { total_screen } from "./ComponentUtilities";

class ScrollServices extends React.Component {
  static scrollHandler = new ScrollServices();
  static currentScreenBroadcaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    super();
    window.addEventListener("scroll", this.checkCurrentScreenUnderiewport);
  }

  scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("ContactMe");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  scrollToHome = () => {
    let contactMeScreen = document.getElementById("Home");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;
    let partiallyVisible =
      elementTop < window.innerHeight && elementBottom >= 0;
    let completelyVisible =
      elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;

      default:
        return false;
    }
  };

  checkCurrentScreenUnderiewport = (event) => {
    if (!event || Object.keys(event).length < 1) return;
    for (let screen of total_screen) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      let fullyvisible = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if (fullyvisible || partiallyVisible) {
        if (partiallyVisible && !screen.alreadyRendered) {
          ScrollServices.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (fullyvisible) {
          ScrollServices.currentScreenBroadcaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}

export default ScrollServices;
