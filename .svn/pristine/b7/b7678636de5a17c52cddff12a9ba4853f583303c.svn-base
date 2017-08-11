 // 1.做页面按ps的实际尺寸即可
  // 2.此函数宽度自适应窗口，高度等比缩放的，因此高度需要设置为100%，否则数值方向可能会有滚动条
  // 3.高度100%时需要对html,body{height:100%;width:100%;}设置否则高无法撑起，只能由子元素撑起
function resetPage() {
	var deviceWidth = document.documentElement.clientWidth,
	scale = deviceWidth/640;/*640为ps的实际宽度    实际写页面过程中的页面宽度*/
	//将整个页面的宽高整体缩放   根据是的窗口宽度和实际宽度的比例
	document.body.style.zoom = scale;
}
window.onload = function(){
	resetPage();
}
window.onresize = function(){
	resetPage();
}
