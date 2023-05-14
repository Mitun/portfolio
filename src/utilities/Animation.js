export default class animation {
  static animations = new Animation();

  fadeInScreen = (screen_name) => {
    let screen = document.getElementById(screen_name);
    if (!screen_name || !screen) return;

    screen.style.opacity = "5";
    screen.style.transform = "translateY(1px)";
  };
}
