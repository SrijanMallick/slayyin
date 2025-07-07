// Product data
const products = [
  {
    id: "1",
    name: "Classic Black T-Shirt Oversized",
    price: 1299,
    salePrice: 799,
    images: [
      "slayyin-black-tshirt 1.png",
      "black-tshirt 1.png",
     "slayyin-black-tshirt 1.png",
      "Slayyin Size Chart.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    material: "100% Cotton",
    minimumOrderQuantity: "NA",
  },

  {
    id: "1002",
    name: "Classic White T-Shirt Oversized",
    price: 1299,
    salePrice: 799,
    images: [
      "slayyin-white-tshirt oversized 1.png",
      "slayyin-white-tshirt 1.png",
      "slayyin-white-tshirt oversized 1.png",
      "Slayyin Size Chart.png",
    ],
    category: "Casuals",
    description:
      "Premium quality white t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    material: "100% Cotton",
    minimumOrderQuantity: 1,
  },

  {
    id: "1003",
    name: "Classic Black T-Shirt Oversized - Style 2",
    price: 1299,
    salePrice: 799,
    images: [
      "black-tshirt 5.png",
      "slayyin-black-tshirt 1.png",
      "slayyin size chart.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
    minimumOrderQuantity: 1,
  },

  {
    id: "1004",
    name: "Classic Black T-Shirt Oversized - Style 3",
     price: 1299,
    salePrice: 799,
    images: [
      "black-tshirt 3.png",
      "slayyin-black-tshirt 1.png",
      "slayyin size chart.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
    minimumOrderQuantity: 1,
  },

  {
    id: "1005",
    name: "College Blazer - Black",
    price: 6999,
    salePrice: 3999,
    images: [
      "blazer black.png",
      "blazer blue.png",
      "blazer brown.png",
      "blazer green.png",
    ],
    category: "College-formals",
    description:
      "Professional college blazer in black. Perfect for formal events.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Blue", "Brown", "Green", ],
    material: "Premium Wool Blend",
    minimumOrderQuantity: 1,
  },

   {
    id: "1006",
    name: "College Blazer - Blue",
    price: 6999,
    salePrice: 3999,
    images: [
      "blazer blue.png",
      "blazer black.png",
      "blazer brown.png",
      "blazer green.png",
    ],
    category: "College-formals",
    description:
      "Professional college blazer in blue. Perfect for formal events.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Black", "Brown", "Green"],
    material: "Premium Wool Blend",
    minimumOrderQuantity: 1,
  },

   {
    id: "1007",
    name: "College Blazer - Brown",
    price: 6999,
    salePrice: 3999,
    images: [
      "blazer brown.png",
      "blazer blue.png",
      "blazer black.png",
      "blazer green.png",
    ],
    category: "College-formals",
    description:
      "Professional college blazer in brown. Perfect for formal events.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [, "Brown", "Black", "Blue", "Green"],
    material: "Premium Wool Blend",
    minimumOrderQuantity: 1,
  },

  {
    id: "1008",
    name: "College Blazer - Green",
    price: 6999,
    salePrice: 3999,
    images: [
      "blazer green.png",
      "blazer black.png",
      "blazer blue.png",
      "blazer brown.png",
    ],
    category: "College-formals",
    description:
      "Professional college blazer in brown. Perfect for formal events.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Black", "Blue", "Brown"],
    material: "Premium Wool Blend",
    minimumOrderQuantity: 1,
  },

  {
    id: "1009",
    name: "Classic Black T-Shirt Oversized - Style 4",
     price: 1299,
    salePrice: 799,
    images: [
      "black-tshirt 2.png",
      "slayyin-black-tshirt 2.png",
      "slayyin size chart.png",
    ],
    category: "Casuals",
    description:
      "Premium quality black t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black"],
    material: "100% Cotton",
    minimumOrderQuantity: 1,
  },

  {
    id: "1010",
    name: "Classic White T-Shirt Oversized - Style 2",
    price: 1299,
    salePrice: 799,
    images: [
      "slayyin-white-tshirt oversized 2.png",
      "slayyin size chart.png",
    ],
    category: "Casuals",
    description:
      "Premium quality white t-shirt with a comfortable fit. Perfect for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
    material: "100% Cotton",
    minimumOrderQuantity: 1,
  },

  {
    id: "1011",
    name: "College ID Card Holder",
    price: 120,
    salePrice: 70,
    images: [
      "product-idcard.png",
    ],
    category: "College-utility",
    description:
      "Durable ID card holder with lanyard. Essential college accessory, especially for college clubs & societies.",
    sizes: ["One Size"],
    colors: ["Black", "Blue"],
    material: "Premium PVC",
    minimumOrderQuantity: 40,
  },

  {
    id: "1012",
    name: "College Cap",
    price: 899,
    salePrice: 549,
    images: [
      "product-cap.png",
    ],
    category: "College-utility",
    description:
      "Stylish college cap with embroidered logo. Perfect for campus wear.",
    sizes: ["One Size"],
    colors: ["Black", "Navy"],
    material: "Premium Cotton",
    minimumOrderQuantity: 1,
  },

];

// Utility function to validate product data
function validateProduct(product) {
  const requiredFields = ['id', 'name', 'price', 'images', 'category', 'description'];
  return requiredFields.every(field => product[field] != null);
}

// Load products function
function loadProducts(category = "all") {
  const productsContainer = document.getElementById("productsContainer");
  const seeMoreSection = document.getElementById("seeMoreSection");

  if (!productsContainer) {
    console.error("Products container not found");
    return;
  }

  try {
    productsContainer.innerHTML = ""; // Clear existing products

    // Filter and validate products
    const filteredProducts = (category === "all" ? products : products.filter((product) => product.category === category))
      .filter(product => validateProduct(product));

    if (filteredProducts.length === 0) {
      productsContainer.innerHTML = '<div class="no-products">No products found for this category.</div>';
      return;
    }

    // Show/hide "See More" button based on product count and screen size
    const getColumnsPerRow = () => {
      if (window.innerWidth <= 768) return 2; // Mobile/Tablet: 2 columns
      return 4; // Desktop: 4 columns
    };

    const columnsPerRow = getColumnsPerRow();
    const productsPerTwoRows = columnsPerRow * 2;

    if (filteredProducts.length > productsPerTwoRows) {
      if (seeMoreSection) {
        seeMoreSection.style.display = "block";
      }
      productsContainer.classList.add("limited");
    } else {
      if (seeMoreSection) {
        seeMoreSection.style.display = "none";
      }
      productsContainer.classList.remove("limited");
    }

    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      // Create image element with error handling
      const img = document.createElement("img");
      img.src = product.images[0] || "placeholder.jpg";
      img.alt = product.name;
      img.onerror = function () {
        this.src = "placeholder.jpg";
        console.warn(`Failed to load image for product: ${product.name}`);
      };

      const salePrice = product.salePrice || product.price;
      const originalPrice = product.price;

      productCard.innerHTML = `
        <div class="product-image">
          ${img.outerHTML}
          <div class="wishlist-icon" onclick="event.stopPropagation(); addToWishlist('${product.id}')">
            <i class="fas fa-heart"></i>
          </div>
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="product-price">
            ${product.salePrice && product.salePrice < product.price
              ? `<span class="sale-price">₹${salePrice.toFixed(2)}</span>
                 <span class="original-price">₹${originalPrice.toFixed(2)}</span>`
              : `<span>₹${originalPrice.toFixed(2)}</span>`
            }
          </div>
          <button class="buy-now-btn" onclick="event.stopPropagation(); redirectToWhatsApp('${product.id}', '${product.name.replace(/'/g, "\\'")}', ${salePrice})">
            <i class="fab fa-whatsapp"></i> Buy Now
          </button>
        </div>
      `;

      productCard.onclick = () => {
        try {
          localStorage.setItem("currentProduct", JSON.stringify(product));
          window.location.href = `product-details.html?id=${product.id}`;
        } catch (error) {
          console.error('Error storing product data:', error);
          window.location.href = `product-details.html?id=${product.id}`;
        }
      };

      productsContainer.appendChild(productCard);
    });

    // Update wishlist UI after loading products
    setTimeout(() => updateWishlistUI(), 100);

  } catch (error) {
    console.error('Error loading products:', error);
    productsContainer.innerHTML = '<div class="error-message">Error loading products. Please refresh the page.</div>';
  }
}

// Search functionality
function searchProducts(searchTerm, resultsContainer) {
  try {
    if (!searchTerm || searchTerm.trim().length === 0) {
      resultsContainer.classList.remove("active");
      return;
    }

    const normalizedSearchTerm = searchTerm.toLowerCase().trim();
    const results = products.filter((product) => {
      if (!validateProduct(product)) return false;
      
      return (
        product.name.toLowerCase().includes(normalizedSearchTerm) ||
        product.description.toLowerCase().includes(normalizedSearchTerm) ||
        product.category.toLowerCase().includes(normalizedSearchTerm) ||
        (product.material && product.material.toLowerCase().includes(normalizedSearchTerm)) ||
        (product.minimumOrderQuantity && product.minimumOrderQuantity.toString().includes(normalizedSearchTerm))
      );
    });

    if (results.length === 0) {
      resultsContainer.innerHTML =
        '<div class="search-result-item no-results">No products found</div>';
    } else {
      resultsContainer.innerHTML = results
        .slice(0, 10) // Limit results to 10 for performance
        .map((product) => {
          const salePrice = product.salePrice || product.price;
          const originalPrice = product.price;
          
          return `
            <div class="search-result-item" onclick="selectSearchResult('${product.id}', '${product.name.replace(/'/g, "\\'")}')">
              <img src="${product.images[0] || "placeholder.jpg"}" alt="${product.name}" onerror="this.src='placeholder.jpg'">
              <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">
                  ${product.salePrice && product.salePrice < product.price
                    ? `<span class="sale-price">₹${salePrice.toFixed(2)}</span>
                       <span class="original-price">₹${originalPrice.toFixed(2)}</span>`
                    : `<span>₹${originalPrice.toFixed(2)}</span>`
                  }
                </div>
              </div>
            </div>
          `;
        })
        .join("");
    }
    resultsContainer.classList.add("active");
  } catch (error) {
    console.error("Error searching products:", error);
    resultsContainer.innerHTML =
      '<div class="search-result-item no-results">Error searching products</div>';
    resultsContainer.classList.add("active");
  }
}

// Handle search result selection
function selectSearchResult(productId, productName) {
  try {
    const product = products.find(p => p.id === productId);
    if (product) {
      localStorage.setItem("currentProduct", JSON.stringify(product));
      window.location.href = `product-details.html?id=${productId}`;
    } else {
      console.error('Product not found:', productId);
      window.location.href = `product-details.html?id=${productId}`;
    }
  } catch (error) {
    console.error('Error selecting search result:', error);
    window.location.href = `product-details.html?id=${productId}`;
  }
}

// See More functionality
function toggleSeeMore() {
  const productsContainer = document.getElementById("productsContainer");
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const seeMoreText = seeMoreBtn.querySelector(".see-more-text");

  if (productsContainer.classList.contains("limited")) {
    // Expand to show all products
    productsContainer.classList.remove("limited");
    seeMoreText.textContent = "See Less";

    // Smooth transition
    productsContainer.style.transition =
      "max-height 0.8s ease, overflow 0.8s ease";

    // After expansion, ensure no clipping on hover
    setTimeout(() => {
      productsContainer.style.overflow = "visible";
    }, 800);
  } else {
    // Collapse to show only 2 rows
    productsContainer.classList.add("limited");
    seeMoreText.textContent = "See More";

    // Reset overflow for limited view
    productsContainer.style.overflow = "hidden";
    productsContainer.style.transition =
      "max-height 0.8s ease, overflow 0.8s ease";

    // Scroll back to the products section for better UX
    setTimeout(() => {
      document.getElementById("featured-products").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
}

// Initialize products functionality when DOM is loaded
function initializeProducts() {
  // Initialize category buttons
  const categoryButtons = document.querySelectorAll(".category-btn");
  let currentCategory = "all";

  // Add click event listeners to category buttons
  if (categoryButtons) {
    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        categoryButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");
        // Update current category
        currentCategory = button.dataset.category;
        // Load products for selected category
        loadProducts(currentCategory);
      });
    });
  }

  // Initialize search functionality
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  const mobileSearchResults = document.getElementById("mobileSearchResults");
  let searchTimeout;

  function handleSearch(input, resultsContainer) {
    clearTimeout(searchTimeout);
    const searchTerm = input.value.toLowerCase().trim();

    if (searchTerm.length < 2) {
      resultsContainer.classList.remove("active");
      return;
    }

    searchTimeout = setTimeout(() => {
      searchProducts(searchTerm, resultsContainer);
    }, 300);
  }

  if (searchInput) {
    searchInput.addEventListener("input", () =>
      handleSearch(searchInput, searchResults)
    );
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", () =>
      handleSearch(mobileSearchInput, mobileSearchResults)
    );
  }

  // Load initial products
  loadProducts();

  // Handle window resize for responsive "See More" logic
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Get current category filter
      const activeCategory = document.querySelector(".category-btn.active");
      const currentCategory = activeCategory
        ? activeCategory.dataset.category
        : "all";
      loadProducts(currentCategory);
    }, 250);
  });

  // Initialize scroll reveal
  const productsContainer = document.getElementById("productsContainer");
  if (productsContainer) {
    function revealOnScroll() {
      const containerPosition =
        productsContainer.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (containerPosition < screenPosition) {
        productsContainer.classList.add("active");
      }
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }
}

// WhatsApp redirection function
function redirectToWhatsApp(productId, productName, price) {
  try {
    // Validate inputs
    if (!productId || !productName || !price) {
      console.error('Invalid product data for WhatsApp redirect');
      showNotification('Invalid product data', 'error');
      return;
    }

    let whatsappUrl;
    let message;

    // Check if config is available and has WhatsApp settings
    if (typeof config !== 'undefined' && config.whatsapp && config.whatsapp.businessNumber && config.whatsapp.messageTemplate) {
      try {
        message = config.whatsapp.messageTemplate
          .replace('{productName}', productName)
          .replace('{price}', parseFloat(price).toFixed(2))
          .replace('{productId}', productId);
        
        whatsappUrl = `https://wa.me/${config.whatsapp.businessNumber}?text=${encodeURIComponent(message)}`;
      } catch (configError) {
        console.warn('Error using config for WhatsApp:', configError);
        throw configError; // Fall through to fallback
      }
    } else {
      throw new Error('Config not available or incomplete');
    }
    
    // Open WhatsApp
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      // Popup blocked, try direct navigation
      window.location.href = whatsappUrl;
    }
    
  } catch (error) {
    console.warn('Using fallback WhatsApp configuration:', error);
    
    // Fallback configuration
    const fallbackNumber = '919876543210'; // Replace with your actual business number
    const fallbackMessage = `Hi! I'm interested in ${productName} (ID: ${productId}) for ₹${parseFloat(price).toFixed(2)}. Please provide more details.`;
    const fallbackUrl = `https://wa.me/${fallbackNumber}?text=${encodeURIComponent(fallbackMessage)}`;
    
    const newWindow = window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      window.location.href = fallbackUrl;
    }
    
    showNotification('Redirecting to WhatsApp...', 'info');
  }
}

// Add to wishlist function
function addToWishlist(productId) {
  try {
    // Get existing wishlist from localStorage
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Check if product is already in wishlist
    if (wishlist.includes(productId)) {
      // Remove from wishlist
      wishlist = wishlist.filter(id => id !== productId);
      showNotification('Removed from wishlist', 'info');
    } else {
      // Add to wishlist
      wishlist.push(productId);
      showNotification('Added to wishlist', 'success');
    }
    
    // Save updated wishlist
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Update UI if needed
    updateWishlistUI();
  } catch (error) {
    console.error('Error managing wishlist:', error);
    showNotification('Error updating wishlist', 'error');
  }
}

// Show notification function
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
    color: white;
    padding: 12px 20px;
    border-radius: 5px;
    z-index: 10000;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Get product by ID
function getProductById(productId) {
  return products.find(product => product.id === productId) || null;
}

// Format minimum order quantity text
function formatMinimumOrderQuantity(quantity) {
  if (!quantity || quantity <= 0) return '';
  return `${quantity} ${quantity === 1 ? 'piece' : 'pieces'}`;
}

// Update wishlist UI
function updateWishlistUI() {
  try {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistIcons = document.querySelectorAll('.wishlist-icon');
    
    wishlistIcons.forEach(icon => {
      try {
        const productCard = icon.closest('.product-card');
        if (productCard) {
          const buyButton = productCard.querySelector('.buy-now-btn');
          if (buyButton) {
            const onclickAttr = buyButton.getAttribute('onclick');
            if (onclickAttr) {
              const productIdMatch = onclickAttr.match(/redirectToWhatsApp\('([^']+)'/);
              if (productIdMatch) {
                const productId = productIdMatch[1];
                const heartIcon = icon.querySelector('.fas.fa-heart');
                if (heartIcon) {
                  if (wishlist.includes(productId)) {
                    heartIcon.style.color = '#ff4444';
                    heartIcon.style.opacity = '1';
                    icon.title = 'Remove from wishlist';
                    icon.classList.add('active');
                  } else {
                    heartIcon.style.color = '#ccc';
                    heartIcon.style.opacity = '0.7';
                    icon.title = 'Add to wishlist';
                    icon.classList.remove('active');
                  }
                }
              }
            }
          }
        }
      } catch (iconError) {
        console.warn('Error updating individual wishlist icon:', iconError);
      }
    });
  } catch (error) {
    console.error('Error updating wishlist UI:', error);
  }
}

// Initialize on DOM content loaded (browser only)
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProducts);
  } else {
    // DOM is already loaded
    setTimeout(initializeProducts, 0);
  }
}

// Export functions for global access
const globalScope = (function() {
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof self !== 'undefined') return self;
  return this;
})();

if (globalScope) {
  globalScope.products = products;
  globalScope.loadProducts = loadProducts;
  globalScope.searchProducts = searchProducts;
  globalScope.selectSearchResult = selectSearchResult;
  globalScope.toggleSeeMore = toggleSeeMore;
  globalScope.initializeProducts = initializeProducts;
  globalScope.redirectToWhatsApp = redirectToWhatsApp;
  globalScope.addToWishlist = addToWishlist;
  globalScope.showNotification = showNotification;
  globalScope.updateWishlistUI = updateWishlistUI;
  globalScope.getProductById = getProductById;
  globalScope.validateProduct = validateProduct;
  globalScope.formatMinimumOrderQuantity = formatMinimumOrderQuantity;
  
  // Legacy support
  globalScope.ProductsJS = {
    products,
    loadProducts,
    searchProducts,
    selectSearchResult,
    toggleSeeMore,
    initializeProducts,
    redirectToWhatsApp,
    addToWishlist,
    showNotification,
    updateWishlistUI,
    getProductById,
    validateProduct,
    formatMinimumOrderQuantity
  };
}

// Node.js module export (if in Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    products,
    loadProducts,
    searchProducts,
    selectSearchResult,
    toggleSeeMore,
    initializeProducts,
    redirectToWhatsApp,
    addToWishlist,
    showNotification,
    updateWishlistUI,
    getProductById,
    validateProduct,
    formatMinimumOrderQuantity
  };
} 