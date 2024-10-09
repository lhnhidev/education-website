document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần tử icon giỏ hàng
  const cartIcon = document.querySelector(".header__bottom-cart");
  // Lấy dropdown menu
  const dropdownMenu = document.querySelector(".dropdown-menu");
  // Sử dụng Dropdown API của Bootstrap
  const dropdown = new bootstrap.Dropdown(cartIcon);

  // Sự kiện click vào icon giỏ hàng
  cartIcon.addEventListener("click", function () {
    dropdown.toggle();
  });
});

//Danh sách obj để nhập thông tin vào card
const productList = [
  {
    image: "../assets/img/fullstack_thumb_500.jpg",
    reviews: 180,
    lectures: 95,
    students: 32,
    startDate: "15/10/2024",
    schedule: ["Thứ 3", "Thứ 5", "Thứ 7"],
    time: "19h-21h",
    price: 12800000,
    name: "Lập trình Fullstack",
  },
  {
    image: "../assets/img/card2.png",
    reviews: 258,
    lectures: 40,
    students: 80,
    startDate: "22/10/2024",
    schedule: ["Thứ 3", "Thứ 6", "Chủ Nhật"],
    time: "21h-23h",
    price: 2600000,
    name: "Lập trình C++ Cơ bản tới nâng cao",
  },
  {
    image: "../assets/img/card3.png",
    reviews: 326,
    lectures: 50,
    students: 42,
    startDate: "21/10/2024",
    schedule: ["Thứ 2", "Thứ 4", "Thứ 6", "Chủ nhật"],
    time: "9h-12h",
    price: 2750000,
    name: "Lập trình C++ Nâng cao",
  },
  {
    image: "../assets/img/card4.png",
    reviews: 290,
    lectures: 42,
    students: 60,
    startDate: "21/10/2024",
    schedule: ["Thứ 2", "Thứ 4", "Thứ 6", "Chủ nhật"],
    time: "21h-23h",
    price: 2950000,
    name: "Cấu trúc dữ liệu và Giải thuật",
  },
  {
    image: "../assets/img/card5.png",
    reviews: 268,
    lectures: 65,
    students: 30,
    startDate: "24/10/2024",
    schedule: ["Thứ 2", "Thứ 4", "Thứ 5", "Thứ 7"],
    time: "19h-21h",
    price: 6990000,
    name: "Lập Trình Thi Đấu",
  },
  {
    image: "../assets/img/card6.png",
    reviews: 215,
    lectures: 36,
    students: 50,
    startDate: "06/09/2024",
    schedule: ["Thứ 3", "Thứ 6", "Chủ nhật"],
    time: "19h-21h",
    price: 2800000,
    name: "Lập trình Java và SQL",
  },
  {
    image: "../assets/img/card7.jpg",
    reviews: 286,
    lectures: 52,
    students: 36,
    startDate: "12/10/2024",
    schedule: ["Thứ 3", "Thứ 7", "Chủ nhật"],
    time: "9h-12h",
    price: 5800000,
    name: "Lập trình Front-end(Mới)",
  },
  {
    image: "../assets/img/card8.png",
    reviews: 350,
    lectures: 50,
    students: 36,
    startDate: "25/10/2024",
    schedule: ["Thứ 7", "Chủ nhật"],
    time: "19h-21h",
    price: 7000000,
    name: "Lập trình Back-ends NodeJS",
  },
  {
    image: "../assets/img/card9.png",
    reviews: 123,
    lectures: 42,
    students: 29,
    startDate: "22/09/2024",
    schedule: ["Thứ 3", "Thứ 6", "Chủ nhật"],
    time: "21h-23h",
    price: 5000000,
    name: "Lập trình Java Back-end",
  },
  // Thêm các đối tượng khác nếu cần
];

//Tạo card
function generateProductGrid(rows, cols) {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Xóa nội dung cũ (nếu có)

  // Duyệt qua từng sản phẩm trong mảng `productList`
  let productIndex = 0;
  for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.className =
      "d-flex row row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-1 mb-4";

    for (let j = 0; j < cols; j++) {
      // Kiểm tra xem sản phẩm có tồn tại trong mảng `productList` không
      if (productIndex >= productList.length) break;
      const productData = productList[productIndex];

      const product = document.createElement("div");
      product.className = "col d-flex justify-content-center";

      product.innerHTML = `
                <div class="card product">
                    <img src="${productData.image}" class="card-img-top" alt="${
        productData.name
      }" />
                    <div class="card-body product__body">
                        <div class="mb-2">
                            ${'<i class="fa-solid fa-star mb-2" style="color: #ffd43b"></i>'.repeat(
                              5
                            )}
                            <span>(${productData.reviews} Đánh giá)</span>
                        </div>
                        <h5 class="card-title mb-0">${productData.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush product__detail">
                        <li class="list-group-item">
                            <i class="fa-solid fa-book"></i>
                            <span><b>${productData.lectures}</b></span>
                            <span>Bài giảng</span>
                        </li>
                        <li class="list-group-item">
                            <i class="fa-solid fa-user"></i>
                            <span><b>${productData.students}</b></span>
                            <span>Học viên</span>
                        </li>
                        <li class="list-group-item">
                            <i class="fa-solid fa-calendar"></i>
                            <span>Khai giảng:</span>
                            <span><b>${productData.startDate}</b></span>
                        </li>
                        <li class="list-group-item">
                            <i class="fa-solid fa-calendar"></i>
                            <span>Lịch học:</span>
                            <span><b>${productData.schedule.join(
                              ", "
                            )}</b></span>
                        </li>
                        <li class="list-group-item">
                            <i class="fa-solid fa-clock"></i>
                            <span>Giờ học:</span>
                            <span><b>${productData.time}</b></span>
                        </li>
                        <li class="list-group-item">
                            <img class="d-inline-block" style="width: 3rem" src="../assets/img/logo.svg" alt="..." />
                            <span class="ml-2">Đội ngũ Coursera</span>
                        </li>
                    </ul>
                    <div class="card-body">
                        <form class="product__buy d-flex justify-content-between">
                            <span class="product__price">${productData.price.toLocaleString()} VND</span>
                            <button type="button" class="btn btn-dark buy_element button_buy-primary-color">
                                Add to cart
                            </button>
                        </form>
                    </div>
                </div>
            `;
      row.appendChild(product);
      productIndex++;
    }
    container.appendChild(row);
  }
}

// Run generateProduct
if (window.location.href.includes("product.html")) {
  generateProductGrid(3, 3);
}

//------------------------------------------------------------------------------------------------------
let products = [];

const addToCartButtons = document.querySelectorAll(".buy_element");
const cartItemsContainer = document.querySelector("#cart-items");
const cartCount = document.querySelector(".header__bottom-icon-count");

// Gán sự kiện click cho các nút "Add to cart"
addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(event) {
  const card = event.target.closest(".product");

  // Trích xuất thông tin sản phẩm
  const productImg = card.querySelector(".card-img-top").getAttribute("src");
  const productName = card.querySelector(".card-title").innerText;
  const productPriceText = card.querySelector(".product__price").innerText;
  const productPrice = Number(productPriceText.replace(/[^0-9.-]+/g, ""));
  const quantity = 1;

  // Tạo đối tượng sản phẩm
  const product = {
    image: productImg,
    name: productName,
    price: productPrice,
    quantity: quantity,
  };

  var check = true;
  products.forEach((element) => {
    if (element.name === product.name && element.price == product.price) {
      element.quantity++;
      check = false;
    }
  });
  // Thêm sản phẩm vào mảng products
  if (check) {
    products.push(product);
  }

  // Cập nhật `localStorage`
  localStorage.setItem("cartProducts", JSON.stringify(products));
  // Cập nhật nội dung giỏ hàng
  updateCart();
}

// Hàm cập nhật nội dung giỏ hàng
function updateCart() {
  cartItemsContainer.innerHTML = ""; // Xóa nội dung cũ
  products.forEach((product) => {
    const cartItem = document.createElement("li");
    cartItem.classList.add("list-group-item");
    cartItem.innerHTML = `
        <div class="d-flex">
        <img src="${product.image}" alt="${
      product.name
    }" class="img-fluid me-3" style="width: 10vw;">
          <div style="font-size: 1.2rem;">
            <p class="mb-0"><strong>${product.name}</strong></p>
            <p class="mb-0">${product.price.toLocaleString()} VND</p>
            <p class="mb-0">Số lượng: ${product.quantity}</p>
            <button class="btn btn-block button_buy-primary-color text-white mt-2" onclick="removeProduct('${
              product.name
            }')">XÓA KHỎI GIỎ HÀNG</button>
          </div>
        </div>`;

    cartItemsContainer.appendChild(cartItem);
  });

  let tongSoLuongTrenGioHang = 0;
  // Cập nhật số lượng sản phẩm trong giỏ hàng
  products.forEach((element) => {
    tongSoLuongTrenGioHang += parseInt(element.quantity);
  });
  cartCount.innerText = tongSoLuongTrenGioHang;
}

// Hàm để lấy dữ liệu từ `localStorage`
function loadCart() {
  const savedProducts = localStorage.getItem("cartProducts");
  if (savedProducts) {
    products = JSON.parse(savedProducts);
    updateCart();
  }
}

// Gọi hàm khi tải trang
document.addEventListener("DOMContentLoaded", function () {
  loadCart();
});

//---------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  var buyElements = document.querySelectorAll(".buy_element");
  buyElements.forEach((buy) => {
    buy.addEventListener("click", function () {
      var button = this;
      let tmpString = button.innerText;
      // Thêm class "active" để thay đổi màu
      button.classList.add("active");
      button.innerHTML =
        '<i class="fa-solid fa-check" style="color: rgb(2, 179, 2); font-size: 1.5rem"></i>';

      // Đặt thời gian 2 giây để xóa class "active"
      setTimeout(function () {
        button.classList.remove("active");
        button.innerText = tmpString;
      }, 800);
    });
  });
});

//Code trang Giỏ hàng Chính ----------------------------------------------------------------
// Load local Store để tính số lượng đã thêm vào giỏ hàng ở trang sản phẩm
function localLoadCartCount() {
  const savedProducts = localStorage.getItem("cartProducts");
  let totalCount = 0;

  if (savedProducts) {
    const products = JSON.parse(savedProducts);
    totalCount = products.reduce((sum, product) => sum + product.quantity, 0);
  }

  const cartCountElement = document.querySelector(".header__bottom-icon-count");

  cartCountElement.textContent = totalCount;
}

// Load data giỏ hàng từ local store đã lưu ở trang sản phẩm
function loadCartData() {
  const savedProducts = localStorage.getItem("cartProducts");
  const cartItemsContainer = document.querySelector("#cart-items"); // Chọn phần tử chứa sản phẩm trong giỏ hàng
  // Xóa nội dung cũ
  cartItemsContainer.innerHTML = "";

  if (savedProducts) {
    const products = JSON.parse(savedProducts);

    products.forEach((product) => {
      const cartItem = document.createElement("li");
      cartItem.classList.add("list-group-item");
      cartItem.innerHTML = `
        <div class="d-flex">
          <img src="${product.image}" alt="${
        product.name
      }" class="img-fluid me-3" style="width: 10vw;">
          <div style="font-size: 1.2rem;">
            <p class="mb-0"><strong>${product.name}</strong></p>
            <p class="mb-0">${product.price.toLocaleString()} VND</p>
            <p class="mb-0">Số lượng: ${product.quantity}</p>
            <button class="btn btn-block button_buy-primary-color text-white mt-2" onclick="removeProduct('${
              product.name
            }')">REMOVE FROMT CART</button>
          </div>
        </div>`;
      cartItemsContainer.appendChild(cartItem);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  localLoadCartCount(); // Cập nhật số lượng giỏ hàng
  loadCartData(); // Hiển thị sản phẩm trong giỏ hàng
});

// Hàm để cập nhật số lượng trong giỏ hàng
function updateCartQuantity() {
  const quantity_cart = document.getElementById("cart__quantity");
  let totalQuantity = 0;

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  products.forEach((element) => {
    totalQuantity += element.quantity;
  });

  // Cập nhật nội dung cho phần tử
  if (quantity_cart) {
    // Kiểm tra xem phần tử có tồn tại hay không
    quantity_cart.innerHTML = `${totalQuantity} trong giỏ hàng`;
  }
}

// Gọi hàm updateCartQuantity sau khi DOM đã được tải
document.addEventListener("DOMContentLoaded", function () {
  updateCartQuantity();
});

function displayCartItems() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = ""; // Xóa nội dung cũ nếu có

  let cartItemsHTML = "";
  products.forEach((product) => {
    cartItemsHTML += `
        <div class="row mb-3 d-flex">
  <div class="col-12">
    <div class="row cart__des align-items-center">
      <div class="col-xl-2 col-md-3 col-4">
        <img src="${product.image}" alt="${
      product.name
    }" class="img-fluid w-100">
      </div>
      <div class="col-xl-4 col-md-5 col-8 mt-3 mt-md-0 cart-container__detail__Product">
        <h3 class="h5">${product.name}</h3>
        <p>Số lượng: ${product.quantity}</p>
      </div>
      <div class="col-xl-3 col-md-4 col-6 mt-3 mt-md-0">
        <button onclick="removeProduct('${
          product.name
        }')" class="btn btn-block button_buy-primary-color text-white">XÓA KHỎI GIỎ HÀNG</button>
      </div>
      <div class="col-xl-3 col-md-12 col-6 text-md-end mt-3 mt-xl-0">
        <span>${product.price.toLocaleString()} VND</span>
        <i class="fa-solid fa-tag" style="color: var(--primary-color)"></i>
      </div>
    </div>
  </div>
</div>
`;
  });

  // Tính tổng giá sản phẩm và đặt bố cục 9-3
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const totalHTML = `
      <div class="col-xl-3 col-md-6 col-12 ps-xl-5 ps-0 cart-container__thanhToan">
        <h3>Tổng Tiền: </h3>
        <h2>${totalPrice.toLocaleString()} VND</h2>
        <button class="btn btn-block button_buy-primary-color text-white w-100" onclick = "buyProduct()">MUA HÀNG</button>
      </div>`;

  // Chèn cả sản phẩm và phần tổng vào trong một row chính
  cartContainer.innerHTML = `
      <div class="row">
        <div class="col-xl-9 col-md-6 col-12 cart-container__detail">
          ${cartItemsHTML}
        </div>
        ${totalHTML}
      </div>`;
}

//Thanh toán sản phẩm 
function buyProduct() {
  if(localStorage.getItem("cartProducts") != null) {
    window.alert("Mua Hàng Thành Công, Cảm ơn Quý Khách <3");
    localStorage.removeItem("cartProducts");
    window.location.href = "product.html"; // Đường dẫn đến trang mua hàng của bạn
  }else {
    window.alert("Giỏ hàng trống! Vui lòng chọn sản phẩm trước khi thanh toán");
    window.location.href = "product.html";
  }
}

function removeProduct(productName) {
  const index = products.findIndex((product) => product.name === productName);
  if (index > -1) {
    products.splice(index, 1);
    localStorage.setItem("cartProducts", JSON.stringify(products));

    // Đặt cờ reload cho tất cả trang
    localStorage.setItem("reloadAllPages", "true");

    // Reload trang hiện tại
    window.location.reload();
  }
}
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("reloadAllPages") === "true") {
    // Xóa cờ để tránh việc reload lặp lại
    localStorage.removeItem("reloadAllPages");

    // Reload trang
    window.location.reload();
  }
});

document.addEventListener("DOMContentLoaded", displayCartItems);
