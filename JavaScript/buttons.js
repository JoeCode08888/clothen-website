// buttons.js - 頁面按鈕

console.log("JS頁面按鈕載入成功");

// 回到首頁
const frontPages = document.querySelector(".headerLeft");
frontPages.addEventListener("click", () => {
    window.location.href = "/";
});

// TOP 按鈕
const topBtn = document.querySelector(".top button");
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// FB 按鈕
const fbBtn = document.getElementById("fbBtn");
fbBtn.addEventListener("click", () => {
    window.open("https://www.facebook.com/IIIDEITc/", "_blank")
});

// IG 按鈕
const igBtn = document.getElementById("igBtn");
igBtn.addEventListener("click", () => {
    window.open("https://www.instagram.com/ispan_iii/", "_blank")
});

// Line 按鈕
const lineBtn = document.getElementById("lineBtn");
lineBtn.addEventListener("click", () => {
    window.open("./line.html", "_blank")
});