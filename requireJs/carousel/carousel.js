/**
 * Created by apple on 18/5/26.
 */
define(['jquery'],function($){

    function Carousel(){
        this.container = $('<div class="container"></div>');
        this.prev = $('<span class="prev">&lt;</span>');
        this.next = $('<span class="next">&gt;</span>');
        this.tab = $('<ul class="tab"></ul>');
        this.iNow = 0;
    }
    Carousel.prototype.init = function(option){
        var defalut = {
            arrowPos:'buttom',//centerclass
            btnType:'circle'// circle
        }
        var _this = this;
        option = $.extend(defalut,option);

        for(var i=0;i<option.imgData.length;i++){
            $(this.tab).append(`<li class="${i==0?'selected '+ 'tab-'+option.btnType :'tab-'+option.btnType}">${i+1}</li>`);
            $(this.container).append(`<img class="${i==0?'selected':''}" src="${option.imgData[i]}">`);
        }
        this.prev.addClass('prev-'+option.arrowPos);
        this.next.addClass('next-'+option.arrowPos);

        $(this.container).append(this.prev).append(this.next).append(this.tab);
        $(option.selector).append(this.container);

        $('li',this.tab).on('click',function(){
            _this.iNow = $(this).index();
            changeImg(_this.iNow);
        });

        function changeImg(index){
            $('li',_this.tab).eq(index).addClass('selected').siblings().removeClass('selected');
            $('img',_this.container).eq(index).addClass('selected').siblings().removeClass('selected');
        }

        this.prev.on('click',function(){
            _this.iNow--;
            if(_this.iNow == -1){
                _this.iNow = option.imgData.length-1;
            }
            changeImg(_this.iNow);
        });
        this.next.on('click',function(){
            _this.iNow++;
            if(_this.iNow == option.imgData.length){
                _this.iNow = 0;
            }
            changeImg(_this.iNow);
        });


        function start(){
            _this.timer = setInterval(function(){
                _this.next.trigger('click');
            },2000)
        }
        start();


        this.container.hover(function(){
            clearInterval(_this.timer);
        },function(){
            start();
        });



    };

    return Carousel;
});