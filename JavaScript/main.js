// main.js - 主要功能

console.log("JS主要功能載入成功");

let currentPage = 1;
const pageSize = 20;
let currentList = products;
const productsListHTML = document.getElementById("mainContent").innerHTML;

// 首次造訪清空購物車
if (!sessionStorage.getItem("visited")) {
    localStorage.removeItem("cart");
    sessionStorage.setItem("visited", "true")
};

// 顯示完整商品列表
function showProductList(callback) {
    const main = document.getElementById("mainContent");
    main.innerHTML = productsListHTML;
    if (callback) callback();
};

// 搜尋事件
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
    const keyword = searchBox.value.trim().toLowerCase();
    const carousel = document.querySelector(".carousel")
    let filteredProducts = products;
    if (keyword !== "") {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(keyword)
        )
    }
    renderProducts(filteredProducts, 1);
    if (carousel) {
        carousel.style.display = keyword === "" ? "block" : "none";
    }
});

// 生成顏色
function generateColorDots(colors) {
    return colors.map(c => `
        <span class="colorDot" title="${c.name}" style="background-color: ${c.hex};"></span>
        `).join("");
};

// 動態生成商品列表
function renderProducts(list, page = 1) {
    currentList = list;
    currentPage = page;
    const productsContainer = document.querySelector(".products");
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const pageItems = list.slice(start, end);
    productsContainer.innerHTML = pageItems.map(product => {
        const colorDots = generateColorDots(product.colors);
        return`
        <article class="article" data-id="${product.id}">
            <img class="productImage" src="${product.image}" alt="${product.name}"> 
            <div class="color">
                <div class="colorPalette">${colorDots}</div>
            </div>
            <div class="product">
                <p>${product.name}</p>
            </div>
            <div class="price">
                ${product.salePrice
            ? `<span class="original">原價 NT$ ${product.price}</span>
                    <span class="discount">優惠價 NT$ ${product.salePrice}</span>`
            : `<span class="originally">NT$ ${product.price}</span>`
        }
            </div>
        </article>
        `;
        }).join("");

    // 動態跳轉商品詳細頁
    const productItems = document.querySelectorAll(".article");
    productItems.forEach(item => {
        item.addEventListener("click", (event) => {
            const productId = event.currentTarget.getAttribute("data-id");
            loadProductDetails(productId);
        });
    });

    // 動態生成分頁按鈕
    const pagination = document.querySelector(".productList");
    pagination.innerHTML = "";
    const totalPages = Math.ceil(list.length / pageSize);
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.classList.add("active");
        btn.addEventListener("click", () => {
            renderProducts(list, i);
            window.scrollTo(0, 0);
        });
        li.appendChild(btn);
        pagination.appendChild(li);
    };
};
renderProducts(products);

// 商品詳細頁功能
function loadProductDetails(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        const productDetailHTML = `
            <hr>
            <section class="productDetails" data-id=${product.id}>
                <div class="productImages">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="productInfo">
                    <h3 class="productName">${product.name}</h3>
                    <hr>
                    <div>
                        <h4 class="productColor">顏色:</h4>
                        <div class="pdColor"></div>
                    </div>

                    <div>
                        <h4 class="productSize">尺寸:</h4>
                        <ul class="pdSize">
                            <li><button>XS</button></li>
                            <li><button>S</button></li>
                            <li><button>M</button></li>
                            <li><button>L</button></li>
                            <li><button>XL</button></li>
                            <li><button>XXL</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="productPrice">價格:</h4>
                        <p class="pdPrice">
                            ${product.salePrice
                ? `<span class="original">原價 NT$ ${product.price}</span>
                                  <span class="discount">優惠價 NT$ ${product.salePrice}</span>`
                : `NT$ ${product.price}`
            }
                        </p>
                    </div>

                    <div id="cartContainer">
                        <div class="calculator">
                            <button class="quantityBtn" id="decrease">-</button>
                            <span id="quantity">1</span>
                            <button class="quantityBtn" id="increase">+</button>
                        </div>
                        <button class="addToCart">加入購物車</button>
                    </div>
                </div>
            </section>
            <hr>
        `;
        document.querySelector("#mainContent").innerHTML = productDetailHTML;

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "./CSS/productDetail.css";
        document.head.appendChild(link);
        const pdColor = document.querySelector(".pdColor");
        pdColor.innerHTML = generateColorDots(product.colors);
        let selectedColor = null;
        const colorDots = document.querySelectorAll(".colorDot");
        colorDots.forEach(dot => {
            dot.addEventListener("click", () => {
                colorDots.forEach(d => d.classList.remove("selected"));
                dot.classList.add("selected");
                selectedColor = dot.title;
            });
        });

        // 數量調整
        document.getElementById("decrease").addEventListener("click", () => {
            let quantity = parseInt(document.getElementById("quantity").textContent);
            if (quantity > 1) {
                document.getElementById("quantity").textContent = quantity - 1;
            };
        });
        document.getElementById("increase").addEventListener("click", () => {
            let quantity = parseInt(document.getElementById("quantity").textContent);
            document.getElementById("quantity").textContent = quantity + 1;
        });

        // 尺寸選取功能
        const sizeButtons = document.querySelectorAll(".pdSize button");
        let selectedSize = null;
        sizeButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                sizeButtons.forEach(b => b.classList.remove("selected"));
                btn.classList.add("selected");
                selectedSize = btn.textContent;
            });
        });

        // 加入購物車
        const addToCartBtn = document.querySelector(".addToCart");
        if (addToCartBtn) {
            addToCartBtn.addEventListener("click", () => {
                const quantity = parseInt(document.querySelector("#quantity").textContent);
                const productId = document.querySelector(".productDetails").dataset.id;
                const product = products.find(p => p.id == productId);

                if (!product) {
                    console.error("找不到該商品");
                    return;
                };

                if (!selectedColor) {
                    alert("請選擇顏色");
                    return;
                };

                if (!selectedSize) {
                    alert("請選擇尺寸");
                    return;
                };

                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                const existingIndex = cart.findIndex(item => 
                    item.id === product.id && 
                    item.size === selectedSize &&
                    item.color === selectedColor
                );
                if (existingIndex !== -1) {
                    cart[existingIndex].quantity += quantity;
                } else {
                    cart.push({ ...product,
                        quantity: quantity,
                        size: selectedSize,
                        color: selectedColor
                    });
                };
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
                // alert(`${product.name} 已加入購物車`);
            });
        };
    } else {
        console.error("找不到該商品");
    };
};

// 購物車功能
const cartBtn = document.getElementById("shopping");
const cart = document.getElementById("basketSection");
if (cartBtn && cart) {
    cartBtn.addEventListener("click", () => {
        renderCart();
        if (cart.style.display === "none" || cart.style.display === "") {
            cart.style.display = "block";
        } else {
            cart.style.display = "none";
        }
    });
};