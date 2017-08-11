/**
 * Created by zqf on 2017/8/9.
 */
window.onload=function(){
    var move=document.getElementById("move");
    var show=document.getElementById("show");
    var time=true;
    move.onclick=function(){
        if(time){
            show.style.display='block';
            move.style.color='red';
            time=false;
        }else{
            show.style.display='none';
            move.style.color='#000';
            time=true;
        }

    };

    /*....................百度获取.................*/
   // https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a&cb=
    //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=s&json=1&p=3&sid=1453_23513_21127&req=2&csor=1&cb=jQuery110202604192721009071_1502343658715&_=1502343658718
    //https://suggest.taobao.com/sug?code=utf-8&q=c&_ksTS=1502342363201_575&callback=jsonp576&area=b2c&code=utf-8&k=1&bucketid=9&src=tmall_pc&isg=Anp6kJRZ935MxHsSWJ3BuiIuy6AwP55PEyFj6IRzdI3cdxuxbboOFeKBsTVQ

    $(function(){
        $(".ptn").change(function(){
            $.ajax({
                url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?&wd="+$(this).val()+"&cb=",
                type:"post",
                dataType:"json",
                //jsonp:"cb",
                success:function(data){
                    $("ul").empty();
                    var arr=data.s;
                    for(var i=0;i<arr.length;i++){
                        var newnode="<li>"+arr[i][0]+"</li>";//arr[i][0]首关键字
                        console.log(newnode);
                        $("ul").append(newnode);
                    }
                },
                error:function(){

                },
                asyns:true
            })

        })
    })
};




