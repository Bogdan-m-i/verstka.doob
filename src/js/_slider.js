export function slider() {

    sliderStart({
        sliderID: 'sliderGallery',
        itemsXs: 1
    });

    sliderStart({
        sliderID: 'sliderNews',
        itemsXs: 1,
        // itemsSm: 1,
        itemsMd: 2,
        itemsXl: 3
    });
    
    function sliderStart(sliderInfo = Object) {

        let el = document.querySelector('#' + sliderInfo.sliderID),
            content = el.querySelector('.slider__content'),
            items = el.querySelectorAll('.slider__item'),
            totalItemView,
            btnPrev = el.querySelector('.slider__prev'),
            btnNext = el.querySelector('.slider__next');

        window.addEventListener('resize', () => {
            resize();
        }); //end event resize

        function resize() {
            if(window.matchMedia('(max-width: 576px)').matches){
                items.forEach((el) => {
                    totalItemView = sliderInfo.itemsXs;
                    el.style.minWidth = (100 / totalItemView) + '%';
                });
            }
            if(window.matchMedia('(min-width: 577px) and (max-width: 768px)').matches){
                items.forEach((el) => {
                    totalItemView = sliderInfo.itemsSm || sliderInfo.itemsXs;
                    el.style.minWidth = (100 / totalItemView) + '%';
                });
            }
            if(window.matchMedia('(min-width: 769px) and (max-width: 992px)').matches){
                items.forEach((el) => {
                    totalItemView = sliderInfo.itemsMd || sliderInfo.itemsSm || sliderInfo.itemXs;
                    el.style.minWidth = (100 / totalItemView) + '%';
                });
            }
            if(window.matchMedia('(min-width: 993px)').matches){
                items.forEach((el) => {
                    totalItemView = sliderInfo.itemsXl || sliderInfo.itemMd || sliderInfo.itemSm || sliderInfo.itemsXs;
                    el.style.minWidth = (100 / totalItemView) + '%';
                });
            }
        }//end resize()
        resize();

        btnNext.addEventListener('click', btnClickNext);
        btnPrev.addEventListener('click', btnClickPrev);

        function btnClickNext(e) {
            let tranformPosition = parseInt(content.style.transform.replace(/[^\-.\d]/g,"")) || 0;
            e.preventDefault();

            if (tranformPosition > ((items.length - totalItemView) / totalItemView * -100)) {
                content.style.transform = `translateX(${tranformPosition - 100}%)`;
            } else {
                content.style.transform = `translateX(${0}px)`;
            }
        } //end func btnClick

        function btnClickPrev(e) {
            let tranformPosition = parseInt(content.style.transform.replace(/[^\-.\d]/g,"")) || 0;
            e.preventDefault();

            if (tranformPosition >= 0) {
                content.style.transform = `translateX(${((items.length - totalItemView) / totalItemView * -100)}%)`;
            } else {
                content.style.transform = `translateX(${tranformPosition + 100}%)`;
            }
        } //end btnClick()

    };//end sliderStart()
};