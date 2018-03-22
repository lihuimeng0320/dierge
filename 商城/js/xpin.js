
    $(function(){
        var nowIndex = 0;
        var timer;
        var $imgs = $("#imgs img");
        $("#arrows div").on("click", function(){
            if($(this).attr("id") == "left"){
                nowIndex--;
                if(nowIndex == -1){
                    nowIndex = 3;
                }
            }else{
                nowIndex++;
                if(nowIndex == 3){
                    nowIndex = 0;
                }
            }
            changeImg();
        });

        $("#container").onmouseover=function(){
            clearInterval(timer);
        }
        $("#container").onmouseout= function(){
            play();
        };
        play();

        function play(){
            timer = setInterval(function(){
                $("#right").trigger("click");
            }, 1000);
        }

        function changeImg(){
            $imgs.eq(nowIndex).addClass("selected").siblings().removeClass("selected");
        }
        //$(".jiaru").animate({
        //    bottom:"-100rem"
        //});
        $(".cart").on("click", function(){
            $(".jiaru").animate({
                bottom:"0px",
                background:"#fff"
            });
        });
        $(".float").on("click", function(){
            $(".jiaru").animate({
                bottom:"-20rem"
            });
        });
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

    });



