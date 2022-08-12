const btnToggleNav = document.querySelector('.nav-open-btn');
const btnCloseNav = document.querySelector('.nav-close-btn');
const navMenu = document.querySelector('.desktop-nav');
const btnAddToCart = document.querySelector('.add-to-cart-btn');
const cartContent = document.querySelector('.cart-content');
const btnCartDelete = document.querySelector('.cart-content button');




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
    
    clearCart();

    const img = document.createElement('img');
    img.src = document.querySelector('.lightbox-thumbs > a img').src;
    cartContent.appendChild(img);

    const divArticle = document.createElement('div');
    const title = document.createElement('span');
    title.classList.add('cart-article-title');
    title.textContent = document.querySelector('h1').textContent;
    divArticle.appendChild(title);

    const divPrice = document.createElement('div');
    const price = document.createElement('span');
    price.textContent = document.querySelector('.price > span').textContent;
    
    const quantity = document.createElement('span');
    quantity.textContent = " x" + document.querySelector('.quantity-number').textContent;

    const total = document.createElement('span');
    total.classList.add('cart-total');
    total.textContent = "  10";

    divPrice.appendChild(price);
    divPrice.appendChild(quantity);
    divPrice.appendChild(total);
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
}

const clearCart = (removeButton) => {
    while(cartContent.firstChild) {
        cartContent.removeChild(cartContent.firstChild);
    }
    const btnCheckout = document.querySelector('.btn-checkout');
    btnCheckout.style.display = "block";

    if(removeButton) {
        btnCheckout.style.display = "none";
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = "Your cart is empty";
        cartContent.appendChild(emptyMessage);
    }
}




btnToggleNav.addEventListener('click', showHideNav);
btnCloseNav.addEventListener('click', showHideNav);
btnAddToCart.addEventListener('click', addToCart);

// btnCartDelete.addEventListener('click', clearCart);


/* <img src="assets/images/image-product-1-thumbnail.jpg" alt="">

<div divArticle>
    <span class="cart-article-title">Fall Limited Edition Sneakers</span>
    <div divPrice>
        <span class="cart-price">125</span>
        <span class="cart-quantity">x 3</span>
        <span class="cart-total">375</span>
    </div>
</div>

<div divButton>
    <button><img src="assets/images/icon-delete.svg" alt=""></button>
</div> 
*/