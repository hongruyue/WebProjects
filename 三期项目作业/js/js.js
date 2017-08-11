/**
 * Created by zqf on 2017/5/13.
 */
window.onload=function(){
    /*.......................倒计时...................*/
    setInterval(function(){
        var djs_time=document.getElementsByClassName("djs_time")[0];
        var start=new Date();
        var end=new Date("2017/06/10");
        var starttime=start.getTime();
        var endtime=end.getTime();
        var fulltime=endtime-starttime;
        var day=parseInt(fulltime/(24*60*60*1000));
        djs_time.innerHTML=day;
    },1)
/*。。。。。。。。。。。。点击关闭客服。。。。。。。。。。。。。*/
    var gb=document.getElementsByClassName("gb")[0];
    var close1=document.getElementsByClassName("close1")[0];
    gb.onclick=function(){
        close1.style.display="none";
    }
}

