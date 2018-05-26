/**
 * Created by apple on 18/5/26.
 */
require(['carousel'],function(Carousel){

    var carousel = new Carousel();

    carousel.init({
        selector:'#box',
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
        arrowPos:'center',
        btnType:'circle'

    });

    var carousel1 = new Carousel();

    carousel1.init({
        selector:'#box1',
        imgData:['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg'],
    });


});