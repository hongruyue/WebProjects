/**
 * Created by Administrator on 2017/4/29.
 */
    //内容模块一
    $(function(){
        var nr1=document.getElementsByClassName("neirong1")[0];
        var box1=document.getElementsByClassName("box1")[0];
        var youfu=document.getElementsByClassName("youfu")[0];
        var X=document.documentElement.clientWidth;
        var Y=document.documentElement.clientHeight;

        //右边的浮动下标
       youfu.style.top=Y/2+"px";
        $(".youfu li").click(function(){
            //alert("dianj")
            $(this).css({"transform":" scale(1.8)","background":"yellow"}).siblings().css({"transform":" scale(1)","background":"green"})
            var inde=$(this).index();
            //$(".box0").eq(inde).css("display","block").siblings().css("display","none")
            $(".box0").eq(inde).slideDown().siblings().slideUp()
        });



        //内容模块yi
        nr1.style.paddingTop=(Y-578)/2-80+"px";
        //nr1.style.margin=(Y-578-60)/2+"px auto";
        box1.style.height=(Y-60)+"px";

        //内容模块二
        var box2=document.getElementsByClassName("box2")[0];
        box2.style.height=(Y-60)+"px";

        $(".nr2_ul li").hover(function(){
            var b=$(this).index();
            var a=b+1;
            //alert(a)
            console.log(123);
            $(this).css("background","url('img/boss-"+a+".png')")
        },function(){
            var b=$(this).index();
            var a=b+1;
            $(this).css("background","url('img/company-"+a+".png')")
        });




//内容模块三
        var box3=document.getElementsByClassName("box3")[0];
        box3.style.height=(Y-60)+"px";

//内容模块四
        var box4=document.getElementsByClassName("box4")[0];
        box4.style.height=(Y-60)+"px";

//内容模块五
        var box5=document.getElementsByClassName("box5")[0];
        box5.style.height=(Y-60-1)+"px";

//内容模块六
        var box6=document.getElementsByClassName("box6")[0];
        box6.style.height=(Y-60-1)+"px";
        $(".box6").slideUp();

        //鼠标hover事件
            $(".nr6_zh li").hover(function(){
                var b=$(this).index();
                var a=b+1;
                //alert(a)
                $(this).css("background","url('img/media"+a+"-"+a+".png')")
            },function(){
                var b=$(this).index();
                var a=b+1;
                $(this).css("background","url('img/media"+a+".png')")
            });
        //最下面轮播
            //插入节点 图片
        for(var i=1;i<=14;i++){
            var lis="<li><img src='img/c-"+i+".png' alt=''/></li>";
            //alert(lis)
            $(".nr6_di2").append(lis)
        }


        //左右按钮
        $(".zuo").hover(function(){
            $(this).css("background","url('img/zuo2_02.png')")
        },function(){
            $(this).css("background","url('img/zuo1_02.png')")
        });

        $(".you").hover(function(){
            $(this).css("background","url('img/you2_03.png')")
        },function(){
            $(this).css("background","url('img/you1_03.png')")
        });




        var num=0;
        $(".zuo").click(function(){
            for(var a=1;a<=7;a++){
                var lis2="<li><img src='img/c-"+a+".png' alt=''/></li>";
                //alert(lis2);
                $(".nr6_di2").append(lis2)
            }
            num-=130;
            if(num<=-1820){
                num=0
            }
            $(".nr6_di2").css("left",num+"px")
        });


        var num1=-1820;
        $(".you").click(function(){
            for(var a=1;a<=7;a++){
                var lis2="<li><img src='img/c-"+a+".png' alt=''/></li>";
                //alert(lis2);
                $(".nr6_di2").prepend(lis2)
            }
            num1+=130;
            if(num1>=0){
                num1=-1820
            }
            $(".nr6_di2").css("left",num1+"px")
        });

        setInterval(function(){
            for(var a=1;a<=7;a++){
                var lis2="<li><img src='img/c-"+a+".png' alt=''/></li>";
                //alert(lis2);
                $(".nr6_di2").append(lis2)
            }
            num-=130;
            if(num<=-1820){
                num=0
            }
            $(".nr6_di2").css("left",num+"px")
        },2000)








    });


