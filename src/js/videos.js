const videoContainer1 = document.querySelector(".videoContainer1");
const videoContainer2 = document.querySelector(".videoContainer2");
const videoContainer3 = document.querySelector(".videoContainer3");
const videoContainer4 = document.querySelector(".videoContainer4");
const resumen1 = document.querySelector("#resumen1");
const resumen2 = document.querySelector("#resumen2");
const resumen3 = document.querySelector("#resumen3");
const resumen4 = document.querySelector("#resumen4");
const video1 = document.querySelector(".video1");
const video2 = document.querySelector(".video2");
const video3 = document.querySelector(".video3");
const video4 = document.querySelector(".video4");
const play1 = document.querySelector("#play1");
const play2 = document.querySelector("#play2");
const play3 = document.querySelector("#play3");
const play4 = document.querySelector("#play4");

function showVideo1() {
  if (videoContainer1.classList.contains("youtube-video-active")) {
    videoContainer1.classList.remove("youtube-video-active");
    video1.classList.remove("youtube-video-active");
  } else {
    videoContainer1.classList.add("youtube-video-active");
    video1.classList.add("youtube-video-active");
  }
}

resumen1.addEventListener("click", showVideo1);
play1.addEventListener("click", showVideo1);
videoContainer1.addEventListener("click", showVideo1);

function showVideo2() {
  if (videoContainer2.classList.contains("youtube-video-active")) {
    videoContainer2.classList.remove("youtube-video-active");
    video2.classList.remove("youtube-video-active");
  } else {
    videoContainer2.classList.add("youtube-video-active");
    video2.classList.add("youtube-video-active");
  }
}

resumen2.addEventListener("click", showVideo2);
play2.addEventListener("click", showVideo2);
videoContainer2.addEventListener("click", showVideo2);

function showVideo3() {
  if (videoContainer3.classList.contains("youtube-video-active")) {
    videoContainer3.classList.remove("youtube-video-active");
    video3.classList.remove("youtube-video-active");
  } else {
    videoContainer3.classList.add("youtube-video-active");
    video3.classList.add("youtube-video-active");
  }
}

resumen3.addEventListener("click", showVideo3);
play3.addEventListener("click", showVideo3);
videoContainer3.addEventListener("click", showVideo3);

function showVideo4() {
  if (videoContainer4.classList.contains("youtube-video-active")) {
    videoContainer4.classList.remove("youtube-video-active");
    video4.classList.remove("youtube-video-active");
  } else {
    videoContainer4.classList.add("youtube-video-active");
    video4.classList.add("youtube-video-active");
  }
}

resumen4.addEventListener("click", showVideo4);
play4.addEventListener("click", showVideo4);
videoContainer4.addEventListener("click", showVideo4);
