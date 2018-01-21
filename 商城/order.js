/**
 * Created by ¿Óª‹√» on 2018/1/20.
 */
$(function(){
    $("#plus").on("click", function(){
        var a=parseInt($("#a").val());
        if(a-1<0){
            $("#a").attr("value",0);}
        else
        {
            $("#a").attr("value", a - 1);
        }
    });
    $("#add").on("click", function(){
        var a=parseInt($("#a").val());
        $("#a").attr("value",a+1);
    });

    $(".aa").on("click",function(){
        $(".aa").addClass("d").siblings().removeClass("d");
    })
    $(".bb").on("click",function(){
        $(".bb").addClass("d").siblings().removeClass("d");
        if($(".bb").hasClass("d")){
            $(".ff").addClass("d").siblings().removeClass("d");
        }
    })
    $(".ee").on("click",function(){
        $(".ee").addClass("d").siblings().removeClass("d");
        if($(".ee").hasClass("d")){
            $(".aa").addClass("d").siblings().removeClass("d");
        }
    })
    $(".ff").on("click",function(){
        $(".ff").addClass("d").siblings().removeClass("d");
    })

});