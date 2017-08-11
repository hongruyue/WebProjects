/**
 * Created by zqf on 2017/6/29.
 */
    /*............轮播图............*/
  var num=0;
   setInterval(function(){
       num++;
       if(num>2){
           num=0;
       }
         $("header li").eq(num).fadeIn(3000).siblings().fadeOut(3000);
       $(".point p").eq(num).css({"background":"#2718ff","transform":"scale(1.4)"}).siblings().css({"background":"#fff","transform":"scale(1)"})

   },3000);
/*............文字滚动............*/
var boxs=document.getElementsByClassName("box")[0];
var pt=boxs.getElementsByTagName("p");
setInterval(function(){
    boxs.scrollTop++;
    console.log(boxs.scrollTop);
    if(boxs.scrollTop>=pt[0].clientHeight*(pt.length-1)){
        boxs.scrollTop=0;
    }
},100);
