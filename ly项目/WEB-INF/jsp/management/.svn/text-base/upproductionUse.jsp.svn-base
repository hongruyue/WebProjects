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
		<title>修改凭证制发与使用管理</title>
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<link rel="stylesheet" href="<%=basePath%>bs/css/bootstrap.min.css">   
		<link type="text/css" rel="stylesheet" href="<%=basePath%>css/main.css" />
		<link type="text/css" rel="stylesheet" href="<%=basePath%>css/style.css" />
		<link type="text/css" rel="stylesheet" href="<%=basePath%>css/collaboration.css" />
		<link type="text/css" rel="stylesheet" href="<%=basePath%>bs/css/validationEngine.jquery.css" />
   		<script src="<%=basePath%>bs/js/jquery-1.11.3.min.js"></script>
   		<script src="<%=basePath%>bs/js/bootstrap.min.js"></script>
   		<script src="<%=basePath%>bs/js/jquery.page.js"></script>
   		<script src="<%=basePath%>bs/js/jquery.form.js"></script>
		<style type="text/css">
		a{cursor:pointer;}
		a:hover{
			color:#271bed;
		}	
		.col-md-5 {
		    width: 48.667%;
		}
		.col-md-5 label{
			margin-top: 10px !important;
			padding-left: 0px;
		}
		.sty .col-md-8 span{
			padding: 5px;
			display: inline-block;
			width:60%; 
			overflow:hidden; 
			white-space:nowrap; 
			text-overflow:ellipsis;
			position: absolute;
		}
		 .sty .col-md-8 {
		    padding-left: 0;
		}
		.sty .col-md-12 {
		    padding-top: 15px;
		}
		.bottom{
				height: 300px !important;
				width: 170px;
			}
			.col-md-4{padding-left:3px;}
			.btn-bar{
				text-align: center;
			}
			.btn-bar span{
				cursor:pointer;
			}
			#input_div{
				width: 100%;
				float: right;
				height: 300px;
				overflow-y: scroll;
				overflow-x: hidden;
			}
			 #input_div input{
				width:60%;
			}
			#input_div label{
				width:30%;
				word-wrap: break-word;
			}
			#input_div span{
				display:block;
			}
			.modal-body{
			height: 350px;
			}
			.lf_top{padding:0px;}			
			option{word-wrap: break-word;}			
			.bor{border: 2px dashed #5890c0;
					margin-left: 1%;padding-bottom:1%;}
		</style>
		<script type = "text/javascript">
		var id;
		//点击时获取模态框的ID
		function getContentLicense(a,b,c,d){
			id = $("#input_div").html();
			//if(id == null || id.length==0){
				$("#"+c).html("");
					$.ajax({
						type:"POST",
						url :"<%=basePath%>credentials/"+b+".do",
						dataType: 'json',
						data : {  
							templateId:$("#templateId").val()
					    },  
					    success : function(result) {
					    for(var i=0;i<result.length;i++){
						    var option="<option id='"+a+"' name='"+a+"'  value='"+result[i].name+"'>"+result[i].name+"</option>";
						    $("#"+c).append(option); 
					    }
					    $('.'+d+' span').each(function (){ 
				            va=$(this).attr("id");	
				            $("#"+c+' option').each(function (){
				            	if($(this).val()==va){
				            		$(this).remove();
				            	}
					         });
				       });
					    }
					})
					id=d;
		}
		
		function getContentBasicInfoVO(a,b,c,d){
			id = $("#input_div").html();
			//if(id == null || id.length==0){
				$("#"+c).html("");
					$.ajax({
						type:"POST",
						url :"<%=basePath%>credentials/"+b+".do",
						dataType: 'json',
						data : {  
							templateId:$("#templateId").val()
					    },  
					    success : function(result) {
					    for(var i=0;i<result.length;i++){		    				   
						    var option="<option id='"+a+"' name='"+a+"'  value='"+result[i].metaData.metadataCname+"'>"+result[i].metaData.metadataCname+"</option>";
						    $("#"+c).append(option); 
					    }
					    $('.'+d+' span').each(function (){ 
				            va=$(this).attr("id");	
				            $("#"+c+' option').each(function (){
				            	if($(this).val()==va){
				            		$(this).remove();
				            	}
					         });
				       });
					    }
					})
					id=d;
			//}
		} 
		 
		//关闭时清空没有内容的input
		function empty(e){		
				 $("#"+id+" input[type='text']").each(function () {
					if($(this).val()==""){
						var va=$(this).prev().attr("class");
						$('#'+id+' .bottom').append('<option value="'+va+'">'+$("."+va).html()+'</option>');
						$(this).parent().remove();
					}
				}); 
		}
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
					    var option="<option id='systemId' name='systemId'  value='"+result[i].system_id+"'>"+result[i].system_name+"</option>";
					    $("#sname").append(option); 
				    }
				    var coordinationDepartmentId = $('#coordinationDepartmentId').val();
					var systemId=$("#sname option:selected").val();
					$("#coordinationDepartmentId1").val(coordinationDepartmentId);
					$("#coordinationDepartmentId2").val(coordinationDepartmentId);
					$("#systemId1").val(systemId);
					$("#systemId2").val(systemId);
				    }
				})
			}
		}
		$(function(){
			//选择文件
			//$('.input').val("");			
			$(".file").on("change","input[type='file']",function(){
	            var filePath = $(this).val().split('\\');
	            var fileName = filePath[filePath.length-1];
	            $(this).parent().next().html(fileName);
	            $(this).parent().next().attr("title",fileName);
	        });	        
		});
		//移到左边
		function removeFile(e){
			var va=$(e).attr("id");
			$('#'+id+' .bottom').append('<option value="'+va+'">'+$("."+va).html()+'</option>');
			$(e).parent().remove();
		};
		function right(e){
			//先判断是否有选中
			if(!$("#"+id+" .bottom option").is(":selected")){			
				alert("请选择需要移动的选项")
			}
			//获取选中的选项，删除并追加给对方
			else{
				$('#'+id+' .bottom option:selected').each(function () {
					$('#'+id+' #input_div').append('<span id="'+$(this).val()+'"><label class="'+$(this).val()+'">'+$(this).text()+'</label><input type="hidden" name="'+id+'cerifyVerificationsName" value="'+$(this).text()+'" /><input type="text" name="'+id+'cerifyVerifications"/><a id="'+$(this).val()+'" class="delicon" onclick="removeFile(this)"></a></span>');
					$(this).remove();
				});
			}	
		};
		
		 function getId(){
			var coordinationDepartmentId = $('#coordinationDepartmentId').val();
			var systemId=$("#sname option:selected").val(); 
			$("#coordinationDepartmentId1").val(coordinationDepartmentId);
			$("#coordinationDepartmentId2").val(coordinationDepartmentId);
			$("#systemId1").val(systemId);
			$("#systemId2").val(systemId);
		}
		
		</script>
	<script type="text/javascript">  
            $(document).ready(function()  {  
                //注意这里最好在文档加载完成的时候再获取元素，否则可能获取到的一直是null  
                setOnloadCallBask(document.getElementById("ifActionResult"),'load',ActionHandler);        
            });
            
            
            var handlerFlag = 0;  
            function setOnloadCallBask(obj, event, handler) {         
                if (null != obj && null != obj.addEventListener) {   
                    obj.addEventListener(event, handler, false);   
                }   
                else if (null != obj && null != obj.attachEvent) {  
                    obj.attachEvent('on'+event, handler);   
                }   
                else {  
                    throw new Error('不支持该dom元素');  
                }  
            }     
            function ActionHandler()  {  
            	if(0 != handlerFlag)  {  
                    var value = document.getElementById("ifActionResult").contentWindow.document.body.innerHTML;
                    alert(value)
                    if(value="<pre>操作成功</pre>"){
                    	alert("操作成功");
                    }else{
                    	alert("操作失败");
                    }
                    handlerFlag = 0;  
                }  
            }     
            function sub()  {  
                handlerFlag = 1;  
            }
        </script> 
   

	</head>
<body>
	<div id="man_zone" class="mianbody">
			<div class="softtm"></div>			
			<div class="row show-grid" style="padding: 1% 1% 0% 1%;">	
				<div class="col-md-12 col-xs-12 col-sm-12" >
				<!-- 申领表 -->	
					<form id="Apply" action="credentials/updatecredential.do" method="post" enctype="multipart/form-data" target="ifTmp" >
					<input type="hidden" id="templateId" name="templateId" value="${templateId}"/>
					<input type="hidden" id="projId" name="projId" value="${projId}"/>
					<input type="hidden" id="credentialsWithBLOBID" name="credentialsWithBLOBID" value="${singleCredentialsWithBLOBs.id}"/>
					<input type="hidden" id="coordinationDepartmentId1" name="coordinationDepartmentId" value="${coordinationDepartmentId}"/>
					<input type="hidden" id="systemId1" name="systemId" value="${systemId}"/>
					<input type="hidden" id="credentialsManagementType" name="credentialsManagementType" value="0"/>
					<div class="col-md-5 col-xs-5 col-sm-5" ><h3>空白业务凭证申领表</h3></div>
					<div class="col-md-6 col-xs-6 col-sm-6" ><h3 style="margin-left: 2%;">空白业务凭证回执表</h3></div>
					<div class="col-md-5 col-xs-5 col-sm-5 bor" >
					<div class="sty">
						<div class="form-group">
							<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="blankBusinessCredentialsRuleStr" class="col-sm-4 control-label">空白业务凭证申领规则</label>
								<div class="col-md-8 col-xs-8 col-sm-8">
								    <input type="text" class="input form-control" id="blankBusinessCredentialsRuleStr" name="blankBusinessCredentialsRuleStr" data-validation-engine="validate[required]" value="${singleCredentialsWithBLOBs.blankBusinessCredentialsRuleStr}" />
								      <a class="file">
								        	<input type="file" name="fileblankBusiness" title="选择文件" id="fileblankBusiness">选择文件
								    	</a>
								    	<span>${singleCredentialsWithBLOBs.blankBusinessCredentialsRuleName}</span>
								</div>
							</div>
						  </div>
						  <div class="form-group">
						  	<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="handleCredentialsRuleStr" class="col-sm-4 control-label">协同办理凭证使用规则</label>
						    <div class="col-md-8 col-xs-8 col-sm-8">
							    <input type="text" class="input form-control" id="handleCredentialsRuleStr" name="handleCredentialsRuleStr" data-validation-engine="validate[required]" value="${singleCredentialsWithBLOBs.handleCredentialsRuleStr}" />
							      <a class="file">
							        	<input type="file" name="fileHandleCredentials" title="选择文件" id="fileHandleCredentials">选择文件
							    	</a>
							    	<span>${singleCredentialsWithBLOBs.handleCredentialsRuleName}</span>
						    </div>
							</div>
						  </div>
						  <div class="form-group">
						  	<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="handleCheckChapterRuleStr" class="col-sm-4 control-label">协同办理凭证使用规则</label>
						    <div class="col-md-8 col-xs-8 col-sm-8">
							    <input type="text" class="input form-control" id="handleCheckChapterRuleStr" name="handleCheckChapterRuleStr" data-validation-engine="validate[required]" value="${singleCredentialsWithBLOBs.handleCheckChapterRuleStr}" />
							      <a class="file">
							        	<input type="file" name="fileHandleCheckChapter" title="选择文件" id="fileHandleCheckChapter">选择文件
							    	</a>
							    	<span>${singleCredentialsWithBLOBs.handleCheckChapterRuleName}</span>
						    </div>
							</div>
						  </div>
						  <div class="form-group" >
						  	<div class="col-md-12 col-xs-12 col-sm-12" style="margin-bottom:20px;">
							    <label for="handleTimeStampRuleStr" class="col-sm-4 control-label">协同办理凭证使用规则</label>
						    <div class="col-md-8 col-xs-8 col-sm-8">
							    <input type="text" class="input form-control" id="handleTimeStampRuleStr" name="handleTimeStampRuleStr" data-validation-engine="validate[required]" value="${singleCredentialsWithBLOBs.handleTimeStampRuleStr}" />
							      <a class="file">
							        	<input type="file" name="fileHandleTimeStamp" title="选择文件" id="fileHandleTimeStamp">选择文件
							    	</a>
							    	<span>${singleCredentialsWithBLOBs.handleTimeStampRuleName}</span>
						    </div>
							</div>
						  </div>
						  <div class="col-md-4 col-xs-6 col-sm-12 btnbottom" >
						  	<button class="btn btn-default" type="button" data-toggle="modal" data-target="#Adata" onclick="getContentBasicInfoVO('data','getData','dataName','Adata')">数据核实凭证使用规则</button>	
						  </div>
						  <div class="col-md-4 col-xs-6 col-sm-12 btnbottom" >
						  	<button class="btn btn-default" type="button"  data-toggle="modal"data-target="#Alicence" onclick="getContentLicense('contentLicense','getContentLicense','contentLicenseName','Alicence')">证照核实凭证使用规则</button>
						  </div>
						  <div class="col-md-4 col-xs-6 col-sm-12 btnbottom" >
						  	<button class="btn btn-default" type="button"  data-toggle="modal" data-target="#Aimportant" onclick="getContentLicense('contentVitalDocument','getContentVitalDocument','contentVitalDocumentName','Aimportant')">要件核实凭证使用规则</button>					
						  </div>
						  </div>
						  <!-- 数据核实凭证使用规则模态框（Modal） -->
<div class="modal fade" id="Adata" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="empty(this)">
					&times;
				</button>
				<h4 class="modal-title">
					数据核实凭证使用规则
				</h4>
			</div>
			<div class="modal-body">
							<div class="col-md-4 col-xs-4 col-sm-4">
								<div class=" col-md-12 col-xs-12 col-sm-12" >
									<span>基本信息列表</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" id="dataName" class="bottom" onchange="">
										    <option  value="1">sd1asdfasdfasd</option>	
								    </select>							
								</div>
							</div>
							<div class="btn-bar col-md-1 col-xs-1 col-sm-1">
								<br>
								<br>
								<br>
								<br>
								<p><span id="add1" onclick="right(this)" class="Adata">&gt;&gt;</span></p>
							</div>
			        		<div class="col-md-7 col-xs-7 col-sm-7">
								<div class="lf_top col-md-12 col-xs-12 col-sm-12" >
									<span>添加规则</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" style="border: 1px solid #a9a6a6 !important;padding:0px;">
										<div id="input_div" class="Adata">
										<c:forEach var="list" items="${singleCredentialsWithBLOBs.dataVerifyVerifications}" >
										<span id="${list.ruleName}"><label class="${list.ruleName}">${list.ruleName}</label><input type="hidden" name="AdatacerifyVerificationsName" value="${list.ruleName}" /><input type="text" name="AdatacerifyVerifications" value ="${list.singleBusinessVerification}" /><a id="${list.ruleName}" class="delicon" onclick="removeFile(this)"></a></span>
										</c:forEach>
										</div>
								</div>
							</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" onclick="empty(this)">关闭</button>
				<button type="button" class="btn btn-primary">保存</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->
</div>
<!-- 证照核实凭证使用规则 -->
 <div class="modal fade" id="Alicence" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="empty(this)">
					&times;
				</button>
				<h4 class="modal-title">
					证照核实凭证使用规则
				</h4>
			</div>
			<div class="modal-body">
							<div class="col-md-4 col-xs-4 col-sm-4">
								<div class=" col-md-12 col-xs-12 col-sm-12" >
									<span>基本信息列表</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" id="contentLicenseName" name="contentLicenseName" class="bottom">
										    
								    </select>							
								</div>
							</div>
							<div class="btn-bar col-md-1 col-xs-1 col-sm-1">
								<br>
								<br>
								<br>
								<br>
								<p><span id="add1" onclick="right(this)" class="Alicence">&gt;&gt;</span></p>
							</div>
			        		<div class="col-md-7 col-xs-7 col-sm-7">
								<div class="lf_top col-md-12 col-xs-12 col-sm-12" >
									<span>添加规则</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" style="border: 1px solid #a9a6a6 !important;padding:0px;">
										<div id="input_div" class="Alicence">
										<c:forEach var="list" items="${singleCredentialsWithBLOBs.businessVerifyVerifications}" >
										<span id="${list.ruleName}"><label class="${list.ruleName}">${list.ruleName}</label><input type="hidden" name="AlicencecerifyVerificationsName" value="${list.ruleName}" /><input type="text" name="AlicencecerifyVerifications" value ="${list.singleBusinessVerification}" /><a id="${list.ruleName}" class="delicon" onclick="removeFile(this)"></a></span>
										</c:forEach>
										</div>
								</div>
							</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" onclick="empty(this)">关闭
				</button>
				<button type="button" class="btn btn-primary">保存</button>
			</div>
		</div>
	</div>
</div>
<!-- 要件核实凭证使用规则 -->
<div class="modal fade" id="Aimportant" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="empty(this)">
					&times;
				</button>
				<h4 class="modal-title">
					要件核实凭证使用规则
				</h4>
			</div>
			<div class="modal-body">
							<div class="col-md-4 col-xs-4 col-sm-4">
								<div class=" col-md-12 col-xs-12 col-sm-12" >
									<span>基本信息列表</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" id="contentVitalDocumentName" name="contentVitalDocumentName" class="bottom">
										    
								    </select>							
								</div>
							</div>
							<div class="btn-bar col-md-1 col-xs-1 col-sm-1">
								<br>
								<br>
								<br>
								<br>
								<p><span id="add1" onclick="right(this)" class="Aimportant">&gt;&gt;</span></p>
							</div>
			        		<div class="col-md-7 col-xs-7 col-sm-7">
								<div class="lf_top col-md-12 col-xs-12 col-sm-12" >
									<span>添加规则</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" style="border: 1px solid #a9a6a6 !important;padding:0px;">
										<div id="input_div" class="Aimportant">
										<c:forEach var="list" items="${singleCredentialsWithBLOBs.elementsVerifyVerifications}" >
										<span><label class="/jsp/management/certificateTrail.jsp">${list.ruleName}</label><input type="hidden" name="AimportantcerifyVerificationsName" value="${list.ruleName}" /><input type="text" name="AimportantcerifyVerifications" value ="${list.singleBusinessVerification}" /><a id="${list.ruleName}" class="delicon" onclick="removeFile(this)"></a></span>
										</c:forEach>
										</div>
								</div>
							</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" onclick="empty(this)">关闭
				</button>
				<button type="button" class="btn btn-primary">保存</button>
			</div>
		</div>
	</div>
</div>
						  <div class="col-md-12 col-xs-12 col-sm-12" style="margin-top:20px;">	
						  	 <div class="col-md-4 col-xs-4 col-sm-4"></div>
						  		<button class="btndel-handle3" type="submit" onclick="sub();" > 保存申领规则</button>
						</div>
					</div>
					</form>
					<iframe id="ifActionResult" name="ifTmp" width="1px" height="1px" style="display: none;"></iframe> 
					<!-- 回执表 --> 
					<form id="Receipt" action="credentials/updatecredential.do" method="post" enctype="multipart/form-data" target="ifTmp">
					<input type="hidden" id="templateId" name="templateId" value="${templateId}"/>
					<input type="hidden" id="projId" name="projId" value="${projId}"/>
					<input type="hidden" id="credentialsWithBLOBID" name="credentialsWithBLOBID" value="${receiptCredentialsWithBLOBs.id}"/>
					<input type="hidden" id="coordinationDepartmentId2" name="coordinationDepartmentId" value="${coordinationDepartmentId}"/>
					<input type="hidden" id="systemId2" name="systemId" value="${systemId}"/>
					<input type="hidden" id="credentialsManagementType" name="credentialsManagementType" value="1"/>
					<div class="col-md-5 col-xs-5 col-sm-5 bor">
					<div class="sty">
						<div class="form-group">
							<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="blankBusinessCredentialsRuleStr1" class="col-sm-4 control-label">空白业务凭证回执规则</label>
							<div class="col-md-8 col-xs-8 col-sm-8">
							    <input type="text" class="input form-control" id="blankBusinessCredentialsRuleStr1" name="blankBusinessCredentialsRuleStr" data-validation-engine="validate[required]" value="${receiptCredentialsWithBLOBs.blankBusinessCredentialsRuleStr}" />
							      <a class="file">
							        	<input type="file" name="fileblankBusiness" title="选择文件" id="fileblankBusiness1">选择文件
							    	</a>
							    	<span>${receiptCredentialsWithBLOBs.blankBusinessCredentialsRuleName}</span>
							</div>
							</div>
						  </div>
						  <div class="form-group">
						  	<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="handleCredentialsRuleStr1" class="col-sm-4 control-label">协同办理凭证使用规则</label>
						    <div class="col-md-8 col-xs-8 col-sm-8">
							    <input type="text" class="input form-control" id="handleCredentialsRuleStr1" name="handleCredentialsRuleStr" data-validation-engine="validate[required]" value="${receiptCredentialsWithBLOBs.handleCredentialsRuleStr}" />
							      <a class="file">
							        	<input type="file" name="fileHandleCredentials" title="选择文件" id="fileHandleCredentials1">选择文件
							    	</a>
							    	<span>${receiptCredentialsWithBLOBs.handleCredentialsRuleName}</span>
						    </div>
							</div>
						  </div>
						  <div class="form-group">
						  	<div class="col-md-12 col-xs-12 col-sm-12" >
							    <label for="handleCheckChapterRuleStr1" class="col-sm-4 control-label">协同办理凭证使用规则</label>
						    <div class="col-md-8 col-xs-8 col-sm-8">
							    <input type="text" class="input form-control" id="handleCheckChapterRuleStr1" name="handleCheckChapterRuleStr" data-validation-engine="validate[required]" value="${receiptCredentialsWithBLOBs.handleCheckChapterRuleStr}" />
							      <a class="file">
							        	<input type="file" name="fileHandleCheckChapter" title="选择文件" id="fileHandleCheckChapter1">选择文件
							    	</a>
							    	<span>${receiptCredentialsWithBLOBs.handleCheckChapterRuleName}</span>
						    </div>
							</div>
						  </div>
						  <div class="form-group">
						  	<div class="col-md-12 col-xs-12 col-sm-12" style="margin-bottom:20px;">
							    <label for="handleTimeStampRuleStr1" class="col-sm-4 control-label">协同办理凭证使用规则</label>
						    <div class="col-md-8 col-xs-8 col-sm-8">
							    <input type="text" class="input form-control" id="handleTimeStampRuleStr1" name="handleTimeStampRuleStr" data-validation-engine="validate[required]" value="${receiptCredentialsWithBLOBs.handleTimeStampRuleStr}" />
							      <a class="file">
							        	<input type="file" name="fileHandleTimeStamp" title="选择文件" id="fileHandleTimeStamp1">选择文件
							    	</a>
							    	<span>${receiptCredentialsWithBLOBs.handleTimeStampRuleName}</span>
						    </div>
							</div>
						  </div>
						  <div class="col-md-4 col-xs-6 col-sm-12 btnbottom" >
						  	<button class="btn btn-default" type="button" data-toggle="modal" data-target="#Rdata" onclick="getContentBasicInfoVO('data','getData','dataName1','Rdata')">数据核实凭证使用规则</button>
						  </div>
						  <div class="col-md-4 col-xs-6 col-sm-12 btnbottom" >
						  	<button class="btn btn-default" type="button" data-toggle="modal" data-target="#Rlicence" onclick="getContentLicense('contentLicense','getContentLicense','contentLicenseName1','Rlicence')">证照核实凭证使用规则</button>
						  </div>
						  <div class="col-md-4 col-xs-6 col-sm-12 btnbottom" >
						  	<button class="btn btn-default" type="button" data-toggle="modal" data-target="#Rimportant" onclick="getContentLicense('contentVitalDocument','getContentVitalDocument','contentVitalDocumentName1','Rimportant')">要件核实凭证使用规则</button>					
						  </div>
						  </div>
						  <!-- 回执 -->
<!-- 数据核实凭证使用规则模态框（Modal） -->
<div class="modal fade" id="Rdata" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="empty(this)">
					&times;
				</button>
				<h4 class="modal-title">
					数据核实凭证使用规则
				</h4>
			</div>
			<div class="modal-body">
							<div class="col-md-4 col-xs-4 col-sm-4">
								<div class=" col-md-12 col-xs-12 col-sm-12" >
									<span>基本信息列表</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" id="dataName1" name="dataName" class="bottom">
										    								  
								    </select>							
								</div>
							</div>
							<div class="btn-bar col-md-1 col-xs-1 col-sm-1">
								<br>
								<br>
								<br>
								<br>
								<p><span id="add1" onclick="right(this)" class="Rdata">&gt;&gt;</span></p>
							</div>
			        		<div class="col-md-7 col-xs-7 col-sm-7">
								<div class="lf_top col-md-12 col-xs-12 col-sm-12" >
									<span>添加规则</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" style="border: 1px solid #a9a6a6 !important;padding:0px;">
										<div id="input_div" class="Rdata">
										<c:forEach var="list" items="${receiptCredentialsWithBLOBs.dataVerifyVerifications}" >
										<span id="${list.ruleName}"><label class="${list.ruleName}">${list.ruleName}</label><input type="hidden" name="RdatacerifyVerificationsName" value="${list.ruleName}" /><input type="text" name="RdatacerifyVerifications" value ="${list.singleBusinessVerification}" /><a id="${list.ruleName}" class="delicon" onclick="removeFile(this)"></a></span>
										</c:forEach>
										</div>
								</div>
							</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" onclick="empty(this)">关闭
				</button>
				<button type="button" class="btn btn-primary">保存</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->
</div>
<!-- 证照核实凭证使用规则 -->
 <div class="modal fade" id="Rlicence" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="empty(this)">
					&times;
				</button>
				<h4 class="modal-title">
					证照核实凭证使用规则
				</h4>
			</div>
			<div class="modal-body">
							<div class="col-md-4 col-xs-4 col-sm-4">
								<div class=" col-md-12 col-xs-12 col-sm-12" >
									<span>基本信息列表</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" id="contentLicenseName1" name="contentLicenseName" class="bottom">
								    </select>							
								</div>
							</div>
							<div class="btn-bar col-md-1 col-xs-1 col-sm-1">
								<br>
								<br>
								<br>
								<br>
								<p><span id="add1" onclick="right(this)" class="Rlicence">&gt;&gt;</span></p>
							</div>
			        		<div class="col-md-7 col-xs-7 col-sm-7">
								<div class="lf_top col-md-12 col-xs-12 col-sm-12" >
									<span>添加规则</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" style="border: 1px solid #a9a6a6 !important;padding:0px;">
										<div id="input_div" class="Rlicence">
										<c:forEach var="list" items="${receiptCredentialsWithBLOBs.businessVerifyVerifications}" >
										<span id="${list.ruleName}"><label class="${list.ruleName}">${list.ruleName}</label><input type="hidden" name="RlicencecerifyVerificationsName" value="${list.ruleName}" /><input type="text" name="RlicencecerifyVerifications" value ="${list.singleBusinessVerification}" /><a id="${list.ruleName}" class="delicon" onclick="removeFile(this)"></a></span>
										</c:forEach>
										</div>
								</div>
							</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" onclick="empty(this)">关闭
				</button>
				<button type="button" class="btn btn-primary">保存</button>
			</div>
		</div>
	</div>
</div>
<!-- 要件核实凭证使用规则 -->
<div class="modal fade" id="Rimportant" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="empty(this)">
					&times;
				</button>
				<h4 class="modal-title">
					证照核实凭证使用规则
				</h4>
			</div>
			<div class="modal-body">
							<div class="col-md-4 col-xs-4 col-sm-4">
								<div class=" col-md-12 col-xs-12 col-sm-12" >
									<span>基本信息列表</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" id="contentVitalDocumentName1" name="contentVitalDocumentName" class="bottom">
								    </select>							
								</div>
							</div>
							<div class="btn-bar col-md-1 col-xs-1 col-sm-1">
								<br>
								<br>
								<br>
								<br>
								<p><span id="add1" onclick="right(this)" class="Rimportant">&gt;&gt;</span></p>
							</div>
			        		<div class="col-md-7 col-xs-7 col-sm-7">
								<div class="lf_top col-md-12 col-xs-12 col-sm-12" >
									<span>添加规则</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" style="border: 1px solid #a9a6a6 !important;padding:0px;">
										<div id="input_div" class="Rimportant">
										<c:forEach var="list" items="${receiptCredentialsWithBLOBs.elementsVerifyVerifications}" >
										<span id="${list.ruleName}"><label class="${list.ruleName}">${list.ruleName}</label><input type="hidden" name="RimportantcerifyVerificationsName" value="${list.ruleName}" /><input type="text" name="RimportantcerifyVerifications" value ="${list.singleBusinessVerification}" /><a id="${list.ruleName}" class="delicon" onclick="removeFile(this)"></a></span>
										</c:forEach>
										</div>
								</div>
							</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal" onclick="empty(this)">关闭
				</button>
				<button type="button" class="btn btn-primary">保存</button>
			</div>
		</div>
	</div>
</div>
						  <div class="col-md-12 col-xs-12 col-sm-12" style="margin-top:20px;">
							  <div class="col-md-4 col-xs-4 col-sm-4"></div>
							  <button class="btndel-handle3" type="submit" onclick="sub();" >保存回执规则</button>
						  </div>
					</div>
					</form>
					<input id="im_iframe" name="mm_iframe" style="display:none;"></input>			
				</div>
			</div>	
	</div> 

</body>
<script src="<%=basePath%>bs/js/jquery.validationEngine.min.js"></script>	
<script src="<%=basePath%>bs/js/jquery.validationEngine-zh-CN.js"></script>		
<script type="text/javascript">
$.validationEngine.defaults.scroll = false;
jQuery(document).ready(function(){
  jQuery('#Apply').validationEngine();
  jQuery('#Receipt').validationEngine();
});
</script>
</html>
