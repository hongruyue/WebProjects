/**
 * Created by Administrator on 2017/6/20 0020.
 */
$(function(){
    //手机版效果
    $(".con_top li:nth-child(3)").hover(function(){
        $(".big_bg").css({display:"block",boxShadow:"0 0 10px #888888"})
    },function(){
        $(".big_bg").css({display:"none",boxShadow:"0 0 0 #888888"})
    });
    //teb栏效果

    //点击事件
    $(".teb ul li").click(function(){
        $(this).css({background:"red",color:"#fff"}).siblings().css({background:"#fff",color:"#696969"});
    });
    //hover事件
    $(".teb ul li").hover(function(){
        var index=$(this).index();
        $(this).css("box-shadow","0 0 10px #888888");
        $(".teb ul li:eq("+index+")>div").css("display","block");
        //alert(index)
    },function(){
        var index=$(this).index();
        $(this).css("box-shadow","0 0 0px #888888");
        $(".teb ul li:eq("+index+")>div").css("display","none");
    });

});
