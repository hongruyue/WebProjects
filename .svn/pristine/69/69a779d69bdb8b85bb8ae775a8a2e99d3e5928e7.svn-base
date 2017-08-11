/**
 * Created by zqf on 2017/6/24.
 */

 /*.............删除...............*/
    function selectAll(){
        var checklist = document.getElementsByName ("selected");
        if(document.getElementById("controlAll").checked)
        {
            for(var i=0;i<checklist.length;i++)
            {
                checklist[i].checked = 1;

            }
        }else{
            for(var j=0;j<checklist.length;j++)
            {
                checklist[j].checked = 0;
            }
        }
    }
    var btn=document.getElementById("button");
    var btn1=document.getElementsByClassName("button");
    var tr=document.getElementsByTagName("tr");
    var checklist = document.getElementsByName ("selected");
    var tr1=document.getElementsByClassName("tr1");
    var num3=document.getElementsByClassName("num3");
    btn.onclick=function(){
        for(i=checklist.length-1;i>=0;i--){
            if (checklist[i].checked){
                checklist[i].parentNode.parentNode.remove();
               tr1[i].remove();
                num3[0].innerHTML=0;
                num3[1].innerHTML=0;
            }
            }
        };

for(var j=0;j<btn1.length;j++){
    btn1[j].onclick=function(){
        for(i=0;i<checklist.length;i++) {
            if (checklist[i].checked) {
                checklist[i].parentNode.parentNode.remove();
                tr1[i].remove();
                caluTotal();

            }
        }
    }
}


/*.................加减................*/
var jia_1=document.getElementsByClassName("jia_1");
var jian_1=document.getElementsByClassName("jian_1");
var numb=document.getElementsByClassName("numb");
var jiage=document.getElementsByClassName("jiage");
var jifen=document.getElementsByClassName("jifen");
var zongjia=document.getElementsByClassName("zongjia");
var numj=document.getElementsByClassName("numj")[0];
var numz=document.getElementsByClassName("numz")[0];
var num=1;
for(var n=0;n<jia_1.length;n++){
    jia_1[n].onclick=function(){
        setVaule(this);
    };
}
for(var k=0;k<jian_1.length;k++){
    jian_1[k].onclick=function(){
        setVaule(this);
    };
}

function caluTotal() {
    numz.innerHTML = 0;
    numj.innerHTML=0;
    for(var i=0;i<jia_1.length;i++){
        numz.innerHTML = parseInt(numz.innerHTML) + parseInt(zongjia[i].innerHTML);
        numj.innerHTML = parseInt(numj.innerHTML) + parseInt(jifen[i].innerHTML);
    }
}
function setVaule(obj) {
    var check=false;
    for (var m = 0; m < jia_1.length; m++) {
            check=true;
            if (jia_1[m] == obj) {
                if (checklist[m].checked) {
                    num++;
                    numb[m].innerHTML = num;
                    zongjia[m].innerHTML = num * jiage[m].innerHTML;
                    jifen[m].innerHTML=num;
                } else {
                    alert("未选中");
                }
            } else if (jian_1[m] == obj) {
                if (checklist[m].checked) {
                    num--;
                    if (num < 0) {
                        alert("宝贝数量必须大于零");
                        num = 0;
                    }
                    numb[m].innerHTML = num;
                    zongjia[m].innerHTML = num * jiage[m].innerHTML;
                    jifen[m].innerHTML=num;
                }else {
                    alert("未选中");
                }
            }
        }

    if(check) {
        caluTotal(obj);
    }

}
