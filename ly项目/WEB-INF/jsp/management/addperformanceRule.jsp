<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
 	<head>
		<base href="<%=basePath%>">
		<title>添加服务绩效管理</title>
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
		<style type="text/css">
		
		</style>
		<script type = "text/javascript">
		function selectsystem(va){
			$('#sname').html("");
			if(va.value=="请选择"){
				 var option="<option selected='selected' value='请选择'>请选择</option>";
				    $("#sname").append(option); 
			}else{				
				$.ajax({
					type:"POST",
					url :"<%=basePath%>PerformanceRule/selectsystem.do",
					dataType: 'json',
					data : {  
						departid:va.value,
						templateId:$("#templateId").val()
				    },  
				    success : function(result) {
				    for(var i=0;i<result.length;i++){		    				   
					    var option="<option name='systemId'  value='"+result[i].system_id+"'>"+result[i].system_name+"</option>";
					    $("#sname").append(option); 
				    }
				    }
				})
			}
		}
		function rt(){
			window.location.href = "<%=basePath%>PerformanceRule/getPerformance.do?projId="+$("#projId").val()+"&templateId="+$("#templateId").val();
		}
		</script>
	</head>
<body>
	<div id="man_zone" class="mianbody">
	
			<div class="softtm"></div>			
			<div class="row show-grid" style="padding: 1% 1% 0% 1%;">
				<!-- <div class="col-md-12 col-xs-12 col-sm-12">	
					<button type="button" class="btn btndel-handle1" onclick = "preAdd()" data-toggle="modal" data-target="#myModal">添加</button>
				</div> -->
				<div class="col-md-12 col-xs-12 col-sm-12" >
					<form id="testForm" class="form-horizontal" action="<%=basePath%>PerformanceRule/savePerformancerule.do" name="">
					 <input type="hidden" id="templateId" name="templateId" value="${templateId}"/>
					 <input type="hidden" id="projId" name="projId" value="${projId}"/>
					  <div class="form-group">
					    <label for="department" class="col-sm-2 control-label">政务服务绩效考核管理部门</label>
					    <div class="col-sm-5">
					    	<select  class="form-control" id="department" name="department" data-validation-engine="validate[required]" onchange="selectsystem(this)" >
									<option selected="selected" value="">请选择</option>									
									<c:forEach var="list" items="${Organizationlist}" >
									<option name="orgId" value="${list.depart_id}">${list.dpName}</option>
									</c:forEach>
							</select>
					    </div>
					  </div>
					  <div class="form-group">
					    <label for="sname" class="col-sm-2 control-label">政务服务绩效管理系统名称</label>
					    <div class="col-sm-5">
					    	<select  class="form-control" id="sname" data-validation-engine="validate[required]" name="sname">
									<option selected="selected" value="">请选择</option>
							</select>
					    </div>
					  </div>
					  <div class="form-group">
					    <label for="rule" class="col-sm-2 control-label">绩效考核管理规则</label>
					    <div class="col-sm-5">
					      <textarea class="input form-control" id="rule" name="rule" data-validation-engine="validate[required]"></textarea>
					    </div>
					  </div>
					  <div class="col-md-12 col-xs-12 col-sm-12">
					  	<div class="col-md-2 col-xs-2 col-sm-2"></div>
					  	<div class="col-md-3 col-xs-3 col-sm-3">
					  		<button class="btn btndel-handle1" type="button" onclick="rt()">返回</button>
					  	</div>
					  	 <div class="col-md-5 col-xs-5 col-sm-5">
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
