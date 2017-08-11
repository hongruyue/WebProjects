<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<html lang="en">
 	<head>
		<base href="<%=basePath%>">
		<title>修改行业管理页面</title>
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
	</head>				
		<style type="text/css">
			a{cursor:pointer;}
		    a:{    color: #1E9300;}
			a:hover{
				color: #1E9300;			
		}
		</style>
		<script type="text/javascript">
			function rt(){
				var pageNo=$("#pageNo").val();
				window.location="<%=basePath%>industryManagement/industry.do?pageNo="+pageNo;
			}
			window.onload=function(){
				var code = "${industrylist.industryCode}";
				if (code < 10) {
					$("#industryCode").val("0"+code);
				}
			}
		</script>
	<body>
		<div id="man_zone" class="mianbody">
			<div class="softtm"></div>	
						
			<div class="row show-grid" style="padding: 1% 1% 0% 1%;">
				<div class="col-md-12 col-xs-12 col-sm-12">	
						<form id="testForm" class="form-horizontal" action="<%=basePath%>industryManagement/updateindustry.do" name="addForm" method="post">
				<input type="hidden" name="pageNo" id="pageNo" value="${pageNo}">	
					  <div class="form-group">
					    <label for="industryName" class="col-sm-1 control-label">行业名称</label>
					    <div class="col-sm-5">
					      <input type="text" data-validation-engine="validate[required,custom[industryName],ajax[industryNameAjaxUp]]" class="input form-control" id="industryName" name="industryName" placeholder="请输入2-10位以内中文或英文行业名称" value="${industrylist.industryName}">
					    </div>
					  </div>
					  <div class="form-group">
					    <label for="industryCode" class="col-sm-1 control-label">行业编码</label>
					    <div class="col-sm-5">
					      <input type="text" data-validation-engine="validate[required,custom[industryCode],ajax[industryCodeAjaxUp]]" class="input form-control" id="industryCode" name="industryCode" placeholder="请输入2位以内数字行业编码" value="${industrylist.industryCode}">
					    </div>
					  </div>
					  <div class="form-group">
					    <label for="industryDesc" class="col-sm-1 control-label">备注</label>
					    <div class="col-sm-5 " >
					      <textarea class="form-control" rows="3" id="industryDesc" name="industryDesc" >${industrylist.industryDesc}</textarea>	
					       <input type="hidden" class="form-control col-sm-3" id="industryId" name="industryId" value="${industrylist.industryId}">				      
					    </div>
					  </div>
					  <div class="col-md-12 col-xs-12 col-sm-12">
					  	<div class="col-md-1 col-xs-1 col-sm-1"></div>
					  	<div class="col-md-3 col-xs-3 col-sm-3">
					  		<button class="btn btndel-handle1" type="button" onclick="rt()">返回</button>
					  	</div>
					  	<div class="col-md-3 col-xs-3 col-sm-3">
					  		<button class="btn btndel-handle1" type="submit" >保存</button>
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
<script type="text/javascript">
function checkName(){
	$.ajax({
		type:"POST",
		url :"<%=basePath%>industryManagement/checkupindustryname.do",
		data : {  
			industryName:$("#industryName").val(),
			industryid:$("#industryId").val()
	    },  
	    success : function(result) {
	    	if(result=="行业名称已存在"){
	    		$("#industryName").testRemind(result+",请重新输入");  
	    	}else{
	    		$("#industryName").testRemind("");
	    	}
	    }
	})
}
function checkCode(){
	$.ajax({
		type:"POST",
		url :"<%=basePath%>industryManagement/checkupindustrycode.do",
		data : {  
			industryCode:$("#industryCode").val(),
			industryid:$("#industryId").val()
	    },  
	    success : function(result) {
	    	if(result=="行业编码已存在"){
	    		$("#industryCode").testRemind(result+",请重新输入");  
	    	}else{
	    		$("#industryCode").testRemind("");
	    	}
	    },
	    error:function (XMLHttpRequest, textStatus, errorThrown) {      
            alert("网络错误");
        }					
	});
}
</script>	   	 	   
  </body>
</html>
 