// about.js - 關於 Clothen

console.log("JS關於 Clothen載入成功");

const aboutBtn = document.getElementById("aboutBtn");
if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
        window.scrollTo({top:0});
        fetch("./about.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("mainContent").innerHTML = html;
            if (!document.querySelector("link[href='./CSS/about.css']")) {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "./CSS/about.css";
                document.head.appendChild(link);
            };
        })
        .catch(error => {
            console.error("載入 about.html 失敗", error);
        });
    });
};