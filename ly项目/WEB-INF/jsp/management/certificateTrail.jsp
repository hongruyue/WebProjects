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
		<title>收发与踪迹管理</title>
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
   		<script src="<%=basePath%>bs/js/jquery.form.js"></script>
   		<script src="<%=basePath%>bs/js/jquery.page.js"></script>	
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
		#sel{border:1px solid #ddd;padding-top:5px;height:380px;overflow-y: auto;}
		 .col-md-3 button{margin: 0 10px 0 0;}
	</style>
<script type = "text/javascript">
	function addRule(){
		window.location.href = "<%=basePath%>CertificateTrail/addRule.do?projId=${projId}&templateId=${templateId}&pageNum=${pageNum}";
	}	
	function update(id){
		window.location.href = "<%=basePath%>CertificateTrail/intoUpcertificateTrail.do?projId=${projId}&templateId=${templateId}&pageNum=${pageNum}&id="+id;
	}
	function del(id){
		var msg = "您真的确定要删除吗？";
		if (confirm(msg)==true){
			$.ajax({
		    	traditional: true,
		    	type:"post",
				url:"<%=basePath%>/CertificateTrail/deleteRule.do",
				data:{
					id : id
				},
				success:function(result){
					alert(result);
					window.location.reload();
				},
				error:function (XMLHttpRequest, textStatus, errorThrown) {      
		            alert("网络错误");
				}
		    }); 
		}
	}
</script>
</head>
<body>
	<div id="man_zone" class="mianbody">
			<div class="softtm"></div>			
			<div class="row show-grid" style="padding: 1% 1% 0% 1%;">
			<input type="hidden" id="templateId" name="templateId" value="${templateId}"/>
		    <input type="hidden" id="projId" name="projId" value="${projId}"/>
				<div class="col-md-12 col-xs-12 col-sm-12">
					<div class="col-md-12 col-xs-12 col-sm-12" >
						<button type="button" class="btn btndel-handle1" onclick="addRule()" >添加规则</button>
					</div>
					<div class="col-md-12 col-xs-12 col-sm-12"><span class="col-md-12 col-xs-12 col-sm-12 View">凭证踪迹管理规则列表</span></div>
					<div class="col-md-12 col-xs-12 col-sm-12">
						<div class="table_style">	
						<table id="approvalTable" class="table top table-condensed">
					 			<tr>
					 				<th width="5%">序号</th>
					 				<th width="20%">管理部门-系统</th>
					 				<th width="20%">协同办理凭证发送规则</th>
					 				<th width="20%">凭证踪迹管理规则</th>
					 				<th width="20%">协同办理凭证签收规则</th>
					 				<th width="15%">操作</th>
					 			</tr>
					 	</table>
					 	<c:forEach items="${sharesystem}" var="list" varStatus="s">
							<table class="table hover table-hover table-condensed">
								<tr>
									<td width="5%">${s.index+1}</td>								
									<td width="20%">${list.regional_name}${list.organization_name}${list.depart_name}${list.system_name}</td>																		
									<td width="20%">${list.trace_send_rule}</td>																		
									<td width="20%">${list.trace_credentials_str}</td>	
									<td width="20%">${list.trace_receive_rule}</td>																																								
		                            <td width="15%" >
		                            	<a onclick="update(${list.id})">修改</a>&nbsp;&nbsp;&nbsp;&nbsp;
		                            	<a onclick="del(${list.id})"> 删除</a>	                           										
	                            	</td>
								</tr>
							</table>
						</c:forEach>
	 					</div>
					</div>
				</div>
			</div>	
			<!--分页  -->
				<div class="tcdPageCode"></div>
				<script type="text/javascript">
					var pageC=${Total};
					var curren=${pageNum};
					var templateId = ${templateId};
					var projId = ${projId}
					$(".tcdPageCode").createPage({
						//pageCount：总页数         current：当前页 p当前页
				        pageCount:pageC,
				        current:curren,
				        backFn:function(p){
				        	window.location="<%=basePath%>CertificateTrail/getCertificate.do?pageNo="+p+"&templateId="+templateId + "&projId=" + projId;
				        }
				     });
				</script>				
	</div> 

</body>
</html>
