/**
 * Created by zqf on 2017/5/23.
 */
$(function() {
    $("h1").click(function(){
        /*$(this).css('background','url("../img/part2_nav2.jpg")').siblings().css('background','url("../img/part2_nav1.jpg")');*/
        $(this).removeClass("h1");
        $(this).addClass("h11").siblings().addClass("h1");
        $(".box2").hide();
        $(this).nextUntil("h1").fadeIn("slow");
    })
});
$(function(){
    $(".right_top2").click(function(){
        $(".right_bottom").slideToggle(1000)
    })
});


