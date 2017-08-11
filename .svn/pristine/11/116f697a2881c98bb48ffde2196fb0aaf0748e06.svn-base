/**
 * Created by Administrator on 2017/6/23.
 */

$(function () {
    var X=document.documentElement.clientWidth;
    var Y=document.documentElement.clientHeight;


    var num = 1, time;
    time = setInterval(function () {
        $(".lunbo").eq(num).css("width",X);
        $(".lunbo").eq(num).css("height",Y);
        $(".lunbo").eq(num).css("display", "block").siblings().css("display", "none");
        $("#yd li").eq(num).css("background", "red").siblings().css("background", "white","opacity","0.5");
        $(".page1_text li").eq(num).css("display", "block").siblings().css("display", "none");
        num++;
        if (num >= 6) {
            num = 0;
        }
    }, 5000);

    $("#yd li").click(function () {
        var index = $(this).index();
        $(".lunbo").eq(index).css("width",X);
        $(".lunbo").eq(index).css("height",Y);
        //console.log(index);
        $(".lunbo").eq(index).css("display", "block").siblings().css("display", "none");
        $("#yd li").eq(index).css("background", "white").siblings().css("background", "white","opacity","0.5");
        $(".page1_text li").eq(num).css("display", "block").siblings().css("display", "none");

    })
})


