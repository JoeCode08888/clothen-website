// carouselAndSeason.js - 月份背景/輪播圖

console.log("JS月份背景/輪播圖載入成功");

// 月份切換背景
(function () {
    const month = new Date().getMonth() + 1;
    const body = document.body;
    if (month >= 3 && month <= 8) {
        body.classList.add("springSummer");
    } else {
        body.classList.add("autumnWinter");
    };
})();

// 輪播圖切換
const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;
setInterval(() => {
    images[currentIndex].classList.remove("active");
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    images[currentIndex].classList.add("active");
}, 3000);