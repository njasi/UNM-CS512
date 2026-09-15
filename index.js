// simple script for handling hover animation where we
// start and stop video playback for the project cards

const hoverDelay = 350;
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  const video = card.querySelector("video");
  let playTimer;

  if (!video) {
    return;
  }

  const handleFocus = () => {
    playTimer = setTimeout(() => {
      video.play().catch(() => {});
    }, hoverDelay);
  };

  const handleUnfocus = () => {
    clearTimeout(playTimer);
    video.pause();
    video.currentTime = 0;
    video.load();
  };

  card.addEventListener("mouseenter", handleFocus);
  card.addEventListener("mouseleave", handleUnfocus);
  card.addEventListener("focusin", handleFocus);
  card.addEventListener("focusout", handleUnfocus);
});
