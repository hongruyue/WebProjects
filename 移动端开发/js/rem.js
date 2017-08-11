//此方法缺点等比缩放，因此线宽难控制
//使用方法1、首先设置html{font-size:40px;}[一般选40px或者20px]
//		  2、其他尺寸均根据字体的倍数写rem值   比如80px为2rem
function resetPage() {
	var htmls = document.getElementsByTagName('html')[0];
	//查询窗口宽度
	var deviceWidth = document.documentElement.clientWidth;
	htmls.style.fontSize = deviceWidth*0.15625+ 'px';
	//html字体的大小 = 当前页面的宽度*（html的字体大小/psd的页面宽度）
	//psd的页面宽度写出的网页的固定宽度
}
window.onload = function(){
	resetPage();
}
//窗口宽度改变触发
window.onresize = function(){
	resetPage();
}