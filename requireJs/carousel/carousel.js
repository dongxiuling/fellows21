/**
 * Created by apple on 18/5/26.
 */
define(['jquery'],function($){

    function Carousel(){
        this.container = $('<div id="container"></div>');
        this.prev = $('<span id="prev">&lt;</span>');
        this.next = $('<span id="next">&gt;</span>');
        this.tab = $('<ul id="tab"></ul>');
    }
    Carousel.prototype.init = function(option){
        var defalut = {
            arrowPos:'buttom',//center
            btnType:'circle'// circle
        }
        option = $.extend(defalut,option);

        for(var i=0;i<option.imgData.length;i++){
            $(this.tab).append(`<li class="${i==0?'selected '+ 'tab-'+option.btnType :'tab-'+option.btnType}">${i+1}</li>`);
            $(this.container).append(`<img class="${i==0?'selected':''}" src="${option.imgData[i]}">`);
        }
        this.prev.addClass('prev-'+option.arrowPos);
        this.next.addClass('next-'+option.arrowPos);

        $(this.container).append(this.prev).append(this.next).append(this.tab);
        $(option.selector).append(this.container);

    };

    return Carousel;
});