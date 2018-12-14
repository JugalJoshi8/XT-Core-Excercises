export default class EditItem {
    constructor(props) {
        this.parent = $(props.parentSelector);
        this.item = props.item;
        this.props = props;
        this.render();
    }

    render() {
        const avaliableSizes = ['S', 'M', 'L', 'XL'];
        const markup = `
            <div class = 'edit-item' id = 'edit-item-${this.item.id}'>
                <form class = 'edit-item__form' onsubmit = "event.preventDefault()">
                    <div class = 'cart-item__name' >${this.item.name}</div>
                    <div class = 'font-xl font-bold color-dark'>
                        <span class = 'font-md'>${this.item.currency}</span>
                        ${this.item.price}
                    </div>
                    <div class = 'edit-item__selected-color color-light'>${this.item.color}</div>
                    <div class = 'edit-item__colors'>
                        ${this.item.availableColors.map(color => `<div color = '${color}' style = 'background: ${color}' class = 'edit-item__color'></div>`).join('')}
                    </div>
                    <div class= 'edit-item__selectors color-light' >
                    <div>
                    <label for = 'size-selector' >SIZE:</label>
                    <select class= 'color-light font-md' id = 'size-selector'>
                        ${avaliableSizes.map(size => `<option ${this.item.size === size ? 'selected' : ''} value = ${size}>${size}</option>`).join('')}
                    </select>
                    </div>
                    <div>
                    <label for = 'qty-selector' >QTY:</label>
                    <select id = 'qty-selector' class= 'color-light font-md'>
                        ${[...Array(10)].map((item, index) => `<option ${this.item.quantity == (index + 1) ? 'selected' : ''} value = ${index + 1}>${index + 1}</option>`).join('')}
                    </select>
                    </div>
                    </div>
                    <div>
                        <input id = 'edit-item__button' type = 'submit' class = 'button button--blue' value = 'EDIT'>
                    </div>
                </form>
                <div class = 'edit-item__image'>
                    <img src = 'imgs/${this.item.imgName}' class = 'cart-item__img' alt = 'cloth'>
                </div>
            </div>
        `;
        this.parent.append(markup);
        this.element = $(`#edit-item-${this.item.id}`);
        this.element.find('.edit-item__color').click(e => {
            $('.edit-item__selected-color').text($(e.currentTarget).attr('color').trim());
        });

        this.element.find('#edit-item__button').click(e => {
           e.preventDefault();
           this.item.quantity = this.element.find('#qty-selector').val();
           this.item.size = this.element.find('#size-selector').val();
           this.item.color = this.element.find('.edit-item__selected-color').text().trim();
           this.props.onItemEdit(this.item);
           this.props.closeOverlay();
        })

    }
}