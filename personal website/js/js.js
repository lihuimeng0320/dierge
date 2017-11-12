/**
 * Created by Àî»ÜÃÈ on 2017/11/3.
 */
var aa=document.getElementById("name");
var time=setInterval(function(){
    if(aa.offsetWidth>=1200){
        aa.style.width=0;
    }
    aa.style.width=aa.offsetWidth+10+"px";
},40);
var oTop = document.getElementById("top");
oTop.onclick = function(){
    var timer = setInterval(function(){
        var iScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(iScrollTop <= 0){
            clearInterval(timer);
        }else{
            window.scrollTo(0, iScrollTop-=50);
        }
    }, 50);
};
//var bb=document.getElementById("particles-js");
//var cc=document.getElementsByIf("footer");
//if(