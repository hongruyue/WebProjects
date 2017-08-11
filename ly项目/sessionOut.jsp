<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'sessionOut.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script type="text/javascript" src="<%=basePath%>bs/js/jquery-1.11.3.min.js"></script>
	<style type="text/css">
		body{ margin: 0 auto;
			text-align: center;			
			background-color:#F2F9FF;
			padding-top:5%;
		}
		.img{
			width:450px;
			height:450px;
			background: url('<%=basePath%>image/Clock.png') no-repeat;
			margin: 0px auto;
		}
			
		a{ 
		display:inline-block;
		width:200px;height:35px;
		line-height:33px;
		font-size: 30px;
			font-family: 仿宋,Arial, sans-serif; 
			color:#1C608B;
			text-decoration: none;
			background: url('<%=basePath%>image/anginlog.png') no-repeat;
		}
		a span{
			position: relative;
			left: 65px;
		}
	</style>
  </head>
  
  <body >
  <div class="img"></div>
  <a  href="<%=basePath%>login.jsp" target="_top" ><span id="sec">3</span></a>
    <script type="text/javascript">    
		var sec = $('#sec').html();
		setInterval('jump()',1000);
		function jump() {
			if(sec <= 1) {
				window.parent.window.location.href='<%=basePath%>login.jsp';
			}else {
				sec --;
				$('#sec').html(sec);
			}
		}
	</script>
  </body>
</html>
