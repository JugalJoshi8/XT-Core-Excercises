export default class ShoppingCartService {
    getShoppingCartItems() {
        return fetch("json-data/ShoppingCart.json")
        .then(res => res.json());
    }
}