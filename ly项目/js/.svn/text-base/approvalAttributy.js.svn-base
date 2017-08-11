var basePath = window.location.protocol+"//"+window.location.host
//审批节点js
//点击添加弹出框
function preAdd(){
	$("#approvalName1").val("");
	$("#myModal").modal("show");
	var templateId = $("#templateId").val();
	var obj = $("#organizationId1");
	selectAllOrg(templateId,obj);
}
//添加审批节点
function addApprovalNode(){
	var orgValue = $("#organizationId1").val();
	if(orgValue != "" && nodeName != ""){
		$("#addApprovalNodeForm").submit();
	}
}
//点击增加初始环节摸态框
function preAddIni(){
	var id = $("#nodeId").val();
	$("#nId").val(id);
}
//点击增加普通环节摸态框
function preAddGen(){
	var id = $("#nodeId").val();
	$("#nnId").val(id);
}
//点击修改弹出框
function preUpdate(){
	var nodeValue = $("input:radio[name='radio']:checked").val();
	if(nodeValue == null){
		alert("请选择要修改的数据项")
		return;
	}
	var organizationId = $("input[type='radio']:checked + span").attr('id');
	$("#updateModel").modal("show");
	var obj = $("#organizationId2");
	var templateId = $("#templateId").val();
	selectAllOrg(templateId,obj);
	var nodeName = $("input[type='radio']:checked").val();
	$("#approvalName2").val(nodeName);
	var nodeId = $("input[type='radio']:checked").attr('id');
	$("#approvalNodeId").val(nodeId);
	obj.val(organizationId)
	/*var select=document.getElementById("organizationId2");
	for(var i=0;i<select.options.length;i++){
		if(select.options[i].value==organizationId){
			select.options[i].selected=true;
			break;
		}
	}*/
}
//修改审批节点
function updateApprovalNode(){
	var orgValue = $("#organizationId2").val();
	if(orgValue != "" && nodeName != ""){
		$("#updaTeApprovalNodeForm").submit();
	}
}
// 删除审批节点
function deleteApprovalNode(){
	var nodeId = $("input[type='radio']:checked").attr('id');
	if(confirm("确定要删除该条信息?")){
		$.ajax({
			type : "post",
			url : basePath + "/BusinessCollaboration/approvalAttributy/deleteApprovalNode.do",
			data : {
				"approvalNodeId" : nodeId
			},
			success : function(jsonData){
				if(jsonData == 1){
					console.log("删除成功");
					window.location.href = basePath + "/BusinessCollaboration/approvalAttributy/intoApprovalNode.do?templateId="+$("#templateId").val()+"&projId="+$("#projId").val();
				}
			}
		});
	}
}
// 获取组织机构
function selectAllOrg(templateId,obj){
	obj.html("");
	$.ajax({
		async:false,
		type : "post",
		url : basePath + "/BusinessCollaboration/approvalAttributy/selectAllOrg.do",
		data : {
			"templateId" : templateId
		},
		success : function(jsonData){
			if(jsonData.length != 0){
				obj.append("<option value='' select='selected'>请选择</option>");
				for(var i = 0;i < jsonData.length; i++){
					obj.append("<option value="+jsonData[i].id+">"+jsonData[i].organizationName+"</option>");
				}
			}else{
				obj.append("<option select='selected'>请选择</option>");
			}
		}
	});
}

//查询单个审批节点的审批记录
/*function selectRecord(){
	$("#table_style").empty(" ");
	$("#operation").css('display','inline-block');
	$("#myTab").css('display','inline-block');
	var approvalNodeId = $("input[type='radio']:checked").attr("id");
	$("#nId").val(approvalNodeId);
	$.ajax({
		async : false,
		type : "post",
		url : basePath + "/BusinessCollaboration/approvalRecord/selectAll.do",
		data : {
			"approvalNodeId" : approvalNodeId,
			"templateId" : $("#templateId").val()
		},
		success : function(json){
			if(json.length != 0){
				var isSignature ="";
				for(i in json){
				var depart=json[i].depart,departs="",time='',
				index=parseInt(i)+1;				
					if(json[i].data.issignature == 1){
						isSignature = "是";
					}else if(json[i].data.issignature == 0){
						isSignature = "否";
					}
					for(j in depart){//循环部门
						departs+=depart[j]+"<br>";
						
					}
					if(departs==''){
						departs	="<br>";					
					}
					time+='<b>到件时间:</b>'+json[i].data.arrivalTime+'<br>'+
					'<b>签收时间:</b>'+json[i].data.signTime+'<br>'+
					'<b>转业务系统办理时间:</b>'+json[i].data.applyTime+'<br>'+
					'<b>办理结果转入本凭证时间:</b>'+json[i].data.rollinTime+'<br>'+
					'<b>转下一环节发件时间:</b>'+json[i].data.sendTime+'<br>'+
					'<b>本审批环节额定用时:</b>'+json[i].data.ratedTime+'<br>'+
					'<b>本审批环节实际用时:</b>'+json[i].data.actualTime+'<br>';	
					$("#table_style").append("<tr><td>"+index+"</td>"+
						 "<td>"+json[i].data.examineOpinionFilename+"</td>"+"" +
						 "<td>"+json[i].data.returnReasonFilename+"</td>"+							
						 "<td><button type='button' class='btn btn-sm btn-default' role='button' data-toggle='popover' data-trigger='focus' data-placement='right'  data-html='true'" +
						 " data-content='" +time+"'>" +
						 " 详细信息</button></td>"+											
						 "+<td>"+json[i].data.signetFilename+"</td>"+
						 "<td><button type='button' class='btn btn-sm btn-default' role='button' data-toggle='popover' data-trigger='focus' data-placement='right'  data-html='true'" +
							 " data-content='" +departs	+"'>" +
							 " 详细信息</button>"+
						 "</td>"+
						 "+<td>"+isSignature+"</td>"+
						 "+<td><a data-toggle='modal'id='"+json[i].data.recordId+"' onclick='preUpdateRecord(this)'> 修改 </a>"+
						 "<a id='"+json[i].data.recordId+"' onclick='deleteRecord(this)'> 删除 </a>"+
						 "</td></tr>");										
				}//for结束
				  $('[data-toggle="popover"]').popover();//调用弹出（气泡）
			}
		}
	});	
}*/

//进入普通环节
function selectHandMatter(){
	$("#gentable").empty(" ");
	var approvalNodeId = $("input[type='radio']:checked").attr("id");
	$.ajax({
		async : false,
		type : "post",
		url : basePath + "/BusinessCollaboration/generalLink/selectAll.do",
		data : {
			"approvalNodeId" : approvalNodeId,
		},
		success : function(json){
			if(json.length != 0){
				var isSignature ="";
				for(i in json){
					$("#gentable").append(
						 "<tr><td>"+json[i].gist+"</td>"+"" +
						 "<td>"+json[i].arrivalTime+"</td>"+							
						 "<td>"+json[i].receiveTime+"</td>"+											
						 "<td>"+json[i].transactTime+"</td>"+
						 "<td>"+json[i].rollinTime+"</td>"+
						 "<td><a  id='"+json[i].recordId+"' onclick='preupdateGeneralLink("+json[i].recordId+","+'"'+json[i].gist+'"'+","+'"'+json[i].arrivalTime+'"'+","+'"'+json[i].receiveTime+'"'+","+'"'+json[i].transactTime+'"'+
						 ","+'"'+json[i].rollinTime+'"'+")'> 修改 </a>&nbsp;&nbsp;"+
						 "<a id='"+json[i].recordId+"' onclick='deleteGeneralLink(this)'> 删除 </a>&nbsp;&nbsp;"+
						 "<a id='"+json[i].recordId+"' onclick='goOtherPage1(this)'> 管理 </a>"+
						 "</td></tr>");										
				}//for结束
				 
			}
		}
	});
}

//修改初始环节
function UpdateInitialLink(id,gist,applyTime,rollinTime,makeTime,finishTime,sendoutTime){
	var noid = $("#nodeId").val();
	$("#noId").val(noid);
	$("#upInitialLink").modal("show");
	$("#iniId").val(id);
	$("#upgist").val(gist);
	$("#upapplyTime").val(applyTime);
	$("#uprollinTime").val(rollinTime);
	$("#upmakeTime").val(makeTime);
	$("#upfinishTime").val(finishTime);
	$("#upsendoutTime").val(sendoutTime);
	
}
//弹出修改普通环节摸态框
function preupdateGeneralLink(id,gist,arrivalTime,receiveTime,transactTime,rollinTime){
	var ngId = $("#nodeId").val();
	$("#ngId").val(ngId);
	$("#upOrdinaryLink").modal("show");
	$("#genId").val(id);
	$("#upGenGist").val(gist);
	$("#uparrivalTime").val(arrivalTime);
	$("#upreceiveTime").val(receiveTime);
	$("#uptransactTime").val(transactTime);
	$("#upGenrollinTime").val(rollinTime);
}
//修改普通环节
function updateGeneralLink(){
	$.ajax({ 
		anync : false,
		url : basePath + "/BusinessCollaboration/generalLink/updateGeneralLink.do",
		type : "POST",
		data : $('#upOrdinaryLinkForm').serialize(),
		success:function(jsonData){
			$("#upOrdinaryLink").modal("hide");
			selectHandMatter();
		}
	});
}
//增加普通环节
function addGeneralLink(){
	$.ajax({ 
		anync : false,
		url : basePath + "/BusinessCollaboration/generalLink/AddGeneralLink.do",
		type : "POST",
		data : $('#addOrdinaryLinkForm').serialize(),
		success:function(jsonData){
			$("#addOrdinaryLink").modal("hide");
			selectHandMatter();
		}
	});
}
//进入修改审批记录页面
/*function preUpdateRecord(obj){
    var approvalNodeId = $("input[type='radio']:checked").attr('id');
    var templateId = $("#templateId").val();
    var projId = $("#projId").val();
    var recordId = obj.id;
    window.location.href =  basePath +  "/BusinessCollaboration/approvalRecord/preUpdateRecord.do?nodeId="+approvalNodeId+"&temId="+templateId+"&projId="+projId+"&recordId="+recordId;
}*/
//删除初始环节
function deleteInitialLink(id){
	var noid = $("#nodeId").val();
	if(confirm("确定要删除该条信息?")){
		$.ajax({
			async : false,
			type : "post",
			url : basePath + "/BusinessCollaboration/initialLink/deleteInitialLink.do",
			data : {
				"iniId" : id
			},
			success : function(jsonData){
				if(jsonData == 1){
					selectRecord(noid);
				}
			}
		});
	}
}
//删除普通环节
function deleteGeneralLink(obj){
	if(confirm("确定要删除该条信息?")){
		$.ajax({
			async : false,
			type : "post",
			url : basePath + "/BusinessCollaboration/generalLink/deleteGeneralLink.do",
			data : {
				"genId" : obj.id
			},
			success : function(jsonData){
				if(jsonData == 1){
					selectHandMatter();
				}
			}
		});
	}
}
//跳转到普通环节管理页面
function goOtherPage1(){
	alert("putong")
}
//跳转到起始环节管理页面
function goOtherPage2(id){
	var temId = $("#temmId").val();
	window.location.href =basePath + "/BusinessCollaboration/transactDetail/selectAll.do?recordId=" + id+"&temId="+temId;
}
//查看部门与系统名称
function selectDeparts(obj){
	$.ajax({
		async : false,
		type : "post",
		url : basePath + "/BusinessCollaboration/approvalRecord/selectDepAndSysInfo.do",
		data : {
			"recordId" : obj.id
		},
		success : function(jsonData){
			var result = $.parseJSON(jsonData);	
			var treeNodes = result;
		   	zTreeObj = $.fn.zTree.init($("#tree"), setting, treeNodes);
		   	zTreeObj.expandAll(true);
		}
	});	
	
}
//查看日期格式
function selectDateTime(obj){
	$("#dateTime_tbody").empty();
	$.ajax({
		async : false,
		type : "post",
		url : basePath + "/BusinessCollaboration/approvalRecord/selectApprovalRecord.do",
		data : {
			"recordId" : obj.id
		},
		success : function(jsonData){
			  $("#dateTime_tbody").append("<tr><td>"+jsonData.arrivalTime+"</td>" +
						"<td>"+jsonData.signTime+"</td>" +
						"<td>"+jsonData.applyTime+"</td>" +
						"<td>"+jsonData.rollinTime+"</td>" +
						"<td>"+jsonData.sendTime+"</td>" +
						"<td>"+jsonData.ratedTime+"</td>" +
						"<td>"+jsonData.actualTime+"</td></tr>");
			  $("#dateTimeModal").modal("show");
		}
	});	
}

//保存和修改审批记录公共类
function saveAndUpdate(obj){
	var fileObjs = $("input[type='file']");
	var result = 1;
	for(var i = 0;i < fileObjs.length; i++){
		//console.log(fileObjs[i].name);
		var typeArr;
		var fileType;
		if(fileObjs[i].name == "signet"){
			 typeArr = [".jpg",".jpeg",".png"];
			 fileType = "部门审批专用印章";
		}else{
			 typeArr = [".doc",".docx",".xls",".xlsx",".txt",".pdf"];
			 fileType = "审批意见和退件理由";
		}
		var fileValue = fileObjs[i].value;
		var fileSingleSize = 2 * 1024 * 1024;
		var fileSize;
		if(fileValue.length > 0){
			fileSize = judgeFileType(fileType,fileObjs[i],typeArr);
		}
		if(fileSize > fileSingleSize){
			alert("文件大小不符合要求，单个文件限制2M之内");  
			reuslt = 0;
			return;
		}
		if(fileSize == 0){
			result = 0;
			return;
		}
	}
	if(result == 1){
		obj.submit();
	}
}
//保存审批记录
function saveApprovalRecord(){
	var obj = $("#addForm");
	saveAndUpdate(obj);
}
//修改审批记录
function updateApprovalRecord(){
	var obj = $("#updateForm");
	saveAndUpdate(obj);
}

