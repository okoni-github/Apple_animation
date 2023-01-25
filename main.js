const zoom = document.querySelector(".zoom");

addEventListener("scroll", (e) => {
  const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 100 * vh;
  const stop = 200 * vh;

  if (scrollTop > start && scrollTop < stop) {
    const scale = Math.max(2.2 - (scrollTop - start) / 500, 1);
    zoom.style.transform = `scale(${scale})`;
  }
});

const text = document.querySelector(".text");

addEventListener("scroll", (e) => {
  const vh = window.innerHeight / 100;
  const scrollTop = document.documentElement.scrollTop;
  const start = 190 * vh;
  const stop = 210 * vh;

  if (scrollTop > start && scrollTop < stop) {
    text.style.opacity = 1;
  } else if (scrollTop > stop) {
    const opacity = Math.max(1 - (scrollTop - start) / 400, 0);
    text.style.opacity = opacity;
  } else {
    text.style.opacity = 0;
  }
});
