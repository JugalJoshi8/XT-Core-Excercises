!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);class s{getShoppingCartItems(){return fetch("json-data/ShoppingCart.json").then(t=>t.json())}}class n{constructor(t){this.parentSelector=t.parentSelector,this.parent=$(t.parentSelector),this.childComponent=t.childComponent,this.props=t,this.render()}render(){this.parent.append("\n            <div class = 'overlay'>\n                <div class= 'overlay__content'>\n                    <div class = 'overlay__close font-xl color-light'>&#10006;</div>\n                    <div class = 'overlay__child'>\n                    </div>\n                </div>\n            </div>\n        "),new this.childComponent({...this.props,parentSelector:`${this.parentSelector} .overlay__child`}),$(".overlay__close").click(t=>this.props.closeOverlay())}}class o{constructor(t){this.parent=$(t.parentSelector),this.item=t.item,this.props=t,this.isNew=!this.item.size,this.render()}render(){const t=`\n            <div class = 'edit-item' id = 'edit-item-${this.item.id}'>\n                <form class = 'edit-item__form' onsubmit = "event.preventDefault()">\n                    <div class = 'cart-item__name' >${this.item.name}</div>\n                    <div class = 'font-xl font-bold color-dark'>\n                        <span class = 'font-md'>${this.item.currency}</span>\n                        ${this.item.price}\n                    </div>\n                    <div class = 'edit-item__selected-color color-light'>${this.item.color}</div>\n                    <div class = 'edit-item__colors'>\n                        ${this.item.availableColors.map(t=>`<div color = '${t}' style = 'background: ${t}' class = 'edit-item__color'></div>`).join("")}\n                    </div>\n                    <div class= 'edit-item__selectors color-light' >\n                    <div>\n                    <label for = 'size-selector' >SIZE:</label>\n                    <select class= 'color-light font-md' id = 'size-selector'>\n                        ${["S","M","L","XL"].map(t=>`<option ${this.item.size===t?"selected":""} value = ${t}>${t}</option>`).join("")}\n                    </select>\n                    </div>\n                    <div>\n                    <label for = 'qty-selector' >QTY:</label>\n                    <select id = 'qty-selector' class= 'color-light font-md'>\n                        ${[...Array(10)].map((t,e)=>`<option ${this.item.quantity==e+1?"selected":""} value = ${e+1}>${e+1}</option>`).join("")}\n                    </select>\n                    </div>\n                    </div>\n                    <div>\n                        <input id = 'edit-item__button' type = 'submit' class = 'button button--blue' value = '${this.isNew?"ADD TO BAG":"EDIT"}'>\n                    </div>\n                </form>\n                <div class = 'edit-item__image'>\n                    <img src = 'imgs/${this.item.imgName}' class = 'cart-item__img' alt = 'cloth'>\n                </div>\n            </div>\n        `;this.parent.append(t),this.element=$(`#edit-item-${this.item.id}`),this.element.find(".edit-item__color").click(t=>{$(".edit-item__selected-color").text($(t.currentTarget).attr("color").trim())}),this.element.find("#edit-item__button").click(t=>{t.preventDefault(),this.item.quantity=this.element.find("#qty-selector").val(),this.item.size=this.element.find("#size-selector").val(),this.item.color=this.element.find(".edit-item__selected-color").text().trim(),this.props.onItemEdit(this.item,this.isNew),this.props.closeOverlay()})}}class r{constructor(t){this.parent=$(t.parentSelector),this.item=t.item,this.props=t,this.render()}render(){const t=`\n        <div class = 'cart-container' id = 'cart-${this.item.id}'>\n            <div class = 'cart-item cart-item--mobile'>\n                <div class = 'cart-item__img'>\n                    <img src = 'imgs/${this.item.imgName}' class = 'cart-item__img' alt = 'cloth'>\n                </div>\n                <div class = 'cart-item__desc'>\n                    <div class = 'cart-item__name' >${this.item.name}</div>\n                    <div class = 'cart-item__style'>Style #: ${this.item.styleId}</div>\n                    <div class = 'cart-item__color'>Colour: ${this.item.color}</div>\n                    <div class = 'cart-item__size'>Size: ${this.item.size}</div>\n                    <div class = 'cart-item__quantity'>QTY: <span class = 'cart-item__quantity--number'>${this.item.quantity}<span></div>\n                    <div class = 'cart-item__price'>\n                        <span class = 'cart-item__currency'>${this.item.currency}</span>\n                        ${this.item.price}\n                    </div>\n                </div>\n            </div>\n            <div class = 'cart-item cart-item--desktop'>\n                <div class = 'cart-item__img'>\n                    <img src = 'imgs/${this.item.imgName}' class = 'cart-item__img' alt = 'cloth'>\n                </div>\n                <div class = 'cart-item__desc'>\n                    <div class = 'cart-item__desc__txt'>\n                        <div class = 'cart-item__name' >${this.item.name}</div>\n                        <div class = 'cart-item__style'>Style #: ${this.item.styleId}</div>\n                        <div class = 'cart-item__color'>Colour: ${this.item.color}</div>\n                    </div>\n                    <div class = 'cart-item__buttons cart-item__buttons--desktop'>\n                        <button id = 'editDesktop' class = 'button cart-item__button'>Edit</button>\n                        <button id = 'removeDesktop' class = 'button cart-item__button'>Remove</button>\n                        <button id = 'saveDesktop' class = 'button cart-item__button'>Save for Later</button>\n                    </div>\n                </div>\n                <div class = 'cart-item__size'>${this.item.size}</div>\n                <div class = 'cart-item__quantity'>${this.item.quantity}</div>\n                <div class = 'cart-item__price'>\n                    <span class = 'cart-item__currency'>${this.item.currency}</span>\n                    ${this.item.price}\n                </div>\n            </div>\n            <div class = 'cart-item__buttons cart-item__buttons--mobile'>\n                <button id = 'editMobile' class = 'button cart-item__button'>Edit</button>\n                <button id = 'removeMobile' class = 'button cart-item__button'>Remove</button>\n                <button id = 'saveMobile' class = 'button cart-item__button'>Save for Later</button>\n            </div>\n        </div>\n        `;this.parent.append(t),this.element=$(`#cart-${this.item.id}`),this.element.find("#editMobile").click(t=>this.props.showItemDetails(this.item)),this.element.find("#editDesktop").click(t=>this.props.showItemDetails(this.item)),this.element.find("#removeMobile").click(t=>this.props.onItemRemove(this.item)),this.element.find("#removeDesktop").click(t=>this.props.onItemRemove(this.item))}}class a{constructor(t){this.cartDetails=t.cartDetails,this.parent=$(t.parentSelector),this.render()}render(){const t=this.cartDetails.cartItems.reduce(function(t,e){return console.log("aaaaaaaccccc",t,e),t+parseFloat(e.price)*parseFloat(e.quantity)},0).toFixed(2);let e=(t-parseFloat(this.cartDetails.promoDiscount)).toFixed(2);e<0&&(e=0);const i=`\n        <section class = 'order'>\n                      <ul class = 'order__items'>\n                        <li class = 'order__item'>\n                            <div class = 'order__item__name font-bold font-lg'>\n                                <div class = 'order__item__name__main'>\n                                    Subtotal\n                                </div>\n                                <div class = 'order__item__name__sub'>\n                                   \n                                </div>\n                            </div>\n                            <div class = 'order__item__value font-bold font-xl'><span class = 'font-sm'>$</span>${t}</div>\n                        </li>\n                        <li class = 'order__item'>\n                            <div class = 'order__item__name font-bold font-lg'>\n                                <div class = 'order__item__name__main'>\n                                    Estimated Shipping*\n                                </div>\n                                <div class = 'order__item__name__sub'>\n                                   You spent $50, so you qualify for free shipping*\n                                </div>\n                            </div>\n                            <div class = 'order__item__value order__item__value--free font-bold font-lg'>FREE</div>\n                        </li>\n                        <li class = 'order__item'>\n                            <div class = 'order__item__name font-bold font-lg'>\n                                <div class = 'order__item__name__main'>\n                                    Promotion Code\n                                </div>\n                                <div class = 'order__item__name__sub'>\n                                   JF10 APPLIED\n                                </div>\n                            </div>\n                            <div class = 'order__item__value font-bold font-xl'>-<span class = 'font-sm'>$</span>${this.cartDetails.promoDiscount}</div>\n                        </li>\n                        <li class = 'order__item order__item--total'>\n                            <div class = 'order__item__name font-bold font-lg'>\n                                <div class = 'order__item__name__main'>\n                                    Estimated Total\n                                </div>\n                                <div class = 'order__item__name__sub'>\n                                    Tax will be applied during checkout\n                                </div>\n                            </div>\n                            <div class = 'order__item__value font-bold font-xl'><span class = 'font-sm'>$</span>${e}</div>\n                        </li>\n                      </ul>\n                      <div class = 'checkout__container'>\n                        <div class = 'checkout-button'>\n                            <button class = 'button button--blue'>Checkout</button>\n                        </div>\n                        <a class = 'font-lg continue-shopping' href = ''>Continue Shopping</a>\n                      </div>\n                      <div class = 'secure-checkout'>\n                        <div class = 'secure-checkout__text font-lg'>Secure checkout. Shopping is always safe and secure</div>\n                        <img src = './imgs/secure.png' alt = 'secure'>\n                      </div>\n                      <div class = 'siginin-msg font-lg'>\n                        <a>SIGN IN</a> to save your cart and have access to your items in mobile, tablet and desktop.\n                      </div>\n            </section>\n                    `;this.parent.append(i)}}class l{constructor(t){this.props=t,this.item=this.props.item,this.render()}render(){const t=`\n            <div class = 'new-item' id = 'new-item${this.item.id}'>\n                <div class = 'new-item__img'>\n                    <img src = 'imgs/${this.item.imgName}' alt = 'cloth'>\n                </div>\n                <div class = 'new-item__price font-xl color-dark font-bold'>\n                    <span class = 'font-sm font-normal'>$</span>\n                    ${this.item.price}\n                </div>\n                <button class = 'button button--border text-center'>View Details</button>\n            </div>\n        `;$(this.props.parentSelector).append(t),this.element=$(`#new-item${this.item.id}`),this.element.find("button").click(t=>this.props.onViewDetails(this.item))}}class c{constructor(t){this.props=t,this.currentSlide=0,this.totalSlides=this.props.items.length-1,this.carouselWidth=300,this.startAnimation=this.startAnimation.bind(this),this.stopAnimation=this.stopAnimation.bind(this),this.render()}render(){$(this.props.parentSelector).append("\n        <div class = 'carousel'>\n            <h2 class = 'text-center font-lg color-dark'>Take a look at these</h2>\n            <h2 class = 'text-center font-lg color-light'>New Arrivals</h2>\n            \n            <div class = 'carousel-content'>\n                \n            </div>\n            <div id = 'left-arrow' class = 'carousel__arrow carousel__arrow--left'></div>\n            <div id = 'right-arrow' class = 'carousel__arrow carousel__arrow--right'></div>\n        </div>\n        "),this.props.items.forEach(t=>{new l({...this.props,parentSelector:".carousel-content",item:t})}),this.leftArrow=$(".carousel #left-arrow"),this.rightArrow=$(".carousel #right-arrow"),this.carousel=$(".carousel .carousel-content"),this.leftArrow.hide(),this.leftArrow.click(t=>this.onArrowClick(!0)),this.rightArrow.click(t=>this.onArrowClick(!1)),this.element=$(".carousel"),this.element.mouseenter(this.stopAnimation),this.element.mouseleave(this.startAnimation),this.element.on("touchstart",this.stopAnimation),this.element.on("touchend",this.startAnimation),this.startAnimation()}onArrowClick(t){t?this.currentSlide--:this.currentSlide++,this.showHideArrows(),this.carousel.css("left",`-${this.currentSlide*this.carouselWidth}px`)}showHideArrows(){this.currentSlide<=0?this.leftArrow.hide():this.leftArrow.show(),this.currentSlide>=this.totalSlides?this.rightArrow.hide():this.rightArrow.show()}startAnimation(){this.animationInterval=setInterval(t=>{this.currentSlide>=this.totalSlides?this.currentSlide=0:this.currentSlide++,this.showHideArrows(),this.carousel.css("left",`-${this.currentSlide*this.carouselWidth}px`)},2e3)}stopAnimation(){clearInterval(this.animationInterval)}}new class{constructor(t){this.parent=t,this.shoppingCartService=new s,this.shoppingCartService.getShoppingCartItems().then(t=>{this.shoppingCartItems=t.cartItems,this.cartDetails=t,this.render()}),this.onItemAddOrEdit=this.onItemAddOrEdit.bind(this),this.onItemRemove=this.onItemRemove.bind(this),this.showItemDetails=this.showItemDetails.bind(this)}onItemAddOrEdit(t,e){e&&this.shoppingCartItems.push(t),this.reRender()}reRender(){$("#shopping-cart-items").empty(),$("#order-details").empty(),this.shoppingCartItems.forEach(t=>{new r({parentSelector:"#shopping-cart-items",item:t,onItemEdit:this.onItemAddOrEdit,onItemRemove:this.onItemRemove,showItemDetails:this.showItemDetails})}),new a({parentSelector:"#order-details",cartDetails:this.cartDetails})}showItemDetails(t){$(".overlay-container").empty(),new n({parentSelector:".overlay-container",closeOverlay:this.closeOverlay,childComponent:o,item:t,onItemEdit:this.onItemAddOrEdit}),$(".overlay-container").addClass("show")}closeOverlay(){$(".overlay-container").removeClass("show")}onItemRemove(t){const e=this.shoppingCartItems.findIndex(e=>t.id===e.id);e>-1&&this.shoppingCartItems.splice(e,1),this.reRender()}render(){const t=`\n                <div class = 'shopping-cart'>\n                <div class = 'shopping-cart__content'>\n                <div>\n                    <header class = 'shopping-cart__header'>\n                        <h1>YOUR SHOPPING BAG</h1>\n                        <h2 class = 'shopping-cart__header__items'>${this.shoppingCartItems.length} ITEMS</h2>\n                        <div class = "shopping-cart__header__cols">\n                            <div><span class = 'font-bold'>${this.shoppingCartItems.length}</span> ITEMS</div>\n                            <div>SIZE</div>\n                            <div>QTY</div>\n                            <div>PRICE</div>\n                        </div>\n                    </header>\n                    <section id = 'shopping-cart-items'>\n                    </section>                    \n                    </div>\n                    <section id = 'carousel-container'>\n                    </section>\n                    </div>\n                    <section class = 'order-help'>\n                        <section class= 'need-help'>\n                            <div class = 'color-light font-bold'>Need help or have questions?</div>\n                            <div class = 'color-lighter'>Call Customer Service at 1-800-555-5555</div>\n                            <a class = 'color-lighter'>Chat with one of our stylists</a>\n                            <a class = 'color-lighter'>See return and exchange policy</a>\n                        </section>\n                        <section>\n                            <section class = 'promo'>\n                                <h2 class = 'promo__header'>Enter Promotion code of the gift card</h2>\n                                <form class = 'promo__form' onsubmit = 'event.preventDefault()'>\n                                    <input class = 'promo__form__input' type = 'text'>\n                                    <input class = 'button promo__form__submit' type = 'submit' value = 'APPLY'>\n                                </form>\n                            </section>\n                            <div id = 'order-details'>\n                            </div>\n                        </section>\n                    </section>   \n                    <div class = 'overlay-container'>\n            \n                    </div>                \n                </div>\n            `;$(this.parent).html(t),this.element=$(".shopping-cart"),this.shoppingCartItems.forEach(t=>{new r({parentSelector:"#shopping-cart-items",item:t,onItemEdit:this.onItemAddOrEdit,onItemRemove:this.onItemRemove,showItemDetails:this.showItemDetails})}),new a({parentSelector:"#order-details",cartDetails:this.cartDetails}),new c({parentSelector:"#carousel-container",items:this.cartDetails.newArrivals,onViewDetails:this.showItemDetails})}}("#app")}]);