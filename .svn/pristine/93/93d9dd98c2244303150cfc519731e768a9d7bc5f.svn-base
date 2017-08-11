/**
 * Created by Administrator on 2017/4/16 0016.
 */
$(function(){
//    选项开始
    $('.xuanxiang li').hover(function(){
        var index=$(this).index();
        $('.xuanxiang li').eq(index).css({borderRight:'none',borderBottom:'1px Solid Red',borderTop:'1px Solid Red'}).siblings().css({borderRight:'1px Solid Red',borderBottom:'none',borderTop:'none'});
        $('.xuanxiang1 li').eq(index).show(300).siblings().css('display','none');
        $('.xiahuaxian').eq(index).css('display','none');
        $('.xiahuaxian').eq(index-1).css('display','none')
    },function(){
        var index=$(this).index();
        $('.xuanxiang li').css({borderRight:'1px Solid Red',borderBottom:'none',borderTop:'none'});
        $('.xuanxiang1 li').css('display','none');
        $('.xiahuaxian').eq(index).css('display','block');
        $('.xiahuaxian').eq(index-1).css('display','block');
    });
//    选项结束
//    右导航开始
    $('.biaotou1 li').hover(function(){
        var tu=['shouji1','gouwu1','xiaoxi1','youhui1','shoucang1','zuji1'];
        var index=$(this).index();
        if(index==0){
            $('.biaotou1 img')[index].setAttribute("src",'../img/'+tu[index]+'.png');
            $('.biaotou1 li').eq(index).css('background','#ff3467');
            $('.biaotou1 a').eq(index).css('color','#fff')
            $('.sanjiao').css('display','block')
            $('.sanjiao1').css('display','block')
        }else{
            $('.biaotou1 img')[index].setAttribute("src",'../img/'+tu[index]+'.png');
            $('.biaotou1 li').eq(index).css('background','#ff3467');
            $('.biaotou1 a').eq(index).css('color','#fff')
        }

    },function(){
        var tu=['shouji','gouwu','xiaoxi','youhui','shoucang','zuji'];
        var index=$(this).index();
        if(index==0){
            $('.biaotou1 img')[index].setAttribute("src",'../img/'+tu[index]+'.png');
            $('.biaotou1 li').eq(index).css('background','#f8f8f8');
            $('.biaotou1 a').eq(index).css('color','#7c7c85')
            $('.sanjiao').css('display','none')
            $('.sanjiao1').css('display','none')
        }else{
            $('.biaotou1 img')[index].setAttribute("src",'../img/'+tu[index]+'.png');
            $('.biaotou1 li').eq(index).css('background','#f8f8f8');
            $('.biaotou1 a').eq(index).css('color','#7c7c85')
        }

    });
    $('.biaotou2').hover(function(){
        $('.biaotou2 img')[0].setAttribute("src",'../img/biaotou1.png');
        $('.biaotou2').eq(0).css('background','#ff3467');
    },function(){
        $('.biaotou2 img')[0].setAttribute("src",'../img/biaotou.png');
        $('.biaotou2').eq(0).css('background','#f8f8f8');
    })
//    右导航结束

//    自动轮播开始
    var firstimg=$('.wufeng1 a').first().clone(true);
    $('.wufeng1').eq(0).append(firstimg);
    var i= 0,time
    time=setInterval(function(){
        i++;
        if(i==7){
            $('.wufeng1').eq(0).css({left:0});
            $('.xiabiao li').css('marginRight','10px');
            i=1
        }
        $('.wufeng1').eq(0).stop().animate({left:-i*900},300);
        $('.xiabiao li').eq(i-1).css('marginRight','-20px')
    },2500)
//    自动轮播结束
//上一张开始
    $('.anniu1').click(function(){
        i--;
        if (i==-1) {
            i=$('.wufeng1 img').length-2;
            $('.wufeng1').css({left:-($('.wufeng1 img').length-1)*900});
            $('.xiabiao li').eq(0).css('marginRight','-20px');
            $('.xiabiao li').eq(1).css('marginRight','-20px');
            $('.xiabiao li').eq(2).css('marginRight','-20px');
            $('.xiabiao li').eq(3).css('marginRight','-20px');
            $('.xiabiao li').eq(4).css('marginRight','-20px');
            $('.xiabiao li').eq(5).css('marginRight','-20px');
        }
        $('.wufeng1').stop().animate({left:-i*900},300);
        $('.xiabiao li').eq(i).css('marginRight','10px')
    })
    //上一张结束
//    下一张开始
    $('.anniu').click(function(){
        i++;
        if (i==7) {
            i=1
            $('.wufeng1').eq(0).css({left:0});
            $('.xiabiao li').css('marginRight','10px');
        }
        $('.wufeng1').stop().animate({left:-i*900},300);
        $('.xiabiao li').eq(i-1).css('marginRight','-20px')
    })
//    下一张结束
//    悬浮停止开始
    $('.wufeng').hover(function(){
        clearInterval(time);
    },function(){
        time=setInterval(function(){
            i++;
            if(i==7){
                $('.wufeng1').eq(0).css({left:0});
                $('.xiabiao li').css('marginRight','10px');
                i=1
            }
            $('.wufeng1').eq(0).stop().animate({left:-i*900},300);
            $('.xiabiao li').eq(i-1).css('marginRight','-20px')
        },2500)
    });
//    悬浮停止结束
//    选项卡
    $('.sousuo1 p').click(function(){
        var ss=$(this).index();
        $('.sousuo1 p').eq(ss).css({background:'#ff3467',color:'#fff'}).siblings().css({background:'#e2e2e2',color:'#7c7c85'})
        $('#sousuo').val("")
    })
//    选项卡
//    锚链接滑动
    $('a[href*=#],area[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                        scrollTop: targetOffset
                    },
                    1000);
                return false;
            }
        }
    });
    //    锚链接滑动
})
//滚轮
var biaotou=document.getElementsByClassName('biaotou2')[0]
var box=document.getElementsByTagName('body')[0]
box.onmousewheel=function(){
    biaotou.style.display='block'
}
box.addEventListener("DOMMouseScroll",function() {
    biaotou.style.display='block'
});
//滚轮