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
		<title>凭证制发与使用管理</title>
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
   		<script src="<%=basePath%>bs/js/jquery.form.js"></script>
	<style type="text/css">
		a{cursor:pointer;}
		.hover {
			border-bottom: 1px solid #ddd;
		}
		.View {
    		margin-top: 10px;
		}
		
		.sty span{
			padding: 5px;
			display: inline-block;
			width:73%; 
			overflow:hidden; 
			white-space:nowrap; 
			text-overflow:ellipsis;
			position: absolute;
		}
		.h4, h4{
			margin: 7px 0px 0px 15px;
		}
		#sel{border:1px solid #ddd;padding-top:5px;height:400px;overflow-y: auto;}
		.col-md-3{width: 20%;}
		 .line .control-label{
		 	padding-top:10px;
		 }
		 .btn-default{margin-top: 9px;}
	</style>
<script type = "text/javascript">
$(function(){	
	sessionStorage.name1=$("#blankBusinessCredentialsRuleStr").val();
	sessionStorage.name2=$("#handleCredentialsRuleStr").val();
	sessionStorage.name3=$("#handleCheckChapterRuleStr").val();
	sessionStorage.name4=$("#handleTimeStampRuleStr").val();
	sessionStorage.back1=$("#blankBusinessCredentialsRuleStr1").val();
	sessionStorage.back2=$("#handleCredentialsRuleStr").val();
	sessionStorage.back3=$("#handleCheckChapterRuleStr").val();
	sessionStorage.back4=$("#handleTimeStampRuleStr").val();
	var val=$('input:radio[name="radio"]:checked').val();
    if(val==null){
        $("#operation").css('display','none');
        $(".sty").css('display','none');
    }
    $("input[name=radio]").click(function(){
    	var pro = $('#projId').val();
		var temp = $('#templateId').val();
		var val = $('input:radio[name="radio"]:checked').val();
		$("#operation").css('display','inline-block');
    	$(".sty").css('display','block');
		$.ajax({
			type:"POST",
			url:"<%=basePath%>credentials/credentials.do",
			data:{
				projId: $('#projId').val(),
				templateId:$('#templateId').val(),
				departSystemId:$('input:radio[name="radio"]:checked').val()
			},
			success : function(data){
				$("#projId").val(data.projId);
				$("#templateId").val(data.templateId);
				$("#systemId").val(data.systemId);
				$("#systemId1").val(data.systemId);
				$("#credentialsWithBLOBID").val(data.singleCredentialsWithBLOBs.id);
				$("#receiptCredentialsWithBLOBID").val(data.receiptCredentialsWithBLOBs.id);
				$("#coordinationDepartmentId1").val(data.coordinationDepartmentId);
				$("#coordinationDepartmentId2").val(data.coordinationDepartmentId);
				
				$("#blankBusinessCredentialsRuleStr").val(data.singleCredentialsWithBLOBs.blankBusinessCredentialsRuleStr);
				$("#fileblankBusinessStr").text(data.singleCredentialsWithBLOBs.blankBusinessCredentialsRuleName);
				$("#handleCredentialsRuleStr").val(data.singleCredentialsWithBLOBs.handleCredentialsRuleStr);
				$("#fileHandleCredentialsStr").text(data.singleCredentialsWithBLOBs.handleCredentialsRuleName);
				$("#handleCheckChapterRuleStr").val(data.singleCredentialsWithBLOBs.handleCheckChapterRuleStr);
				$("#fileHandleCheckChapterStr").text(data.singleCredentialsWithBLOBs.handleCheckChapterRuleName);
				$("#handleTimeStampRuleStr").val(data.singleCredentialsWithBLOBs.handleTimeStampRuleStr);
				$("#fileHandleTimeStampStr").text(data.singleCredentialsWithBLOBs.handleTimeStampRuleName);
				
				$("#blankBusinessCredentialsRuleStr1").val(data.receiptCredentialsWithBLOBs.blankBusinessCredentialsRuleStr);
				$("#fileblankBusiness1Str").text(data.receiptCredentialsWithBLOBs.blankBusinessCredentialsRuleName);
				$("#handleCredentialsRuleStr1").val(data.receiptCredentialsWithBLOBs.handleCredentialsRuleStr);
				$("#fileHandleCredentials1Str").text(data.receiptCredentialsWithBLOBs.handleCredentialsRuleName);
				$("#handleCheckChapterRuleStr1").val(data.receiptCredentialsWithBLOBs.handleCheckChapterRuleStr);
				$("#fileHandleCheckChapter1Str").text(data.receiptCredentialsWithBLOBs.handleCheckChapterRuleName);
				$("#handleTimeStampRuleStr1").val(data.receiptCredentialsWithBLOBs.handleTimeStampRuleStr);
				$("#fileHandleTimeStamp1Str").text(data.receiptCredentialsWithBLOBs.handleTimeStampRuleName);
				
				
			}
		})
    });  
  //选择文件
	$('.input').val("");			
	$(".file").on("change","input[type='file']",function(){
        var filePath = $(this).val().split('\\');
        var fileName = filePath[filePath.length-1];
        $(this).parent().next().html(fileName);
        $(this).parent().next().attr("title",fileName);
    })
    $("#blankBusinessCredentialsRuleStr").val(sessionStorage.name1);
    $("#handleCredentialsRuleStr").val(sessionStorage.name2);
    $("#handleCheckChapterRuleStr").val(sessionStorage.name3);
    $("#handleTimeStampRuleStr").val(sessionStorage.name4);
    $("#blankBusinessCredentialsRuleStr1").val(sessionStorage.back1);
    $("#handleCredentialsRuleStr1").val(sessionStorage.back2);
    $("#handleCheckChapterRuleStr1").val(sessionStorage.back3);
    $("#handleTimeStampRuleStr1").val(sessionStorage.back4);
});
	
	 function addRule(){
		var pro = $('#projId').val();
		var temp = $('#templateId').val();
		window.location.href = "<%=basePath%>credentials/getTheAddPage.do?projId="+pro+"&templateId="+temp;
	} 
	function editor(){
		var pro = $('#projId').val();
		var temp = $('#templateId').val();
		var val = $('input:radio[name="radio"]:checked').val();
		window.location.href = "<%=basePath%>credentials/credentials.do?projId="+pro+"&templateId="+temp+"&departSystemId="+val;
	}
	function deleteData(){
		var pro = $('#projId').val();
		var temp = $('#templateId').val();
		var val = $('input:radio[name="radio"]:checked').val();
		window.location.href = "<%=basePath%>credentials/deletecredential.do?projId="+pro+"&templateId="+temp+"&departSystemId="+val;
	}
	
	//选择部门
	function preAdd(){								
				$.ajax({
					type:"POST",
					url :"<%=basePath%>CertificateTrail/selectdepart.do",
					dataType: 'json',
					data : {  
						templateId:$("#templateId").val()
				    },  
				    success : function(result) {
				    for(var i=0;i<result.length;i++){		    				   
					    var option="<option name='departId'  value='"+result[i].depart_id+"'>"+result[i].dpName+"</option>";
					    $("#department").append(option); 
				    }
				    }
				})					
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
				    var option="<option name='systemId'  value='"+result[i].system_id+"'>"+result[i].system_name+"</option>";
				    var input1="<input type='hidden' id='templateId1' name='templateId1' value='"+result[i].template_id+"'/>";
				    var input2="<input type='hidden' id='projId1' name='projId1' value='"+result[i].proj_id+"'/>"
				    $("#sname").append(input1); 
				    $("#sname").append(input2);  
				    $("#sname").append(option); 
				    
			    }
			    }
			})
		}
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
				<div class="col-md-3 col-xs-3 col-sm-3">	
					<button type="button" class="btn btndel-handle" onclick = "preAdd()" data-toggle="modal" data-target="#myModal">添加</button>
						<div id="operation" style="display:inline-block;">
							<!-- <button type="button" class="btn btndel-handle" data-toggle="modal" data-target="#updateModel" onclick="editor()" >修改</button> -->
							<button type="button" class="btn btndel-handle" onclick="deleteData()" >删除</button>
						</div>
					<div class="col-md-12 col-xs-12 col-sm-12 View"><span>&nbsp;凭证制发管理部门-系统列表</span></div>
					<div id="sel" class="col-md-12 col-xs-12 col-sm-12">
						<input type="hidden" id="templateId" name="templateId" value="${templateId}"/>
						<input type="hidden" id="projId" name="projId" value="${projId}"/>
						<c:forEach var="list" items="${credentialsWithBLOBs}" varStatus="s">
						<p><input type="radio" name="radio" value="${list.depart_id}-${list.system_id}-${list.id}"  ><span>${list.dpName}-${list.system_name}</span></p>
						</c:forEach>
					</div>
				</div>
			<div class="col-md-9 col-xs-9 col-sm-9 sty">
				<div class="col-md-6 col-xs-6 col-sm-6" ><h4>空白业务凭证申领表</h4></div>
				<div class="col-md-6 col-xs-6 col-sm-6" ><h4>空白业务凭证回执表</h4></div>
				<form id="Apply" action="credentials/updatecredential.do" method="post" enctype="multipart/form-data" target="ifTmp" >
				<div id="apply" class="col-md-6 col-xs-6 col-sm-6 line">
				<!-- 申领表 -->
					<input type="hidden" id="templateId" name="templateId" value="${templateId}"/>
					<input type="hidden" id="projId" name="projId" value="${projId}"/>
					<input type="hidden" id="credentialsWithBLOBID" name="credentialsWithBLOBID" value="${singleCredentialsWithBLOBs.id}"/>
					<input type="hidden" id="coordinationDepartmentId1" name="coordinationDepartmentId" value="${coordinationDepartmentId}"/>
					<input type="hidden" id="systemId" name="systemId" value="${systemId}"/>
					<input type="hidden" id="credentialsManagementType" name="credentialsManagementType" value="0"/>	
						<div class="form-group">
							    <label for="blankBusinessCredentialsRuleStr" class="col-sm-12 control-label">空白业务凭证申领规则</label>
								<div class="col-md-10 col-xs-10 col-sm-10">
								    <input type="text" class="input form-control" id="blankBusinessCredentialsRuleStr" name="blankBusinessCredentialsRuleStr" data-validation-engine="validate[required]"  placeholder="请填写规则"/>
									<a class="file">
						        	<input type="file" name="fileblankBusiness" title="选择文件" id="fileblankBusiness">添加样例
						    	</a>
						    	<span id="fileblankBusinessStr"></span>
								</div>
						  </div>
						  <div class="form-group">
							    <label for="handleCredentialsRuleStr" class="col-sm-12 control-label">协同办理凭证使用规则</label>
						    <div class="col-md-10 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control" id="handleCredentialsRuleStr" name="handleCredentialsRuleStr" data-validation-engine="validate[required]"  placeholder="请填写规则"/>
						      <a class="file">
						        	<input type="file" name="fileHandleCredentials" title="选择文件" id="fileHandleCredentials">添加样例
						    	</a>
						    	<span id="fileHandleCredentialsStr"></span>
						    </div>
						  </div>
						  <div class="form-group">
							    <label for="handleCheckChapterRuleStr" class="col-sm-12 control-label">协同办理凭证使用规则（用章验章规则）</label>
						    <div class="col-md-10 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control" id="handleCheckChapterRuleStr" name="handleCheckChapterRuleStr" data-validation-engine="validate[required]" placeholder="请填写用章验章规则" value="${singleCredentialsWithBLOBs.handleCheckChapterRuleStr}" />
						      <a class="file">
						        	<input type="file" name="fileHandleCheckChapter" title="选择文件" id="fileHandleCheckChapter">添加样例
						    	</a>
						    	<span id="fileHandleCheckChapterStr">${singleCredentialsWithBLOBs.handleCheckChapterRuleName}</span>
						    </div>
						  </div>
						  <div class="form-group">
							    <label for="handleTimeStampRuleStr" class="col-sm-12 control-label">协同办理凭证使用规则（用时间戳验时间戳规则）</label>
						    <div class="col-md-10 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control" id="handleTimeStampRuleStr" name="handleTimeStampRuleStr" data-validation-engine="validate[required]" placeholder="请填写用时间戳验时间戳规则" value="${singleCredentialsWithBLOBs.handleTimeStampRuleStr}" />
						      <a class="file">
						        	<input type="file" name="fileHandleTimeStamp" title="选择文件" id="fileHandleTimeStamp">添加样例
						    	</a>
						    	<span id="fileHandleTimeStampStr">${singleCredentialsWithBLOBs.handleTimeStampRuleName}</span>
						    </div>
						  </div>
						  <div class="col-md-12 col-xs-12 col-sm-12" >
						  	<button class="btn btn-default" type="button" data-toggle="modal" data-target="#Adata" onclick="addRule()">添加核实凭证使用规则</button>	
						  </div>
						  <div class="col-md-12 col-xs-12 col-sm-12" style="margin-top:20px;">
						  	<div class="col-md-3 col-xs-3 col-sm-3"></div>
						  		<button class="btndel-handle3" type="submit" onclick="sub();">保存申领规则</button>
						  </div>
					</div>
					</form>
					<iframe id="ifActionResult" name="ifTmp" width="1px" height="1px" style="display: none;"></iframe>	  
					<form id="Receipt" action="credentials/updatecredential.do" method="post" enctype="multipart/form-data" target="ifTmp">
				<div id="receipt" class="col-md-6 col-xs-6 col-sm-6 line" style="border-left: 2px dashed #5890c0;">
						<!-- 回执表 -->
					<input type="hidden" id="templateId" name="templateId" value="${templateId}"/>
					<input type="hidden" id="projId" name="projId" value="${projId}"/>
					<input type="hidden" id="receiptCredentialsWithBLOBID" name="credentialsWithBLOBID" value="${receiptCredentialsWithBLOBs.id}"/>
					<input type="hidden" id="coordinationDepartmentId2" name="coordinationDepartmentId" value="${coordinationDepartmentId}"/>
					<input type="hidden" id="systemId1" name="systemId" value="${systemId}"/>
					<input type="hidden" id="credentialsManagementType" name="credentialsManagementType" value="1"/> 
						<div class="form-group">
							    <label for="blankBusinessCredentialsRuleStr" class="col-sm-12 control-label">空白业务凭证回执规则</label>
							<div class="col-md-10 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control" id="blankBusinessCredentialsRuleStr1" name="blankBusinessCredentialsRuleStr" data-validation-engine="validate[required]" placeholder="请填写规则" value="${receiptCredentialsWithBLOBs.blankBusinessCredentialsRuleStr}" />
						      <a class="file">
						        	<input type="file" name="fileblankBusiness" title="选择文件" id="fileblankBusiness1">添加样例
						    	</a>
						    	<span id="fileblankBusiness1Str">${receiptCredentialsWithBLOBs.blankBusinessCredentialsRuleName}</span>
							</div>
 						  </div>
						  <div class="form-group">
							    <label for="handleCredentialsRuleStr" class="col-sm-12 control-label">协同办理凭证使用规则</label>
						    <div class="col-md-10 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control" id="handleCredentialsRuleStr1" name="handleCredentialsRuleStr" data-validation-engine="validate[required]" placeholder="请填写规则" value="${receiptCredentialsWithBLOBs.handleCredentialsRuleStr}" />
						      <a class="file">
						        	<input type="file" name="fileHandleCredentials" title="选择文件" id="fileHandleCredentials1">添加样例
						    	</a>
						    	<span id="fileHandleCredentials1Str">${receiptCredentialsWithBLOBs.handleCredentialsRuleName}</span>
						    </div>
						  </div>
						  <div class="form-group">
							    <label for="handleCheckChapterRuleStr" class="col-sm-12 control-label">协同办理凭证使用规则（用章验章规则）</label>
						    <div class="col-md-10 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control" id="handleCheckChapterRuleStr1" name="handleCheckChapterRuleStr" data-validation-engine="validate[required]" placeholder="请填写用章验章规则" value="${receiptCredentialsWithBLOBs.handleCheckChapterRuleStr}" />
						      <a class="file">
						        	<input type="file" name="fileHandleCheckChapter" title="选择文件" id="fileHandleCheckChapter1">添加样例
						    	</a>
						    	<span id="fileHandleCheckChapter1Str">${receiptCredentialsWithBLOBs.handleCheckChapterRuleName}</span>
						    </div>
						  </div>
						  <div class="form-group">
							    <label for="handleTimeStampRuleStr" class="col-sm-12 control-label">协同办理凭证使用规则（用时间戳验时间戳规则）</label>
						    <div class="col-md-10 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control" id="handleTimeStampRuleStr1" name="handleTimeStampRuleStr" data-validation-engine="validate[required]" placeholder="请填写用时间戳验时间戳规则" value="${receiptCredentialsWithBLOBs.handleTimeStampRuleStr}" />
						      <a class="file">
						        	<input type="file" name="fileHandleTimeStamp" title="选择文件" id="fileHandleTimeStamp1">添加样例
						    	</a>
						    	<span id="fileHandleTimeStamp1Str">${receiptCredentialsWithBLOBs.handleTimeStampRuleName}</span>
						    </div>
						  </div>
						  <div class="col-md-12 col-xs-12 col-sm-12" >
						  	<button class="btn btn-default" type="button" data-toggle="modal" data-target="#Rdata" onclick="addRule()">添加核实凭证使用规则</button>
						  </div>
						<div class="col-md-12 col-xs-12 col-sm-12" style="margin-top:20px;">	
						  	<div class="col-md-3 col-xs-3 col-sm-3" ></div>
							  <button class="btndel-handle3" type="submit" onclick="sub();">保存回执规则</button>
						</div>
					</div>
						</form>
					<input id="im_iframe" name="mm_iframe" style="display:none;"></input>
				</div>
			</div>					
	</div> 
<!-- 添加模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
				</button>
				<h4 class="modal-title" id="myModalLabel">
					添加
				</h4>
			</div>
			<form id="applyForm" class="form-horizontal" action="<%=basePath%>credentials/addDepartMentSystem.do" method="post">
				<div class="modal-body">
					<div class="form-group">
						<label for="Administration" class="col-sm-2 control-label">管理部门 </label>
						<div class="col-sm-8">
						<select class="form-control" id="department" name="department" data-validation-engine="validate[required]" onchange="selectsystem(this)">
						<option selected="selected" value="">请选择</option>
						</select>
						</div>
					</div>
					<div class="form-group">
						<label for="sname" class="col-sm-2 control-label">系统名称</label>
						<div class="col-sm-8">
							<select class="form-control" id="sname" data-validation-engine="validate[required]" name="sname"></select>
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">关闭
					</button>
					<button type="submit" class="btn btn-primary">
						提交
					</button>
				</div>
			</form>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->
</div> 
<script src="<%=basePath%>bs/js/jquery.validationEngine.min.js"></script>	
<script src="<%=basePath%>bs/js/jquery.validationEngine-zh-CN.js"></script>		
<script type="text/javascript">
$.validationEngine.defaults.scroll = false;
jQuery(document).ready(function(){
  jQuery('#applyForm').validationEngine();
});
</script>
</body>
</html>
