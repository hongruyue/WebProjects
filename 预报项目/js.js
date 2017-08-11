/**
 * Created by zqf on 2017/7/10.
 */

    /*........获取屏幕的宽高.........*/
window.onload=function(){

};
$(function(){
    var boxs=document.getElementsByClassName("box")[0];
    var left=document.getElementsByClassName("content_left")[0];
    var X=document.documentElement.clientWidth;
    var Y=document.documentElement.clientHeight;
    boxs.style.width=X+"px";
    boxs.style.height=Y+"px";
    left.style.height=Y-122+"px";
    //var X=document.documentElement.clientWidth;
    //var Y=document.documentElement.clientHeight ;
    //    $(".box").css("width",X);
    //    $(".box").css("height",Y);
    //  var z=Y-122+"px";
    //   $(".content_left").css("height",z);

    /*........table切换.........*/
    $(".tit p").click(function(){
        var index=$(this).index();
        $(this).css("color","red").siblings().css("color","#ffffff");
        $(".con").eq(index).css("display","block").siblings().css("display","none");
    })

});


