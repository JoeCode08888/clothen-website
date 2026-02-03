// categorySidebar.js - 側邊欄與商品分類

console.log("JS側邊欄與商品分類載入成功");

let currentCategory = "";
// 載入對應的側邊欄 HTML，並顯示該分類的商品
function loadSidebar(category){
    currentCategory = category;
    let file = "";
    if (category === "women") file = "./categorySidebarWomen.html";
    else if (category === "men") file = "./categorySidebarMen.html";
    else if (category === "kids") file = "./categorySidebarKids.html";
    fetch(file)
        .then(response => response.text())
        .then(html => {
            document.getElementById("sidebarContainer").innerHTML = html;
            attachCategoryEvents();
        })
        .catch(err => console.error("載入側邊欄失敗", err));
    const filteredProducts = products.filter(p => p.category === category);
    renderProducts(filteredProducts, 1);
    const carousel = document.querySelector(".carousel");
    if (carousel) carousel.style.display = "none";
}

// 綁定側邊欄子分類（categoryItem）的點擊事件
function attachCategoryEvents(){
    const items = document.querySelectorAll(".categoryItem");
    items.forEach(item => {
        item.addEventListener("click", () =>{
            const subCategory = item.dataset.subcategory;
            const type = item.dataset.type;
            const filtered = products.filter(p =>
                p.category === currentCategory && p.subCategory === subCategory && (!type || p.type === type)
            );
            renderProducts(filtered, 1);
            const carousel = document.querySelector(".carousel");
            if (carousel) carousel.style.display = "none";
        });
    });
}

// 綁定主分類按鈕點擊事件，點擊後載入對應側邊欄與商品
document.getElementById("women").addEventListener("click", () => {
    showProductList(() => {
        loadSidebar("women");
        window.scrollTo(0, 0);
    });
});
document.getElementById("men").addEventListener("click", () => {
    showProductList(() => {
        loadSidebar("men");
        window.scrollTo(0, 0);
    });
});
document.getElementById("kids").addEventListener("click", () => {
    showProductList(() => {
        loadSidebar("kids");
        window.scrollTo(0, 0);
    });
});