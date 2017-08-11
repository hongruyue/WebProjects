
//显示流程图 
function showChart(editor){
	$.ajax({
		type:"get",
		url:basePath+"/BusinessCollaboration/organization/getOrganizationChart.do?id="+$("#id").val(),
		success:function(data){
			var json = editor.getJSONTextArea().value = data;
			graph.clear();
            graph.parseJSON(json.organizational);
	    },
		error:function(){
			alert("解析错误");
		}
	});
}
//检查是新增还是更新
function saveAndUpdate(){
	/*if(JSON.stringify(JSON.parse(graph.toJSON(true))).indexOf("datas") < 0){
		$("#chenkUI").html("<font style='color:red'>未画图不能保存</font>");
		return;
	}*/
	if(checkDepartNames("业务部门","业\n务\n部\n门")>0){
		$("#chenkUI").html("<font style='color:red'>有未修改的部门名称,保存失败</font>");
		return;
	}
	else{
		$("#chenkUI").html(" ");
		$.ajax({
			type: "POST", 
	        url: basePath+"/BusinessCollaboration/organization/updateOrganizationChart.do",               
	        data: {
	        	"orgId":$("#orgId").val(),
	        	"imgInfo":graph.exportImage(graph.scale,graph.bounds).data,
	        	"json_name":JSON.stringify(JSON.parse(graph.toJSON(true)))
	        },
	        success: function(data){
	        	alert("更新成功");
	        }
		}); 
   }
}

//更新 隐式调用
function backups(){
	$.ajax({
		type: "POST", 
        url: basePath+"/BusinessCollaboration/organization/updateOrganizationChart.do",               
        data: {
        	"orgId":$("#orgId").val(),
        	"imgInfo":graph.exportImage(graph.scale,graph.bounds).data,
        	"json_name":JSON.stringify(JSON.parse(graph.toJSON(true)))
        },
        success: function(data){
        	//alert("更新成功");
        }
	}); 
}
// 定时保存
function backups1(){
	if(checkDepartNames("业务部门","业\n务\n部\n门")>0){
		$("#chenkUI").html("<font style='color:red'>有未修改的部门名称,保存失败</font>");
		return;
	}
	else{
		$("#chenkUI").html(" ");
		$.ajax({
			type: "POST", 
	        url: basePath+"/BusinessCollaboration/organization/updateOrganizationChart.do?",               
	        data: {
	        	"orgId":$("#orgId").val(),
	        	"imgInfo":graph.exportImage(graph.scale,graph.bounds).data,
	        	"json_name":JSON.stringify(JSON.parse(graph.toJSON(true)))
	        },
	        success: function(data){
	        	//alert("更新成功");
	        }
		}); 
   }
}
//保存图片 ... 调用的上面更新方法
function savePictures(){
	//Q.log(graph.viewportBounds);
	$.ajax({
		type:"POST",
		url: basePath+"/BusinessCollaboration/organization/updateOrganizationChart.do",               
        data: {
        	"orgId":$("#orgId").val(),
        	"imgInfo":graph.exportImage(graph.scale,graph.bounds).data,
        	"json_name":JSON.stringify(JSON.parse(graph.toJSON(true)))
        },
		success:function(){
			alert("图片保存成功");
		},
		error:function(){
			alert("保存失败,功能完善中");
		}
	});
}
