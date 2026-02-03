// cart.js - 購物車功能

console.log("JS購物車功能載入成功");

// 渲染購物車內容，更新商品列表、勾選狀態與小計
function renderCart() {
    const cartContent = document.getElementById("cartContent");
    const moneyEl = document.querySelector(".money");
    const selectAllCheckbox = document.querySelector(".selectAll input");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        moneyEl.textContent = 0;
        if (selectAllCheckbox) selectAllCheckbox.checked = false;
        cartContent.innerHTML = "";
        return;
    }
    // 渲染購物車內容
    cartContent.innerHTML = cart.map((item, index) => {
        const price = item.salePrice || item.price;
        const subtotal = price * item.quantity;
        return `
            <div class="cartItem">
                <input type="checkbox" class="itemCheckbox" data-index="${index}">
                <img src="${item.image}" class="cartImg">
                <div class="cartInfo">
                    <p class="cartName">${item.name}</p>
                    <p class="cartColor">顏色: ${item.color}</p>
                    <p class="cartSize">尺寸: ${item.size}</p>
                    <p>單價: NT$${price}</p>
                    <p>數量: ${item.quantity}</p>
                </div>
                <button class="removeItem" data-index="${index}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <div class="cartSubtotal">金額: NT$ ${subtotal}</div>
            </div>
        `;
    }).join("");
    // 更新小計函式
    function updateSubtotal() {
        const checkboxes = document.querySelectorAll(".itemCheckbox");
        let total = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) {
                const idx = parseInt(cb.dataset.index);
                const item = cart[idx];
                const price = item.salePrice || item.price;
                total += price * item.quantity;
            };
        });
        moneyEl.textContent = total;
        if (selectAllCheckbox) {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            selectAllCheckbox.checked = allChecked;
        };
    };
    // 勾選單個商品事件
    const itemCheckboxes = document.querySelectorAll(".itemCheckbox");
    itemCheckboxes.forEach(cb => {
        cb.addEventListener("change", () => {
            updateSubtotal();
        });
    });
    // 全選事件
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener("change", () => {
            const checkboxes = document.querySelectorAll(".itemCheckbox");
            checkboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
            updateSubtotal();
        });
    };
    // 初始化小計
    updateSubtotal();
    // 垃圾桶刪除商品功能
    const removeButtons = document.querySelectorAll(".removeItem");
    removeButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const index = parseInt(btn.dataset.index);
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
        });
    });
};