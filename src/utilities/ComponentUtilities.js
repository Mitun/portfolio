import AboutMeCOmponent from "../Components/AboutMeComponent/AboutMeCOmponent";
import Home from "../Components/Home/Home";

export const total_screen = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "About Me",
    component: AboutMeCOmponent,
  },
];
export const get_screen_index = (screen_name) => {
  if (!screen_name) return -1;
  for (let i = 0; i < total_screen.length; i++) {
    if (total_screen[i].screen_name === screen_name) return i;
  }
  return -1;
};
