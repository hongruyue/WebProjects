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
		<title>修改收发与踪迹规则</title>
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
   		<script src="<%=basePath%>bs/js/jquery.form.js"></script>
	<style type="text/css">
			.col-md-2 {
			    width: 14.667%;
			}
		
		
	</style>
<script type = "text/javascript">
$(function() {
	$(".file").on("change","input[type='file']",function(){
        var filePath = $(this).val().split('\\');
        var fileName = filePath[filePath.length-1]
        $('#showFileName').html(fileName)
    })
     $('#showFileName').html("${certificateTrail.traceCredentialsFilename}");
	var str="${certificateTrail.coordinationOrganizationId}";
     var obj=document.getElementById("depart");
     for(var i=0;i<obj.options.length;i++){
     	if(obj.options[i].value==str){
	       obj.options[i].selected=true;
	       break;
     	}
     }
     cerdepart(obj);
     var opt="${certificateTrail.coordinationSystemId}";
     var sys=document.getElementById("serSystem");
     for(var i=0;i<sys.options.length;i++){
     	if(sys.options[i].value==opt){
     		sys.options[i].selected=true;
	       break;
     	}
     }
})
function cerdepart(va){
	var check_val = [];  
	check_val.push(va.value);
	$.ajax({
		async:false,
    	traditional: true,
    	type:"post",
		url:"<%=basePath%>/coordinationTemplate/getShareOrgDepSys.do",
		data:{
			templateId:$("#templateId").val(),
			departIds:check_val
		},
		success:function(result){
			$("serSystem").html("");			
			for(i in result){
				var opt="<option value="+result[i].system.systemId+">"+result[i].system.systemName+"</option>";				
				$("#serSystem").append(opt);	
			}
		},
		error:function (XMLHttpRequest, textStatus, errorThrown) {      
            alert("网络错误");
		}
    }); 
}
function rt() {
	window.location.href = "<%=basePath%>/CertificateTrail/getCertificate.do?projId=${projId}&templateId=${templateId}&pageNo=${pageNum}";
}
</script>
</head>
<body>
	<div id="man_zone" class="mianbody">
			<div class="softtm"></div>			
			<div class="row show-grid" style="padding: 1% 1% 0% 2%;">
			<form id="testForm" class="form-horizontal" method="post" enctype="multipart/form-data" action="<%=basePath%>CertificateTrail/upcertificateTrail.do">
			 <input type="hidden" value="${templateId}" name="templateId" id="templateId" >
			 <input type="hidden" value="${projId}" name="projectId" id="projId" >
			 <input type="hidden" value="${projId}" name="projId">
			 <input type="hidden" value="${certificateTrail.id}" name="id">
			 <input type="hidden" name="pageNum" value="${pageNum}">
				<div class="col-md-12 col-xs-12 col-sm-12">				
					 <div class="form-group">
						  	<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="depart" class="col-md-2 control-label">凭证制发机构部门</label>
							    <div class="col-md-4 col-xs-4 col-sm-4">
								     <select  class="form-control"  name="coordinationOrganizationId" id="depart" onchange="cerdepart(this)">
								     	<option>请选择</option>
								     	<c:forEach items="${shareOrgDeparts}" var="obj">
								     		<option value="${obj.depart.departId}">${obj.organization.organizationName}${obj.depart.departName}</option>
								     	</c:forEach>
									  </select>
								  </div>
						    </div>
					 </div>
					 <div class="form-group">
						  	<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="system" class="col-md-2 control-label">凭证制发机构系统</label>
							    <div class="col-md-4 col-xs-4 col-sm-4">
								   <select  class="form-control" id="serSystem" name="coordinationSystemId">
										<option>请选择</option>
								   </select>
								</div>
						    </div>
					 </div>
					<div class="form-group">
							<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="ManagementRule" class="col-md-2 control-label">凭证踪迹管理规则</label>
								<div class="col-md-4 col-xs-4 col-sm-4">
								    <input type="text" class="input form-control"  id="ManagementRule" name="traceCredentialsStr" value="${certificateTrail.traceCredentialsStr}" data-validation-engine="validate[required]" placeholder="请填写规则"/>
								</div>
							</div>
							<div class="col-md-12 col-xs-12 col-sm-12">
								<div class="col-md-2 col-xs-2 col-sm-2"></div>
								<div class="col-md-4 col-xs-4 col-sm-4">
						    	<a href="javascript:;" class="file">
							        <input type="file" name="file" title="选择文件" >选择文件
							    </a>
							     <span id="showFileName" style="margin: 1px"></span>
							     </div>
						    </div>
					</div>
					<div class="form-group">
						  	<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="SendingRule" class="col-md-2 control-label">协同办理凭证发送规则</label>
							    <div class="col-md-4 col-xs-4 col-sm-4">
								    <input type="text" class="input form-control" id="SendingRule" name="traceSendRule" value="${certificateTrail.traceSendRule}" data-validation-engine="validate[required]" placeholder="请填写规则"/>
								</div>
						    </div>
					 </div>
					 <div class="form-group">
						  	<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="ReceiptRule" class="col-md-2 control-label">协同办理凭证签收规则</label>
							    <div class="col-md-4 col-xs-4 col-sm-4">
								    <input type="text" class="input form-control" id="ReceiptRule" name="traceReceiveRule" value="${certificateTrail.traceReceiveRule}" data-validation-engine="validate[required]" placeholder="请填写规则"/>
							    </div>
							</div>
					 </div>
				</div>
				<div class="col-md-9 col-xs-9 col-sm-9" style="margin:15px 0;">	
					<div class="col-md-1 col-xs-1 col-sm-1"></div>
					  	<div class="col-md-3 col-xs-3 col-sm-3">
					  		<button class="btn btndel-handle1" type="button" onclick="rt()">返回</button>
					  	</div>
					  	 <div class="col-md-4 col-xs-4 col-sm-4">
					  		<button class="btn btndel-handle1" type="submit">保存</button>
					  	</div>				
				</div>
			</form>
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
