/**
 * Created by zqf on 2017/5/4.
 */
/*.................模块加载...........................*/
document.oncontextmenu=function(ev) {//鼠标右击事件
    var event = ev || event;
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;//ie阻止默认事件
    }
};

window.onload=function(){
    window.onscroll=function (){
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        var zhiping1=document.getElementsByClassName("zhiping1")[0];
        var phone_con=document.getElementsByClassName("phone_con")[0];
        var phone2_con=document.getElementsByClassName("phone2_con")[0];
        var zhiping1H=zhiping1.offsetTop;
        var phone2_conH=phone2_con.offsetTop;
        if (zhiping1H<scrollTop) {
           zhiping1.style.display="block";
        }else{
            zhiping1.style.display="none";
        };
        if (phone2_conH<scrollTop) {
            phone2_con.style.display="block";
        }else{
            phone2_con.style.display="none";
        };
    }
};



/*.................直聘...........................*/
$(function(){
    var arr=["company-1.png","company-2.png","company-3.png","company-4.png"];
    $(".zp_li").hover(function(){
       var index=$(this).index();
        $(".qq"). eq(index).attr("src","img/"+arr[index]);
    },function(){
        var index=$(this).index();
        $(".qq"). eq(index).attr("src","");
    })
});



/*.................always滚动...........................*/
/*window.onload=function(){
 var cc=document.getElementsByClassName("gundong_1")[0];
 var imgs=cc.getElementsByTagName("img");
 var uls=cc.getElementsByTagName("ul")[0];
 var inner=document.getElementsByClassName("inner")[0];
 var newul=uls.cloneNode(true);
 inner.appendChild(newul);

 function left(){
 cc.scrollLeft++;
 if( cc.scrollLeft>=imgs[0].width*imgs.length){
 cc.scrollLeft=0;
 }
 }

 //setInterval(left,10);

 };*/

$(function(){
    var i= 0,time;
    clearInterval(time);
        function left(){
        i++;
        if(i==3){
            $('.inner_ul').css({left:0});
            i=1
        }
        $('.inner_ul').stop().animate({left:-i*1000},300);
    }
    function right(){
        i--;
        if(i==-1){
            $('.inner_ul').css({left:-2*1000});
            i=1
        }
        $('.inner_ul').stop().animate({left:-i*1000},300);
    }
    time=setInterval(left  ,4000);

    $(".jiantou_left").click(function(){
        left();
    });
    $(".jiantou_right").click(function(){
        right();
    })
});



