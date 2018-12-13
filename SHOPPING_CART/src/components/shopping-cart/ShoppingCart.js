import ShoppingCartService from './../../services/ShoppingCartService';
import ShoppingCartItem from './../shopping-cart-item/ShoppingCartItem';
import OrderDetails from './../order-details/OrderDetails'

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
                        <h2 class = 'shopping-cart__header__items'>${shoppingCartItems.length} ITEMS</h2>
                        <div class = "shopping-cart__header__cols">
                            <div><span class = 'font-bold'>${shoppingCartItems.length}</span> ITEMS</div>
                            <div>SIZE</div>
                            <div>QTY</div>
                            <div>PRICE</div>
                        </div>
                    </header>
                    <section>
                        ${shoppingCartItems.map(item => new ShoppingCartItem(item).render()).join('')}
                    </section>
                    <section class = 'order-help'>
                        <section class= 'need-help'>
                            <div class = 'color-light font-bold'>Need help or have questions?</div>
                            <div class = 'color-lighter'>Call Customer Service at 1-800-555-5555</div>
                            <a class = 'color-lighter'>Chat with one of our stylists</a>
                            <a class = 'color-lighter'>See return and exchange policy</a>
                        </section>
                        <section>
                            <section class = 'promo'>
                                <h2 class = 'promo__header'>Enter Promotion code of the gift card</h2>
                                <form class = 'promo__form' onsubmit = 'event.preventDefault()'>
                                    <input class = 'promo__form__input' type = 'text'>
                                    <input class = 'button promo__form__submit' type = 'submit' value = 'APPLY'>
                                </form>
                            </section>
                            ${new OrderDetails().render()}
                        </section>
                    </section>
                </div>
            `;
            return markUp;
        });
    }
}