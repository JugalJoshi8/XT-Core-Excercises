import ShoppingCartService from './../../services/ShoppingCartService';
import ShoppingCartItem from './../shopping-cart-item/ShoppingCartItem';
import OrderDetails from './../order-details/OrderDetails'

export default class ShoppingCart {
    constructor(parent) {
        this.parent = parent;
        this.shoppingCartService = new ShoppingCartService();
        this.shoppingCartService.getShoppingCartItems().then((res) => {
            this.shoppingCartItems = res.cartItems;
            this.cartDetails = res;
            this.render();
        });
        this.onItemEdit = this.onItemEdit.bind(this);
        this.onItemRemove = this.onItemRemove.bind(this);
    }

    onItemEdit(item)  {
        this.element.remove();
        this.render();
    }

    onItemRemove(item)  {
        const index = this.shoppingCartItems.findIndex(cartItem => item.id === cartItem.id);
        if(index > -1) {
            this.shoppingCartItems.splice(index, 1);
        }
        this.element.remove();
        this.render();
    }

    render() {
        const markUp = `
                <div class = 'shopping-cart'>
                    <header class = 'shopping-cart__header'>
                        <h1>YOUR SHOPPING BAG</h1>
                        <h2 class = 'shopping-cart__header__items'>${this.shoppingCartItems.length} ITEMS</h2>
                        <div class = "shopping-cart__header__cols">
                            <div><span class = 'font-bold'>${this.shoppingCartItems.length}</span> ITEMS</div>
                            <div>SIZE</div>
                            <div>QTY</div>
                            <div>PRICE</div>
                        </div>
                    </header>
                    <section id = 'shopping-cart-items'>
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
                            <div id = 'order-details'>
                            </div>
                        </section>
                    </section>
                </div>
            `;
        $(this.parent).html(markUp);
        this.element = $('.shopping-cart');
        this.shoppingCartItems.forEach(item => {
            new ShoppingCartItem({ parentSelector: '#shopping-cart-items', item: item, onItemEdit: this.onItemEdit, onItemRemove: this.onItemRemove });
        });
        new OrderDetails({parentSelector: '#order-details', cartDetails: this.cartDetails});
    }
}