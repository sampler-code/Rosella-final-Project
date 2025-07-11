document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("share-cart");
  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      window.location.href = "checkout.html";
    });
  }
});

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Get nav icons
  const favoritesIcon = document.getElementById("favorites-icon");
  const favoritesSidebar = document.getElementById("favorites-sidebar");
  const closeFavoritesBtn = document.getElementById("close-favorites");

  const cartIcon = document.getElementById("cart-icon");
  const cartSidebar = document.getElementById("cart-sidebar");
  const closeCartBtn = document.getElementById("close-cart");

  // Favorites toggle
  favoritesIcon.addEventListener("click", (e) => {
    e.preventDefault();
    favoritesSidebar.classList.add("show");
  });

  closeFavoritesBtn.addEventListener("click", () => {
    favoritesSidebar.classList.remove("show");
  });

  // Cart toggle
  cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    cartSidebar.classList.add("show");
  });

  closeCartBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("show");
  });

  // Click outside closes sidebars
  window.addEventListener("click", (e) => {
    if (e.target === favoritesSidebar) {
      favoritesSidebar.classList.remove("show");
    }
    if (e.target === cartSidebar) {
      cartSidebar.classList.remove("show");
    }
  });

  renderProducts();
  renderVases();
  renderReadyBouquets();  
});

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Get nav icons
  const favoritesIcon = document.getElementById("favorites-icon");
  const favoritesSidebar = document.getElementById("favorites-sidebar");
  const closeFavoritesBtn = document.getElementById("close-favorites");

  const cartIcon = document.getElementById("cart-icon");
  const cartSidebar = document.getElementById("cart-sidebar");
  const closeCartBtn = document.getElementById("close-cart");

  // Favorites toggle
  favoritesIcon.addEventListener("click", (e) => {
    e.preventDefault();
    favoritesSidebar.classList.add("show");
  });

  closeFavoritesBtn.addEventListener("click", () => {
    favoritesSidebar.classList.remove("show");
  });

  // Cart toggle
  cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    cartSidebar.classList.add("show");
  });

  closeCartBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("show");
  });

  // Click outside closes sidebars
  window.addEventListener("click", (e) => {
    if (e.target === favoritesSidebar) {
      favoritesSidebar.classList.remove("show");
    }
    if (e.target === cartSidebar) {
      cartSidebar.classList.remove("show");
    }
  });

  renderProducts();
  renderVases();
  renderReadyBouquets();  
});

// ------------------ data -------------------------
const products = [
  { id: 1, name: "Rose",isNew: false, onSale: true, colors: [
    { color: "red", image: "imgs/single red rose.PNG", price: 10 },
    { color: "white", image: "imgs/single white rose.PNG", price: 12 },
    { color: "pink", image: "imgs/single pink rose.PNG", price:15 } ]
  },
  { id: 2, name: "Tulip", isNew: false, onSale: true,colors: [
    { color: "pink", image: "imgs/single tulip pink.PNG", price:10 },
    { color: "yellow", image: "imgs/single tulips yellow.PNG", price:8 },
    { color: "red", image: "imgs/single red tulip.PNG", price:9 },
    { color: "purple", image: "imgs/single tulip purp.PNG", price:12 } ]
  },
  { id: 3, name: "Sunflower",isNew: true, onSale: false, colors: [
    { color: "yellow", image: "imgs/sunflower.png", price:7 } ]
  },
  { id: 4, name: "Lily",isNew: true, onSale: false, colors: [
    { color: "white", image: "imgs/white lily.PNG", price:11 },
    { color: "blue", image: "imgs/blue lily.PNG", price:13 },
    { color: "yellow", image: "imgs/yellow lily.PNG", price:12 },
    { color: "orange", image: "imgs/orangle lilyy.PNG", price:14 },
    { color: "pink", image: "imgs/pink lily.PNG", price:13 },
    { color: "purple", image: "imgs/purpule lily.PNG", price:15 },
    { color: "blue pink", image: "imgs/blue pink lily.jpeg", price:16 } ]
  }
];

const vases = [
  { id: 101,  discount: 0.25, onSale: true, image: "imgs/vases1.PNG", price: 20, size: "small" },
  { id: 102,   discount: 0.25, onSale: true,image: "imgs/vases2.PNG", price: 25, size: "small" },
  { id: 103, discount: 0.25, onSale: true, image: "imgs/vases3.PNG", price: 22, size: "small" },
  { id: 104, discount: 0.25, onSale: false, image: "imgs/vases4.PNG", price: 28, size: "small" },
  { id: 105,  discount: 0.3, onSale: false,image: "imgs/vases5.PNG", price: 24, size: "small" },
  { id: 106,   discount: 0.20, onSale: false,image: "imgs/vases6.PNG", price: 23, size: "small" },
  { id: 201, discount: 0.25, onSale: false,image: "imgs/mid.PNG", price: 35, size: "medium" },
  { id: 202,  discount: 0.5,  onSale: false,image: "imgs/mid2.PNG", price: 38, size: "medium" },
  { id: 203, discount: 0.25, onSale: true, image: "imgs/mid33.PNG", price: 40, size: "medium" },
  { id: 204,  discount: 0.25, onSale: false,image: "imgs/mid4.PNG", price: 42, size: "medium" },
  { id: 205, discount: 0.24, onSale: true, image: "imgs/mid5.PNG", price: 39, size: "medium" },
  { id: 206, discount: 0.2,  onSale: true, image: "imgs/mid6.PNG", price: 41, size: "medium" },
  { id: 301, discount: 0.45,  onSale: true, image: "imgs/lar1.PNG", price: 55, size: "large" },
  { id: 302, discount: 0.25, onSale: true, image: "imgs/lar22.PNG", price: 60, size: "large" },
  { id: 303,  discount: 0.55,  onSale: false,image: "imgs/lar3.PNG", price: 58, size: "large" },
  { id: 304,  discount: 0.35, onSale: true, image: "imgs/lar4.PNG", price: 62, size: "large" },
  { id: 305, discount: 0.25, onSale: true, image: "imgs/lar5.PNG", price: 59, size: "large" },
  { id: 306, discount: 0.7,  onSale: false, image: "imgs/lar66.PNG", price: 61, size: "large" }
];

const readyBouquets = [
  { id: 401,  discount: 0.25, onSale: true, image: "imgs/ready1.PNG", price: 30 },
  { id: 402,  discount: 0.25, onSale: true, image: "imgs/ready2.PNG", price: 28 },
  { id: 403,   discount: 0.25, onSale: true,image: "imgs/ready3.PNG", price: 35 },
  { id: 404, discount: 0.25,  onSale: false,image: "imgs/ready4.PNG", price: 32 },
  { id: 405,  discount: 0.25,onSale: false, image: "imgs/ready5.jpeg", price: 50 },
  { id: 406,   discount: 0.25, onSale: true,image: "imgs/ready6.PNG", price: 34 }
 
];
const occasions = {
  Graduation: [
    { id: 601, discount: 0.25,onSale: true, image: "imgs/graduation1.png", price: 30 },
    { id: 602,  discount: 0.25, onSale: true, image: "imgs/graduation5.PNG", price: 35 },
    { id: 603,  discount: 0.25, onSale: false, image: "imgs/graduation3.png", price: 32 },
    { id: 604, discount: 0.25,onSale: false,image: "imgs/graduation4.png", price: 38 },
  ],
  Newborn: [
    { id: 605,  discount: 0.25, onSale: true, image: "imgs/newborn1.png", price: 28 },
    { id: 606,  discount: 0.25,  onSale: true,image: "imgs/newborn2.png", price: 26 },
    { id: 607,  discount: 0.25, onSale:false, image: "imgs/newborn3.png", price: 29 },
    { id: 608,  discount: 0.25, onSale: false, image: "imgs/newborn4.png", price: 31 },
  ],
  Birthdays: [
    { id: 609, discount: 0.25,  onSale: true, image: "imgs/birthday1.png", price: 33 },
    { id: 610, discount: 0.25,  onSale: true, image: "imgs/birthday2.png", price: 36 },
    { id: 611,  discount: 0.25,  onSale:false,image: "imgs/birthday3.png", price: 34 },
    { id: 612,  discount: 0.25, onSale: false,image: "imgs/birthday4.png", price: 37 },
  ],
  Engagement: [
    { id: 613, discount: 0.25, onSale: true, image: "imgs/engagment1.png", price: 40 },
    { id: 614,  discount: 0.25, onSale: false, image: "imgs/engagment2.png", price: 42 },
    { id: 615,  discount: 0.25, onSale: true, image: "imgs/engagment3.png", price: 39 },
    { id: 616, discount: 0.25, onSale: false, image: "imgs/engagment4.png", price: 44 },
  ]
  
};
const sections = [
    { id: "wedding-services", services: [
      { id: 1, onSale: false, price: 200, img: "imgs/eng1.PNG", isHot: true  },
      { id: 2, onSale: false, price: 50, img: "imgs/eng2.PNG", isHot: false  },
      { id: 3,onSale: false, price: 100, img: "imgs/eng3.PNG", isHot: true  },
      { id: 4,onSale: false, price: 30, img: "imgs/eng4.PNG" , isHot: false  },
      { id: 5,onSale: false, price: 40, img: "imgs/eng5.PNG", isHot: false  },
      { id: 6,onSale: false, price: 150, img: "imgs/eng6.PNG" , isHot: false},
    ]},
    { id: "bride-services", services: [
      { id: 7,onSale: false, price: 70, img: "imgs/bride1.PNG", isHot: false },
      { id: 8,onSale: false, price: 20, img: "imgs/bride2.PNG", isHot: true },
      { id: 9,onSale: false, price: 60, img: "imgs/bride3.PNG" , isHot: false},
      { id: 10,onSale: false, price: 90, img: "imgs/bride4.PNG" , isHot: false},
      { id: 11,onSale: false, price: 100, img: "imgs/bride5.PNG" , isHot: true},
      { id: 12,onSale: false, price: 35, img: "imgs/bride6.PNG" , isHot: true},
    ]},
    { id: "birthday-services", services: [
      { id: 13,onSale: false, price: 45, img: "imgs/birth1.PNG", isHot: true },
      { id: 14,onSale: false, price: 80, img: "imgs/birth2.PNG" , isHot: true},
      { id: 15,onSale: false, price: 60, img: "imgs/birth3.PNG" , isHot: false},
      { id: 16,onSale: false, price: 25, img: "imgs/birth4.PNG", isHot: false },
      { id: 17, onSale: false,price: 90, img: "imgs/birth5.PNG" , isHot: false},
      { id: 18,onSale: false, price: 15, img: "imgs/birth6.PNG" , isHot: false},
    ]},
    { id: "graduation-services", services: [
      { id: 19,onSale: false, price: 50, img: "imgs/grad1.PNG", isHot: true },
      { id: 20,onSale: false, price: 70, img: "imgs/grad2.PNG", isHot: false },
      { id: 21,onSale: false, price: 65, img: "imgs/grad3.PNG" , isHot: false},
      { id: 22,onSale: false, price: 25, img: "imgs/grad4.PNG", isHot: true },
      { id: 23,onSale: false, price: 30, img: "imgs/grad5.PNG" , isHot: false},
      { id: 24, onSale: false,price: 120, img: "imgs/grad6.PNG" , isHot: false},
    ]}
  ];

let favorites = [];
let cart = [];
const currentColors = {};

// ------------------ render functions -------------------------
function renderProducts() {
  let container = document.getElementById("productsGrid");
  if (!container) return;
  container.innerHTML = "";
  products.forEach(product => {
    currentColors[product.id] = product.colors[0].color;
    let def = product.colors[0];
    let colorDots = product.colors.map(c =>
      `<span class="color-dot" style="background:${c.color}; cursor:pointer;"
         onclick="changeProductImage(${product.id}, '${c.color}')"></span>`).join("");
    container.innerHTML += `
    <div class="col-md-3 mb-4">
      <div class="card p-3 rounded-4 shadow-sm text-center">
        <img src="${def.image}" id="img-${product.id}" class="img-fluid rounded-4" style="height:290px; object-fit:cover;">
        <h5 class="mt-2">${product.name}</h5>
        <p id="price-${product.id}" class="fw-bold text-rose">$${def.price}</p>
        <div>${colorDots}</div>
        <div class="d-flex justify-content-center mt-2 gap-2">
          <input type="number" id="qty-${product.id}" value="1" min="1" style="width:60px; border: 2px solid #db7093; border-radius: 8px; font-weight: 600; color: #db7093; text-align: center;">
          <button class="btn btn-outline-rose" onclick="addToCart(${product.id},'product')"><i class="fas fa-shopping-cart"></i></button>
          <button class="btn btn-outline-rose" onclick="addToFavorites(${product.id},'product')"><i class="fas fa-heart"></i></button>
        </div>
      </div>
    </div>`;
  });
}

function renderVases() {
  let container = document.getElementById("vasesGrid");
  if (!container) return;
  container.innerHTML = "";
  ["small", "medium", "large"].forEach(size => {
    container.innerHTML += `<div class="row mb-2"><h4 class="text-center mb-3 text-rose fw-bold" style="font-family: cursive;">${size.charAt(0).toUpperCase() + size.slice(1)} Vases</h4></div><div class="row" id="${size}-row"></div>`;
    let row = document.getElementById(`${size}-row`);
    vases.filter(v => v.size === size).forEach(vase => {
      row.innerHTML += `
      <div class="col-md-2 mb-4">
        <div class="card p-2 rounded-4 shadow-sm text-center" style="background-color: #f3d4d40b;">
          <img src="${vase.image}" class="img-fluid rounded-4" style="height:200px; object-fit:cover;">
          <p class="fw-bold text-rose fs-5 mt-2">$${vase.price}</p>
          <div class="d-flex justify-content-center mt-2 gap-2">
            <input type="number" id="qty-${vase.id}" value="1" min="1" style="width:60px; border: 2px solid #db7093; border-radius: 8px; font-weight: 600; color: #db7093; text-align: center;">
            <button class="btn btn-outline-rose" onclick="addToCart(${vase.id},'vase')"><i class="fas fa-shopping-cart"></i></button>
            <button class="btn btn-outline-rose" onclick="addToFavorites(${vase.id},'vase')"><i class="fas fa-heart"></i></button>
          </div>
        </div>
      </div>`;
    });
  });
}

 function renderReadyBouquets() {
  let container = document.getElementById("readyGrid");
  if (!container) return;
  container.innerHTML = "";
  readyBouquets.forEach(b => {
    container.innerHTML += `
      <div class="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
        <div class="card p-3 rounded-4 shadow-sm text-center" style="background-color: #f3d4d40b;">
          <img src="${b.image}" class="img-fluid rounded-4" style="height:250px; object-fit:cover;">
          <p class="fw-bold text-rose fs-5 mt-2">$${b.price}</p>
          <div class="d-flex justify-content-center mt-2 gap-2">
            <input type="number" id="qty-${b.id}" value="1" min="1"
              style="width:60px; border: 2px solid #db7093; border-radius: 8px;
              font-weight: 600; color: #db7093; text-align: center;">
            <button class="btn btn-outline-rose" onclick="addToCart(${b.id},'ready')">
              <i class="fas fa-shopping-cart"></i>
            </button>
            <button class="btn btn-outline-rose" onclick="addToFavorites(${b.id},'ready')">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>`;
  });
}
 function renderOccasionGifts(){
  let container = document.getElementById("occasionGrid");
  if (!container) return;
  container.innerHTML = "";
  for (const [occasion, items] of Object.entries(occasions)) {
     container.innerHTML += `<h4 id="${occasion.toLowerCase()}Section" class="occasion-title">${occasion}</h4><div class="row mb-4" id="row-${occasion}"></div>`;

    let rowDiv = document.getElementById(`row-${occasion}`);
    items.forEach(item => {
      rowDiv.innerHTML += `
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card">
          <img src="${item.image}" class="img-fluid">
          <p class="fw-bold text-rose fs-5 mt-2">$${item.price}</p>
          <div class="d-flex justify-content-center mt-2 gap-2">
            <input type="number" id="qty-${item.id}" value="1" min="1"
              style="width:60px; border:2px solid #db7093; border-radius:8px;
                     font-weight:600; color:#db7093; text-align:center;">
            <button class="btn btn-outline-rose" onclick="addToCart(${item.id},'occasion')">
              <i class="fas fa-shopping-cart"></i>
            </button>
            <button class="btn btn-outline-rose" onclick="addToFavorites(${item.id},'occasion')">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>`;
    });
  }
}
 function renderServiceSections() {
  sections.forEach(section => {
    let container = document.getElementById(section.id);
    if (!container) return;
    container.innerHTML = "";
    section.services.forEach(service => {
      container.innerHTML += `
        <div class="col-md-2 col-sm-4 col-6 mb-4 text-rose position-relative">
          <div class="card p-3 rounded-4 shadow-sm text-center" style="background-color: #f3d4d40b;">
            ${service.isHot ? `<span class="badge-hot">HOT</span>` : ""}
            <img src="${service.img}" class="img-fluid rounded-4" style="height:250px; object-fit:cover;">
            <p class="fw-bold text-rose fs-5 mt-2">$${service.price}</p>
            <div class="d-flex justify-content-center mt-2 gap-2">
              <input type="number" id="qty-${service.id}" value="1" min="1"
                     style="width:60px; border:2px solid #db7093; border-radius:8px;
                            font-weight:600; color:#db7093; text-align:center;">
              <button class="btn btn-outline-rose" onclick="addToCart(${service.id},'service')">
                <i class="fas fa-shopping-cart"></i>
              </button>
              <button class="btn btn-outline-rose" onclick="addToFavorites(${service.id},'service')">
                <i class="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderOccasionGifts();
});


// add to favorites and cart  
 function addToFavorites(id, type){
  let item;
  if(type === 'product'){
    let product = products.find(p => p.id == id);
    let color = currentColors[id] || product.colors[0].color;
    let variant = product.colors.find(c => c.color === color) || product.colors[0];
    item = { id, image: variant.image, price: variant.price };
  } 
  else if(type === 'vase'){
    let vase = vases.find(v => v.id == id);
    item = { id, image: vase.image, price: vase.price };
  } 
  else if(type === 'ready'){
    let bouquet = readyBouquets.find(b => b.id == id);
    item = { id, image: bouquet.image, price: bouquet.price };
  }
  else if(type === 'occasion'){
    let occasionItem = Object.values(occasions).flat().find(o => o.id == id);
    item = { id, image: occasionItem.image, price: occasionItem.price };
  }
    else if(type === 'service'){
    let serviceItem = sections.flatMap(s => s.services).find(s => s.id == id);
    item = { id, image: serviceItem.img, price: serviceItem.price };
  }
  if(!favorites.some(f => f.id == item.id && f.image == item.image)){
    favorites.push(item);
    renderFavorites();
    document.getElementById("favorites-sidebar").classList.add("show");
  }
}
 
function addToCart(id, type) {
  let qty = parseInt(document.getElementById(`qty-${id}`)?.value);
  if (isNaN(qty) || qty < 1) qty = 1;

  let item;
  if (type === 'product') {
    let product = products.find(p => p.id == id);
    let color = currentColors[id] || product.colors[0].color;
    let variant = product.colors.find(c => c.color === color) || product.colors[0];
    item = {
      id,
      type,
      name: `${product.name} (${color})`,
      image: variant.image,
      price: variant.price,
      quantity: qty
    };
  }
  else if (type === 'vase') {
    let vase = vases.find(v => v.id == id);
    item = {
      id,
      type,
      name: `Vase (${vase.size})`,
      image: vase.image,
      price: vase.price,
      quantity: qty
    };
  }
  else if (type === 'ready') {
    let bouquet = readyBouquets.find(b => b.id == id);
    item = {
      id,
      type,
      name: "Ready Bouquet",
      image: bouquet.image,
      price: bouquet.price,
      quantity: qty
    };
  }
  else if (type === 'occasion') {
    let occasionItem = Object.values(occasions).flat().find(o => o.id == id);
    item = {
      id,
      type,
      name: "Occasion Item",
      image: occasionItem.image,
      price: occasionItem.price,
      quantity: qty
    };
  }
  else if (type === 'service') {
    let serviceItem = sections.flatMap(s => s.services).find(s => s.id == id);
    item = {
      id,
      type,
      name: "Service",
      image: serviceItem.img,
      price: serviceItem.price,
      quantity: qty
    };
  }

 
  let existing = cart.find(c => c.id == item.id && c.image == item.image);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  document.getElementById("cart-sidebar").classList.add("show");
}

function renderCart() {
  let div = document.querySelector("#cart-sidebar .sidebar-content");
  if (!div) return;

  div.innerHTML = cart.length ? "" : "<p>Your cart is empty.</p>";

  cart.forEach((item, i) => {
    div.innerHTML += `
      <div class="d-flex justify-content-between align-items-center mb-2 gap-2">
        <img src="${item.image}" style="width:60px; height:60px; object-fit:cover; border-radius:10px;">
        <div>
          <div>${item.name}</div>
          <div>Qty: <strong>${item.quantity}</strong></div>
          <div class="fw-bold text-rose">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
        <button class="btn btn-sm btn-outline-danger" onclick="removeCartItem(${i})">×</button>
      </div>
    `;
  });
}

function removeCartItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

 


function renderFavorites(){
  let div = document.querySelector("#favorites-sidebar .sidebar-content");
  div.innerHTML = favorites.length ? "" : "<p>No favorites yet.</p>";
  favorites.forEach((item,i)=>{
    div.innerHTML += `<div class="d-flex justify-content-between align-items-center mb-2 gap-2">
      <img src="${item.image}" style="width:60px; height:60px; object-fit:cover; border-radius:10px;">
      <span class="fw-bold text-rose">$${item.price}</span>
      <button class="btn btn-sm btn-outline-danger" onclick="removeFavorite(${i})">×</button>
    </div>`;
  });
}

 

function removeFavorite(i){ 
  favorites.splice(i,1); 
  renderFavorites(); 
}
function removeCartItem(i){ 
  cart.splice(i,1); 
  renderCart(); 
}
function changeProductImage(id,color){
  let product = products.find(p => p.id==id);
  let variant = product.colors.find(c => c.color==color);
  if(!variant) return;
  document.getElementById(`img-${id}`).src = variant.image;
  document.getElementById(`price-${id}`).textContent = `$${variant.price}`;
  currentColors[id] = color;
}
document.addEventListener("DOMContentLoaded", () => {
  renderServiceSections();
});

 
 const sectionsData = {
  "Products": [
    "All Products",
    "On Sale"
  ],
  "Vases": [
    "Small",
    "Medium",
    "Large"
  ],
  "Ready Bouquets": [],
  "Occasion Gifts": [
    "Graduation",
    "Newborn",
    "Birthdays",
    "Engagement"
  ]
};

 const sectionsLinks = {
  "Products": "#productsGrid",
  "All Products": "#productsGrid",
  "On Sale": "#onSaleSection",
  "Vases": "#vasesGrid",
  "Small": "#small-row",
  "Medium": "#medium-row",
  "Large": "#large-row",
  "Ready Bouquets": "#readyGrid",
  "Occasion Gifts": "#occasionGrid",
  "Graduation": "#graduationSection",
  "Newborn": "#newbornSection",
  "Birthdays": "#birthdaysSection",
  "Engagement": "#engagementSection"
};

 

 
function buildSidebarMenu() {
  const ul = document.getElementById("sidebarList");
  ul.innerHTML = "";

  for (const [mainSection, subSections] of Object.entries(sectionsData)) {
    const liMain = document.createElement("li");
    liMain.style.marginBottom = "1rem";

 
    const aMain = document.createElement("a");
    aMain.href = sectionsLinks[mainSection] || "#";
    aMain.textContent = mainSection;
    aMain.style.fontWeight = "bold";
    aMain.style.color = "#db7093";
    aMain.style.textDecoration = "none";
    aMain.style.cursor = "pointer";

 
    aMain.addEventListener("mouseenter", () => {
      aMain.style.color = "#6f2a4c";
    });
    aMain.addEventListener("mouseleave", () => {
      aMain.style.color = "#db7093";
    });

    liMain.appendChild(aMain);

    
    if (subSections.length > 0) {
      const ulSub = document.createElement("ul");
      ulSub.style.listStyle = "disc";
      ulSub.style.marginLeft = "1.5rem";
      ulSub.style.marginTop = "0.5rem";

      for (const sub of subSections) {
        const liSub = document.createElement("li");

        const aSub = document.createElement("a");
        aSub.href = sectionsLinks[sub] || "#";
        aSub.textContent = sub;
        aSub.style.color = "#9c4465";
        aSub.style.textDecoration = "none";
        aSub.style.cursor = "pointer";

   
        aSub.addEventListener("mouseenter", () => {
          aSub.style.color = "#6f2a4c";
        });
        aSub.addEventListener("mouseleave", () => {
          aSub.style.color = "#9c4465";
        });

        liSub.appendChild(aSub);
        ulSub.appendChild(liSub);
      }
      liMain.appendChild(ulSub);
    }

    ul.appendChild(liMain);
  }
}

 
const sidebar = document.getElementById("sidebarMenu");
const toggleBtn = document.getElementById("sidebarToggle");
const closeBtn = document.getElementById("sidebarClose");

 

toggleBtn.addEventListener("click", () => {
  sidebar.style.left = "0";
  // backdrop.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-300px";
  // backdrop.classList.remove("active");
});

 
sidebar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.style.left = "-300px";
    // backdrop.classList.remove("active");
  });
});

 
document.addEventListener("DOMContentLoaded", () => {
  buildSidebarMenu();
});
 /*للبحث*/ 
document.addEventListener("DOMContentLoaded", () => {
  const searchOverlay = document.getElementById("search-overlay");
  const closeSearchBtn = document.getElementById("close-search");
  const searchSubmitBtn = document.getElementById("search-submit");
  const searchIcon = document.getElementById("search-icon");
  const searchInput = document.getElementById("search-input");

  if (!searchOverlay || !closeSearchBtn || !searchSubmitBtn || !searchIcon || !searchInput) {
    console.warn("Search elements not found on this page");
    return;  
  }

  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    searchOverlay.classList.remove("hidden");
    searchInput.focus();
  });

  closeSearchBtn.addEventListener("click", () => {
    searchOverlay.classList.add("hidden");
  });

  searchSubmitBtn.addEventListener("click", () => {
    const term = searchInput.value.trim().toLowerCase();
    if (!term) return;

    searchOverlay.classList.add("hidden");

    let found = false;

    document.querySelectorAll("h4,h5").forEach(el => {
      if (el.textContent.toLowerCase().includes(term)) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.style.boxShadow = "0 0 10px #db7093";
        el.style.borderRadius = "8px";
        found = true;
        setTimeout(() => el.style.boxShadow = "", 2000);
      }
    });

    document.querySelectorAll(".card").forEach(card => {
      if (card.textContent.toLowerCase().includes(term)) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.style.boxShadow = "0 0 10px #db7093";
        found = true;
        setTimeout(() => card.style.boxShadow = "", 2000);
      }
    });

    if (!found) {
      alert("No results found!");
    }
  });
});

function renderOnSale() {
  const container = document.getElementById("onSaleGrid");
  if (!container) return;
  container.innerHTML = "";

  const priceStyle = `color: #db7093; font-weight: bold;`;
  const oldPriceStyle = `text-decoration: line-through; color: #999; margin-right: 8px;`;
  const discountBadgeStyle = `
    position: absolute; 
    top: 8px; 
    right: 8px; 
    background: #db7093; 
    color: white; 
    padding: 2px 8px; 
    border-radius: 20px; 
    font-size: 0.8rem;
    font-weight: 700;
  `;

  function discountedPrice(price, discount) {
    if (!discount) return price;
    return (price * (1 - discount)).toFixed(2);
  }

  const allItems = [];
  products.forEach(product => {
    if (product.onSale) {
      const variant = product.colors[0];
      allItems.push({
        id: product.id,
        name: product.name,
        image: variant.image,
        price: variant.price,
        discount: product.discount || 0.20,
        section: "Product"
      });
    }
  });

  vases.filter(v => v.onSale).forEach(vase => {
    allItems.push({
      id: vase.id,
      name: "Vase",
      image: vase.image,
      price: vase.price,
      discount: vase.discount || 0.20,
      section: "Vase"
    });
  });

  readyBouquets.filter(b => b.onSale).forEach(bq => {
    allItems.push({
      id: bq.id,
      name: "Ready Bouquet",
      image: bq.image,
      price: bq.price,
      discount: bq.discount || 0.20,
      section: "Ready Bouquet"
    });
  });

  Object.values(occasions).flat().filter(item => item.onSale).forEach(item => {
    allItems.push({
      id: item.id,
      name: "Occasion Gift",
      image: item.image,
      price: item.price,
      discount: item.discount || 0.20,
      section: "Occasion"
    });
  });

  sections.flatMap(s => s.services).filter(service => service.onSale !== false).forEach(service => {
    allItems.push({
      id: service.id,
      name: "Service",
      image: service.img,
      price: service.price,
      discount: service.discount || 0.20,
      section: "Service"
    });
  });

  allItems.forEach(item => {
    const finalPrice = discountedPrice(item.price, item.discount);
    const discountPercent = Math.round((item.discount || 0) * 100);
    container.innerHTML += `
      <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
        <div class="card position-relative p-3 rounded-4 shadow-sm text-center" style="height: 400px;">
          <span style="${discountBadgeStyle}">-${discountPercent}%</span>
          <img src="${item.image}" alt="${item.name}" class="img-fluid rounded-4" style="height: 220px; object-fit: cover; margin-bottom: 10px;">
          <h5>${item.name}</h5>
          <p>
            <span style="${oldPriceStyle}">$${item.price.toFixed(2)}</span>
            <span style="${priceStyle}">$${finalPrice}</span>
          </p>
          <small class="text-muted">Category: ${item.section}</small>
          <div class="mt-2 d-flex justify-content-center gap-3">
            <button class="btn btn-light border add-to-favorites" 
              data-id="${item.id}" data-name="${item.name}" 
              data-image="${item.image}" data-price="${finalPrice}" 
              data-section="${item.section}">
              ❤️
            </button>
            <button class="btn btn-light border add-to-cart" 
              data-id="${item.id}" data-name="${item.name}" 
              data-image="${item.image}" data-price="${finalPrice}" 
              data-section="${item.section}">
              🛒
            </button>
          </div>
        </div>
      </div>
    `;
  });

  attachSaleButtons(); // تفعيل الأزراير
}

renderOnSale();
 
document.addEventListener("DOMContentLoaded", () => {
  const orderSummary = document.getElementById("order-summary");
  const totalPriceEl = document.getElementById("total-price");
  const confirmation = document.getElementById("confirmation");
  const form = document.getElementById("checkout-form");
  const submitBtn = form.querySelector("button[type='submit']");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    orderSummary.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      orderSummary.innerHTML = "<li class='list-group-item'>Your cart is empty.</li>";
      totalPriceEl.textContent = "0.00";
      submitBtn.disabled = true;
      return;
    }

    submitBtn.disabled = false;

    cart.forEach((item, index) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;

      const li = document.createElement("li");
      li.classList.add("list-group-item", "d-flex", "align-items-center", "justify-content-between");

      li.innerHTML = `
        <div class="d-flex align-items-center gap-2">
          <img src="${item.image}" alt="item" style="width:60px; height:60px; object-fit:cover; border-radius:8px;">
          <div>
            <div>${item.name || "Product"}</div>
            <small class="text-muted">Quantity: ${item.qty}</small>
          </div>
        </div>
        <div class="d-flex align-items-center gap-3">
          <strong>$${itemTotal.toFixed(2)}</strong>
          <button type="button" class="btn btn-sm btn-outline-danger remove-item-btn" data-index="${index}" aria-label="Remove item">&times;</button>
        </div>
      `;

      orderSummary.appendChild(li);
    });

    totalPriceEl.textContent = total.toFixed(2);
  }

  renderCart();

  orderSummary.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item-btn")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      if (!isNaN(index)) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      }
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

 
    form.classList.add("was-validated");

    if (cart.length === 0) {
      alert("Your cart is empty. Please add products before checkout.");
      return;
    }

    if (!form.checkValidity()) {
    
      return;
    }

   

    confirmation.textContent = "Order sent successfully. We will contact you soon to deliver your order.";
    confirmation.classList.remove("d-none");

    localStorage.removeItem("cart");
    cart = [];

    submitBtn.disabled = true;
    form.querySelectorAll("input, textarea").forEach(input => (input.disabled = true));

    renderCart();

   
  form.reset();
     form.classList.remove("was-validated");
  });
});

 

 