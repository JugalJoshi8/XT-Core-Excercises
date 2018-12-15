import NewArrival from './../new-arrival/NewArrival';

export default class Carousel {
    constructor(props) {
        this.props = props;
        this.currentSlide = 0;
        this.totalSlides = this.props.items.length - 1;
        this.carouselWidth = 300;
        this.startAnimation = this.startAnimation.bind(this);
        this.stopAnimation = this.stopAnimation.bind(this);
        this.render();
    }

    render() {
        const markup = `
        <div class = 'carousel'>
            <h2 class = 'text-center font-lg color-dark'>Take a look at these</h2>
            <h2 class = 'text-center font-lg color-light'>New Arrivals</h2>
            
            <div class = 'carousel-content'>
                
            </div>
            <div id = 'left-arrow' class = 'carousel__arrow carousel__arrow--left'></div>
            <div id = 'right-arrow' class = 'carousel__arrow carousel__arrow--right'></div>
        </div>
        `;
        $(this.props.parentSelector).append(markup);
        this.props.items.forEach(item => {
            new NewArrival({...this.props, parentSelector: '.carousel-content', item});
        });
        this.leftArrow = $('.carousel #left-arrow');
        this.rightArrow = $('.carousel #right-arrow');
        this.carousel = $('.carousel .carousel-content');
        this.leftArrow.hide();
        this.leftArrow.click(_ => this.onArrowClick(true));
        this.rightArrow.click(_ => this.onArrowClick(false));
        this.element = $('.carousel');
        this.element.mouseenter(this.stopAnimation);
        this.element.mouseleave(this.startAnimation);
        this.element.on('touchstart', this.stopAnimation);
        this.element.on('touchend', this.startAnimation);
        this.startAnimation();
    }

    onArrowClick(isLeft) {
        if(isLeft) {
            this.currentSlide--;
        }
        else {
            this.currentSlide++;
        }
        this.showHideArrows();
        this.carousel.css('left', `-${this.currentSlide * this.carouselWidth}px`);
    }

    showHideArrows() {
        if(this.currentSlide <= 0) {
            this.leftArrow.hide();
        }
        else {
            this.leftArrow.show();
        }
        if(this.currentSlide >= this.totalSlides) {
            this.rightArrow.hide();
        }
        else {
            this.rightArrow.show();
        }
    }

    startAnimation() {
        this.animationInterval = setInterval(_ => {
            if(this.currentSlide >= this.totalSlides) {
                this.currentSlide = 0;
            }
            else {
                this.currentSlide++;
            }
            this.showHideArrows();
            this.carousel.css('left', `-${this.currentSlide * this.carouselWidth}px`);
        }, 2000);
    }

    stopAnimation() {
        clearInterval(this.animationInterval);
    }

} 