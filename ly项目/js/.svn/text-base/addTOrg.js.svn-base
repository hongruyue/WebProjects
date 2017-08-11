//配置树参数
var setting = {  
		            data: {
						simpleData: {
							enable: true,
							idKey: "regionalId",
							pIdKey: "superiorRegional",
							rootPId: 0,
					 	},
					   key: {
							name:"regionalName",
						} 
					},
				 callback: {
						onClick: zTreeOnClick
					}
		        };  

 function zTreeOnClick(event, treeId, treeNode) {
	// alert(treeNode.regionalId+"="+treeNode.regionalName);
	 tid = treeNode.regionalId;
	 tname = treeNode.regionalName;
	 $("#Torg").html("");
	 $.ajax({
	    	traditional: true,
	    	type:"post",
			url:urlpath+"coordinationTemplate/selectAddOrgs.do",
			data:{
				templateId:templateId,
				regionalId:tid
			},
			success:function(result){
				if(result.length!=0){
			       for(i in result){
			    	   var index= parseInt(i) +1;
			    	   var tr="<tr>"+
						"<td><input type='checkbox' value='"+result[i].id+"' name='Torg'></td>"+
						"<td>"+index+"</td>	"+					
						"<td>"+result[i].organizationName+"</td>"+
					"</tr>";
			    	   $("#Torg").append(tr);
			       }
			       $("#rmid").val(tid);			       
			       $("#rmname").html("（已选区域："+tname+"）");
				}else{
					$("#rmid").val("none");	
					$("#rmname").html("");
					 var tr="<tr>"+
					 "<td></td>"+
					 "<td></td>	"+	
					 "<td><nobr>此区域下没有组织机构！</nobr></td>"+
					 "</tr>";
			    	   $("#Torg").append(tr);
					 
				}
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			}
	    }); 
 };

 //添加区域和组织机构
 function addOrganization(){
	 $("#torgMsg").html("");
	 $("#Torg").html("");
	 $("#rmname").html("");
	 $("input[type='checkbox']").prop("checked",false);
		$.ajax({
	    	traditional: true,
	    	type:"post",
			url:urlpath+"regionalManagement/selectParentRm.do",
			data:{},
			success:function(result){
			       var treeNodes = result;
			       console.log(treeNodes)
					zTreeObj = $.fn.zTree.init($("#tree"), setting, treeNodes);
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			}
	    }); 
	}
 //保存区域和组织机构
function saveTorg(){
	 var Torg = document.getElementsByName('Torg');
     var id = new Array();
     for(var i = 0; i < Torg.length; i++){
       if(Torg[i].checked){id.push(Torg[i].value)}	         
      } 
     if($("#rmid").val()==''){
    	 $("#torgMsg").html("请选择区域！")
     }else if ($("#rmid").val()=='none'){
    	 $("#torgMsg").html("此区域下没有组织机构!")
     }
     else if (id.length==0){
    	 $("#torgMsg").html("请选择组织机构！")
     }else{   	 
    	 $.ajax({
    		 traditional: true,
    		 type:"post",
    		 url:urlpath+"coordinationTemplate/addOrgs.do",
    		 data:{
    			 templateId:localStorage.templateId,
    			 projId:localStorage.projId,
    			 regionalId:$("#rmid").val(),
    			 orgIds:id		
    		 },
    		 success:function(result){
    			 alert(result)
    			 $("#myModal").modal("hide");
    			 refresh();
    		 },
    		 error:function (XMLHttpRequest, textStatus, errorThrown) {      
    			 alert("网络错误");
    		 }
    	 }); 
     }
}

//删除组织机构
function deleteTorg(orgId){
	var msg = "您真的确定要删除吗？";
	if (confirm(msg)==true){
		 $.ajax({
			 traditional: true,
			 type:"post",
			 url:urlpath+"coordinationTemplate/deleteOrg.do",
			 data:{
				 templateId:templateId,
				 orgId:orgId		
			 },
			 success:function(result){
				 alert(result)
				 refresh();
			 },
			 error:function (XMLHttpRequest, textStatus, errorThrown) {      
				 alert("网络错误");
			 }
		 }); 
	}
}


//添加部门信息
function addDm(orgId,rmid){	
	$("#Dt").html("");
	$("#DmMsg").html("");	
	 $("input[type='checkbox']").prop("checked",false);
	 $.ajax({
	    	traditional: true,
	    	type:"post",
			url:urlpath+"coordinationTemplate/selectAddDeparts.do",
			data:{
				templateId:templateId,
				orgId:orgId
			},
			success:function(result){
				$("#Dm").modal("show");
				if(result.length!=0){
				       for(i in result){
				    	   var index= parseInt(i) +1;
				    	   var tr="<tr>"+
							"<td><input type='checkbox' value='"+result[i].departId+"' name='dpm'></td>"+
							"<td>"+index+"</td>	"+					
							"<td>"+result[i].departName+"</td>"+
						"</tr>";
				    	   $("#Dt").append(tr);
				       }			       
				       $("#regionalId").val(rmid);	
				       $("#orgId").val(orgId);	
					}else{
						
						 var tr="<tr>"+
						 "<td></td>"+
						 "<td></td>	"+	
						 "<td><nobr>此组织机构下没有部门信息！</nobr></td>"+
						 "</tr>";
				    	   $("#Dt").append(tr);
						 
					}
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			
			}
	 })
}
//保存部门
function saveDm(){
	 var dpm = document.getElementsByName('dpm');
     var id = new Array();
     for(var i = 0; i < dpm.length; i++){
       if(dpm[i].checked){id.push(dpm[i].value)}	         
      } 
	 if (id.length==0){
    	 $("#DmMsg").html("请选择部门信息！")
     }else{   	 
    	 $.ajax({
    		 traditional: true,
    		 type:"post",
    		 url:urlpath+"coordinationTemplate/addDeparts.do",
    		 data:{
    			 templateId:templateId,
    			 projId:localStorage.projId,
    			 regionalId:$("#regionalId").val(),
    			 orgId:$("#orgId").val(),
    			 departIds:id
    		 },
    		 success:function(result){
    			 alert(result)
    			 $("#Dm").modal("hide");
    			 refresh();
    		 },
    		 error:function (XMLHttpRequest, textStatus, errorThrown) {      
    			 alert("网络错误");
    		 }
    	 }); 
     }
}

//删除部门
function deleteTdepart(departId){
	var msg = "您真的确定要删除吗？";
	if (confirm(msg)==true){
		$.ajax({
			 traditional: true,
			 type:"post",
			 url:urlpath+"coordinationTemplate/deleteDepart.do",
			 data:{
				 templateId:templateId,
				 departId:departId		
			 },
			 success:function(result){
				 alert(result)
				 refresh();
			 },
			 error:function (XMLHttpRequest, textStatus, errorThrown) {      
				 alert("网络错误");
			 }
		 }); 
	}
}

//添加业务系统
function addSystem(departId){	
	$("#System").html("");
	$("#systemMsg").html("");	
	 $("input[type='checkbox']").prop("checked",false);
	 $.ajax({
	    	traditional: true,
	    	type:"post",
			url:urlpath+"coordinationTemplate/selectAddSytems.do",
			data:{
				templateId:templateId,
				departId:departId
			},
			success:function(result){
				$("#departId").val(departId);
				$("#system").modal("show");
				if(result.length!=0){
				       for(i in result){
				    	   var index= parseInt(i) +1;
				    	   var tr="<tr>"+
							"<td><input type='checkbox' value='"+result[i].systemId+"' name='stem'></td>"+
							"<td>"+index+"</td>	"+					
							"<td>"+result[i].systemName+"</td>"+
							"<td>"+result[i].systemAddress+"</td>"+
						"</tr>";
				    	   $("#System").append(tr);
				       }			       
				       	
					}else{
						
						 var tr="<tr>"+
						 "<td></td>"+
						 "<td></td>	"+	
						 "<td><nobr>此部门下没有业务系统！</nobr></td>"+
						 "<td></td>	"+	
						 "</tr>";
				    	   $("#System").append(tr);
						 
					}
			},
			error:function (XMLHttpRequest, textStatus, errorThrown) {      
	            alert("网络错误");
			
			}
	 })
}

//保存系统
function saveSystem(){
	 var stem = document.getElementsByName('stem');
     var id = new Array();
     for(var i = 0; i < stem.length; i++){
       if(stem[i].checked){id.push(stem[i].value)}	         
      } 
	 if (id.length==0){
    	 $("#systemMsg").html("请选择业务系统！")
     }else{   	 
    	 $.ajax({
    		 traditional: true,
    		 type:"post",
    		 url:urlpath+"coordinationTemplate/addSytems.do",
    		 data:{
    			 templateId:templateId,
    			 projId:localStorage.projId,
    			 departId:$("#departId").val(),
    			 systemIds:id
    		 },
    		 success:function(result){
    			 alert(result)
    			 $("#system").modal("hide");
    			 refresh();
    		 },
    		 error:function (XMLHttpRequest, textStatus, errorThrown) {      
    			 alert("网络错误");
    		 }
    	 }); 
     }
}

//删除系统
function deleteTsystem(systemId){
	var msg = "您真的确定要删除吗？";
	if (confirm(msg)==true){
		$.ajax({
			 traditional: true,
			 type:"post",
			 url:urlpath+"coordinationTemplate/deleteSystem.do",
			 data:{
				 templateId:templateId,
				 systemId:systemId		
			 },
			 success:function(result){
				 alert(result)
				 refresh();
			 },
			 error:function (XMLHttpRequest, textStatus, errorThrown) {      
				 alert("网络错误");
			 }
		 }); 
	}
}
