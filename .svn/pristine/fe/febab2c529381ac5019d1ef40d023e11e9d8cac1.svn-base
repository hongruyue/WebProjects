//延迟加载图片，演示的时候，使用本地图片
   //上线后请改为二级域名提供的图片地址 
   //使用图片宽660，高550，可以根据实际情况进行设置
  window.onload = function () { //窗口加载的时候调用此函数,主要是初始化相关对象
  	flag1 = 0; 
   	obj1 = document.getElementById("slider"); 
   	obj2 = document.getElementById("wrap").getElementsByTagName("li"); 
   	obj2[0].style.backgroundColor = "#666666";
   	time1 = setInterval(turn, 5000, 1); //设置定时器，5秒间隔
  	flag2 = 0;
  	obj3 = document.getElementById("slider1"); 
   	obj4 = document.getElementById("wrap1").getElementsByTagName("li"); 
   	obj4[0].style.backgroundColor = "#666666";
   	time2 = setInterval(turn, 5000, 2); //设置定时器，5秒间隔
   	for (var i = 1; i < 3; i++) {
   		initslider(i);
  		initblock(i);
   	}
  } 
  function doturn(order,obja,objb,curflag,leng,value) {
  	if(value != null) { //鼠标放置于1-4数字时会调用
    		curflag = value - 2; 
   	} 
   	if (curflag < objb.length - 1) //循环播放，小于最大值时自增，到达最后一张时重新开始
    	curflag++; 
   	else
    	curflag = 0; 
   	obja.style.top = curflag * leng + "px"; 
   	for (var j = 0; j < objb.length; j++) { 
    	objb[j].style.backgroundColor = "#ffffff"; 
   	} 
   	objb[curflag].style.backgroundColor = "#666666"; 
   	if (order == 1)
   		flag1 = curflag;
   	else
   		flag2 = curflag;
  }
  function turn(order,value) { 
  	if (order == 1) {
  		doturn(order,obj1,obj2,flag1,-340,value);
  	} else {
  		doturn(order,obj3,obj4,flag2,-243,value);
  	}
  } 
  function initslider(order) {
  	if (order == 1) {
  		obj1.onmouseover = function () {
    		clearInterval(time1); 
   		} 
   		obj1.onmouseout = function () {
    		time1 = setInterval(turn, 6000, order); 
   		} 
  	} else {
  		obj3.onmouseover = function () {
    		clearInterval(time2); 
   		} 
   		obj3.onmouseout = function () {
    		time2 = setInterval(turn, 6000, order); 
   		} 
  	}	
  }
  function initblock(order) {
  	var num = 0;
  	if (order == 1) {
  		for (num = 0; num < obj2.length; num++) { 
    		obj2[num].onmouseover = function () { 
     			turn(order,this.innerHTML); 
     			clearInterval(time1); 
    		} 
    		obj2[num].onmouseout = function () { 
     			time1 = setInterval("turn();", 6000); 
    		}
    	} 
   	} else {
   		for (num = 0; num < obj4.length; num++) { 
    		obj4[num].onmouseover = function () { 
     			turn(order,this.innerHTML); 
     			clearInterval(time2); 
    		} 
    		obj4[num].onmouseout = function () { 
     			time2 = setInterval("turn();", 6000); 
    		}
    	}
   	}
  }
  
  function hideAllClips(sobj,mobj,sum) { 
	//var obj = document.getElementById(mobj).getElementsByTagName("div"); 
	//alert(sum);
    for (i=1; i<=sum; i++){ 
        var allClips=sobj+i; 
        var clipNum=mobj+i; 
        document.getElementById(allClips).style.display="none"; 
        document.getElementById(clipNum).className="topnavoff"; 
    } 
  } 
     
	function clip_Switch(n,sum,sobj,mobj) { 
    var curClip=sobj + n; 
    var curClipNum=mobj + n; 
	//alert(curClip);
	//alert(curClipNum);
    hideAllClips(sobj,mobj,sum); 
	//alert(curClip);
	//alert(curClipNum);
    document.getElementById(curClip).style.display="block"; 
    document.getElementById(curClipNum).className="topnavon"; 
	} 