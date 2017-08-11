var basePath = window.location.protocol + "//" + window.location.host; 
/*var setting = {
		check: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true,
				idKey: "id",
				pIdKey: "pid",
				rootPId: -1	
			},
			key: {
				name:"name"						
			} 
		}
		
	};*/

//左侧全选
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
				templateId:$("#temId").val(),
				departIds:check_val
			},
			success:function(result){
				if(result.length!=0){
			       for(i in result){				    	 
			    	  var tr="<tr>"+
						"<td><input type='checkbox' id='"+result[i].system.systemId+"' value='"+result[i].system.systemName+"("+result[i].organization.organizationName+result[i].depart.departName+")' name='syetem'></td>"+				
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
//保存
function saveAll(){
	var check_id ="",check_val = [];  
	$("input:checkbox[name='syetem']:checked").each(function(){
		check_id += this.id+"/";
		check_val.push($(this).val())
		
	})
	console.log(check_val);
	if(check_val==""){
		alert("选择系统")
	}else{
		$('#sIds').val(check_id);
		$('#dataSource').modal('hide');
		
		$("#systemO").html("");
		for (i in check_val){
			var index=parseInt(i)+1;
			 var tr="<tr>"+				
				"<td>"+index+"</td>"+
				"<td>"+check_val[i]+"</td>"+
			"</tr>";
	    	   $("#systemO").append(tr);	
		}
		
    	
	}
}
