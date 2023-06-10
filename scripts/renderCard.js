const wrapper = document.querySelector('#wrapper')

export function cards(datas) {
  wrapper.innerHTML = datas.map(data => {
    return `<div id="${data.id}" class="card">
    <div class="image">
        <img class="img" src="${data.src}" alt="Dummy Image" />
    </div>
    <div class="container">
    <div class="main-content">
        <div class="rating-price">
        <p class="rating">${data.rating} <i class="fa-regular fa-star"></i></p>
        <p class="price">${data.price}</p>
        </div>
        <div class="description">
        <h5 class="header" id="${data.brandId}">${data.productName}</h5>
        <p class="description-text">${data.description}</p>
        </div>
    </div>
        <div class="buttons">
        <button class="wishlist">
            <i class="fa-regular fa-heart"></i>
            <p>WISHLIST</p>
        </button>
        <input type="checkbox" class="cart-checkbox" id="cart-checkbox-${data.id}">
        <label for="cart-checkbox-${data.id}" class="add-cart">
            <i class="fa-solid fa-bag-shopping"></i>
            <p>ADD TO CART</p>
        </label>
        </div>
        </div>
    </div>`
  }).join('')
}