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
                    ${shoppingCartItems.map(item => new ShoppingCartItem(item).render()).join('')}
                </div>
            `;
            return markUp;
        });
    }
}