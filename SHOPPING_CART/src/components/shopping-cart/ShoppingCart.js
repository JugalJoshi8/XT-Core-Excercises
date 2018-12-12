import ShoppingCartService from './../../services/ShoppingCartService';
import ShoppingCartItem from './../shopping-cart-item/ShoppingCartItem';

export default class ShoppingCart {
    constructor() {
        this.shoppingCartService = new ShoppingCartService();
    }

    render() {
        return this.shoppingCartService.getShoppingCartItems().then(res => {
            const shoppingCartItems = res.cartItems;
            console.log(res)
            const markUp = `
                <div class = 'shopping-cart'>
                    <header class = 'shopping-cart__header'>
                        <h1>YOUR SHOPPING BAG</h1>
                        <h2>${shoppingCartItems.length} ITEMS</h2>
                    </header>
                    <section>
                        ${shoppingCartItems.map(item => new ShoppingCartItem(item).render()).join('')}
                    </section>
                    <section class = 'promo'>
                        <h2 class = 'promo__header'>Enter Promotion code of the gift card</h2>
                        <form class = 'promo__form' onsubmit = 'event.preventDefault()'>
                            <input class = 'promo__form__input' type = 'text'>
                            <input class = 'button promo__form__submit' type = 'submit' value = 'APPLY'>
                        </form>
                    </section>
                    <section class = 'order'>
                      <ul class = 'order__items'>
                        <li class = 'order__item'>
                            <div class = 'order__item__name font-bold font-lg'>
                                <div class = 'order__item__name__main'>
                                    Subtotal
                                </div>
                                <div class = 'order__item__name__sub'>
                                   
                                </div>
                            </div>
                            <div class = 'order__item__value font-bold font-xl'><span class = 'font-sm'>$</span>37.00</div>
                        </li>
                        <li class = 'order__item'>
                            <div class = 'order__item__name font-bold font-lg'>
                                <div class = 'order__item__name__main'>
                                    Estimated Shipping*
                                </div>
                                <div class = 'order__item__name__sub'>
                                   You spent $50, so you qualify for free shipping*
                                </div>
                            </div>
                            <div class = 'order__item__value order__item__value--free font-bold font-lg'>FREE</div>
                        </li>
                        <li class = 'order__item'>
                            <div class = 'order__item__name font-bold font-lg'>
                                <div class = 'order__item__name__main'>
                                    Promotion Code
                                </div>
                                <div class = 'order__item__name__sub'>
                                   JF10 APPLIED
                                </div>
                            </div>
                            <div class = 'order__item__value font-bold font-xl'>-<span class = 'font-sm'>$</span>07.00</div>
                        </li>
                        <li class = 'order__item order__item--total'>
                            <div class = 'order__item__name font-bold font-lg'>
                                <div class = 'order__item__name__main'>
                                    Estimated Total
                                </div>
                                <div class = 'order__item__name__sub'>
                                    Tax will be applied during checkout
                                </div>
                            </div>
                            <div class = 'order__item__value font-bold font-xl'><span class = 'font-sm'>$</span>07.00</div>
                        </li>
                      </ul>
                    </section>
                </div>
            `;
            return markUp;
        });
    }
}