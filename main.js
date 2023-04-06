const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu') ;
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguer.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toogleCarritoAside);



function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } 

    mobileMenu.classList.toggle('inactive');
   
}

function toogleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } 
        
    shoppingCartContainer.classList.toggle('inactive');
     
   }

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
           
})
productList.push({
    name: 'cellphone',
    price: 400,
    image: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-6376495_823x.jpg?v=1660429014"
           
})
productList.push({
    name: 'latop',
    price: 520,
    image: "https://images.hola.com/imagenes/seleccion/20221227223234/macbook-air-pro-analisis-comparativa/1-183-26/macbook-t.jpg"
           
})
productList.push({
    name: 'computer',
    price: 920,
    image: "https://www.apple.com/newsroom/images/product/imac/standard/Apple_imac-magickeyboardnum-magicmouse2-macos-wallpaper_08042020.jpg.og.jpg?202303230115"
           
})
productList.push({
    name: 'latop',
    price: 520,
    image: "https://images.hola.com/imagenes/seleccion/20221227223234/macbook-air-pro-analisis-comparativa/1-183-26/macbook-t.jpg"
           
})
productList.push({
    name: 'computer',
    price: 920,
    image: "https://www.apple.com/newsroom/images/product/imac/standard/Apple_imac-magickeyboardnum-magicmouse2-macos-wallpaper_08042020.jpg.og.jpg?202303230115"
           
})

function renderProducts(arr){

    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add ('product-card');
    
        const productImg = document.createElement ('img'); 
        productImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add ('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$ " + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src',"./Platzi_YardSale_Icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

