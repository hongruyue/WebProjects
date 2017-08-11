<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">
		<title>业务协同平台</title>
		<meta http-equiv="X-UA-Compatible" content="IE=9" />
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<meta http-equiv="X-UA-Compatible" content="IE=edge" Chrome=1/>
<style>
#cover{
	display:none;
	position:fixed;
	z-index:1;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background:rgba(0, 0, 0, 0.44);
}
#coverShow{
	display:none;
	position:fixed;
	z-index:2;
	top:50%;
	left:50%;
	border:1px solid #127386;
	width:300px;
	height:150px;
	margin-left:-150px;
	margin-top:-150px;
	background:#E0E0E0;
}
</style>
	</head>
	<frameset rows="45,*">
		<frame frameborder="1"  bordercolor="#95BAE9" src='<%=basePath%>main/include/top.do'
			name="head" id="head" noresize="noresize" scrolling="no" />
		<frameset cols="15%,*">
			<frame bordercolor="#95BAE9" 
				src='<%=basePath%>main/include/left.do'
				name="leftTree" id="leftTree" />
			<frame  bordercolor="#95BAE9"  frameborder="1" src="<%=basePath%>main/include/content.do"
				name="middle" id='middle' />			
		</frameset>
	</frameset>
    <script src="<%=basePath%>bs/js/jquery-1.11.3.min.js"></script>
   	<script src="<%=basePath%>bs/js/bootstrap.min.js"></script>
  	<script src="<%=basePath%>js/tab.js"></script>
   	<script src="<%=basePath%>js/main.js"></script>
   	<script src="<%=basePath%>js/jump.js"></script>
   	<script type="text/javascript">
	 // 遮幕罩
   	function coverit(){
   		var cover = document.getElementById("cover");
   		var covershow = document.getElementById("coverShow");
   		cover.style.display = 'block';
   		covershow.style.display = 'block';
   	}
   	function showTime(){
   		var cover = document.getElementById("cover");
   		var covershow = document.getElementById("coverShow");
   		cover.style.display = '';
   		covershow.style.display = '';
   		window.location.reload();
   	}
   	</script>
<div id="cover"></div>
<div id="coverShow">
</div>
</html>