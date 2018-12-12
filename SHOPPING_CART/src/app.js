import ShoppingCart from './components/shopping-cart/ShoppingCart';

const app = document.getElementById('app');
const shoppingCart = new ShoppingCart();
shoppingCart.render().then(markup => {
    app.innerHTML =  markup;
});
