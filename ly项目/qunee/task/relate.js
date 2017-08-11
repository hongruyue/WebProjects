var basePath = window.location.protocol+"//"+window.location.host;
//根据relateTaskName查询task_config表里的relateTaskId;
function findRelateIdByTaskId(taskId){
	var relateId;
	$.ajax({
		type:"post",
		data:{"task_id":taskId},
		async:false,
		url:basePath+"/requirements/page/task/selectDataByTaskId.action",
		success:function(json){
			var data = eval('('+json+')');
			relateId = data[0].relateTaskId;
		},
		error:function(){
  			alert("服务器异常，请刷新页面");
  		}
	});
	return relateId;
}
// 根据操作id  查找 作业id
function findTaskIdByOperId(operId){
	var relateId;
	$.ajax({
		type:"post",
		data:{"operId":operId},
		async:false,
		url:basePath+"/requirements/page/TaskName1/findTaskIdByOperId.action",
		success:function(jsonData){
			Q.log("==="+jsonData);
			relateId = jsonData;
		},
		error:function(){
  			alert("服务器异常，请刷新页面");
  		}
	});
	return relateId;
}

//ajax请求根据relateTaskId查询表operation_tab表里的oper_name
function  selectNameById(id){
	var taskId = id;
}

//查询operation_tab 同过task_id;oper_id之前遗留的小问题....
function selectOperTab(tid,operObj){
	$.ajax({
		type:"post",
		data:{"task_id":tid},
		//async:false,
		url:basePath+"/requirements/page/task/checkOpName.action",
		success:function(json){
			var data = eval('('+json+')');
			if(data.length == 0){
				//$("#relate_operNT").append("<option value='无关联操作'>无数据,重新选择作业</option>");
				operObj.name = "关联操作";
			}else{
				for(var i=0;i<data.length;i++){
					var NT = data[i].operName+""+data[i].operationType;
					$("#relate_operNT").append("<option thisId='"+data[i].operId+"'>"+NT+"</option>");
				}
				$("#select_dt").removeAttr("disabled");
			}
		},
		error:function(json){
			alert("服务器异常，请刷新页面");
  		}
	});
}

//保存到task_tab relateOperation
/*function saveToTaskTab1(oldTaskname,relationTaskName,relateOper,taskId,relateOpId){
	$.ajax({
		type:"post",
		data:{"oldTaskname":oldTaskname,"relationTaskName":relationTaskName,"relName":relateOper,"taskId":taskId,"relId":relateOpId},
		//async:false,
		url:basePath+"/requirements/page/task/updateTaskTabById3.action",
		success:function(){
			//alert("保存成功");
		},
		error:function(){
  			alert("服务器异常，请刷新页面");
  		}
	});
}*/