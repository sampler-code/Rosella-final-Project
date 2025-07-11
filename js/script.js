window.addEventListener("load", function () {
  document.getElementById("loading-screen").style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
  //   Sections & Nav Links  
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");
  function setActiveLink() {
  let scrollY = window.pageYOffset;
  let loginVisible = false;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      // تلوين رابط النافبار
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });

      // تفعيل حالة ظهور سكشن login
      if (sectionId === "login") {
        loginVisible = true;
      }
    }
  });
  
  
//shop in nav 
 const shopToggle = document.getElementById("shopToggle");
const shopMenu = document.getElementById("shopMenu");

// الضغط على السهم فقط يفتح/يغلق القائمة
shopToggle.addEventListener("click", function (e) {
  if (e.target.tagName === "I") {
    e.preventDefault();
    e.stopPropagation();
    shopMenu.classList.toggle("show");
  }
});

// إغلاق القائمة لما نضغط خارجها
document.addEventListener("click", function (e) {
  if (!shopMenu.contains(e.target) && !shopToggle.contains(e.target)) {
    shopMenu.classList.remove("show");
  }
});


// لما نضغط على عنصر داخل القائمة
shopMenu.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", () => {
    shopMenu.classList.remove("show");
  });
});

// لما نضغط في أي مكان برا القائمة
document.addEventListener("click", function (e) {
  if (
    !shopMenu.contains(e.target) &&
    !shopToggle.contains(e.target)
  ) {
    shopMenu.classList.remove("show");
  }
});

 
  // تحديث لون أيقونة الحساب حسب ظهور السكشن
  const userIcon = document.querySelector('.icon-link[href="#login"]');
  if (loginVisible) {
    userIcon.classList.add("active");
  } else {
    userIcon.classList.remove("active");
  }
}


  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  // ====== Elements ======
  const searchIcon = document.getElementById("search-icon");
  const searchOverlay = document.getElementById("search-overlay");
  const closeSearchBtn = document.getElementById("close-search");

  const favoritesIcon = document.getElementById("favorites-icon");
  const favoritesSidebar = document.getElementById("favorites-sidebar");
  const closeFavoritesBtn = document.getElementById("close-favorites");

  const cartIcon = document.getElementById("cart-icon");
  const cartSidebar = document.getElementById("cart-sidebar");
  const closeCartBtn = document.getElementById("close-cart");

  const searchSubmit = document.getElementById("search-submit");
  const searchInput = document.getElementById("search-input");

  const iconLinks = document.querySelectorAll('.header-icons .icon-link');

  // ====== Active Toggle ======
  iconLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href === "#") {
        e.preventDefault();
      }

      // إزالة active من الكل
      iconLinks.forEach(l => l.classList.remove("active"));
      // إضافة active للعنصر الحالي
      link.classList.add("active");
    });
  });

  // ====== Search Overlay ======
  searchIcon.addEventListener("click", function (e) {
    e.preventDefault();
    searchOverlay.classList.remove("hidden");
    searchInput.focus();
    searchIcon.classList.add("active");
  });

  closeSearchBtn.addEventListener("click", function () {
    searchOverlay.classList.add("hidden");
    searchIcon.classList.remove("active");
  });

  searchSubmit.addEventListener("click", function () {
    const keyword = searchInput.value.toLowerCase().trim();
    if (keyword === "") return;

    searchOverlay.classList.add("hidden");
    searchIcon.classList.remove("active");

    const servicesSection = document.getElementById("services");
    servicesSection.scrollIntoView({ behavior: "smooth" });

    document.querySelectorAll(".highlighted").forEach((el) => {
      el.classList.remove("highlighted");
    });

    const serviceItems = servicesSection.querySelectorAll(".service-item");
    let found = false;

    serviceItems.forEach((item) => {
      if (item.textContent.toLowerCase().includes(keyword)) {
        item.classList.add("highlighted");
        found = true;
      }
    });

    if (!found) {
      alert("No matching services found.");
    }
  });

  // ====== Favorites Sidebar ======
  favoritesIcon.addEventListener("click", (e) => {
    e.preventDefault();
    favoritesSidebar.classList.add("show");
    favoritesIcon.classList.add("active");
  });

  closeFavoritesBtn.addEventListener("click", () => {
    favoritesSidebar.classList.remove("show");
    favoritesIcon.classList.remove("active");
  });

  // ====== Cart Sidebar ======
  cartIcon.addEventListener("click", (e) => {
    e.preventDefault();
    cartSidebar.classList.add("show");
    cartIcon.classList.add("active");
  });

  closeCartBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("show");
    cartIcon.classList.remove("active");
  });
 

  // ====== Click Outside to Close ======
  window.addEventListener("click", (e) => {
    // Search Overlay
    if (e.target === searchOverlay) {
      searchOverlay.classList.add("hidden");
      searchIcon.classList.remove("active");
    }

    // Favorites Sidebar
    if (!favoritesSidebar.contains(e.target) && !favoritesIcon.contains(e.target)) {
      favoritesSidebar.classList.remove("show");
      favoritesIcon.classList.remove("active");
    }

    // Cart Sidebar
    if (!cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
      cartSidebar.classList.remove("show");
      cartIcon.classList.remove("active");
    }
  });
});