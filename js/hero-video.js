/* BLACK TRANSSIMO — hero video background
   The site currently ships a single compiled video (video/hero-cinematic.mp4),
   which autoplays via its own HTML attributes. This module remains as a
   slideshow engine in case multiple background videos are re-introduced. */
/* eslint-disable */
(function () {
  var wrap = document.getElementById("heroVideo");
  if (!wrap) return;

  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var videos = Array.prototype.slice.call(wrap.querySelectorAll(".hero-video"));
  if (videos.length < 2) return;

  var idx = 0;
  var SHOW_MS = 7000;
  var FADE_MS = 1600;

  function preload(i) {
    videos[i].setAttribute("preload", "auto");
    videos[i].load();
  }

  function play(v) {
    var p = v.play();
    if (p && typeof p.catch === "function") p.catch(function () {});
  }

  function next() {
    var prev = videos[idx];
    idx = (idx + 1) % videos.length;
    var cur = videos[idx];
    cur.classList.add("is-active");
    play(cur);
    preload((idx + 1) % videos.length);
    setTimeout(function () {
      prev.classList.remove("is-active");
      prev.pause();
    }, FADE_MS);
    setTimeout(next, SHOW_MS);
  }

  play(videos[0]);
  preload(1);
  setTimeout(next, SHOW_MS);
})();
