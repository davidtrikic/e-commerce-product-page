// Components
const btnToggleNav = document.querySelector('.nav-open-btn');
const btnCloseNav = document.querySelector('.nav-close-btn');
const navMenu = document.querySelector('.desktop-nav');
const btnCart = document.querySelector('.cart-button');
const profileLink = document.querySelector('.profile-link');
const cartDiv = document.querySelector('.cart');
const btnAddToCart = document.querySelector('.add-to-cart-btn');
const cartContent = document.querySelector('.cart-content');
const btnCartDelete = document.querySelector('.cart-content button');
const quantitySelector = document.querySelector('.quantity-selector');
const quantityBadge = document.querySelector('.cart-quantity-badge');


// Show/hide mobile navigation
const showHideNav = () => {
    if(navMenu.classList.contains('mobile-nav')) {
        navMenu.classList.remove('mobile-nav');
        return;
    }
    if(!navMenu.classList.contains('mobile-nav')) {
        navMenu.classList.add('mobile-nav');
    }
}

const addToCart = () => {
    
    clearCart(); // Clear previous content

    // Create DOM
    const img = document.createElement('img');
    img.src = document.querySelector('.lightbox-thumbs > a img').src;
    cartContent.appendChild(img);

    const divArticle = document.createElement('div');
    const title = document.createElement('span');
    title.classList.add('cart-article-title');
    title.textContent = document.querySelector('h1').textContent; // Get the article title 
    divArticle.appendChild(title);

    const divPrice = document.createElement('div');
    const price = document.createElement('span');
    price.textContent = document.querySelector('.price > span').textContent; // Get the price
    
    const quantitySpan = document.createElement('span');
    const quantity = document.querySelector('.quantity-number').textContent;
    quantitySpan.textContent = "x" + quantity;

    const totalSpan = document.createElement('span');
    totalSpan.classList.add('cart-total');

    const total = price.textContent.slice(1, 4) * quantity; // Calculate cart total
    totalSpan.textContent = "$" + total + ".00"
    

    divPrice.appendChild(price);
    divPrice.appendChild(quantitySpan);
    divPrice.appendChild(totalSpan);
    divArticle.appendChild(divPrice);

    const divButton = document.createElement('div');
    const btnDelete = document.createElement('button');
    const iconDelete = document.createElement('img');
    iconDelete.src = "assets/images/icon-delete.svg";

    btnDelete.addEventListener('click', function() {
        clearCart(true);
    });

    btnDelete.appendChild(iconDelete);
    divButton.appendChild(btnDelete);

    cartContent.appendChild(divArticle);
    cartContent.appendChild(divButton);

    quantityBadge.textContent = quantity; // Update quantity badge number
    quantityBadge.style.display = "block";
}

const clearCart = (emptyAll) => {
    const btnCheckout = document.querySelector('.btn-checkout');
    
    // Clear DOM and place empty cart message
    if(emptyAll && confirm('Empty your cart?')) {
        while(cartContent.firstChild) {
            cartContent.removeChild(cartContent.firstChild);
        } 
        btnCheckout.style.display = "none";
        quantityBadge.style.display = "none";
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = "Your cart is empty";
        cartContent.appendChild(emptyMessage);
    }
    // Clear previous cart content before adding new
    if(!emptyAll) {
        while(cartContent.firstChild) {
            cartContent.removeChild(cartContent.firstChild);
        } 
        btnCheckout.style.display = "block";
    }   
}

const selectQuantity = (e) => {
    const quantityNumber = document.querySelector('.quantity-number');

    if(e.target.classList.contains('quantity-plus') && quantityNumber.textContent < 10) quantityNumber.textContent++;
    if(e.target.classList.contains('quantity-minus') && quantityNumber.textContent > 1) quantityNumber.textContent--;
}


const showCart = () => {
    const style = window.getComputedStyle(cartDiv);
    if(style.getPropertyValue('visibility') === "visible") {
        cartDiv.style.visibility = "hidden";
        return
    }
    if(style.getPropertyValue('visibility') === "hidden") cartDiv.style.visibility = "visible";
}


// Listeners
btnToggleNav.addEventListener('click', showHideNav);
btnCloseNav.addEventListener('click', showHideNav);
btnAddToCart.addEventListener('click', addToCart);
quantitySelector.addEventListener('click', selectQuantity);
btnCart.addEventListener('click', showCart);
profileLink.addEventListener('click', showCart);