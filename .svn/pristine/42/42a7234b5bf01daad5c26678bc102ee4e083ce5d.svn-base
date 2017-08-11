window.onload=function(){
        /*.........table.........*/
        var tits=document.getElementsByClassName("tit");
        var con=document.getElementsByClassName("table_content")[0];
        var lis=con.getElementsByTagName("li");
        var tit1=document.getElementById("tit1");
        for(var i=0;i<tits.length;i++){
            tits[i].onclick=function(){
                for(var v=0;v<tits.length;v++){
                    if(tits[v]==this){
                        lis[v].style.display="block";
                        tits[v].style.backgroundImage="url(img/table1.png)";
                        tits[v].style.borderBottom="none";
                        tits[v].style.height="61px";
                    }else{
                        lis[v].style.display="none";
                        tits[v].style.backgroundImage="none";

                    }
                }
            }

        }


        /*.........供应商.........*/
        var gys=document.getElementsByClassName("gys")[0];
        var gysb=document.getElementsByClassName("gysb")[0];
        var gysp=gys.getElementsByClassName("gysp")[0];
        var imgs=gysp.getElementsByTagName("img")[0];
        var type=1;
        gysb.onclick=function(){
            if(type == 1){
                imgs.style.display="block";
                type=0;
            }else{
                imgs.style.display="none";
                type=1;
            }

            };
        /*.........列表.........*/

        $(function(){
           /* $("#allsp").hover(function(){
                $(".allsp_x1").stop().slideDown(500,function(){
                    $("#allsp3").hover(function(){
                        //var index=$(this).index();

                        $(".allsp_x2").css("display","block");
                        console.log($(".allsp_x2").html())
                    },function(){
                        //var index=$(this).index();
                        $(".allsp_x2").css("display","none")
                    })
                })

            },function(){
                $(".allsp_x1").stop().slideUp(500)
            });
*/
            $(".nav_con1 li").hover(function(){
                $(this).children('ul').hide();
                $(this).children('ul').stop().slideDown(1000);
            },function(){
                $('ul',this).stop().slideUp(1000);
        })
        })


        /*........数量加减.........*/
        $(function(){
            var num=1;
            $(".jia").click(function(){
                num++;
                if(num>6){
                    alert("商品没有库存了！")

                }else {
                    $(".number").html(num);
                }
            })
            $(".jian").click(function(){
                num--;
                if(num>=1){
                    $(".number").html(num);
                }
            })
        })
         /*........加入购物车.........*/
    $(function(){
        $(".content2_right li").hover(function(){
            var index=$(this).index();
           // alert(index)
            $(".content2_right li img").eq(index).attr("src","img/redjiantou_03.png")
        },function(){
            var index=$(this).index();
            $(".content2_right li img").eq(index).attr("src","img/hujiantou.png")
        })
    })
    /*........鼠标浮上大图改变.........*/

    $(function(){
        var arr=["01","01_2","01_03"];
        $(".touming img").hover(function(){
            var index=$(this).index();
            //console.log(index);
            $(".content_left li img").attr("src","img/"+arr[index]+".png");
            //console.log(arr[index]);
            $(".touming  img").eq(index).css({"opacity":"1","borderBottom":"3px solid red"}).siblings().css({"opacity":"0.5","borderBottom":"3px solid transparent"});
            //alert(index)
        }/*,function(){
            var index=$(this).index();
            $(".content_left li img").attr("src","img/"+arr[index]+".png")
           // $(".content_left li img").eq(index).attr("src","img/01_11.png")

        }*/)
    })

        /*........滚轮定位.........*/
    var mydiv = document.getElementsByClassName("scrolltop")[0];
    var meili = document.getElementsByClassName("content2_left_1")[0];
    var content2_right=document.getElementsByClassName("content2_right")[0];
    var mt = meili.offsetTop;
    var nt=content2_right.offsetTop;
    window.onscroll = function scroll(ev) {
        var event=ev||window.event;
        if (event.preventDefault) {
            event.preventDefault();
        } else{
            event.returnValue=false;
        };
        var t =document.body.scrollTop||document.documentElement.scrollTop;
        //alert(t+"-"+mt);
        if (t >= mt) {
            mydiv.style.position = "fixed";
            //mydiv.style.left = "160";
            mydiv.style.margin = "0";
            mydiv.style.top = "0";
            mydiv.style.display="block";
            //content2_right.style.position = "fixed";
            //content2_right.style.margin = "0";
            //content2_right.style.top = "0";

        } else {
            mydiv.style.margin = " 0";
            mydiv.style.position = "static";
            mydiv.style.display="none";
            //content2_right.style.margin = " 0";
            //content2_right.style.position = "static";
        }

    };

    //window.addEventListener("DOMMouseScroll",scroll());
}


