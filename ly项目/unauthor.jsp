<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">    
    <title>未授权</title>   
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
<style type="text/css">
body {
	overflow: hidden;
	outline:none;
	filter:chroma(color=#000000);
	width:100%;
	margin: 0;
	padding:0;
	font-size:1.3em;
}
.img{
	margin-top:5%;
	text-align: center;
}
</style>
  </head>
  
  <body>
    	 <div class="img">
			<img  src="<%=basePath%>image/unauthor.png"/>
		</div> 
  </body>
</html>
