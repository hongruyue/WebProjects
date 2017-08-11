/**
 * Created by zqf on 2017/7/6.
 */
window.onload=function(){
    var imgs=document.getElementsByTagName("img")[0];
    var lis=document.getElementsByTagName("li");
    var num=1;
    var time=null;
   var fnn=function(){
        num++;
        if(num>=lis.length+1){
            num=1;
        }
        imgs.src="img/"+num+".jpg";
        for(var i=0;i<lis.length;i++) {
            if (i == num) {
                lis[i-1].style.background = "red";
            } else {
                lis[i].style.background = "#999";
            }

        }
    };

    for(var j=0;j<lis.length;j++){
        lis[j].onclick=function(){
            clearInterval(time);
            time=setInterval(fnn,2000);
           for(var j=0;j<lis.length;j++){
               if(lis[j]==this){
                   lis[j].style.background = "red";
                   //var n=j+1;
                   //num=n;
                   imgs.src="img/"+(j+1)+".jpg";
               }else{
                   lis[j].style.background = "#999";
               }
           }

        }

    }


    time=setInterval(fnn,2000);


};
