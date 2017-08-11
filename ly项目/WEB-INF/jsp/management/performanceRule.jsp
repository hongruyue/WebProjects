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
		<title>服务绩效管理</title>
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<link rel="stylesheet" href="<%=basePath%>bs/css/bootstrap.min.css">   
		<link type="text/css" rel="stylesheet" href="<%=basePath%>css/main.css" />
		<link type="text/css" rel="stylesheet" href="<%=basePath%>css/style.css" />
		<link type="text/css" rel="stylesheet" href="<%=basePath%>css/template.css" />
   		<script src="<%=basePath%>bs/js/jquery-1.11.3.min.js"></script>
   		<script src="<%=basePath%>bs/js/bootstrap.min.js"></script>
		<style type="text/css">
		a{cursor:pointer;}
		a:hover{
			color:#271bed;
		}td > a {
		    color: #1138e0;
		}	
		.hover {
			border-bottom: 1px solid #ddd;
		}
		.top {
			border-bottom: 2px solid #ddd;
		}
		.hover td {
			color: #157fb3;
			font-weight: 900;
			font-size: 12px;
		}
		.View {
    		margin-top: 10px;
		}
		.table > tbody > tr > td {
			border-top: 0
		}
		.table {
			margin-bottom: 0px;
		}
		#approvalTable{font-size:12px;}
		#table_style{border-bottom: 1px solid #ddd;
		    font-weight: 900;
		    color: #157fb3;;
		    }
		</style>
		<script type = "text/javascript">
		function preAdd(){
			window.location.href = "<%=basePath%>PerformanceRule/addPerformance.do?projId="+$("#projId").val()+"&templateId="+$("#templateId").val();
		}
		function update(id) {
			window.location.href = "<%=basePath%>PerformanceRule/updatePerformance.do?id=" + id+"&projId="+$("#projId").val()+"&templateId="+$("#templateId").val();
		}
		function deleteRule(id){
			$.ajax({
				type:"POST",
				url :"<%=basePath%>PerformanceRule/deleteRule.do",			
				data : {  
					ruleid:id			
			    },  
			    success : function(result) {
			    	alert("删除成功");
	    			location.reload();
			    }
			})
		}
		</script>
	</head>
<body>
	<div id="man_zone" class="mianbody">
	<input type="hidden" id="templateId" value="${templateId}"/>
	<input type="hidden" id="projId" value="${projId}"/>
			<div class="softtm"></div>			
			<div class="row show-grid" style="padding: 1% 1% 0% 1%;">
			<div class="col-md-12 col-xs-12 col-sm-12">	
				<div class="col-md-12 col-xs-12 col-sm-12" >
					<button type="button" class="btn btndel-handle" onclick = "preAdd()">添加</button>
				</div>
				<div class="col-md-12 col-xs-12 col-sm-12"><span class="col-md-12 col-xs-12 col-sm-12 View">服务绩效管理列表</span></div>
				<div class="col-md-12 col-xs-12 col-sm-12" >
					<table id="approvalTable" class="table top table-condensed">
				 		<thead>
				 			<tr>
				 				<th width="5%">序号</th><th width="20%">政务服务绩效考核管理部门</th><th width="20%">政务服务绩效管理系统名称</th><th width="20%">绩效考核管理规则</th><th width="15%">操作</th>
				 			</tr>
				 		</thead>
				 	</table>
				 	<c:forEach var="list" items="${rulelist}" varStatus="s">	
				 	<table class="table hover table-hover table-condensed">
				 		<tbody id="table_style">
					 			<tr>
					 				<td width="5%">${s.index+1}</td>
					 				<td width="20%">${list.regional_name}${list.organization_name}${list.depart_name}</td>
					 				<td width="20%">${list.system_name}</td>
					 				<td width="20%">${list.performance_management_rule}</td>
					 				<td width="15%"><a onclick="update(${list.id})"> 修改 </a>&nbsp;&nbsp;&nbsp;&nbsp; 
					 				<a onclick="deleteRule(${list.id})"> 删除 </a></td>
					 			</tr>
				 		</tbody>
				 	</table>	
					 </c:forEach>		
				</div>
			</div>	
			</div>					
	</div> 

</body>
</html>
