
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');
    const cart = [];
  
    const performSearch = () => {
      const query = searchInput.value.toLowerCase();
      const boxes = document.querySelectorAll('.box');
      boxes.forEach(box => {
        const artist = box.querySelector('h2').textContent.toLowerCase();
        const price = box.querySelector('p').textContent.toLowerCase();
        if (artist.includes(query) || price.includes(query)) {
          box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });
    };
  
    const updateCart = () => {
      console.log('Cart:', cart);
      // You can update the cart display here
    };
  
    const addToCart = (event) => {
      console.log('Add to Cart clicked'); // Debugging line
      const box = event.target.closest('.box');
      const artist = box.querySelector('h2').textContent;
      const price = box.querySelector('p').textContent;
      const item = { artist, price };
      cart.push(item);
      updateCart();
    };
  
    searchButton.addEventListener('click', performSearch);
  
    searchInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        performSearch();
      }
    });
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
    });
  });
  
  
