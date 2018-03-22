/**
 * Created by ¿Óª‹√» on 2018/1/20.
 */
$(function(){
    $(".top").on("click", function(){
        var target;
        if(document.documentElement.scrollTop){//$("html).scrollTop()
            target = $("html");
        }else{
            target = $("body");
        }
        var timer = setInterval(function(){
            var iScrollTop = target.scrollTop();
            if(iScrollTop <= 0){
                clearInterval(timer);
            }
            target.scrollTop(iScrollTop-=50);
        }, 100);
    });
});