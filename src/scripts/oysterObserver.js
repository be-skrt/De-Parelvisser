import { $wrapper, $creamSection } from "./elements";

function updateOysters() {
  if (!$wrapper || !$creamSection) return;

  const wrapperRect = $wrapper.getBoundingClientRect();
  const creamRect = $creamSection.getBoundingClientRect();
  
  const boundary = ((creamRect.bottom - wrapperRect.top) / wrapperRect.height) * 100;
  const clampedBoundary = Math.min(100, Math.max(0, boundary));

  $wrapper.style.setProperty("--oyster-boundary", `${clampedBoundary}%`);
}

if ($wrapper && $creamSection) {
  const $observer = new ResizeObserver(updateOysters);

  $observer.observe($wrapper);
  $observer.observe($creamSection);
  
  addEventListener("resize", updateOysters);
  
  updateOysters();

  requestAnimationFrame(updateOysters);

  if (document.fonts) document.fonts.ready.then(updateOysters);
}

