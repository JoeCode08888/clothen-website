// userFeedback.js - 意見回饋表單功能控制

console.log("JS意見回饋表單載入成功");

document.addEventListener("DOMContentLoaded", function () {
    const main = document.getElementById("mainContent");
    const feedbackBtn = document.getElementById("feedbackBtn");
    feedbackBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0 });
        // 動態載入 userFeedback.css
        if (!document.getElementById("ufCss")) {
            const link = document.createElement("link");
            link.id = "ufCss";
            link.rel = "stylesheet";
            link.href = "./CSS/userFeedback.css";
            document.head.appendChild(link);
        };
        // 動態載入 userFeedback.html
        fetch("./userFeedback.html")
            .then(response => {
                if (!response.ok) throw new Error("讀取 userFeedback.html 失敗");
                return response.text();
            })
            .then(html => {
                main.innerHTML = html;
                initFeedbackForm();
            })
            .catch(err => {
                console.error(err);
                main.innerHTML = "<p>表單載入失敗，請稍後再嘗試</p>"
            });
    });
    // 初始化回饋表單（事件、驗證、動態資料）
    function initFeedbackForm() {
        const products = [
            "女裝 - 短袖上衣", "女裝 - 針織上衣", "女裝 - 雪紡上衣",
            "女裝 - 高腰直筒褲", "女裝 - 寬褲", "女裝 - A 字短裙",
            "女裝 - 針織外套", "女裝 - 風衣外套", "女裝 - 羽絨大衣",
            "女裝 - 厚毛衣", "女裝 - 毛帽", "女裝 - 圍巾",
            "女裝 - 羽絨背心", "女裝 - 冬季手套",
            "男裝 - 短袖 T 恤", "男裝 - 長袖 T 恤", "男裝 - 休閒襯衫",
            "男裝 - 牛仔褲", "男裝 - 休閒長褲", "男裝 - 運動棉褲",
            "男裝 - 連帽外套", "男裝 - 風衣外套", "男裝 - 羽絨外套",
            "男裝 - 厚毛衣", "男裝 - 羊毛圍巾", "男裝 - 毛帽",
            "男裝 - 羽絨背心", "男裝 - 冬季手套",
            "童裝 - 短袖 T 恤", "童裝 - 長袖上衣", "童裝 - 連帽上衣",
            "童裝 - 長褲", "童裝 - 牛仔褲", "童裝 - 外套", "童裝 - 羽絨外套",
            "童裝 - 厚毛衣", "童裝 - 毛帽", "童裝 - 圍巾"
        ];
        const productSelect = document.getElementById("ufProduct");
        products.forEach(p => {
            const option = document.createElement("option");
            option.textContent = p;
            productSelect.appendChild(option);
        });
        const form = document.getElementById("ufFeedbackForm");
        const submitButton = form.querySelector("button[type='submit']");
        const successMsg = document.getElementById("ufSuccessMsg");
        const nameInput = document.getElementById("ufName");
        const phoneInput = document.getElementById("ufPhone");
        const emailInput = document.getElementById("ufEmail");
        const messageInput = document.getElementById("ufMessage");
        function validateEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
        function validatePhone(phone) { return /^[0-9\-]{7,15}$/.test(phone); }
        function validateMessage(msg) { return msg.length <= 200; }
        // 即時輸入驗證（邊框變色）
        emailInput.addEventListener("input", () => {
            emailInput.style.borderColor = validateEmail(emailInput.value) ? "rgb(168, 164, 164)" : "red";
        });
        phoneInput.addEventListener("input", () => {
            phoneInput.style.borderColor = validatePhone(phoneInput.value) ? "rgb(168, 164, 164)" : "red";
        });
        messageInput.addEventListener("input", () => {
            messageInput.style.borderColor = validateMessage(messageInput.value) ? "rgb(168, 164, 164)" : "red";
        });
        // 表單送出
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            if (!nameInput.value.trim() ||
                !validatePhone(phoneInput.value) ||
                !validateEmail(emailInput.value) ||
                !validateMessage(messageInput.value)) {
                alert("請確認所有欄位輸入正確！");
                return;
            };
            submitButton.textContent = "提交中...";
            submitButton.disabled = true;
            setTimeout(() => {
                successMsg.classList.remove("hidden");
                form.reset();
                submitButton.textContent = "送出";
                submitButton.disabled = false;
                setTimeout(() => successMsg.classList.add("hidden"), 5000);
            }, 1000);
        });
    }
});