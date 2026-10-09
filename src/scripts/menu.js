import { $button, $nav } from "./elements";

$button?.addEventListener("click", () => {
  const open = $button.classList.toggle("open");

  $nav?.classList.toggle("open", open);
  $button.setAttribute("aria-expanded", String(open));
  $button.setAttribute(
    "aria-label",
    open ? "Navigatie sluiten" : "Navigatie openen",
  );

  document.body.style.overflow = open ? "hidden" : "";
});
