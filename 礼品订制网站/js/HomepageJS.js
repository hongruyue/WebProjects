/**
 * Created by zqf on 2017/7/20.
 */
window.onload=function(){
    function HttpRequest(){
        var xmlhttp;
        if(window.XMLHttpRequest){
            //IE ,FireFOX,CHROME,SAFAFI
            xmlhttp = new XMLHttpRequest();
        }else{
            xmlhttp= new ActiveXObject("Microsoft.XMLHTTP")
        }
        ////获取到的要发送的数据
        //var userData = {
        //    "userName":"hj",
        //    "passWord":"654321"
        //};
        //var str = JSON.stringify(userData); //转换json格式

        xmlhttp.open("get","../package.json",true);
        //设置http头部
        xmlhttp.setRequestHeader("Content-Type","application/json;charset=utf8");

        //发请求
        xmlhttp.send();
        xmlhttp.onreadystatechange = function(){
            if(0 == xmlhttp.readyState){
                document.writeln("");
            }
            if(4 == xmlhttp.readyState && xmlhttp.status == 200){
                var strJson = JSON.parse(xmlhttp.responseText);
                for(var j=0;j<strJson.length;j++){
                    var boxs=document.createElement("div");
                    $(".list_a").append(boxs);
                    boxs.className="col-lg-4 col-md-6 col-sm-12 list1";
                        boxs.innerHTML="<div class='list'>" +
                            "<p><a href="+strJson[j].imageUrl+"title="+strJson[j].title+"target='_blank'><img src="+strJson[j].imageName+"></a></p><p class='list_top'><a href="+strJson[j].imageUrl+"title="+strJson[j].title+"target='_blank'></a></p><p class='info'><a href="+strJson[j].imageUrl+"title="+strJson[j].title+"target='_blank'></a></p></div><p><a href="+strJson[j].imageUrl+" title="+strJson[j].title+"target='_blank'>"+strJson[j].shopTitle+"</a></p>";
                }
                if(strJson.codeNumber == 100){
                    alert("注册成功");
                }else if(strJson.codeNumber == 101){
                    alert("发送的数据为空");
                }else if(strJson.codeNumber == 102){

                }

            }
        }

    }
    HttpRequest();

};



    //$(function(){
    //        $.ajax({
    //            url:"../package.json",
    //            type:"get",
    //            data:"",
    //            dataType:"json",
    //            success:function(data){
    //                            for(var j=0;j<data.length;j++){
    //                                var boxs=document.createElement("div");
    //                                $(".list_a").append(boxs);
    //                                boxs.className="col-lg-4 col-md-6 col-sm-12 list1";
    //                                    boxs.innerHTML="<div class='list'>" +
    //                                        "<p><a href="+data[j].imageUrl+"title="+data[j].title+"target='_blank'><img src="+data[j].imageName+"></a></p><p class='list_top'><a href="+data[j].imageUrl+"title="+data[j].title+"target='_blank'></a></p><p class='info'><a href="+data[j].imageUrl+"title="+data[j].title+"target='_blank'></a></p></div><p><a href="+data[j].imageUrl+" title="+data[j].title+"target='_blank'>"+data[j].shopTitle+"</a></p>";
    //
    //                                }
    //
    //            },
    //            error:function(){
    //                alert("错误");
    //            },
    //            async:true
    //        });
    //
    //    });
    //
