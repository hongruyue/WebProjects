// 检查部门名称
function checkAs(){
	var d=daname.replace(/[\n]/ig,'');
	if($('#departName').val()==""){
		$('#checkSpan').html('<font class="formError">* 名称不能为空</font>');
	}
	else if($('#departName').val()=="业务部门"){
		$('#checkSpan').html('<font class="formError">* 请修改部门名称</font>');
	}else{
		if(d==$('#departName').val()){
			 $('#checkSpan').html('<font class="formPass">此部门名称可以使用</font>');
			 $("#select_Btn").removeAttr("disabled");
		}else{
			$.ajax({ 
	  		  type: "post", 
	  		  url: basePath+"/BusinessCollaboration/organization/checkName.do",               
	          data: {
	       	   	  "departName":$("#departName").val(),
	       	   	  "busId":$("#busId").val(),
	       	   	  "departId":$("#departId").val()
	       	  },
	          success: function(stringData){
	        	  if(stringData == 0){
	        		  $('#checkSpan').html('<font class="formPass">此部门名称可以使用</font>');
	        		  $("#select_Btn").removeAttr("disabled");
	        		 
	        	  }else{
	        		  $('#checkSpan').html('<font class="formError">* 名称不能重复</font>');
	        		 $("#select_Btn").attr({"disabled":"disabled"});
	        	  }
	       	  }
		   });
		}
	}
	
}
//保存部门信息
function saveDepart1(data,departName,levelName,orgId){
	$.ajax({
		   type: "POST", 
		   url: basePath+"/BusinessCollaboration/organization/saveDepart.do",              
	       data: {
	    	   "departName" : departName,
	    	   "levelName" : levelName,
	    	   "orgId" : orgId,
	       },
	       dataType: "json",
	       success: function(newDepartId){
	    	   /*alert(newDepartId)*/
	    	   data.name = $("#departName").val();
	    	   //添加userId属性
	    	   data.userId = newDepartId;
	    	   $('#myModal').modal('hide');
	    	   $("#chenkUI").html(" ");
	    	   backups();
	       	},
	       error:function(){
	       		alert("保存失败,请重新操作")
	       }
	});
}
function saveDepart2(data,det,departName,levelName,orgId,busId,proId){
	$.ajax({
		   type: "POST", 
		   url: basePath+"/BusinessCollaboration/organization/saveDepart.do",
		   data: {
			   "departName" : departName,
	    	   "levelName" : levelName,
	    	   "orgId" : orgId,
		   },
		   dataType: "json",
		   success: function(newDepartId){
			   data.name = det;
			   //添加userId属性
	    	   data.userId = newDepartId;
			   $('#myModal').modal('hide');
			   $("#chenkUI").html(" ");
			   backups();
		   	},
		   error:function(){
		   		alert("保存失败,请刷新页面")	
		   }
	});
}
//类型选择 暂时不用
function select_Level(){ 
	getdepartId();
	$("#select_Level").empty();
	var select_Level = document.getElementById('select_Level');
	var departName = document.getElementById("departName");
	departName.onkeyup = function() {
		  var text = departName.value.length;
		};
   	select_Level.selectedIndex = 0;
       $.ajax({
       		type:'get',
       		url:basePath+"/BusinessCollaboration/organization/",
       		success:function(json){
       			var data = eval('{'+json+'}');
       			select_Level = document.getElementById("select_Level");
       			for(var i=0;i<data.length;i++){
       			var option = document.createElement("option");
       				option.value = data[i];
       				option.text = data[i];
       				option.id = "option_Btn";
       				select_Level.add(option);
       			}
       		},
       		error:function(){
       			alert("获取信息失败,请刷新页面")
       		}
      });
}
// 更新部门名称
function updateDepart1(data,departName,departLv,departId){
	$.ajax({
		  type: "POST", 
		  url: basePath +"/BusinessCollaboration/organization/updataDepartRelevanceInfo.do",               
	      data: {
	  	    "departName" : departName,
	  	    "departLv" : departLv,
	  	    "departId" : departId	                             
	      },
	      success: function(){
	  	    data.name = $("#departName").val();
	  	    $('#myModal').modal('hide');
	  	    backups();
	     },
	     error:function(){
	     		alert("保存失败,请重新操作")
	     }
   });
}
function updateDepart2(data,det,departName,departLv,departId){
	console.log(departLv);
	$.ajax({
		   type: "POST", 
		   url: basePath +"/BusinessCollaboration/organization/updataDepartRelevanceInfo.do",              
		    data: {
		 	   "departName" : departName,
	     	   "departLv" : departLv ,
	     	   "departId" : departId	    
		    },
		    success: function(stringData){
		 	   data.name = det;
		 	   //$("#select_Level").empty();
		 	   $('#myModal').modal('hide');
		 	   backups();
		    },
		    error:function(){
		    		alert("更新失败,请重新操作")
		    }
	});
}

//根据name和orgId查询部门表里的此name的Id，根据部门Id删除相应表里的信息
function deleteDepart(departName,departId,busId){
	$.ajax({
		type:"post",
		url:basePath +"/BusinessCollaboration/organization/deleteDepart.do",
		data:{
			"departName":departName,
			"departId":departId,
			"busId" : busId
		},
		success:function(){
			//alert("删除成功");
			graph.removeSelection();
			backups();
		}
	});
}