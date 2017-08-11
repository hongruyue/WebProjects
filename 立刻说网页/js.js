/**
 * Created by zqf on 2017/6/1.
 */
window.onload=function(){
  window.onscroll=function(){
      var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
      var box1=document.getElementsByClassName("box1")[0];
      var spans=box1.getElementsByClassName("span");
      var sy=document.getElementsByClassName("sy")[0];
      var box1H=box1.offsetTop;
      if(scrollTop>box1H){
          box1.style.background="#DA4866";
          box1.style.position="fixed";
          box1.style.margin="0";
          box1.style.top="0";
          box1.style.zIndex="2";
          sy.style.background="#E26D85";
         /* for(var i=0;i<spans.length;i++){
          spans[i].onmousemove=function(){
              for(var j=0;j<spans.length;j++){
                     if(spans[j]==this){
                         spans[j].style.background="#E26D85";
                     }else{
                         spans[j].style.background="";
                         sy.style.background="#E26D85";
                     }
                 }
              };

          }*/

      }else{
          box1.style.background="#333333";
          box1.style.position="static";
          sy.style.background="#5C5C5C";


      }

  }
};