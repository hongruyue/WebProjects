
$(function(){
//.x_upleft_uptext北服新面孔这几个字的点击颜色变色...................................................................................
    $(".x_upleft_uptext").click(function(){
        $(this).toggleClass("fontred");
    });
    $(".x_downtopul li").click(function(){
        $(this).toggleClass("fontred");
    });
//..右边手风琴效果...................................................
    $(".rightli1").click(function(){
        $(".x_liyuchun").slideToggle(1000);//向上滑动显示
        $(".rightli_p2").slideUp(1000);
        $(".rightli_p3").slideUp(1000);
        $(".rightli_p4").slideUp(1000);
        $(".rightli_p5").slideUp(1000);
        $(this).css("color","#ff625b").siblings().css("color","black")
    });
    $(".rightli2").click(function(){
        $(".rightli_p2").slideToggle(1000);//向上滑动显示
        $(".x_liyuchun").slideUp(1000);
        $(".rightli_p3").slideUp(1000);
        $(".rightli_p4").slideUp(1000);
        $(".rightli_p5").slideUp(1000);
        $(this).css("color","#ff625b").siblings().css("color","black")

    });
    $(".rightli3").click(function(){
        $(".rightli_p3").slideToggle(1000);//向上滑动显示
        $(".rightli_p2").slideUp(1000);
        $(".x_liyuchun").slideUp(1000);
        $(".rightli_p4").slideUp(1000);
        $(".rightli_p5").slideUp(1000);
        $(this).css("color","#ff625b").siblings().css("color","black")


    });
    $(".rightli4").click(function(){
        $(".rightli_p4").slideToggle(1000);//向上滑动显示
        $(".x_liyuchun").slideUp(1000);
        $(".rightli_p2").slideUp(1000);
        $(".rightli_p3").slideUp(1000);
        $(".rightli_p5").slideUp(1000);
        $(this).css("color","#ff625b").siblings().css("color","black")

    });
    $(".rightli5").click(function(){
        $(".rightli_p5").slideToggle(1000);//向上滑动显示
        $(".x_liyuchun").slideUp(1000);
        $(".rightli_p2").slideUp(1000);
        $(".rightli_p3").slideUp(1000);
        $(".rightli_p4").slideUp(1000);
        $(this).css("color","#ff625b").siblings().css("color","black")
    });
//..右边手风琴下面三个图片鼠标滑入放大.................................
    $(".x_righttit img").hover(function(){
        $(this).stop().animate({"width":"44px", "height":"40px",
            "margin-left":"0px","margin-top":"10px"},200)
    },function(){
        $(this).stop().animate({"width":"24px", "height":"20px",
            "margin-left":"0px","margin-top":"20px"},200)
    });
//..下面是对左下方大图上黑色方框鼠标滑过显示内容的设置.................................
    $(".x_lusuoleft").hover(function(){
        $(".x_lusuodis").css("display","block")
    },function(){
        $(".x_lusuodis").css("display","none")
    });
//..下面是对右边图片鼠标移入方法效果的设置.........................................
    $(".x_downrightdown_con img").hover(function(){
        $(this).css("transform","rotate(30deg)")
    },function(){
        $(this).css("transform","rotate(0)")
    });
    $(".x_downrightdown_con img").hover(function(){
        $(this).stop().animate({"width":"128px", "height":"128px",
            "margin-left":"10px","margin-top":"20px"},300)
    },function(){
        $(this).stop().animate({"width":"98px", "height":"98px",
            "margin-left":"27px","margin-top":"37px"},300)
    });
//..............................................................

});
//.右边type切换效果..............................................................................
var tit=document.getElementsByClassName("x_tit");
var con=document.getElementsByClassName("x_downrightdown_con")[0];
var lis=con.getElementsByTagName("li");
for(var i=0;i<tit.length;i++){//获取或找到（遍历）每一个标题
    tit[i].onclick=function () {//为每一个标题定义点击事件
        for(var v=0;v<tit.length;v++){//寻找每一个标题元素
            if(tit[v]==this){
                //this指针代表触发事件或者点击事件的对象
                lis[v].style.display="block";//js改变元素css样式
            }else {
                lis[v].style.display="none";
            }
        }
    }
}
//.鼠标...............................................................
var mouse=document.getElementsByClassName("x_mouse");
document.onmousemove=function(e){
    for(var i=mouse.length-1;i>0;i--){
        mouse[i].style.left=mouse[i-1].style.left
        mouse[i].style.top=mouse[i-1].style.top
    }
    mouse[0].style.left=e.pageX+"px"
    mouse[0].style.top=e.pageY+"px"
}
//.点击黑色左右按钮图片向左右切换...................
var leftbtnl=document.getElementsByClassName("x_upleftbtnl")[0];
var leftbtnr=document.getElementsByClassName("x_upleftbtnr")[0];
var leftimg1=document.getElementsByClassName("x_leftimgout1")[0];
var leftimgs1=leftimg1.getElementsByTagName("li");
var leftimg2=document.getElementsByClassName("x_leftimgout2")[0];
var leftimgs2=leftimg2.getElementsByTagName("li");
var leftimg3=document.getElementsByClassName("x_leftimgout3")[0];
var leftimgs3=leftimg3.getElementsByTagName("li");
var leftimg4=document.getElementsByClassName("x_leftimgout4")[0];
var leftimgs4=leftimg4.getElementsByTagName("li");
var num1=0;
leftbtnr.addEventListener("click",function(){
    num1++;
    if(num1>=leftimgs1.length){
        num1=0;
    }
    for (var i = 0; i <= leftimgs1.length; i++) {
        if (i == num1) {
            leftimgs1[num1].style.display = "block";
        } else {
            leftimgs1[i].style.display = "none";
        }
    }
});
var num2=0;
leftbtnr.addEventListener("click",function(){
    num2++;
    if(num2>=leftimgs2.length){
        num2=0;
    }
    for (var i = 0; i <= leftimgs2.length; i++) {
        if (i == num2) {
            leftimgs2[num2].style.display = "block";
        } else {
            leftimgs2[i].style.display = "none";
        }
    }

});
var num3=0;
leftbtnr.addEventListener("click",function(){
    num3++;
    if(num3>=leftimgs3.length){
        num3=0;
    }
    for (var i = 0; i <= leftimgs3.length; i++) {
        if (i == num3) {
            leftimgs3[num3].style.display = "block";
        } else {
            leftimgs3[i].style.display = "none";
        }
    }
});
var num4=0;
leftbtnr.addEventListener("click",function(){
    num4++;
    if(num4>=leftimgs4.length){
        num4=0;
    }
    for (var i = 0; i <= leftimgs4.length; i++) {
        if (i == num4) {
            leftimgs4[num4].style.display = "block";
        } else {
            leftimgs4[i].style.display = "none";
        }
    }

});
//    //点击上一组，两组图同时向左切换
var num5=0;
leftbtnl.addEventListener("click",function(){
    var len2 = leftimgs1.length;
    num5--;
    if (num5 <= 0) {
        num5 =len2-1;
    }
    for (var i = 0; i < leftimgs1.length; i++) {
        if (i == num5) {
            leftimgs1[num5].style.display = "block";
        } else {
            leftimgs1[i].style.display = "none";
        }
    }


}) ;
var num6=0;
leftbtnl.addEventListener("click",function(){
    var len1 =leftimgs2.length;
    num6--;
    if (num6 <= 0) {
        num6 =len1-1;
    }
    for (var i = 0; i < leftimgs2.length; i++) {
        if (i == num6) {
            leftimgs2[num6].style.display = "block";
        } else {
            leftimgs2[i].style.display = "none";
        }
    }

}) ;
var num7=0;
leftbtnl.addEventListener("click",function(){
    var len2 = leftimgs3.length;
    num7--;
    if (num7 <= 0) {
        num7 =len2-1;
    }
    for (var i = 0; i < leftimgs3.length; i++) {
        if (i == num7) {
            leftimgs3[num7].style.display = "block";
        } else {
            leftimgs3[i].style.display = "none";
        }
    }


}) ;
var num8=0;
leftbtnl.addEventListener("click",function(){
    var len1 =leftimgs4.length;
    num8--;
    if (num8 <= 0) {
        num8 =len1-1;
    }
    for (var i = 0; i < leftimgs4.length; i++) {
        if (i == num8) {
            leftimgs4[num8].style.display = "block";
        } else {
            leftimgs4[i].style.display = "none";
        }
    }

}) ;
