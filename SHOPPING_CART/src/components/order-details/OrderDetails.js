export default class OrderDetails {
    render() {
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
            return markup;
    }
}