import { $header } from "./elements";

addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    $header.classList.add("scroll");
  } else {
    $header.classList.remove("scroll");
  }
});
