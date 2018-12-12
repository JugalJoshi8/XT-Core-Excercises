export default class ShoppingCartItem {
    constructor(item) {
        this.item = item;
    }

    render() {
        const markUp = `
        <div class = 'cart-container'>
            <div class = 'cart-item'>
                <div class = 'cart-item__img'>
                    <img src = 'imgs/${this.item.imgName}' class = 'cart-item__img'>
                </div>
                <div class = 'cart-item__desc'>
                    <div class = 'cart-item__name' >${this.item.name}</div>
                    <div class = 'cart-item__style'>Style #: ${this.item.styleId}</div>
                    <div class = 'cart-item__color'>Colour: ${this.item.color}</div>
                    <div class = 'cart-item__size'>Size: ${this.item.size}</div>
                    <div class = 'cart-item__quantity'>QTY: <span class = 'cart-item__quantity--number'>${this.item.quantity}<span></div>
                    <div class = 'cart-item__price'>
                        <span class = 'cart-item__currency'>${this.item.currency}</span>
                        ${this.item.price}
                    </div>
                </div>
            </div>
            <div class = 'cart-item__buttons'>
                <button class = 'cart-item__button'>Edit</button>
                <button class = 'cart-item__button'>Remove</button>
                <button class = 'cart-item__button'>Save for Later</button>
            </div>
        </div>
        `;
        return markUp;
    }
}
