export default class OrderDetails {
    constructor(props) {
        this.cartDetails = props.cartDetails;
        this.parent = $(props.parentSelector);
        this.render();
    }

    render() {
        const subtotal = this.cartDetails.cartItems.reduce(function(total, item) {
            console.log('aaaaaaaccccc', total, item);
            return total + (parseFloat(item.price) * parseFloat(item.quantity));
        }, 0).toFixed(2);
        let total = (subtotal - parseFloat(this.cartDetails.promoDiscount)).toFixed(2); 
        if(total < 0) {
            total = 0.00;
        }
        const markup = `
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
                            <div class = 'order__item__value font-bold font-xl'><span class = 'font-sm'>$</span>${subtotal}</div>
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
                            <div class = 'order__item__value font-bold font-xl'>-<span class = 'font-sm'>$</span>${this.cartDetails.promoDiscount}</div>
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
                            <div class = 'order__item__value font-bold font-xl'><span class = 'font-sm'>$</span>${total}</div>
                        </li>
                      </ul>
                      <div class = 'checkout__container'>
                        <div class = 'checkout-button'>
                            <button class = 'button button--blue'>Checkout</button>
                        </div>
                        <a class = 'font-lg continue-shopping' href = ''>Continue Shopping</a>
                      </div>
                      <div class = 'secure-checkout'>
                        <div class = 'secure-checkout__text font-lg'>Secure checkout. Shopping is always safe and secure</div>
                        <img src = './imgs/secure.png' alt = 'secure'>
                      </div>
                      <div class = 'siginin-msg font-lg'>
                        <a>SIGN IN</a> to save your cart and have access to your items in mobile, tablet and desktop.
                      </div>
            </section>
                    `
            this.parent.append(markup);
    }
}