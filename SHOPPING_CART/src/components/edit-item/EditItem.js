export default class EditItem {
    constructor(parent, params) {
        this.parent = $(parent);
        this.item = params;
        this.render();
    }

    render() {
        const markup = `
            <div class = 'edit-item'>
                <form class = 'edit-item__form'>
                    <div class = 'cart-item__name' >${this.item.name}</div>
                    <div class = 'cart-item__price'>
                        <span class = 'cart-item__currency'>${this.item.currency}</span>
                        ${this.item.price}
                    </div>
                </form>
                <div class = 'edit-item__image'>
                    <img src = 'imgs/${this.item.imgName}' class = 'cart-item__img' alt = 'cloth'>
                </div>
            </div>
        `;
        this.parent.append(markup);
    }
}