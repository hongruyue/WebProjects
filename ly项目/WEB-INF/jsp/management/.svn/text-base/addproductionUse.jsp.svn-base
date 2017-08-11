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
		<title>添加凭证制发与使用管理</title>
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
		<style type="text/css">
		a{cursor:pointer;color:#271bed;}
		.View2{
			margin-top:10px;
			font-weight: 900;
			color: #006091;
			padding-left: 10px;
		}
		.tablet{
			border-bottom:1px solid #ddd;
			
		}
		.tablet td{
			font-size:12px;
			color: #157fb3;
			font-weight: 900;
		}
		.heigh{
			max-height: 352px;
			overflow-y: auto;
		}
		.nav-tabs {
		    border-bottom: none;
		}
		 .nav-tabs>li{position: relative;font-size: 12px;top: 12px;border-radius: 8px 8px 0px 0px;}
		.nav-tabs>li>a:hover{
		background-color:#3693EF;
		border-color: #fff;
		}
		  .active>a{
		 	border-bottom:none;
		 }
		 .active>a:hover{
		 	background-color:  #fff;
			color:#ddd;
		 } 
		.nav > li > a{
			border-radius: 8px 8px 0px 0px;
			margin-left: 5px;
			border:1px solid #fff;
			padding: 5px 15px;
			background-color: #00BCF2;
			color: #fff;
		}
		.col-md-8{overflow:hidden; 
			white-space:nowrap; 
			text-overflow:ellipsis;}
		.selAttributes,.bottom{
				height: 150px !important;
				width: 170px;
			}
			.btn-bar{
				text-align: center;
			}
			.btn-bar span{
				cursor:pointer;
			}
			.bordott{border: 2px dotted #2aaae9;
					padding: 20px 10px;}
			option{word-wrap: break-word;}			
		</style>
		<script type = "text/javascript">
		var Id;
		$(function(){
			Id=$(".in").attr("id");
			$("#myTab li").click(function(){
				Id=$(this).children().attr("href").replace("#","");
			});
			//选择文件
			$('.input').val("");			
			$(".file").on("change","input[type='file']",function(){
	            var filePath = $(this).val().split('\\');
	            var fileName = filePath[filePath.length-1];
	            $(this).parent().next().html(fileName);
	            $(this).parent().next().attr("title",fileName);
	        })
			//移到右边
			$(".add1").click(function(){
				//先判断是否有选中
				if(!$("#"+Id+" .bottom option").is(":selected")){			
					alert("请选择需要移动的选项")
				}
				//获取选中的选项，删除并追加给对方
				else{
					$("#"+Id+" .bottom option:selected").appendTo("#"+Id+" .selAttributes");
				}	
			});
			
			//移到左边
			$(".remove1").click(function(){
				//先判断是否有选中
				if(!$("#"+Id+" .selAttributes option").is(":selected")){			
					alert("请选择需要移动的选项")
				}
				else{
					$("#"+Id+" .selAttributes option:selected").appendTo("#"+Id+" .bottom");
				}
			});
			$(".getContentBasic").click(function(){
				getContentBasicInfoVO('data','getData','dataName');
			});
			$(".getContentLicense").click(function(){
				getContentLicense('contentLicense','getContentLicense','contentLicenseName');
			});
			$(".getContentLicense2").click(function(){
				getContentLicense('contentVitalDocument','getContentVitalDocument','contentVitalDocumentName');
			});
		});
		function addClick(){
			var array = new Array();
			$("#"+Id+" .selAttributes option").each(function(){  //遍历所有option  
		          var txt = $(this).text();   //获取option值   
		               array.push(txt);  //添加到数组中  
		     })
			$("#"+Id+" .tablet tbody").append('<tr><td width="25%">'+$("#"+Id+" .ruleName").val()+'</td><td width="25%">'+$("#"+Id+" .ruleCenter").val()+'</td><td width="20%">'+$("#"+Id+" .file").next().text()+'</td><td width="20%">'+array+'</td><td width="10%"><a onclick="del(this)"> 删除</a></td></tr>');
			$("#"+Id+" .ruleName").val("");
			$("#"+Id+" .ruleCenter").val("");
			$("#"+Id+" .file").next().text("");
			$("#"+Id+" .selAttributes option").appendTo("#"+Id+" .bottom");
		}
		function del(e){
			$(e).parent().parent().remove();			
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
		function getId(){
			var coordinationDepartmentId = $('#coordinationDepartmentId').val();
			var systemId=$("#sname option:selected").val(); 
			$("#coordinationDepartmentId1").val(coordinationDepartmentId);
			$("#coordinationDepartmentId2").val(coordinationDepartmentId);
			$("#systemId1").val(systemId);
			$("#systemId2").val(systemId);
		}
		function saveData(){
			$("#Apply").submit();
			//清空模态框
			$('.Adata').html("");
			$('.Alicence').html("");
			$('.Aimportant').html("");
			//清空选择文件
			$(".file").next().html("");
			$(".file").next().attr("title","");
			$("#blankBusinessCredentialsRuleStr").val('');
			$("#handleCredentialsRuleStr").val('');
			$("#handleCheckChapterRuleStr").val('');
			$("#handleTimeStampRuleStr").val('');
			
			alert("调试1");
			$("#fileblankBusiness").val("");
			alert("调试2")
			$("#fileblankBusiness").after($("#fileblankBusiness").clone().val(""));
			alert("调试3")
			$("#fileblankBusiness").remove();
			$("#fileHandleCredentials").val("");
			$("#fileHandleCheckChapter").val("");
			$("#fileHandleTimeStamp").val("");
			
			$("#fileHandleTimeStamp").val('');
			$("#fileHandleTimeStamp").val('');
			$("#fileHandleTimeStamp").val('');
		}
		
		function saveDataRepict(){
			//清空模态框
			$("#Receipt").submit();
			$('.Rdata').html("");
			$('.Rlicence').html("");
			$('.Rimportant').html("");
			//清空选择文件
			$(".file").next().html("");
			$(".file").next().attr("title","");
			$("#blankBusinessCredentialsRuleStr1").val('');
			$("#handleCredentialsRuleStr1").val('');
			$("#handleCheckChapterRuleStr1").val('');
			$("#handleTimeStampRuleStr1").val('');
			$("#fileblankBusiness1").val('');
			$("#fileHandleCredentials1").val('');
			$("#fileHandleCheckChapter1").val('');
			$("#fileHandleTimeStamp1").val('');
			
			$("#fileHandleTimeStamp").val('');
			$("#fileHandleTimeStamp").val('');
			$("#fileHandleTimeStamp").val('');
		}
		
		function back(){
			window.history.back(-1);
		}
		
		window.onload=function(){
			getContentBasicInfoVO('data','getData','dataName');
		}
		
		function getContentBasicInfoVO(a,b,c){
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
			//}
		} 
		
		function getContentLicense(a,b,c){
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
		}
		</script>
	</head>
<body>
	<div id="man_zone" class="mianbody">
			<div class="softtm">
				<ul id="myTab" class="nav nav-tabs">
					<li class="active">
						<a href="#data" class="getContentBasic" data-toggle="tab">数据核实凭证使用规则</a>
					</li>
					<li>
						<a href="#licence" class="getContentLicense" data-toggle="tab">证照核实凭证使用规则</a>
					</li>
					<li>
						<a href="#important" class="getContentLicense2" data-toggle="tab">要件核实凭证使用规则</a>
					</li>
				</ul>
				<a class="a" type="button" id="back" href="javascript:history.go(-1);" style="float:right;position: relative;bottom: 25px;right: 10px;">
					<img alt="返回" src="<%=basePath%>img/back_buss.png" />
				</a>
			</div>			
		<div class="row show-grid" style="padding: 1% 1% 0% 1%;">
			<div id="myTabContent" class="tab-content">	
			
<!--//////////////数据核实凭证使用规则////////////////////  -->

			<div class="tab-pane fade in active" id="data">
				<div class="col-md-5 col-xs-5 col-sm-5">
				<form class="form-horizontal">
				<div class="col-md-12 col-xs-12 col-sm-12 View2"><span >填写规则</span></div>
				<div class="col-md-12 col-xs-12 col-sm-12 bordott">
				<input type="hidden" id="templateId" name="templateId" value="${templateId}"/>
				<input type="hidden" id="projId" name="projId" value="${projId}"/>
				<input type="hidden" id="systemId" name="systemId" value="${systemId}"/>
				<input type="hidden" id="credentialsWithBLOBID" name="credentialsWithBLOBID" value="${id}"/>
					<div class="form-group">
							    <label for="ruleName" class="col-sm-3 control-label">填写规则名称</label>
						    <div class="col-md-8 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control ruleName" id="ruleName" name="ruleName" data-validation-engine="validate[required]" placeholder="请填写名称"/>
						    </div>
					</div>
					<div class="form-group">
							    <label for="ruleCenter" class="col-sm-3 control-label">填写规则内容</label>
						    <div class="col-md-8 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control ruleCenter" id="ruleCenter" name="ruleCenter" data-validation-engine="validate[required]" placeholder="请填写规则"/>
						      <a class="file">
						        	<input type="file" title="选择文件">添加样例
						    	</a>
						    	<span>${examineOpinion}</span>
						    </div>
					</div>
					<div class="col-md-5 col-xs-5 col-sm-5">
								<div class=" col-md-12 col-xs-12 col-sm-12" >
									<span>选择基本属性</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" id="dataName" class="bottom">
										<option>身份证</option>
										 <option>居住证</option>																																						     
								    </select>							
								</div>
					</div>
					<div class="btn-bar col-md-1 col-xs-1 col-sm-1">
								<br>
								<br>
								<br>
								<p><span class="add1">>></span></p>
						     <p><span class="remove1">&lt;&lt;</span></p>
					</div>
			        <div class="col-md-5 col-xs-5 col-sm-5">
								<div class="lf_top col-md-12 col-xs-12 col-sm-12" >
									<span>已选基本属性</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" class="selAttributes"></select>
								</div>
					</div>
				</div>
				
				<div class="col-md-12 col-xs-12 col-sm-12">
				<div class="col-md-4 col-xs-4 col-sm-4" ></div>
					<button class="btndel-handle2" type="button" style="margin-top: 10px;" onclick="addClick()">添加规则</button>
				</div>
				</form>
				</div>
				
				<div class="col-md-7 col-xs-7 col-sm-7">
					<div class="col-md-12 col-xs-12 col-sm-12"><span class="col-md-12 col-xs-12 col-sm-12 View">规则列表</span></div>
					<div class="col-md-12 col-xs-12 col-sm-12 heigh">
						<div class="table_style">
								<table class="table table-hover table-condensed tablet">
									<thead>
									<tr>
										<th width="25%">规则名称</th>								
										<th width="25%">规则</th>
										<th width="20%">规则样例</th>
										<th width="20%">已选基本属性</th>															
										<th width="10%">操作</th>
									</tr>
									</thead>
									<tbody>				
									<tr >
										<td width="25%">规则名称</td>								
										<td width="25%">规则</td>																		
										<td width="20%">规则样例</td>																		
										<td width="20%">基本属性</td>														
				                        <td width="10%">
				                          	<a onclick="del(this)"> 删除</a>	                           
			                            </td>
									</tr>
									</tbody>
								</table>
						</div>
					</div>
					<div class="col-md-12 col-xs-12 col-sm-12">
					<div class="col-md-4 col-xs-4 col-sm-4" ></div>
						<button class="btndel-handle2" type="button" >保存规则</button>
					</div>
				</div>
				</div>
				
				
<!-- //////////////证照核实凭证使用规则////////////// -->
				
			<div class="tab-pane fade" id="licence">
				<div class="col-md-5 col-xs-5 col-sm-5">
				<form class="form-horizontal">
				<div class="col-md-12 col-xs-12 col-sm-12 View2"><span >填写规则</span></div>
				<div class="col-md-12 col-xs-12 col-sm-12 bordott" >
					<div class="form-group">
							    <label  class="col-sm-3 control-label">填写规则名称</label>
						    <div class="col-md-8 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control ruleName" id="" name="" data-validation-engine="validate[required]" placeholder="请填写名称"/>
						    </div>
					</div>
					<div class="form-group">
							    <label  class="col-sm-3 control-label">填写规则内容</label>
						    <div class="col-md-8 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control ruleCenter" id="" name="" data-validation-engine="validate[required]" placeholder="请填写规则"/>
						      <a class="file">
						        	<input type="file" title="选择文件" >添加样例
						    	</a>
						    	<span>${examineOpinion}</span>
						    </div>
					</div>
					<div class="col-md-5 col-xs-5 col-sm-5">
								<div class=" col-md-12 col-xs-12 col-sm-12" >
									<span>选择基本属性</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" id="contentLicenseName" class="bottom">
										<option>身份证</option>
										 <option>居住证</option>																																						     
								    </select>							
								</div>
					</div>
					<div class="btn-bar col-md-1 col-xs-1 col-sm-1">
								<br>
								<br>
								<br>
								<p><span class="add1">>></span></p>
						     <p><span class="remove1">&lt;&lt;</span></p>
					</div>
			        <div class="col-md-5 col-xs-5 col-sm-5">
								<div class="lf_top col-md-12 col-xs-12 col-sm-12" >
									<span>已选基本属性</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" class="selAttributes"></select>
								</div>
					</div>
				</div>
				
				<div class="col-md-12 col-xs-12 col-sm-12">
				<div class="col-md-4 col-xs-4 col-sm-4" ></div>
					<button class="btndel-handle2" type="button" style="margin-top: 10px;" onclick="addClick()">添加规则</button>
				</div>
				</form>
				</div>
				
				<div class="col-md-7 col-xs-7 col-sm-7">
					<div class="col-md-12 col-xs-12 col-sm-12"><span class="col-md-12 col-xs-12 col-sm-12 View">规则列表</span></div>
					<div class="col-md-12 col-xs-12 col-sm-12 heigh">
						<div class="table_style">
								<table class="table table-hover table-condensed tablet">
									<thead>
									<tr>
										<th width="25%">规则名称</th>								
										<th width="25%">规则</th>
										<th width="20%">规则样例</th>
										<th width="20%">已选基本属性</th>															
										<th width="10%">操作</th>
									</tr>
									</thead>
									<tbody>				
									<tr >
										<td width="25%">规则名称</td>								
										<td width="25%">规则</td>																		
										<td width="20%">规则样例</td>																		
										<td width="20%">基本属性</td>														
				                        <td width="10%">
				                          	<a onclick="del(this)"> 删除</a>	                           
			                            </td>
									</tr>
									</tbody>
								</table>
						</div>
					</div>
					<div class="col-md-12 col-xs-12 col-sm-12">
					<div class="col-md-4 col-xs-4 col-sm-4" ></div>
						<button class="btndel-handle2" type="button" >保存规则</button>
					</div>
				</div>
			</div> 
			
<!-- ////////////要件核实凭证使用规则///////////////////// -->
			
			<div class="tab-pane fade" id="important">
				<div class="col-md-5 col-xs-5 col-sm-5">
				<form class="form-horizontal">
				<div class="col-md-12 col-xs-12 col-sm-12 View2"><span >填写规则</span></div>
				<div class="col-md-12 col-xs-12 col-sm-12 bordott" >
					<div class="form-group">
							    <label  class="col-sm-3 control-label">填写规则名称</label>
						    <div class="col-md-8 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control ruleName" id="" name="" data-validation-engine="validate[required]" placeholder="请填写名称"/>
						    </div>
					</div>
					<div class="form-group">
							    <label  class="col-sm-3 control-label">填写规则内容</label>
						    <div class="col-md-8 col-xs-10 col-sm-10">
							    <input type="text" class="input form-control ruleCenter" id="" name="" data-validation-engine="validate[required]" placeholder="请填写规则"/>
						      <a class="file">
						        	<input type="file" title="选择文件" >添加样例
						    	</a>
						    	<span>${examineOpinion}</span>
						    </div>
					</div>
					<div class="col-md-5 col-xs-5 col-sm-5">
								<div class=" col-md-12 col-xs-12 col-sm-12" >
									<span>选择基本属性</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" id="contentVitalDocumentName" class="bottom">
										<option>身份证</option>
										 <option>居住证</option>																																						     
								    </select>							
								</div>
					</div>
					<div class="btn-bar col-md-1 col-xs-1 col-sm-1">
								<br>
								<br>
								<br>
								<p><span class="add1">>></span></p>
						     <p><span class="remove1">&lt;&lt;</span></p>
					</div>
			        <div class="col-md-5 col-xs-5 col-sm-5">
								<div class="lf_top col-md-12 col-xs-12 col-sm-12" >
									<span>已选基本属性</span>
								</div>
								<div class="col-md-12 col-xs-12 col-sm-12" >
									<select multiple="multiple" class="selAttributes"></select>
								</div>
					</div>
				</div>
				
				<div class="col-md-12 col-xs-12 col-sm-12">
				<div class="col-md-4 col-xs-4 col-sm-4" ></div>
					<button class="btndel-handle2" type="button" style="margin-top: 10px;" onclick="addClick()">添加规则</button>
				</div>
				</form>
				</div>
				
				<div class="col-md-7 col-xs-7 col-sm-7">
					<div class="col-md-12 col-xs-12 col-sm-12"><span class="col-md-12 col-xs-12 col-sm-12 View">规则列表</span></div>
					<div class="col-md-12 col-xs-12 col-sm-12 heigh">
						<div class="table_style">
								<table class="table table-hover table-condensed tablet">
									<thead>
									<tr>
										<th width="25%">规则名称</th>								
										<th width="25%">规则</th>
										<th width="20%">规则样例</th>
										<th width="20%">已选基本属性</th>															
										<th width="10%">操作</th>
									</tr>
									</thead>
									<tbody>				
									<tr >
										<td width="25%">规则名称</td>								
										<td width="25%">规则</td>																		
										<td width="20%">规则样例</td>																		
										<td width="20%">基本属性</td>														
				                        <td width="10%">
				                          	<a onclick="del(this)"> 删除</a>	                           
			                            </td>
									</tr>
									</tbody>
								</table>
						</div>
					</div>
					<div class="col-md-12 col-xs-12 col-sm-12">
					<div class="col-md-4 col-xs-4 col-sm-4" ></div>
						<button class="btndel-handle2" type="button" >保存规则</button>
					</div>
				</div>
				</div> 
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
