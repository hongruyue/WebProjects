/**
 * Created by zqf on 2017/6/20.
 */
/*点击换图片*/
window.onload=function(){
    var yuan_an=document.getElementsByClassName("yuan_an");
    yuan_an[0].onclick=function(){
        this.style.background="url('../hj_img/yuan3.png') 8px 14px no-repeat";
        yuan_an[1].style.background="url('../hj_img/yuan1.png') 8px 14px no-repeat";
    };
    yuan_an[1].onclick=function(){
        this.style.background="url('../hj_img/yuan3.png') 8px 14px no-repeat";
        yuan_an[0].style.background="url('../hj_img/yuan1.png') 8px 14px no-repeat";
    }
};