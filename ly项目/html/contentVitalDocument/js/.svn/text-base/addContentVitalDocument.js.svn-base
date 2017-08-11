//数据来源
function modalShow(title){
	$("#storagemTbody").html("");
	$("#shareTbody").html("");
	$("input[type='checkbox']").prop("checked",false);
	switch (title){
	
	 case "byVerify": $("#fromVerifyTitle").html("选择该证照由谁核实"),
	 				  $("#fromVerifySec").val("fromCheck");
	 	$("#fromVerify").modal("show");
  		break;
	case "toVerify": $("#toVerifyTitle").html("选择该证照向谁核实"),
					 $("#toVerifySec").val("toCheck");
		$("#toVerify").modal("show");
		break;
	case "shared": $("#shareTitle").html("选择该核实结果谁需要共享"),
				   $("#shareSec").val("checkShareHandlMatterIds");
		$("#share").modal("show");
		break;
	case "putStorage": $("#storageTitle").html("选择该核实结果谁需要入库"),
	     			   $("#storageSec").val("storageOrgIds");
		$("#storage").modal("show");
		break;
   }
}
//数据来源左侧全选
function checkAll(name) { 
	var el = document.getElementsByTagName('input'); 
	var len = el.length; 
	for(var i=0; i<len; i++) { 
		if((el[i].type=="checkbox") && (el[i].name==name)) { 
		el[i].checked = true; 
		} 
	} 
	if(name=="dpatSysm"){
		depart();
		return
	}
	if(name=="dpat2"){
		handlMatter();
		return;
	}
} 
function clearAll(name) {
	var el = document.getElementsByTagName('input'); 
	var len = el.length; 
	for(var i=0; i<len; i++) { 
		if((el[i].type=="checkbox") && (el[i].name==name)) { 
			el[i].checked = false; 
		} 
	} 
	if(name == "dpat2"){
		handlMatter();
		return;
	}
	if(name == "dpatSysm"){
		depart();
		return;
	}
}
//部门勾选显示系统
function depart(){
	var check_val = [];   
	$("input:checkbox[name='dpatSysm']:checked").each(function(){
		check_val.push($(this).val());
	})
	if(check_val.length!=0){
		$("#storagemTbody").html("");
		$.ajax({
	    	traditional: true,
	    	type:"post",
			url:urlpath+"coordinationTemplate/getShareOrgDepSys.do",
			data:{
				templateId:templateId,
				departIds:check_val
			},
			success:function(result){
				if(result.length!=0){
			       for(i in result){				    	 
			    	  var tr="<tr>"+
						"<td><input type='checkbox' id='"+result[i].system.systemId+"' value='"+result[i].organization.organizationName+result[i].depart.departName+result[i].system.systemName+"' name='syetem'></td>"+				
						"<td>"+result[i].system.systemName+"</td>"+
						"<td>"+result[i].system.systemAddress+"</td>"+
						"<td>"+result[i].organization.organizationName+result[i].depart.departName+"</td>"+
					"</tr>";
			    	   $("#storagemTbody").append(tr);				    
			       }
				}
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			}
	    }); 
	}else{
		$("#storagemTbody").html("");
	}
}
//入库
function saveStorage(){
	var id = $("#storageSec").val();
	var check_id = [],check_val = [];   
	$("input:checkbox[name='syetem']:checked").each(function(){
		check_id.push(this.id);
		check_val.push($(this).val());
	})
	$("#"+id+"1").val(check_id);
	$("#"+id).val(check_val);
	$("#storage").modal("hide");
}
//核实
function saveFromVerify(){
	var id = $("#fromVerifySec").val();
	var check_id = [],check_val = [];
	$("input:checkbox[name='fromDpat']:checked").each(function(){
		check_id.push(this.id);
		check_val.push($(this).val());
	})
	$("#"+id+"1").val(check_id);
	$("#"+id).val(check_val);
	$("#fromVerify").modal("hide");
}
//核实
function saveToVerify(){
	var id = $("#toVerifySec").val();
	var check_id = [],check_val = [];   
	$("input:checkbox[name='toDpat']:checked").each(function(){
		check_id.push(this.id);
		check_val.push($(this).val());
	})
	$("#"+id+"1").val(check_id);
	$("#"+id).val(check_val);
	$("#toVerify").modal("hide");
	
}
//共享
function saveShare(){
	var id = $("#shareSec").val();
	var check_id = [],check_val = [];   
	$("input:checkbox[name='handlMatter']:checked").each(function(){
		check_id.push(this.id);
		check_val.push($(this).val());
	})
	$("#"+id+"1").val(check_id);
	$("#"+id).val(check_val);
	
	$("#share").modal("hide");
}
//选择共享办理事项
function handlMatter(){
	var check_val = [];   
	$("input:checkbox[name='dpat2']:checked").each(function(){
		check_val.push($(this).val());
	})
	if(check_val.length!=0){
		$("#shareTbody").html("");
		$.ajax({
	    	traditional: true,
	    	type:"post",
			url:urlpath+"coordinationTemplate/getShareOrgDepHandlMatter.do",
			data:{
				departIds:check_val
			},
			success:function(result){
				if(result.length!=0){
			       for(i in result){				    	 
			    	  var tr="<tr>"+
						"<td><input type='checkbox' id='"+result[i].handlMatter.handlMatterId+"' value='"+result[i].organization.organizationName+result[i].depart.departName+result[i].handlMatter.handlMatterName+"' name='handlMatter'></td>"+				
						"<td>"+result[i].handlMatter.handlMatterName+"</td>"+
						"<td>"+result[i].handlMatter.handlMatterContent+"</td>"+
						"<td>"+result[i].depart.departName+"</td>"+
					"</tr>";
			    	   $("#shareTbody").append(tr);				    
			       }
				}
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			}
	    }); 
	}else{
		$("#shareTbody").html("");
	}
}