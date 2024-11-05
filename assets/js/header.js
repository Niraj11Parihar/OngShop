let header = document.getElementById("header")
let div = `
<div class="container">
<nav class="navbar navbar-expand-lg bg-white">
<div class="container-fluid">
    <div class="navbar-brand  align-items-center  d-flex" href="#">
        <img src="assets/images/logo.png" alt="" class="mx-2" style="height: 40px;">
        <h4 class="m-0">ONGSHOP</h4>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse bg-dark justify-content-end  " id="navbarSupportedContent">
        <ul class="navbar-nav fw-bold fs-5">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">SHOP</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">CATEGORIES</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about.html">ABOUT US</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">CONTACT</a>
            </li>
            <li class="nav-item d-flex align-items-center justify-content-between">
                <button class="border-0 mx-3 rounded-circle"><i class="bi bi-search  text-dark"></i></button>
                <button class="border-0 mx-3 rounded-circle"><a href="cart.html"><i class="bi bi-cart3  text-dark " ></i></a></button>
                <span id="count" class="rounded-circle"></span>
            </li>
        </ul>
    </div>
</div>
</nav>
</div>
`
header.innerHTML = div;