export default class Overlay {
    constructor(parent, childComponent, params) {
        this.parentSelector = parent; 
        this.parent = $(parent);
        this.params = params;
        this.childComponent = childComponent;
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
        new this.childComponent(`${this.parentSelector} .overlay__child`, this.params);
        $('.overlay__close').click(_ => this.parent.hide());
    }
}