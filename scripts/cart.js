const cartBtn = document.querySelector('#cart')

const modal = document.querySelector('#modal')
const closeModal = document.querySelector('#modal-close')

const cartBadge = document.querySelector('#cart-badge')
const quantity = document.querySelector('#cart-quantity')

const addToCartBtn = document.getElementsByClassName('add-cart')
const cartCheckbox = document.getElementsByClassName('cart-checkbox')

const cartWrapper = document.querySelector('#cart-wrapper')
const cartItem = document.getElementsByClassName('cart-item')
const removeFromCartBtns = document.getElementsByClassName('remove-btn')

const overlay = document.querySelector('#overlay')

let cart = []

export function showCartProducts(productData) {
  
  if (cart.length == 0) {
    cartBadge.innerHTML = 0
    cartBadge.style.display = 'none'
  }
  
  for (let i = 0; i < addToCartBtn.length; i++) {
    cartCheckbox[i].addEventListener('change', () => {
      if (cartCheckbox[i].checked) {
        cart.push(productData[i])
        cartBadge.innerHTML = cart.length
        cartBadge.style.display = 'flex'

      } else {
        const index = cart.indexOf(productData[i])
        
        if (index > -1) {
          cart.splice(index, 1)
          cartBadge.innerHTML = cart.length

          if (cart.length == 0) {
            cartBadge.innerHTML = 0
            cartBadge.style.display = 'none'
          }
        }

      }
    })
  }

  cartBtn.addEventListener('click', () => {
    overlay.style.display = 'block'
    document.body.style.overflow = 'hidden'

    modal.style.display = 'block'

    quantity.innerHTML = cart.length

    cartWrapper.innerHTML = cart.map(productData => {
      return `<div class="cart-item">
      <div class="img-wrapper">
        <img class="img" src="${productData.src}" alt="">
      </div>
      <div class="content">
        <div class="row">
          <h6 class="header">${productData.productName}</h6>
          <span class=price>${productData.price}</span>
        </div>
        <p class="description">${productData.description}</p>
        </div>
        <button class="remove-btn">remove from cart</button>
    </div>`
    }).join('')

    for (let i = 0; i < removeFromCartBtns.length; i++) {
      (function (product) {
        const btn = removeFromCartBtns[i];
        const checkbox = cartCheckbox[i];
    
        btn.addEventListener('click', () => {
          btn.parentElement.remove();
    
          if (checkbox.checked) {
            checkbox.checked = false;
          }
    
          const index = cart.indexOf(product);
    
          if (index > -1) {
            cart.splice(index, 1);
          }
    
          quantity.innerHTML = cart.length;
          cartBadge.innerHTML = cart.length;
    
          if (cart.length == 0) {
            cartBadge.innerHTML = 0;
            cartBadge.style.display = 'none';
          }
    
        });
      })(cart[i]);
    }
    
  })


  closeModal.addEventListener('click', close)

  overlay.addEventListener('click', close)

  function close() {
    modal.style.display = 'none'


    overlay.style.display = 'none'
    document.body.style.overflow = 'auto'
  }
}