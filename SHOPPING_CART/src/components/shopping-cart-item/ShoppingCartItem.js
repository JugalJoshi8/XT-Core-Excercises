import Overlay from './../overlay/Overlay';
import EditItem from './../edit-item/EditItem';

export default class ShoppingCartItem {
    constructor(props) {
        this.parent = $(props.parentSelector);
        this.item = props.item;
        this.props = props;
        this.render();
    }

    render() {
        const markUp = `
        <div class = 'cart-container' id = 'cart-${this.item.id}'>
            <div class = 'cart-item cart-item--mobile'>
                <div class = 'cart-item__img'>
                    <img src = 'imgs/${this.item.imgName}' class = 'cart-item__img' alt = 'cloth'>
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
            <div class = 'cart-item cart-item--desktop'>
                <div class = 'cart-item__img'>
                    <img src = 'imgs/${this.item.imgName}' class = 'cart-item__img' alt = 'cloth'>
                </div>
                <div class = 'cart-item__desc'>
                    <div class = 'cart-item__desc__txt'>
                        <div class = 'cart-item__name' >${this.item.name}</div>
                        <div class = 'cart-item__style'>Style #: ${this.item.styleId}</div>
                        <div class = 'cart-item__color'>Colour: ${this.item.color}</div>
                    </div>
                    <div class = 'cart-item__buttons cart-item__buttons--desktop'>
                        <button id = 'editDesktop' class = 'button cart-item__button'>Edit</button>
                        <button id = 'removeDesktop' class = 'button cart-item__button'>Remove</button>
                        <button id = 'saveDesktop' class = 'button cart-item__button'>Save for Later</button>
                    </div>
                </div>
                <div class = 'cart-item__size'>${this.item.size}</div>
                <div class = 'cart-item__quantity'>${this.item.quantity}</div>
                <div class = 'cart-item__price'>
                    <span class = 'cart-item__currency'>${this.item.currency}</span>
                    ${this.item.price}
                </div>
            </div>
            <div class = 'cart-item__buttons cart-item__buttons--mobile'>
                <button id = 'editMobile' class = 'button cart-item__button'>Edit</button>
                <button id = 'removeMobile' class = 'button cart-item__button'>Remove</button>
                <button id = 'saveMobile' class = 'button cart-item__button'>Save for Later</button>
            </div>
            <div class = 'overlay-container'>
            
            </div>
        </div>
        `;
        this.parent.append(markUp);
        new Overlay({...this.props, parentSelector: `#cart-${this.item.id} .overlay-container`, childComponent: EditItem, item: this.item});
        this.element = $(`#cart-${this.item.id}`);
        this.overlay = this.element.find('.overlay-container');
        this.element.find('#editMobile').click(_ => this.showOverlay());
        this.element.find('#editDesktop').click(_ => this.showOverlay());
        this.element.find('#removeMobile').click(_ => this.props.onItemRemove(this.item));
        this.element.find('#removeDesktop').click(_ => this.props.onItemRemove(this.item));
    }

    showOverlay() {
        console.log('asdasdas');
        this.overlay.show();
    }
}
