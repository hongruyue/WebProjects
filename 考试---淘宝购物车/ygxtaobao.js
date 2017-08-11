/**
 * Created by Administrator on 2017/6/24 0024.
 */
    //window.onload=function(){
        //全选
    var re2=document.getElementsByClassName("removes");
    var ip=document.getElementsByName("ip");
    var qx=document.getElementById("quan");
    var btn=document.getElementsByClassName("bs1");
function add(){
    for(var i=0;i<ip.length;i++){
        if(qx.checked==true){
            ip[i].checked=true;
        }else{
            ip[i].checked=false;
        }
    }
}
            //全选删除
function remove(){
    for (var i=ip.length-1;i>=0;i--){
        if( ip[i].checked==true){
            var fa=ip[i].parentNode.parentNode;
            fa.remove();
            re2[i].remove();

        }
    }
}
            //单个删除
    remo();
    function remo(){
        var tbody = document.getElementsByTagName("tbody")[0];
        var tr2=document.getElementsByClassName("tr-2");
        var re3=document.getElementsByClassName("removes");
        var bs2=document.getElementsByClassName("bs1");
        for (var v=0;v<bs2.length;v++){
            bs2[v].index=v;
            bs2[v].onclick=function(){
                tbody.removeChild(re3[this.index]);
                tbody.removeChild(tr2[this.index]);
                syj();
            }
        }

    }

                         //加 减

    he ();
    function he() {
        var jia = document.getElementsByClassName("spa1");
        var jian = document.getElementsByClassName("spa2");
        var he1 = document.getElementsByClassName("an-sp1");



        for (var i = 0; i < he1.length; i++) {
            jia[i].index = i;
            jian[i].index = i;
            jia[i].onclick = function () {
                he();
                var index = this.index;
                he1[index].innerHTML = parseInt(he1[index].innerHTML) + 1;

                syj();
            }
            jian[i].onclick = function () {
                he();
                var index = this.index;
                var num = parseInt(he1[index].innerHTML) - 1;
                if (num < 0) {
                    he1[index].innerHTML = 0;
                    alert("宝贝数量大于");
                } else {
                    he1[index].innerHTML = num;
                }

                syj();

            }
        }
    }

                      //积分 总数
        syj();
        function syj(){
            var he1=document.getElementsByClassName("an-sp1");
            var jf=document.getElementsByClassName("j-c1")[0];
            var dj=document.getElementsByClassName("jh");
            var zongqian=document.getElementsByClassName("zongqian")[0];
            var heshu=document.getElementsByClassName("jiashu");
            var djf=document.getElementsByClassName("jf-1");

            var fen1=0;
            var qian1=0;
            var w,e;
            for (var i=0;i<he1.length;i++){
                w=parseInt(he1[i].innerHTML)*parseInt(djf[i].innerHTML);
                fen1+=w;
                e=parseInt(he1[i].innerHTML)*parseInt(dj[i].innerHTML);
                qian1+=e;
                heshu[i].innerHTML=e;
            }
        jf.innerHTML=fen1;
        zongqian.innerHTML=qian1;

        }


//    var spa1=document.getElementsByClassName("spa1");
//    var spa2=document.getElementsByClassName("spa2");
//    var spa3=document.getElementsByClassName("an-sp1");
//    var jia=document.getElementsByClassName("jiashu");
//    var jh=document.getElementsByClassName("jh");
//    var jf=document.getElementsByClassName("j-c1")[0];
//    var xjf=document.getElementsByClassName("jf-1");
//    var zongqian=document.getElementsByClassName("zongqian")[0];
//
//var num_o=0;
//var num_x=0;
//    var num=1;
//    for (var j=0;j<spa1.length;j++){
//        spa1[j].onclick=function(){
//            num++;
//            for (var k=0;k<spa1.length;k++){
//                if(this==spa1[k]){
//                    spa3[k].innerHTML=parseInt(spa3[k].innerHTML)+1;
//                    jia[k].innerHTML=spa3[k].innerHTML*jh[k].innerHTML;
//                    z=parseInt(spa3[k].innerHTML)*parseInt(xjf[k].innerHTML);
//                    num_o+=z;
//                    jf.innerHTML= num_o;
//                    m= parseInt(spa3[k].innerHTML)*parseInt(jh[k].innerHTML);
//                    num_x+=m;
//                    zongqian.innerHTML=num_x;
//
//                }
//
//            }
//        }
//    }
//
//for (var g=0;g<spa2.length;g++){
//    spa2[g].onclick=function(){
//        num--;
//        //var index=this.index;
//        //var num = parseInt(spa3[index].innerHTML)-1;
//        if(num<0){
//            alert("宝贝数量必须大于");
//            num=parseInt(spa3[y].innerHTML)-1;
//        }
//        for (var y=0;y<spa2.length;y++){
//            if(this==spa2[y]){
//                spa3[y].innerHTML=parseInt(spa3[y].innerHTML)-1;
//                jia[y].innerHTML=jia[y].innerHTML-jh[y].innerHTML;
//                //z=parseInt(spa3[y].innerHTML)-parseInt(xjf[y].innerHTML);
//                //num_o-=z;
//                //jf.innerHTML= num_o;
//                //m= parseInt(spa3[y].innerHTML)-parseInt(jh[y].innerHTML);
//                //num_x-=m;
//                //zongqian.innerHTML=num_x;
//            }
//        }
//    }
//}
//
//






























