/**
 * Created by apple on 18/5/13.
 */
var count = 0;
var timer ;
$('.btn-box a').on('mouseover',function(){
    change($(this).index());
    count = $(this).index();
});
run();

$('#jnImageroll').on('mouseover',function(){
    clearInterval(timer);
}).on('mouseout',function(){
   run();
});
function run(){
    timer = setInterval(function(){
        count++;
        if(count == $('#JS_imgWrap img').length){
            count = 0;
        }
        change(count);

    },2000);
}
function change(idx){
    $('.btn-box a').eq(idx).addClass('chos').siblings().removeClass('chos');
    $('#JS_imgWrap img').eq(idx).stop().fadeIn(600).siblings().stop().fadeOut(600);
}







