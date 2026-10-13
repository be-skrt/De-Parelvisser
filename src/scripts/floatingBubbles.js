export function floatingBubbles() {
  document
    .querySelectorAll<HTMLElement>(
      ".section--pearls-white, .section--pearls-teal")
    .forEach((section) => {
      const beforeDuration = 6 + Math.random() * 6;
      const afterDuration = 6 + Math.random() * 6;

      section.style.setProperty(
        "--float-before-duration",
        `${beforeDuration}s`,
      );
      section.style.setProperty("--float-after-duration", `${afterDuration}s`);
    }
  );
}