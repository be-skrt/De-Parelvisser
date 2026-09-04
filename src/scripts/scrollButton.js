import { $header, $scrollButton } from "./elements";

addEventListener("scroll", () => {
  if (scrollY > $header.offsetTop) $scrollButton.classList.add("active");
  else $scrollButton.classList.remove("active");
});
