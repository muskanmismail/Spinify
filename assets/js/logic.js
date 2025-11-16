$(function() {
    
    
    $('.quantity-up').on('click', function() {
        var $input = $(this).siblings('.quantity-value');
        $input.val(parseInt($input.val()) + 1);
    });

 
    $('.quantity-down').on('click', function() {
        var $input = $(this).siblings('.quantity-value');
        var count = parseInt($input.val());
        
     
        if (count > parseInt($input.attr('min'))) {
            $input.val(count - 1);
        }
    });

});



  document.addEventListener("DOMContentLoaded", function() {

    
    let currentSlide = 0;
    let carouselInterval;
    const slides = document.querySelectorAll('.fade-carousel-slide');
    const indicators = document.querySelectorAll('.fade-indicator');
    const totalSlides = slides.length;

    /**
     *
     * @param {number} slideIndex - 
     */
    function carouselGoTo(slideIndex) {
        if (!slides.length || !indicators.length || !slides[currentSlide] || !indicators[currentSlide]) return; 
        
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');

        currentSlide = (slideIndex + totalSlides) % totalSlides; 

        if (!slides[currentSlide] || !indicators[currentSlide]) return; 
        
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

  
    function startCarousel() {
        if(slides.length > 0) { 
            carouselInterval = setInterval(() => {
                carouselGoTo(currentSlide + 1);
            }, 5000); 
        }
    }

   
    function resetCarouselTimer() {
        clearInterval(carouselInterval);
        startCarousel();
    }
   
    if (indicators.length > 0) {
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                carouselGoTo(index);
                resetCarouselTimer();
            });
        });
    }


    if (slides.length > 0) {
     
        carouselGoTo(0); 
      
        startCarousel(); 
    }
    
});


 
 
 document.addEventListener('DOMContentLoaded', function() {
  const categoryBar = document.querySelector('.category-bar');
  const topbar = document.querySelector('.topbar');
  
  let lastScrollTop = 0;
  let isNavHidden = false;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
 
    if (scrollTop > 100) {
      if (!categoryBar.classList.contains('sticky-active')) {
        categoryBar.classList.add('sticky-active');
      }
    } else {
      categoryBar.classList.remove('sticky-active');
    }


    if (scrollTop > lastScrollTop) {
    
      if (scrollTop > 200 && !isNavHidden) {
        topbar.style.transform = 'translateY(-100%)';
        topbar.style.transition = 'transform 0.3s ease-in-out';
        isNavHidden = true;
      }
    } else {
 
      if (isNavHidden) {
        topbar.style.transform = 'translateY(0)';
        topbar.style.transition = 'transform 0.3s ease-in-out';
        isNavHidden = false;
      }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});

 function changeImage(thumbnail) {
            document.getElementById('mainImage').src = thumbnail.src;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        }

        function selectSize(element) {
            document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
            element.classList.add('active');
        }

        function selectColor(element) {
            document.querySelectorAll('.color-swatch').forEach(swatch => swatch.classList.remove('active'));
            element.classList.add('active');
        }

        function increaseQty() {
            const input = document.getElementById('quantityInput');
            input.value = parseInt(input.value) + 1;
        }

        function decreaseQty() {
            const input = document.getElementById('quantityInput');
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
            }
        }

        function addToCart() {
            const btn = document.getElementById('addCartBtn');
            const originalText = btn.innerHTML;
            
            btn.classList.add('success');
            btn.innerHTML = '<i class="fa-solid fa-check me-2"></i> Added to Cart!';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.classList.remove('success');
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        }

$(document).ready(function() {
    const productContainer = $('#productContainer');
    const categoryTitle = $('#categoryTitle');
    const searchInput = $('.search-input'); 
    const allProducts = [
        {
            "id": "ceiling-king",
            "category": "Ceiling Fan",
            "title": "King Model",
            "categoryTag": "Supreme",
            "price": "10,900",
            "image": "fancard1.png",
            
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
        {
            "id": "pedestal-supreme",
            "category": "Pedestal Fan",
            "title": "Supreme Model",
            "categoryTag": "Supreme",
            "price": "7,900",
            "image": "pedestal1.jpg",
            
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
        {
            "id": "ceiling-elite",
            "category": "Ceiling Fan",
            "title": "Elite Model",
            "categoryTag": "Dream",
            "price": "12,500",
            "image": "fancard2color.png",
  
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
        {
            "id": "pedestal-dream",
            "category": "Pedestal Fan",
            "title": "Dream Model",
            "categoryTag": "Dream",
            "price": "12,500",
            "image": "pedestal2.jpg",
          
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
        {
            "id": "bracket-mega",
            "category": "Bracket Fan",
            "title": "Mega Model",
            "categoryTag": "STD",
            "price": "10,900",
            "image": "bracket1.png",
       
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
        {
            "id": "pedestal-std",
            "category": "Pedestal Fan",
            "title": "STD Model",
            "categoryTag": "STD",
            "price": "9,900",
            "image": "pedestal3.jpg",
        
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
         {
            "id": "ceiling-eco",
            "category": "Ceiling Fan",
            "title": "Eco Model",
            "categoryTag": "STD",
            "price": "9,900",
            "image": "fancard3.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
            {
            "id": "ceiling-astro",
            "category": "Ceiling Fan",
            "title": "Astro Model",
            "categoryTag": "STD",
            "price": "10,900",
            "image": "fancard1color2.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
           {
            "id": "ceiling-nitro",
            "category": "Ceiling Fan",
            "title": "Nitro Model",
            "categoryTag": "STD",
            "price": "12,900",
            "image": "fancard2color2.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
             {
            "id": "ceiling-unicon",
            "category": "Ceiling Fan",
            "title": "Unicon Model",
            "categoryTag": "STD",
            "price": "9,900",
            "image": "fancard3color.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
             {
            "id": "ceiling-abd",
            "category": "Ceiling Fan",
            "title": "ABD Model",
            "categoryTag": "STD",
            "price": "10,900",
            "image": "fancard2color3.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
             {
            "id": "ceiling-majesty",
            "category": "Ceiling Fan",
            "title": "Majesty Model",
            "categoryTag": "STD",
            "price": "12,900",
            "image": "fancard1color3.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
             {
            "id": "ceiling-penta",
            "category": "Ceiling Fan",
            "title": "Penta Model",
            "categoryTag": "STD",
            "price": "9,900",
            "image": "fancard3color2.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
             {
            "id": "bracket-super",
            "category": "Bracket Fan",
            "title": "Super Model",
            "categoryTag": "STD",
            "price": "12,500",
            "image": "bracket2.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
             {
            "id": "bracket-choice",
            "category": "Bracket Fan",
            "title": "Choice Model",
            "categoryTag": "STD",
            "price": "9,900",
            "image": "bracket3.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
             {
           "id": "bracket-queen",
            "category": "Bracket Fan",
            "title": "Queen Model",
            "categoryTag": "STD",
            "price": "10,900",
            "image": "bracket4.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        },
                  {
           "id": "bracket-best",
            "category": "Bracket Fan",
            "title": "Best Model",
            "categoryTag": "STD",
            "price": "12,500",
            "image": "bracket5.png",
         
            "badge": "AC-DC INVERTER",
            "feature": "REMOTE CONTROLLED"
        }
        
    ]; 


 
    function renderProducts(productsToRender, currentTitle) {
        productContainer.empty(); 
        categoryTitle.text(currentTitle); 

        if (productsToRender.length === 0) {
            productContainer.html('<div class="col-12 text-center text-muted">No fans match your search or filter.</div>');
            return;
        }

        productsToRender.forEach(product => {
            const badgeHtml = product.badge ? `<div class="ac-dc-badge">${product.badge}</div>` : '';
            const featureHtml = product.feature ? `<div class="product-features-banner"><i class="bi bi-broadcast"></i> ${product.feature}</div>` : '';

            const productCard = `
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="product-card">
                        <div class="product-image-container">
                            ${badgeHtml}
                            <a href="${product.detailPage}" class="product-link" data-product-id="${product.id}">
                                <img src="./assets/images/${product.image}" alt="${product.title}">
                            </a>
                        </div>
                        ${featureHtml}
                        <div class="product-body">
                            <div class="product-category">${product.categoryTag}</div>
                            <a href="detail.html" class="product-title product-link" data-product-id="${product.id}">${product.title}</a>
                            <div class="product-price">Rs ${product.price}</div>
                            <div class="product-actions-primary">
                                <div class="quantity-input">
                                    <button class="quantity-down" type="button">-</button>
                                    <input type="number" class="quantity-value" value="1" min="1">
                                    <button class="quantity-up" type="button">+</button>
                                </div>
                                <button class="btn btn-add-to-cart demo-btn" data-bs-toggle="modal" data-bs-target="#productOptionsModal">
                                    <i class="bi bi-cart-plus"></i> ADD TO CART
                                </button>
                            </div>
                            <div class="product-actions-secondary">
                                <a href="#" class="btn-action me-2" data-bs-toggle="modal" data-bs-target="#wishlistModal2"><i class="bi bi-heart"></i> Add to Wishlist</a>
                                <a href="#" class="btn-action" data-bs-toggle="modal" data-bs-target="#compareModal2"><i class="bi bi-shuffle"></i> Compare</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            productContainer.append(productCard);
        });
        attachQuantityControls();
    }

    function filterProducts(category) {
        let filteredProducts = allProducts;
        let displayTitle = 'All Fans';
        
        if (category !== 'All') {
            filteredProducts = allProducts.filter(product => product.category === category);
            displayTitle = category + 's';
        }
        const query = searchInput.val().toLowerCase().trim();
        if (query.length > 0) {
            filteredProducts = filteredProducts.filter(product => 
                product.title.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                product.categoryTag.toLowerCase().includes(query)
            );
            
         
            displayTitle = `Search results for "${searchInput.val()}"`;
        }


    
        renderProducts(filteredProducts, displayTitle);
        
        if (query.length === 0) {
             $('.category-filter-btn').removeClass('btn-primary').addClass('btn-outline-primary');
             $(`.category-filter-btn[data-category="${category}"]`).removeClass('btn-outline-primary').addClass('btn-primary');
        } else {
             $('.category-filter-btn').removeClass('btn-primary').addClass('btn-outline-primary');
        }
    }

    filterProducts('All');


    $('.category-filter-btn').on('click', function() {
        const selectedCategory = $(this).data('category');
      
        searchInput.val(''); 
        filterProducts(selectedCategory);
    });
    

    searchInput.on('keyup', function(e) {
  
        if (e.key === 'Enter') {
            e.preventDefault();
        }

        filterProducts('All'); 
    });
 
    $('.topbar form').on('submit', function(e) {
         e.preventDefault();
         filterProducts('All');
    });



    function attachQuantityControls() {

        $('.quantity-down, .quantity-up').off('click');
        
        $('.quantity-down').on('click', function() {
            let input = $(this).siblings('.quantity-value');
            let val = parseInt(input.val());
            if (val > 1) {
                input.val(val - 1);
            }
        });

        $('.quantity-up').on('click', function() {
            let input = $(this).siblings('.quantity-value');
            let val = parseInt(input.val());
            input.val(val + 1);
        });
    }

});

 function togglePassword() {
            const passField = document.getElementById("pass");
            const icon = document.getElementById("toggleIcon");
            if (passField.type === "password") {
                passField.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                passField.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
        }

        function toggleRegisterPassword() {
            const passField = document.getElementById("regPass");
            const icon = document.getElementById("toggleRegisterIcon");
            if (passField.type === "password") {
                passField.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                passField.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
        }

        function toggleRegisterConfirmPassword() {
            const passField = document.getElementById("regPassConfirm");
            const icon = document.getElementById("toggleRegisterConfirmIcon");
            if (passField.type === "password") {
                passField.type = "text";
                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");
            } else {
                passField.type = "password";
                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");
            }
        }

        function loginWithGoogle() {
            window.open('https://accounts.google.com/signin', '_blank');
        }

        function loginWithGithub() {
            window.open('https://github.com/login', '_blank');
        }

        function validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        function validatePassword(password) {
            const errors = [];
            
            if (password.length < 8) {
                errors.push("*Password must be at least 8 characters long*");
            }
            if (!/[A-Z]/.test(password)) {
                errors.push("*Password must contain at least one uppercase letter*");
            }
            if (!/\d/.test(password)) {
                errors.push("*Password must contain at least one number*");
            }
            if (!/[\W$*.\-]/.test(password)) {
                errors.push("*Password must contain at least one special character (!@#$%^&*.-_)*");
            }
            
            return errors;
        }

        document.getElementById("loginForm").addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const pass = document.getElementById("pass").value;

            const emailMessage = document.getElementById("emailMessage");
            const passwordMessage = document.getElementById("passwordMessage");
            const successMessageDiv = document.getElementById("loginSuccessMessage");

            emailMessage.textContent = '';
            passwordMessage.textContent = '';
            successMessageDiv.innerHTML = '';

            let valid = true;

            if (email === "") {
                emailMessage.textContent = "*Please enter your email address*";
                valid = false;
            } else if (!validateEmail(email)) {
                emailMessage.textContent = "*Please enter a valid email address (example@domain.com)*";
                valid = false;
            }

            if (pass === "") {
                passwordMessage.textContent = "*Please enter your password*";
                valid = false;
            } else {
                const passwordErrors = validatePassword(pass);
                if (passwordErrors.length > 0) {
                    passwordMessage.innerHTML = passwordErrors.join("<br>");
                    valid = false;
                }
            }

            if (!valid) return;

            let found = false;
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith("user_")) {
                    const userData = JSON.parse(localStorage.getItem(key));
                    if (userData.email === email) {
                        found = true;
                        if (userData.password === pass) {
                            successMessageDiv.innerHTML = `<p class="success-message1">✓ Login successful! Welcome back, ${userData.name}!</p>`;
                            localStorage.setItem("loggedInUser", key);
                            this.reset();
                            setTimeout(() => {
                                const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
                                loginModal.hide();
                            }, 2000);
                        } else {
                            passwordMessage.textContent = "*Incorrect password. Please try again.*";
                        }
                        break;
                    }
                }
            }
            if (!found) {
                emailMessage.textContent = "*No account found with this email. Please sign up first.*";
            }
        });

        document.getElementById("registerForm").addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("regName").value.trim();
            const email = document.getElementById("regEmail").value.trim();
            const pass = document.getElementById("regPass").value;
            const passConfirm = document.getElementById("regPassConfirm").value;

            const nameMessage = document.getElementById("nameMessage");
            const emailMessage = document.getElementById("regEmailMessage");
            const passwordMessage = document.getElementById("regPasswordMessage");
            const confirmMessage = document.getElementById("confirmMessage");
            const successMessageDiv = document.getElementById("registerSuccessMessage");

            nameMessage.textContent = '';
            emailMessage.textContent = '';
            passwordMessage.textContent = '';
            confirmMessage.textContent = '';
            successMessageDiv.innerHTML = '';

            let valid = true;

            if (name === "") {
                nameMessage.textContent = "*Please enter your full name*";
                valid = false;
            }

            if (email === "") {
                emailMessage.textContent = "*Please enter your email address*";
                valid = false;
            } else if (!validateEmail(email)) {
                emailMessage.textContent = "*Please enter a valid email address (example@domain.com)*";
                valid = false;
            }

            if (pass === "") {
                passwordMessage.textContent = "*Please create a password*";
                valid = false;
            } else {
                const passwordErrors = validatePassword(pass);
                if (passwordErrors.length > 0) {
                    passwordMessage.innerHTML = passwordErrors.join("<br>");
                    valid = false;
                }
            }

            if (passConfirm === "") {
                confirmMessage.textContent = "*Please confirm your password*";
                valid = false;
            } else if (pass !== passConfirm) {
                confirmMessage.textContent = "*Passwords do not match. Please try again.*";
                valid = false;
            }

            if (!valid) return;

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith("user_")) {
                    const userData = JSON.parse(localStorage.getItem(key));
                    if (userData.email === email) {
                        emailMessage.textContent = "*An account with this email already exists. Please login instead.*";
                        return;
                    }
                }
            }

            const userKey = "user_" + Date.now();
            const userData = { name, email, password: pass };
            localStorage.setItem(userKey, JSON.stringify(userData));

            successMessageDiv.innerHTML = '<p class="success-message1">✓ Registration successful! You can now login with your credentials.</p>';
            this.reset();

            setTimeout(() => {
                const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
                registerModal.hide();
                const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
                loginModal.show();
            }, 3000);
        });

document.addEventListener("DOMContentLoaded", function () {
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");


  const goToRegister = loginModal.querySelector('[data-bs-target="#registerModal"]');
  if (goToRegister) {
    goToRegister.addEventListener("click", function (e) {
      e.preventDefault();
      const loginInstance = bootstrap.Modal.getInstance(loginModal);
      loginInstance.hide();

      loginModal.addEventListener("hidden.bs.modal", function handler() {
        const registerInstance = new bootstrap.Modal(registerModal);
        registerInstance.show();
        loginModal.removeEventListener("hidden.bs.modal", handler);
      });
    });
  }


  const goToLogin = registerModal.querySelector('[data-bs-target="#loginModal"]');
  if (goToLogin) {
    goToLogin.addEventListener("click", function (e) {
      e.preventDefault();
      const registerInstance = bootstrap.Modal.getInstance(registerModal);
      registerInstance.hide();

      registerModal.addEventListener("hidden.bs.modal", function handler() {
        const loginInstance = new bootstrap.Modal(loginModal);
        loginInstance.show();
        registerModal.removeEventListener("hidden.bs.modal", handler);
      });
    });
  }


  document.addEventListener("hidden.bs.modal", function () {
    const backdrops = document.querySelectorAll(".modal-backdrop");
    if (backdrops.length > 1) {
      for (let i = 0; i < backdrops.length - 1; i++) {
        backdrops[i].remove();
      }
    }
  });
});

    
        const productModal = document.getElementById('productOptionsModal');
        const successModal = document.getElementById('successModal');
        
        
        successModal.addEventListener('shown.bs.modal', function () {
            setTimeout(function() {
                const modalInstance = bootstrap.Modal.getInstance(successModal);
                modalInstance.hide();
            }, 2000);
        });

       
        productModal.addEventListener('hidden.bs.modal', function () {
            document.getElementById('size-48').checked = true;
            document.getElementById('color-black').checked = true;
        });

document.addEventListener("DOMContentLoaded", function() {
  const productModal = document.getElementById("productOptionsModal");
  const successModal = document.getElementById("successModal");
  const addToCartBtn = productModal.querySelector('[data-bs-target="#successModal"]');

  addToCartBtn.addEventListener("click", function() {
    
    const productModalInstance = bootstrap.Modal.getInstance(productModal);
    productModalInstance.hide();

   
    productModal.addEventListener("hidden.bs.modal", function handler() {
      const successModalInstance = new bootstrap.Modal(successModal);
      successModalInstance.show();

      productModal.removeEventListener("hidden.bs.modal", handler);
    });
  });


  document.addEventListener("hidden.bs.modal", function () {
    const backdrops = document.querySelectorAll(".modal-backdrop");
    if (backdrops.length > 1) {
    
      for (let i = 0; i < backdrops.length - 1; i++) {
        backdrops[i].remove();
      }
    }
  });
});
  document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            alert('Thank you for your message, ' + name + '!\n\nWe have received your inquiry and will get back to you as soon as possible.');
            
            this.reset();
        });