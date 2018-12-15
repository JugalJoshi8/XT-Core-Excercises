export default class Overlay {
    constructor(props) {
        this.parentSelector = props.parentSelector; 
        this.parent = $(props.parentSelector);
        this.childComponent = props.childComponent;
        this.props = props;
        this.render();
    }

    render() {
        const markup = `
            <div class = 'overlay'>
                <div class= 'overlay__content'>
                    <div class = 'overlay__close font-xl color-light'>&#10006;</div>
                    <div class = 'overlay__child'>
                    </div>
                </div>
            </div>
        `;
        this.parent.append(markup);
        new this.childComponent({...this.props, parentSelector: `${this.parentSelector} .overlay__child`});
        $('.overlay__close').click(_ => this.props.closeOverlay());
    }
}