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
// about us 
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Go to another page
function goToPage(url) {
  window.location.href = url;
}
/* shopping*/ 
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetWrapper = document.getElementById(targetId);

    targetWrapper.classList.toggle('expanded');
    button.classList.toggle('expanded');

    if (targetWrapper.classList.contains('expanded')) {
      button.innerHTML = 'Show Less <span class="arrow ms-2" >&#9650;</span>';
    } else {
      button.innerHTML = 'Show More <span class="arrow ms-2">&#9660;</span>';
    }
  });
});
 
// feedback 
// SwiperJS Carousel
 // Highlight image on hover
 
 
const coverflow = document.getElementById("coverflow");
const coverImages = document.querySelectorAll(".cover-img");

coverImages.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    coverImages.forEach((el) => el.classList.remove("active"));
    img.classList.add("active");

    // Scroll to keep the image fully visible
    const parentRect = coverflow.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    if (imgRect.left < parentRect.left || imgRect.right > parentRect.right) {
      const scrollLeft = img.offsetLeft - (coverflow.offsetWidth / 2) + (img.offsetWidth / 2);
      coverflow.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  });
});
 
const stars = document.querySelectorAll("#starRating i");
const ratingInput = document.getElementById("rating");

 
stars.forEach((star, index) => {
  star.addEventListener("mouseenter", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("hovered", i <= index);
    });
  });

  star.addEventListener("mouseleave", () => {
    stars.forEach((s) => s.classList.remove("hovered"));
  });

  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("selected", i <= index);
    });
    ratingInput.value = index + 1;
  });
});
 
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const thankYou = document.getElementById("thankYou");

 
  document.querySelectorAll(".error-message").forEach(el => el.remove());

  let valid = true;

 
  const enteredName = nameInput.value.trim().toLowerCase();
  const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

 
  if (!enteredName) {
    const error = document.createElement("div");
    error.className = "text-danger error-message mt-1";
    error.textContent = "Please enter your name.";
    nameInput.parentNode.appendChild(error);
    valid = false;
  } else if (!registeredUsers.includes(enteredName)) {
    const error = document.createElement("div");
    error.className = "text-danger error-message mt-1";
    error.innerHTML = `This name is not registered. Please <a href="#login" class="text-rose fw-bold text-decoration-underline">sign in</a> first.`;
    nameInput.parentNode.appendChild(error);
    valid = false;
  }

 
  if (ratingInput.value === "") {
    const error = document.createElement("div");
    error.className = "text-danger error-message mt-1";
    error.textContent = "Please select a rating ⭐";
    document.getElementById("starRating").parentNode.appendChild(error);
    valid = false;
  }
 
  if (!valid) return;

 
  thankYou.style.display = "block";

 
  this.reset();
  ratingInput.value = "";
  stars.forEach((star) => star.classList.remove("selected", "hovered"));

 
  setTimeout(() => {
    thankYou.style.display = "none";
  }, 3000);
});
//  log in 
document.addEventListener("DOMContentLoaded", () => {
  const loginTab = document.getElementById("login-tab");
  const signinTab = document.getElementById("signin-tab");
  const loginForm = document.getElementById("login-form");
  const signinForm = document.getElementById("signin-form");
  const goToSignIn = document.getElementById("go-to-signin");

 
  let fakeUsers = JSON.parse(localStorage.getItem("fakeUsers")) || [];

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isStrongPassword(password) {
    return (
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
      password.length >= 8
    );
  }

  function updateSlider(activeTab) {
    loginForm.reset();
    signinForm.reset();
    document.querySelectorAll(".error").forEach(e => (e.textContent = ""));
    document.querySelectorAll(".success-message").forEach(e => (e.textContent = ""));

    if (activeTab === "login") {
      loginTab.classList.add("active");
      signinTab.classList.remove("active");
      loginForm.classList.add("active");
      loginForm.classList.remove("secondary");
      signinForm.classList.remove("active");
      signinForm.classList.add("secondary", "signin");
    } else {
      signinTab.classList.add("active");
      loginTab.classList.remove("active");
      signinForm.classList.add("active");
      signinForm.classList.remove("secondary");
      loginForm.classList.remove("active");
      loginForm.classList.add("secondary");
      loginForm.classList.remove("signin");
    }
  }

  updateSlider("login");

  loginTab.addEventListener("click", () => updateSlider("login"));
  signinTab.addEventListener("click", () => updateSlider("signin"));

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    
    const firstName = loginForm.querySelectorAll("input[type='text']")[0].value.trim();
    const lastName = loginForm.querySelectorAll("input[type='text']")[1].value.trim();
    const fullName = (firstName + " " + lastName).toLowerCase();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

 
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("login-email-error");
    const passwordError = document.getElementById("login-password-error");
    const confirmError = document.getElementById("confirm-password-error");
    const successMessage = document.getElementById("login-success");

  
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    successMessage.textContent = "";

    
    let registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    let valid = true;

    
    if (!isValidEmail(email)) {
      emailError.textContent = "Email format is invalid.";
      valid = false;
    }

   
    if (!isStrongPassword(password)) {
      passwordError.textContent = "Password must contain uppercase, lowercase, number, symbol and be 8+ characters.";
      valid = false;
    }

   
    if (password !== confirmPassword) {
      confirmError.textContent = "Passwords do not match.";
      valid = false;
    }

   
    if (registeredUsers.includes(fullName)) {
      nameError.textContent = "This username is already taken.";
      valid = false;
    }

   
    if (fakeUsers.some(user => user.email.toLowerCase() === email.toLowerCase())) {
      emailError.textContent = "This email is already registered.";
      valid = false;
    }

    
    if (valid) {
      registeredUsers.push(fullName);
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

      fakeUsers.push({ email, password });
      localStorage.setItem("fakeUsers", JSON.stringify(fakeUsers));

      successMessage.textContent = "Account created successfully!";
      loginForm.reset();
    }
  });

  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("signin-email").value.trim();
    const password = document.getElementById("signin-password").value;

    const emailError = document.getElementById("signin-email-error");
    const passwordError = document.getElementById("signin-password-error");
    const successMessage = document.getElementById("signin-success");

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let valid = true;

    if (!isValidEmail(email)) {
      emailError.textContent = "Invalid email format.";
      valid = false;
    }

    if (password === "") {
      passwordError.textContent = "Password is required.";
      valid = false;
    }

    if (valid) {
      const userFound = fakeUsers.find(user => user.email.toLowerCase() === email.toLowerCase() && user.password === password);

      if (userFound) {
        successMessage.textContent = "Signed in successfully!";
        signinForm.reset();
      } else {
        emailError.textContent = "Account not found. Please check email or password.";
      }
    }
  });

  if (goToSignIn) {
    goToSignIn.addEventListener("click", () => updateSlider("signin"));
  }
});
/* contact*/ 

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("thankYouMessage").style.display = "block";
  this.reset();
  setTimeout(() => {
    document.getElementById("thankYouMessage").style.display = "none";
  }, 3000);
});
/* ايقونة الحساب*/ 
document.addEventListener("DOMContentLoaded", function() {
  const userIcon = document.querySelector('.icon-link[href="#login"]');

  if (userIcon) {
    userIcon.addEventListener("click", function(e) {
      e.preventDefault();
     
      if (window.location.pathname.includes("products.html")) {
        window.location.href = "index.html#login";
      } else {
       
        const loginSection = document.getElementById("login");
        if (loginSection) {
          loginSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }
});
