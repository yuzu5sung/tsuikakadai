window.addEventListener("load", function () {
  const marquee = document.querySelector(".marqueer ul"); // ul要素
  const items = Array.from(marquee.children); // 子要素
  const speedSeconds = 20; // スクロール1回にかかる秒数
  const direction = "left"; // 'left' または 'right'

  // 無限スクロール用に複製
  items.forEach((item) => marquee.appendChild(item.cloneNode(true)));

  let marqueeWidth = marquee.scrollWidth / 2;
  let pos = direction === "left" ? 0 : -marqueeWidth;
  const pixelsPerFrame = marqueeWidth / (speedSeconds * 50);

  function animate() {
    pos += direction === "left" ? -pixelsPerFrame : pixelsPerFrame;

    // 無限ループ
    if (pos <= -marqueeWidth) pos += marqueeWidth;
    if (pos >= 0) pos -= marqueeWidth;

    marquee.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});
