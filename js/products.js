
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

