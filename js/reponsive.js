function checkOrientation() {
  const isPortrait = window.innerHeight > window.innerWidth;
  const warning = document.getElementById("orientation-warning");
  const content = document.body.children;

  if (isPortrait) {
    warning.style.display = "flex";

    // Hide everything else except the warning
    for (let i = 0; i < content.length; i++) {
      if (content[i].id !== "orientation-warning") {
        content[i].style.display = "none";
      }
    }
  } else {
    warning.style.display = "none";

    // Show everything else again
    for (let i = 0; i < content.length; i++) {
      if (content[i].id !== "orientation-warning") {
        content[i].style.display = "";
      }
    }
  }
}

// Initial check
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);