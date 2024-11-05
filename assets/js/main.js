
let product = [{
        name: "Organic Cherry",
        Image: 'assets/images/cherry.avif',
        price: '20',
    },
    {
        name: "Tomato",
        Image: 'assets/images/tomato.avif',
        price: "46",
    },
    {
        name: "Pieapple",
        Image: 'assets/images/pieapple.avif',
        price: "78",
    },
    {
        name: "Onion",
        Image: 'assets/images/union.avif',
        price: "46",
    },
    {
        name: "Mix Fruit",
        Image: 'assets/images/mix.png',
        price: "7",
    },
    {
        name: "Kiwi",
        Image: 'assets/images/kiwi.avif',
        price: "25",
    },
    {
        name: "Cabbage",
        Image: 'assets/images/cabbage.avif',
        price: "0",
    },
    {
        name: "Pepper",
        Image: 'assets/images/peper.avif',
        price: "10",
    },
    {
        name: "Mushroom",
        Image: 'assets/images/mushroom.avif',
        price: "25",
    },
    {
        name: "Orange Juice",
        Image: 'assets/images/orgjuice.jpg',
        price: "10",
    },
    {
        name: "Salad",
        Image: 'assets/images/salad.avif',
        price: "$10",
    },
    {
        name: "Green Apple",
        Image: 'assets/images/greenapple.webp',
        price: "$25",
    }
]

let Ecommerce = document.getElementById('Ecommerce');

var divHTML = '';


product.forEach((product, index) => {
    divHTML += `
    <div class="product">
        <div class="product-image">
            <img src="${product.Image}" alt="">
        </div>
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price}</div>
            <button class="buy-button my-2" onclick="addcart(${index})">Add to Cart</button>
        </div>
    </div>`;
});
Ecommerce.innerHTML = divHTML;


function addcart(id) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var productToAdd = product[id];
    var find = cart.findIndex((item) => item.name == productToAdd.name)

    if (find !== -1) {
        cart[find].qty++;
    } else {
        cart.push({
            name: productToAdd.name,
            price: productToAdd.price,
            qty: 1
        });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    ViewCart();
}

var count = 0

function ViewCart() {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    count = cart.length
    document.getElementById("count").innerHTML = count;
}

ViewCart();