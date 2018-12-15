export default class NewArrival {
    constructor(props) {
        this.props = props;
        this.item = this.props.item;
        this.render();
    }

    render() {
        const markup = `
            <div class = 'new-item' id = 'new-item${this.item.id}'>
                <div class = 'new-item__img'>
                    <img src = 'imgs/${this.item.imgName}' alt = 'cloth'>
                </div>
                <div class = 'new-item__price font-xl color-dark font-bold'>
                    <span class = 'font-sm font-normal'>$</span>
                    ${this.item.price}
                </div>
                <button class = 'button button--border text-center'>View Details</button>
            </div>
        `
        $(this.props.parentSelector).append(markup);
        this.element = $(`#new-item${this.item.id}`);
        this.element.find('button').click(_ => this.props.onViewDetails(this.item));
    }
}