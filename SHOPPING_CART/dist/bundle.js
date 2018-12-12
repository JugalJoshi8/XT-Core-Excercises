!function(n){var t={};function e(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return n[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var s in n)e.d(i,s,function(t){return n[t]}.bind(null,s));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);class i{getShoppingCartItems(){return fetch("json-data/ShoppingCart.json").then(n=>n.json())}}class s{constructor(n){this.item=n}render(){return`\n        <div class = 'cart-container'>\n            <div class = 'cart-item'>\n                <div class = 'cart-item__img'>\n                    <img src = 'imgs/${this.item.imgName}' class = 'cart-item__img' alt = 'cloth'>\n                </div>\n                <div class = 'cart-item__desc'>\n                    <div class = 'cart-item__name' >${this.item.name}</div>\n                    <div class = 'cart-item__style'>Style #: ${this.item.styleId}</div>\n                    <div class = 'cart-item__color'>Colour: ${this.item.color}</div>\n                    <div class = 'cart-item__size'>Size: ${this.item.size}</div>\n                    <div class = 'cart-item__quantity'>QTY: <span class = 'cart-item__quantity--number'>${this.item.quantity}<span></div>\n                    <div class = 'cart-item__price'>\n                        <span class = 'cart-item__currency'>${this.item.currency}</span>\n                        ${this.item.price}\n                    </div>\n                </div>\n            </div>\n            <div class = 'cart-item__buttons'>\n                <button class = 'button cart-item__button'>Edit</button>\n                <button class = 'button cart-item__button'>Remove</button>\n                <button class = 'button cart-item__button'>Save for Later</button>\n            </div>\n        </div>\n        `}}const o=document.getElementById("app");(new class{constructor(){this.shoppingCartService=new i}render(){return this.shoppingCartService.getShoppingCartItems().then(n=>{const t=n.cartItems;return console.log(n),`\n                <div class = 'shopping-cart'>\n                    <header class = 'shopping-cart__header'>\n                        <h1>YOUR SHOPPING BAG</h1>\n                        <h2>${t.length} ITEMS</h2>\n                    </header>\n                    <section>\n                        ${t.map(n=>new s(n).render()).join("")}\n                    </section>\n                    <section class = 'promo'>\n                        <h2 class = 'promo__header'>Enter Promotion code of the gift card</h2>\n                        <form class = 'promo__form' onsubmit = 'event.preventDefault()'>\n                            <input class = 'promo__form__input' type = 'text'>\n                            <input class = 'button promo__form__submit' type = 'submit' value = 'APPLY'>\n                        </form>\n                    </section>\n                    <section class = 'order'>\n                      <ul class = 'order__items'>\n                        <li class = 'order__item'>\n                            <div class = 'order__item__name font-bold font-lg'>\n                                <div class = 'order__item__name__main'>\n                                    Subtotal\n                                </div>\n                                <div class = 'order__item__name__sub'>\n                                   \n                                </div>\n                            </div>\n                            <div class = 'order__item__value font-bold font-xl'><span class = 'font-sm'>$</span>37.00</div>\n                        </li>\n                        <li class = 'order__item'>\n                            <div class = 'order__item__name font-bold font-lg'>\n                                <div class = 'order__item__name__main'>\n                                    Estimated Shipping*\n                                </div>\n                                <div class = 'order__item__name__sub'>\n                                   You spent $50, so you qualify for free shipping*\n                                </div>\n                            </div>\n                            <div class = 'order__item__value order__item__value--free font-bold font-lg'>FREE</div>\n                        </li>\n                        <li class = 'order__item'>\n                            <div class = 'order__item__name font-bold font-lg'>\n                                <div class = 'order__item__name__main'>\n                                    Promotion Code\n                                </div>\n                                <div class = 'order__item__name__sub'>\n                                   JF10 APPLIED\n                                </div>\n                            </div>\n                            <div class = 'order__item__value font-bold font-xl'>-<span class = 'font-sm'>$</span>07.00</div>\n                        </li>\n                        <li class = 'order__item order__item--total'>\n                            <div class = 'order__item__name font-bold font-lg'>\n                                <div class = 'order__item__name__main'>\n                                    Estimated Total\n                                </div>\n                                <div class = 'order__item__name__sub'>\n                                    Tax will be applied during checkout\n                                </div>\n                            </div>\n                            <div class = 'order__item__value font-bold font-xl'><span class = 'font-sm'>$</span>07.00</div>\n                        </li>\n                      </ul>\n                      <div class = 'checkout-button'>\n                        <button class = 'button button--blue'>Checkout</button>\n                      </div>\n                      <a class = 'font-lg continue-shopping' href = ''>Continue Shopping</a>\n                      <div class = 'secure-checkout'>\n                        <div class = 'secure-checkout__text font-lg'>Secure checkout. Shopping is always safe and secure</div>\n                        <img src = './imgs/secure.png' alt = 'secure'>\n                      </div>\n                      <div class = 'siginin-msg font-lg'>\n                        <a>SIGN IN</a> to save your cart and have accessto your itemsin mobile, tablet and desktop\n                      </div>\n                    </section>\n                </div>\n            `})}}).render().then(n=>{o.innerHTML=n})}]);