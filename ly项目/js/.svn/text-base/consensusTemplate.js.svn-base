var basePath = window.location.protocol + "//" + window.location.host; 

//数据来源
function modalShow(title){
	$("#Msg").html("");
	$("#Ds").html("");
	 $("input[type='checkbox']").prop("checked",false);
	switch (title){
	 case "dataSource": $("#title").html("选择数据来源");
  		break;
	case "interface": $("#title").html("选择数据接口提供方");
		break;
	case "datas": $("#title").html("选择数据项入库标准提供方");
		break;
	case "lcVd": $("#title").html("选择证件与要件入库标准提供方");
		break;
   } 
	$("#dataSource").modal("show");
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
	if(name=="dpat"){
		depart();
		return
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
	if(name=="dpat"){
		depart();
		return
	}
}
//部门勾选显示系统
function depart(){
	var check_val = [];   
	$("input:checkbox[name='dpat']:checked").each(function(){
		check_val.push($(this).val());
	})
	if(check_val.length!=0){
		$("#Ds").html("");
		$.ajax({
	    	traditional: true,
	    	type:"post",
			url:basePath+"/BusinessCollaboration/coordinationTemplate/getShareOrgDepSys.do",
			data:{
				templateId:$("#templateId").val(),
				departIds:check_val
			},
			success:function(result){
				if(result.length!=0){
			       for(i in result){				    	 
			    	  var tr="<tr>"+
						"<td><input type='checkbox' value='"+result[i].system.systemId+"' name='syetem'></td>"+				
						"<td>"+result[i].system.systemName+"</td>"+
						"<td>"+result[i].system.systemAddress+"</td>"+
						"<td>"+result[i].organization.organizationName+result[i].depart.departName+"</td>"+
					"</tr>";
			    	   $("#Ds").append(tr);				    
			       }
				}
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			}
	    }); 
	}else{
		$("#Ds").html("");
	}
}
function saveAll(){
	var title=$("#title").html();
	switch (title){
	 case "选择数据来源": saveDataSource();
 		break;
	case "选择数据接口提供方": saveDataSupplier();
		break;
	case "选择数据项入库标准提供方": saveInfoStandardSupplier();
		break;
	case "选择证件与要件入库标准提供方": saveLvStandardSupplier();
		break;
  } 
}
//保存数据来源
function saveDataSource(){
	var check_val = [];   
	$("input:checkbox[name='syetem']:checked").each(function(){
		check_val.push($(this).val());
	})
	if(check_val.length==0){
		$("#Msg").html("请选择业务系统！")
	}else{
		$.ajax({
	    	traditional: true,
	    	type:"post",
			url:basePath+"/BusinessCollaboration/coordinationTemplate/saveDataSource.do",
			data:{
				templateId:$("#templateId").val(),
				systemIds:check_val
			},
			success:function(result){
				alert("添加成功 ！")
				$("#fromCheck").val(result.value)
				$("#dataSource").modal("hide");
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			}
	    }); 
	}
}
//保存数据提供接口
function saveDataSupplier(){
	var check_val = [];   
	$("input:checkbox[name='syetem']:checked").each(function(){
		check_val.push($(this).val());
	})
	if(check_val.length==0){
		$("#Msg").html("请选择业务系统！")
	}else{
		$.ajax({
	    	traditional: true,
	    	type:"post",
			url:basePath+"/BusinessCollaboration/coordinationTemplate/saveDataSupplier.do",
			data:{
				templateId:$("#templateId").val(),
				systemIds:check_val
			},
			success:function(result){
				alert("添加成功 ！")
				$("#toCheck").val(result.value)
				$("#dataSource").modal("hide");
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			}
	    }); 
	}
}

//保存数据项入库标准提供方
function saveInfoStandardSupplier(){
	var check_val = [];   
	$("input:checkbox[name='syetem']:checked").each(function(){
		check_val.push($(this).val());
	})
	if(check_val.length==0){
		$("#Msg").html("请选择业务系统！")
	}else{
		$.ajax({
	    	traditional: true,
	    	type:"post",
			url:basePath+"/BusinessCollaboration/coordinationTemplate/saveInfoStandardSupplier.do",
			data:{
				templateId:$("#templateId").val(),
				systemIds:check_val
			},
			success:function(result){
				alert("添加成功 ！")
				$("#checkShareOrgIds").val(result.value)
				$("#dataSource").modal("hide");
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			}
	    }); 
	}
}

//保存证照和要件入库标准提供方
function saveLvStandardSupplier(){
	var check_val = [];   
	$("input:checkbox[name='syetem']:checked").each(function(){
		check_val.push($(this).val());
	})
	if(check_val.length==0){
		$("#Msg").html("请选择业务系统！")
	}else{
		$.ajax({
	    	traditional: true,
	    	type:"post",
			url:basePath+"/BusinessCollaboration/coordinationTemplate/saveLvStandardSupplier.do",
			data:{
				templateId:$("#templateId").val(),
				systemIds:check_val
			},
			success:function(result){
				alert("添加成功 ！")
			$("#storageOrgIds").val(result.value)
				$("#dataSource").modal("hide");
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			}
	    }); 
	}
}

