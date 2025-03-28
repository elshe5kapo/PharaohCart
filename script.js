script.js
// script.js
window.onload = function() {
    alert("مرحبًا بك في PharaohCart!");
};
// script.js

// قائمة المنتجات (يمكن استبدالها بالبيانات الحقيقية)
const products = [
    { name: "سماعات لاسلكية", description: "سماعات بجودة صوت عالية.", link: "https://example.com/product1" },
    { name: "شاحن محمول", description: "شاحن محمول بسعة 10,000mAh.", link: "https://example.com/product2" },
    { name: "ساعة ذكية", description: "ساعة ذكية مع مراقبة النوم.", link: "https://example.com/product3" }
];

// دالة عرض المنتجات
function displayProducts(filteredProducts) {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = ''; // مسح العناصر القديمة

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="${product.link}" target="_blank">اشتر الآن</a>
        `;
        productContainer.appendChild(card);
    });
}

// دالة البحث
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
}

// عرض جميع المنتجات عند البدء
displayProducts(products);
// script.js

// قائمة منتجات أخرى
const otherProducts = [
    { name: "مروحة صغيرة", description: "مروحة محمولة تعمل بالبطارية.", link: "https://example.com/product4" },
    { name: "كيس حمل"، description: "كيس حمل مضاد للماء.", link: "https://example.com/product5" }
];

// عرض منتجات أخرى
function displayOtherProducts() {
    const otherProductContainer = document.getElementById('otherProducts');
    otherProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="${product.link}" target="_blank">اشتر الآن</a>
        `;
        otherProductContainer.appendChild(card);
    });
}

// عرض منتجات أخرى عند البدء
displayOtherProducts();