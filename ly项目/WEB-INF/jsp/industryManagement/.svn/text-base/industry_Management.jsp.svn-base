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
		<title>行业管理页面</title>
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<link rel="stylesheet" href="<%=basePath%>bs/css/bootstrap.min.css">   
		<link type="text/css" rel="stylesheet" href="<%=basePath%>css/main.css" />
		<link type="text/css" rel="stylesheet" href="<%=basePath%>css/style.css" />
   		<script src="<%=basePath%>bs/js/jquery-1.11.3.min.js"></script>
   		<script src="<%=basePath%>bs/js/bootstrap.min.js"></script>		
   		<script src="<%=basePath%>bs/js/jquery.page.js"></script>
	</head>				
		<script type="text/javascript">
			function addindustry(){
				var pageNo=$("#pageNo").val();
				location.href="<%=basePath%>industryManagement/addindustryPage.do?pageNo="+pageNo;
			}
			function updateindustry(industryId){
				var pageNo=$("#pageNo").val();
				location.href="<%=basePath%>industryManagement/updateindustryPage.do?industryId="+industryId+"&pageNo="+pageNo;
			}
			function deleteindustry(industryId){
				$.ajax({
		    		type: 'POST',
		    		url : "<%=basePath%>industryManagement/deleteindustry.do",
		    		 data: {
		    			"industryId":industryId
		    		} ,
		    		success : function(data) {
		    			if(data == "yes"){
		    				alert("删除成功");
			    			location.reload();
		    			}else if(data == "no"){
		    				alert("对不起，您要删除的内容已经被引用，不能被删除！");
		    			}
		    			
					},
					error: function(data){
						alert("error");
					}
				}); 
			}
		</script>

	<body>
		<div id="man_zone" class="mianbody">
			<div class="softtm"></div>			
			<div class="row show-grid" style="padding: 1% 1% 0% 1%;">
				<div class="col-md-12 col-xs-12 col-sm-12">	
					<button type="button" onclick="addindustry()" class="btn btndel-handle1"> &nbsp;&nbsp; 添加 &nbsp;&nbsp;</button>
				</div>
				<div class="col-md-12 col-xs-12 col-sm-12" >	
					<div class="table-responsive">
					  <table class="table table-bordered table-hover table-condensed">
					   <thead>
					   <tr>
					   		<th>序号</th>
						   	<th>行业名称</th>
						   	<th>行业编码</th>
						   	<th>备注</th>
						   	<th>操作</th>
					   	</tr>
					   </thead>
					   <tbody class="industryBody">
					   <c:forEach var="industry" items="${industrylist}" varStatus="s"> 
					   	<tr>
					   		<td>${s.index+"1"}</td>
					   		<td>${industry.industryName}</td>
					   		<td>
					   		<c:choose>
       							<c:when test="${industry.industryCode<10}">
             						0${industry.industryCode}
       							</c:when>
       							<c:when test="${industry.industryCode>=10}">
             						${industry.industryCode}
       							</c:when>
							</c:choose>
							</td>
					   		<td>${industry.industryDesc}</td>
					   		<td>
								<a herf="" onclick="updateindustry(${industry.industryId})" >修改</a>&nbsp;&nbsp;
					  			<a herf="" onclick="deleteindustry(${industry.industryId})">删除</a>&nbsp;&nbsp;
					  			<%-- <a href="<%=basePath%>busineDict/editBusineDict.do?industryId=${industry.industryId}">字典管理</a>&nbsp;&nbsp; --%>
							</td>
					   	</tr>
					   	</c:forEach>
					   </tbody>
					  </table>
					</div>
				</div>
				<!--分页  -->
				<input type="hidden" id="pageNo" value="${pageNo}">
				<div class="tcdPageCode"></div>
				<script type="text/javascript">
				 var pageC=${Total};
				 var curren=${pageNum};
				$(".tcdPageCode").createPage({
					//pageCount：总页数         current：当前页 p当前页
			        pageCount:pageC,
			        current:curren,
			       
			        backFn:function(p){
			            console.log(p);
			            $.ajax({
							type:"POST",
							url : "<%=basePath%>industryManagement/industry.do",
							data : {  
								pageNo : p  
						    },  
						    success : function(result) {
						    	
						    	  window.location="<%=basePath%>industryManagement/industry.do?pageNo="+p;
						    },
						    error:function (XMLHttpRequest, textStatus, errorThrown) {      
					            alert("网络错误");
					        }
						});
			        }
			    });
				</script>
			</div>
				
					
		</div>  	   	 	   
  </body>
</html>
 