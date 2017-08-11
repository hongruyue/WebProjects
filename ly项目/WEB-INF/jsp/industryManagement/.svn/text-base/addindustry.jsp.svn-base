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

		<title>添加行业</title>

		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<link rel="stylesheet" href="<%=basePath%>bs/css/bootstrap.min.css">   
		<link type="text/css" rel="stylesheet" href="<%=basePath%>css/main.css" />
		<link type="text/css" rel="stylesheet" href="<%=basePath%>css/style.css" />
		<link type="text/css" rel="stylesheet" href="<%=basePath%>bs/css/validationEngine.jquery.css" />
   		<script src="<%=basePath%>bs/js/jquery-1.11.3.min.js"></script>
   		<script src="<%=basePath%>bs/js/bootstrap.min.js"></script>	
			<script type="text/javascript">
			$(function() {
				$('.input').val("");
			})
			function rt(){
				var pageNo=$("#pageNo").val();
				window.location="<%=basePath%>industryManagement/industry.do?pageNo="+pageNo;
			}
		</script>
	</head>

	<body>
		<div id="man_zone" class="mianbody">
			<div class="softtm"></div>	
					
			<div class="row show-grid" style="padding: 1% 1% 0% 1%;">
				<div class="col-md-12 col-xs-12 col-sm-12">	
					<form id="testForm" class="form-horizontal" action="<%=basePath%>industryManagement/addindustry.do" name="addForm" method="post">
					<input type="hidden" name="pageNo" id="pageNo" value="${pageNo}">
					  <div class="form-group">
					    <label for="industryName" class="col-sm-1 control-label">行业名称</label>
					    <div class="col-sm-5">
					    	<input type="text" data-validation-engine="validate[required,custom[industryName],ajax[industryNameAjax]]" class="input form-control" id="industryName" name="industryName" placeholder="请输入2-10位以内中文或英文行业名称" >
					    </div>
					  </div>
					  <div class="form-group">
					    <label for="industryCode" class="col-sm-1 control-label">行业编码</label>
					    <div class="col-sm-5">
					      <input type="text" data-validation-engine="validate[required,custom[industryCode],ajax[industryCodeAjax]]" class="input form-control" id="industryCode" name="industryCode" placeholder="请输入2位以内数字行业编码" >
					    </div>
					  </div>
					  <div class="form-group">
					    <label for="industryDesc" class="col-sm-1 control-label">备注</label>
					    <div class="col-sm-5 ">
					     <textarea class="input form-control" rows="3" id="industryDesc" name="industryDesc">	</textarea>				      
					    </div>
					  </div>
					  <div class="col-md-12 col-xs-12 col-sm-12">
					  	<div class="col-md-1 col-xs-1 col-sm-1"></div>
					  	<div class="col-md-3 col-xs-3 col-sm-3">
					  		<button class="btn btndel-handle1" type="button" onclick="rt()">返回</button>
					  	</div>
					  	<div class="col-md-3 col-xs-3 col-sm-3">
					  		<button class="btn btndel-handle1" type="submit">保存</button>
					  	</div>
					  </div>		  		          				          		
	          		</form>
				</div>
			</div>
			
		</div>		
		<script src="<%=basePath%>bs/js/jquery.validationEngine.min.js"></script>	
		<script src="<%=basePath%>bs/js/jquery.validationEngine-zh-CN.js"></script>	
		<script type="text/javascript">
		$.validationEngine.defaults.scroll = false;
		jQuery(document).ready(function(){
		  jQuery('#testForm').validationEngine();
		});
		</script>
	</body>
</html>
