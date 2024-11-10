document.addEventListener("DOMContentLoaded", function () {
  // Lấy phần tử icon giỏ hàng
  const cartIcon = document.querySelector(".header__bottom-cart");
  // Sử dụng Dropdown API của Bootstrap
  const dropdown = new bootstrap.Dropdown(cartIcon);

  // Sự kiện click vào icon giỏ hàng
  // Sự kiện hover vào icon giỏ hàng
  cartIcon.addEventListener("mouseenter", function () {
    dropdown.show();
  });

  // Sự kiện rời chuột khỏi icon giỏ hàng
  cartIcon.addEventListener("mouseleave", function () {
    dropdown.hide();
  });
});

//Danh sách obj để nhập thông tin vào card
const productList = [
  {
    image:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/bd6b9fa3d280e2b6f9624e1edcc328ab?_a=AQAEuiZ",
    reviews: 18.128,
    lectures: 95,
    students: 31.222,
    startDate: "15/10/2024",
    schedule: ["Thứ 3", "Thứ 5", "Thứ 7"],
    time: "19h-21h",
    price: 128000,
    name: "Giới thiệu về Data Science",
  },
  {
    image:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/84e0928530709a485a0c1fd5efd01e1d?_a=AQAEuiZ",
    reviews: 20.158,
    lectures: 40,
    students: 85.630,
    startDate: "22/10/2024",
    schedule: ["Thứ 3", "Thứ 6", "Chủ Nhật"],
    time: "21h-23h",
    price: 260000,
    name: "Lập trình C++ Nâng cao",
  },
  {
    image:
      "https://res.cloudinary.com/daily-now/image/upload/s--m_-p0GoJ--/f_auto/v1727769152/posts/PrMmt01tL",
    reviews: 9.126,
    lectures: 50,
    students: 42.333,
    startDate: "21/10/2024",
    schedule: ["Thứ 2", "Thứ 4", "Thứ 6", "Chủ nhật"],
    time: "9h-12h",
    price: 275000,
    name: "Lập trình Game với C++",
  },
  {
    image:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/eaeacd1033553f0ac650b1c335a2439b",
    reviews: 12.29,
    lectures: 42,
    students: 60.655,
    startDate: "21/10/2024",
    schedule: ["Thứ 2", "Thứ 4", "Thứ 6", "Chủ nhật"],
    time: "21h-23h",
    price: 295000,
    name: "Typescript Nâng cao",
  },
  {
    image:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/27fda832cf02b28a4410f0b43f3188da?_a=AQAEuiZ",
    reviews: 2.568,
    lectures: 65,
    students: 30.191,
    startDate: "24/10/2024",
    schedule: ["Thứ 2", "Thứ 4", "Thứ 5", "Thứ 7"],
    time: "19h-21h",
    price: 699000,
    name: "Trở thành Frontend",
  },
  {
    image:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/9f8c36d3058f1e3265012fc9d79d0a79?_a=AQAEufR",
    reviews: 915,
    lectures: 36,
    students: 50.993,
    startDate: "06/09/2024",
    schedule: ["Thứ 3", "Thứ 6", "Chủ nhật"],
    time: "19h-21h",
    price: 280000,
    name: "Tìm hiểu Framworks Javascript",
  },
  {
    image:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ad91e0f1d6a9546edfb205c2dfc48022?_a=AQAEuiZ",
    reviews: 5.186,
    lectures: 52,
    students: 36.512,
    startDate: "12/10/2024",
    schedule: ["Thứ 3", "Thứ 7", "Chủ nhật"],
    time: "9h-12h",
    price: 580000,
    name: "Lập trình Java nâng cao",
  },
  {
    image:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/5d9b895ec2d823d5ea6b68b900d304d6?_a=AQAEuiZ",
    reviews: 32.35,
    lectures: 50,
    students: 36.398,
    startDate: "25/10/2024",
    schedule: ["Thứ 7", "Chủ nhật"],
    time: "19h-21h",
    price: 700000,
    name: "Thị giác máy tính",
  },
  {
    image:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/904a1f2adb89ee4a21bf0dc093c7c058?_a=AQAEuiZ",
    reviews: 50.003,
    lectures: 42,
    students: 29.537,
    startDate: "22/09/2024",
    schedule: ["Thứ 3", "Thứ 6", "Chủ nhật"],
    time: "21h-23h",
    price: 500000,
    name: "Nghiên cứu Git và Github",
  },
  // Thêm các đối tượng khác nếu cần
];

//Tạo card
function generateProductGrid() {
  const container = document.getElementById("product-container");
  container.innerHTML = "";

  const row = document.createElement("div");
  row.className =
    "product__row-card d-flex row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-4";

  // Duyệt qua từng sản phẩm trong mảng `productList`
  for (
    let productIndex = 0;
    productIndex < productList.length;
    productIndex++
  ) {
    const productData = productList[productIndex];

    const product = document.createElement("div");
    product.className = "col product__col-card d-flex justify-content-center";

    product.innerHTML = `
            <div class="card product product-box">
                <div class="product__img">
                  <img src="${
                    productData.image
                  }" class="card-img-top product__img-card" alt="${
      productData.name
    }" />
                </div>
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
                    
                </ul>
                <div class="card-body">
                    <form class="product__buy d-flex justify-content-between">
                    <span class="product__price">${productData.price.toLocaleString()} VND</span>
                        <button type="button" class="btn btn-dark buy_element button_buy-primary-color">
                            Thêm giỏ hàng
                        </button>
                    </form>
                </div>
            </div>
        `;
    row.appendChild(product); // Thêm từng col vào row
  }

  container.appendChild(row);
}

// Run generateProduct
if (window.location.href.includes("product.html")) {
  generateProductGrid();
}

//------------------------------------------------------------------------------------------------------
let products = [];

const addToCartButtons = document.querySelectorAll(".buy_element");
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
  loadCartData();
}

// Hiển thị sản các sản phẩm đã click ở addToCart lên trên giỏ hàng nhỏ
function loadCartData() {
  const savedProducts = localStorage.getItem("cartProducts");
  const cartItemsContainer = document.querySelector("#cart-items");

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
          <div class = "miniCart__infor">
            <p class="mb-0"><strong>${product.name}</strong></p>
            <p class="mb-0">${product.price.toLocaleString()} VND</p>
            <p class="mb-0">Số lượng: ${product.quantity}</p>
            <button class="btn btn-block button_buy-primary-color text-white mt-2" onclick="removeProduct('${
              product.name
            }')">Xóa khỏi giỏ hàng</button>
          </div>
        </div>`;
      cartItemsContainer.appendChild(cartItem);
    });
  }
  let tongSoLuongTrenGioHang = 0;
  products.forEach((element) => {
    tongSoLuongTrenGioHang += parseInt(element.quantity);
  });
  cartCount.innerText = tongSoLuongTrenGioHang;
}

function loadCart() {
  const savedProducts = localStorage.getItem("cartProducts");
  if (savedProducts) {
    products = JSON.parse(savedProducts);
    loadCartData();
  }
}

// Gọi hàm khi tải trang
document.addEventListener("DOMContentLoaded", function () {
  loadCart();
});

//Thêm hiệu ứng cho button Add to Cart
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
function displayCartItems() {
  const cartItemsHTML = document.createElement("div");
  cartItemsHTML.classList.add("row", "row-cols-1", "mb-3", "d-flex");

  products.forEach((product) => {
    const colCart = document.createElement("div");
    colCart.classList.add("col", "noname");
    colCart.innerHTML = `
      <div class="row cart__des align-items-center">
        <div class="col-xl-2 col-md-3 col-4">
          <img src="${product.image}" alt="${product.name}" class="img-fluid w-100">
        </div>
        <div class="col-xl-4 col-md-5 col-8 mt-3 mt-md-0 cart-container__detail__Product">
          <h3 class="h5 heading__cart">${product.name}</h3>
          <p class="para__cart">Số lượng: ${product.quantity}</p>
        </div>
        <div class="col-xl-3 col-md-4 col-6 mt-3 mt-md-0">
          <button onclick="removeProduct('${product.name}')" class="btn btn-block button_buy-primary-color text-white">XÓA KHỎI GIỎ HÀNG</button>
        </div>
        <div class="noname-2 col-xl-3 col-md-12 col-6 text-md-end mt-3 mt-xl-0">
          <span>${product.price.toLocaleString()} VND</span>
          <i class="fa-solid fa-tag" style="color: var(--primary-color)"></i>
        </div>
      </div>`;
    cartItemsHTML.appendChild(colCart);         
  });

  // Tính tổng giá sản phẩm
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  // Nội dung tổng giá
  const totalHTML = `
    <div class="col-xl-3 col-md-6 col-12 ps-xl-5 ps-0 cart-container__thanhToan">
      <h3 class="product-heading">Tổng Tiền: </h3>
      <h2 class="product-title">${totalPrice.toLocaleString()} VND</h2>
      <button class="btn btn-block button_buy-primary-color button-solve text-white w-100" onclick="buyProduct()">MUA HÀNG</button>
    </div>`;

  // Chèn sản phẩm và phần tổng vào trong một row chính
  const cartContainer = document.getElementById("cart-container");
  if (cartContainer != null) {
    cartContainer.innerHTML = `
      <div class="row">
        <div class="col-xl-9 col-md-6 col-12 cart-container__detail">
          ${cartItemsHTML.outerHTML}
        </div>
        ${totalHTML}
      </div>`;
  }
}


//Thanh toán sản phẩm
function buyProduct() {
  if (localStorage.getItem("cartProducts") != null) {
    window.alert("Mua Hàng Thành Công, Cảm ơn Quý Khách <3");
    localStorage.removeItem("cartProducts");
    window.location.href = "product.html";
  } else {
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

const inputForm = document.querySelectorAll('.form-floating');

[...inputForm].forEach((ele) => {
  var inputElement = ele.querySelector('.form-control');
  var label = ele.querySelector('label');
  inputElement.addEventListener('blur', () => {
    if (inputElement.value != '') {
      Object.assign(label.style, {
        'backgroundColor': 'transparent',
        'padding': '5px 10px 0px 10px',
        'top': '-10px'
      });
    }
    else {
      Object.assign(label.style, {
        'backgroundColor': 'transparent',
        'padding': '10px',
      });
    }
  });

  inputElement.addEventListener('click', () => {
    if (inputElement.value != '') {
      label.style.setProperty('top', '0px');
    }
  });
});