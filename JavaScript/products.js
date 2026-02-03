// products.js - 商品資料表

console.log("JS商品資料表載入成功");

const products = [
    // women 女裝
    {
        id: 1,
        name: "女裝 - 短袖上衣",
        image: "./img/WshortSleeveTop.jpg",
        price: 980,
        category: "women",
        subCategory: "top",
        type: "short",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 2,
        name: "女裝 - 針織上衣",
        image: "./img/WknittedTop.jpg",
        price: 1280,
        category: "women",
        subCategory: "top",
        type: "knit",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 3,
        name: "女裝 - 雪紡上衣",
        image: "./img/WchiffonBlouse.jpg",
        price: 1480,
        salePrice: 1280,
        category: "women",
        subCategory: "shirt",
        type: "chiffon",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 4,
        name: "女裝 - 高腰直筒褲",
        image: "./img/WhighWaistStraightPants.jpg",
        price: 1580,
        salePrice: 1280,
        category: "women",
        subCategory: "bottom",
        type: "casual",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 5,
        name: "女裝 - 寬褲",
        image: "./img/WwideLegPants.jpg",
        price: 1580,
        salePrice: 1280,
        category: "women",
        subCategory: "bottom",
        type: "wide",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 6,
        name: "女裝 - A 字短裙",
        image: "./img/WaLineSkirt.jpg",
        price: 980,
        category: "women",
        subCategory: "bottom",
        type: "short",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 7,
        name: "女裝 - 針織外套",
        image: "./img/WknittedCardigan.jpg",
        price: 2080,
        salePrice: 1780,
        category: "women",
        subCategory: "coat",
        type: "knit",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 8,
        name: "女裝 - 風衣外套",
        image: "./img/WwindbreakerCoat.jpg",
        price: 2880,
        salePrice: 2480,
        category: "women",
        subCategory: "coat",
        type: "casual",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 9,
        name: "女裝 - 羽絨大衣",
        image: "./img/WlongPufferCoat.jpg",
        price: 4480,
        salePrice: 2980,
        category: "women",
        subCategory: "coat",
        type: "down",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 10,
        name: "女裝 - 厚毛衣",
        image: "./img/WchunkyKnitSweater.jpg",
        price: 1980,
        salePrice: 1280,
        category: "women",
        subCategory: "top",
        type: "knit",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 11,
        name: "女裝 - 毛帽",
        image: "./img/WknitBeanieWomen.jpg",
        price: 480,
        category: "women",
        subCategory: "accessory",
        type: "hat",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 12,
        name: "女裝 - 圍巾",
        image: "./img/WwoolScarfWomen.jpg",
        price: 680,
        category: "women",
        subCategory: "accessory",
        type: "scarf",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 13,
        name: "女裝 - 羽絨背心",
        image: "./img/WpaddedVestWomen.jpg",
        price: 2480,
        salePrice: 1680,
        category: "women",
        subCategory: "coat",
        type: "down",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },
    {
        id: 14,
        name: "女裝 - 冬季手套",
        image: "./img/WwinterGlovesWomen.jpg",
        price: 480,
        category: "women",
        subCategory: "accessory",
        type: "glove",
        colors: [
            { name: "粉紅", hex: "#FFC0CB" },
            { name: "米白", hex: "#F8F8F8" },
            { name: "薰衣草紫", hex: "#E6E6FA" }
        ]
    },

    // men 男裝
    {
        id: 101,
        name: "男裝 - 短袖 T 恤",
        image: "./img/MshortSleeveTShirt.jpg",
        price: 980,
        category: "men",
        subCategory: "top",
        type: "short",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 102,
        name: "男裝 - 長袖 T 恤",
        image: "./img/MlongSleeveTShirt.jpg",
        price: 1280,
        category: "men",
        subCategory: "top",
        type: "long",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 103,
        name: "男裝 - 休閒襯衫",
        image: "./img/McasualShirt.jpg",
        price: 1580,
        salePrice: 1280,
        category: "men",
        subCategory: "shirt",
        type: "casual",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 104,
        name: "男裝 - 牛仔褲",
        image: "./img/Mjeans.jpg",
        price: 1880,
        salePrice: 1480,
        category: "men",
        subCategory: "bottom",
        type: "jeans",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 105,
        name: "男裝 - 休閒長褲",
        image: "./img/McasualPants.jpg",
        price: 1680,
        salePrice: 1280,
        category: "men",
        subCategory: "bottom",
        type: "casual",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 106,
        name: "男裝 - 運動棉褲",
        image: "./img/MsweatPants.jpg",
        price: 980,
        category: "men",
        subCategory: "bottom",
        type: "casual",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 107,
        name: "男裝 - 連帽外套",
        image: "./img/MzipUpHoodie.jpg",
        price: 2480,
        salePrice: 1980,
        category: "men",
        subCategory: "coat",
        type: "hoodie",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 108,
        name: "男裝 - 風衣外套",
        image: "./img/MwindbreakerJacket.jpg",
        price: 2980,
        salePrice: 2480,
        category: "men",
        subCategory: "coat",
        type: "casual",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 109,
        name: "男裝 - 羽絨外套",
        image: "./img/MpufferJacket.jpg",
        price: 3980,
        salePrice: 2480,
        category: "men",
        subCategory: "coat",
        type: "down",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 110,
        name: "男裝 - 厚毛衣",
        image: "./img/MthickKnitSweater.jpg",
        price: 1480,
        category: "men",
        subCategory: "top",
        type: "knit",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 111,
        name: "男裝 - 羊毛圍巾",
        image: "./img/MwoolScarf.jpg",
        price: 680,
        category: "men",
        subCategory: "accessory",
        type: "scarf",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 112,
        name: "男裝 - 毛帽",
        image: "./img/MknitBeanie.jpg",
        price: 480,
        category: "men",
        subCategory: "accessory",
        type: "hat",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 113,
        name: "男裝 - 羽絨背心",
        image: "./img/MpaddedVest.jpg",
        price: 2480,
        salePrice: 1680,
        category: "men",
        subCategory: "coat",
        type: "down",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 114,
        name: "男裝 - 冬季手套",
        image: "./img/MwinterGloves.jpg",
        price: 480,
        category: "men",
        subCategory: "accessory",
        type: "glove",
        colors: [
            { name: "深藍", hex: "#000080" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },

    // kids 童裝
    {
        id: 201,
        name: "童裝 - 短袖 T 恤",
        image: "./img/KshortSleeveTShirtChildren.jpg",
        price: 680,
        category: "kids",
        subCategory: "top",
        type: "short",
        colors: [
            { name: "米綠", hex: "#CFE3D0" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 202,
        name: "童裝 - 長袖上衣",
        image: "./img/KlongSleeveTopChildren.jpg",
        price: 780,
        category: "kids",
        subCategory: "top",
        type: "long",
        colors: [
            { name: "米綠", hex: "#CFE3D0" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 203,
        name: "童裝 - 連帽上衣",
        image: "./img/KhoodieChildren.jpg",
        price: 880,
        category: "kids",
        subCategory: "top",
        type: "long",
        colors: [
            { name: "米綠", hex: "#CFE3D0" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 204,
        name: "童裝 - 長褲",
        image: "./img/KpantsChildren.jpg",
        price: 780,
        category: "kids",
        subCategory: "bottom",
        type: "casual",
        colors: [
            { name: "米綠", hex: "#CFE3D0" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 205,
        name: "童裝 - 牛仔褲",
        image: "./img/KjeansChildren.jpg",
        price: 880,
        category: "kids",
        subCategory: "bottom",
        type: "jeans",
        colors: [
            { name: "米綠", hex: "#CFE3D0" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 206,
        name: "童裝 - 外套",
        image: "./img/KjacketChildren.jpg",
        price: 1280,
        category: "kids",
        subCategory: "coat",
        type: "casual",
        colors: [
            { name: "米綠", hex: "#CFE3D0" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 207,
        name: "童裝 - 羽絨外套",
        image: "./img/KpufferJacketChildren.jpg",
        price: 2980,
        salePrice: 2480,
        category: "kids",
        subCategory: "coat",
        type: "down",
        colors: [
            { name: "米綠", hex: "#CFE3D0" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 208,
        name: "童裝 - 厚毛衣",
        image: "./img/KthickKnitSweaterChildren.jpg",
        price: 980,
        category: "kids",
        subCategory: "top",
        type: "knit",
        colors: [
            { name: "米綠", hex: "#CFE3D0" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 209,
        name: "童裝 - 毛帽",
        image: "./img/KknitBeanieChildren.jpg",
        price: 480,
        category: "kids",
        subCategory: "accessory",
        type: "hat",
        colors: [
            { name: "米綠", hex: "#CFE3D0" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    },
    {
        id: 210,
        name: "童裝 - 圍巾",
        image: "./img/KwoolScarfChildren.jpg",
        price: 480,
        category: "kids",
        subCategory: "accessory",
        type: "scarf",
        colors: [
            { name: "米綠", hex: "#CFE3D0" },
            { name: "深灰", hex: "#A9A9A9" },
            { name: "米白", hex: "#F8F8F8" }
        ]
    }
];