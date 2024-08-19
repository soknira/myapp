document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');
    const cartCount = document.getElementById('cart-count');
    // const viewButtons = document.querySelectorAll('.view');

    let itemCount = 0;  // Initialize item count

    mobileMenu.addEventListener('click', function () {
      navbarMenu.classList.toggle('active');
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const product = this.getAttribute('data-product');
        const price = this.getAttribute('data-price');
        itemCount++;  // Increment item count
        cartCount.textContent = itemCount;  // Update cart count display
        alert(`Added ${product} to cart for $${price}`);
      });
    });
  });

  document.getElementById('alert-button').addEventListener('click', function() {
  // Hide the alert page when the button is clicked
  document.getElementById('alert-page').style.display = 'none';

});
document.getElementById('mobile-menu').addEventListener('click', function(){
  document.getElementById('alert-page').style.display ='flex';
})

// script.js

// Get the trash icon element
// Select all trash icons
function updateCardBodyCount() {
        const cardBodies = document.querySelectorAll('#product');
        document.getElementById('count').textContent = cardBodies.length;
    }

   
    updateCardBodyCount();

    
    const trashIcons = document.querySelectorAll('.trash-icon');

    
    trashIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            
            const card = icon.closest('.card');

            
            const cardBody = card.querySelector('.card-body');
            if (cardBody) {
                cardBody.remove();
              
                updateCardBodyCount();
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.add-to-cart');
      const viewButtons = document.querySelectorAll('.view');
      const trashIcons = document.querySelectorAll('.trash-icon');
      let cartCount = 0;
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', () => {
              cartCount++;
              document.getElementById('cart-count').textContent = cartCount;
          });
      });
  
      viewButtons.forEach(button => {
          button.addEventListener('click', () => {
              createAlertPage(button.dataset.product, button.dataset.price);
          });
      });
  
      trashIcons.forEach(icon => {
          icon.addEventListener('click', function () {
              const cardBody = this.closest('.card-body');
              cardBody.remove();
              updateCardCount();
          });
      });
  
      function createAlertPage(product, price) {
          const alertPage = document.createElement('div');
          alertPage.classList.add('alert-container');
          alertPage.style.position = 'fixed';
          alertPage.style.top = '0';
          alertPage.style.left = '0';
          alertPage.style.width = '100%';
          alertPage.style.height = '100%';
          alertPage.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          alertPage.style.zIndex = '9999';
          alertPage.style.display = 'flex';
          alertPage.style.alignItems = 'center';
          alertPage.style.justifyContent = 'center';

          // const image=<img src="asset/img/shop/image.jpg">

          const alertBox = document.createElement('div');
          alertBox.style.backgroundColor = '#fff';
          alertBox.style.padding = '20px';
          alertBox.style.borderRadius = '10px';
          alertBox.style.textAlign = 'center';
          alertBox.innerHTML = `
             <img src="assets/img/shop/image.png">
              <h2>${product}</h2>
              <p>Price: $${price}</p>
              <button id="close-alert" class="btn btn-danger">Close</button>
          `;
  
          alertPage.appendChild(alertBox);
          document.body.appendChild(alertPage);
  
          document.getElementById('close-alert').addEventListener('click', () => {
              document.body.removeChild(alertPage);
          });
      }
  
      function updateCardCount() {
          const cardCount = document.querySelectorAll('.card-body').length;
          document.getElementById('count').textContent = cardCount;
      }
  });
  




