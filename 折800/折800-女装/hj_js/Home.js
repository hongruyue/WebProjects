/**
 * Created by Administrator on 2017/6/21 0021.
 */
$(function(){
    //ͷ���ֲ�
            //��̬��� �ֲ�ͼ  ���±�
    var arr=[1,2,3,4,5];
    for(var a=0;a<arr.length;a++){
        var lis="<li><img src='img/lunb"+arr[a]+".jpg'></li>";
        var lis2="<li></li>";
        $(".head_uls").append(lis);
        $(".head_right").append(lis2);
    }

    //setInterval(function(){
    //    $(".head_uls li")
    //})

})
