var cart = JSON.parse(localStorage.getItem('cart')) || [];
var totalCount = 0;

function updateCartDisplay() {
  var tableBody = document.getElementById('table-cart');
  var tr = "";
  var subtotal = 0;

  for (var i = 0; i < cart.length; i++) {
    var qty = parseInt(cart[i].qty);
    var price = parseFloat(cart[i].price);
    var productTotal = qty * price;
    subtotal += productTotal;

    tr += `
      <tr>
        <td>${cart[i].name}</td>
        <td>$${price.toFixed(2)}</td>
        <td>
          <input type="number" min="1" class="form-control text-center" value="${qty}" 
          onchange="updateQuantity(${i}, this.value)">
        </td>
        <td>$${productTotal.toFixed(2)}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteProduct(${i})">Delete</button>
        </td> 
      </tr>`;
  }

  tableBody.innerHTML = tr;
  updateSubtotal(subtotal);
}

function deleteProduct(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
  viewCart();
}

function updateQuantity(index, newQty) {
  if (newQty <= 0) return;
  cart[index].qty = newQty;
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

function updateSubtotal(subtotal) {
  document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
}

function viewCart() {
  totalCount = cart.length;
  document.getElementById("count").innerHTML = totalCount || 0;
}

viewCart();
updateCartDisplay();
