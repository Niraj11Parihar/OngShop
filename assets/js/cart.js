var cart = JSON.parse(localStorage.getItem('cart')) || [];
var total = 0;
var totalCount = 0;

function updateCartDisplay() {
  var tableBody = document.getElementById('table-cart');
  var tr = "";

  for (var i = 0; i < cart.length; i++) {
    var qty = parseInt(cart[i].qty);
    var price = parseInt(cart[i].price) ;
    tr += `
      <tr>
        <td>${cart[i].name}</td>
        <td>${cart[i].price}</td>
        <td>${cart[i].qty}</td>
        <td>${(cart[i].qty * cart[i].price).toFixed(2)}</td>
        <td>
          <button class="del" onclick="deleteProduct(${i})">DELETE</button>
        </td> 
      </tr>`;

    total += qty * price;
  }

  tableBody.innerHTML = tr;
  // updateTotal();
}

function deleteProduct(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
  viewCart();
}

function viewCart() {
  totalCount = cart.length;
  document.getElementById("count").innerHTML = totalCount;
}

// function updateTotal() {
//   document.getElementById("total").innerHTML = total.toFixed(2);
// }

viewCart();
updateCartDisplay();