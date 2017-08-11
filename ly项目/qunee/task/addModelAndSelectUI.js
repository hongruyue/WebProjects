var basePath = window.location.protocol+"//"+window.location.host;
//编辑操作名称和类型selest 改为ui-select设置宽度
function operationNameD(id){
	 $('#'+id).chosen({	                             			  
		    no_results_text: "没有找到",
		    search_contains: true
		});	                             					
	$('#'+id+'_chosen').css("width", "150px");
	$('#'+id).trigger('chosen:updated');//更新选项  
}
//根据业务id和业务名称得到业务对象
function getOpera(taskId,opName){
		var data;
		//根据操作名称，taskId查询operation_tab表里对应的oper_id对象;
		$.ajax({
			type:"post",
			async:false,
			data:{"taskId":taskId,"opName":opName},
			url:basePath+"/requirements/page/operation/findOperaByName.action",
			success:function(json){
				 data = eval('('+json+')');
			}
		});
		return data;
}

//添加新增操作操作名称  model
function addOperaName(){
	$("#myModal").modal("hide");
	$("#onModal").modal("show");
	//清空model数据
	document.getElementById('addOpName').value="";
	$('#Msg').html('<font></font>');
}
function change(){
	$("#change").text("");
}
function comm() {
	var taskName = document.getElementById('addOpName').value	
	if(taskName == '') {				
		$('#Msg').html('<font color="red"> ! 操作名称不能为空</font>');
		return;
	}
	var num_reg =/^[\u4e00-\u9fa5]*$/;//纯中文
	if(!num_reg.test(taskName)) {			
		$('#Msg').html('<font color="red"> ! 请输入纯中文</font>');
		document.getElementById('addOpName').value="";
		document.getElementById('addOpName').focus();
		return;
	}
	$.ajax({
        type:"POST",
        url:basePath+"/requirements/page/systemManager/addResponseName2.action",
        data : {
        	opName : $("#addOpName").val()
          
        },
        success : function(meg) {
        	if(meg =="添加成功"){
        		alert(meg);
                $("#onModal").modal("hide");
                $("#select_Depart").chosen("destroy"); 
                document.getElementById('addOpName').value="";
        	}else{
        		$('#Msg').html('<font color="red"> ! '+meg+'</font>');
        	}
          
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
          
        }

    });		
}
//---------------------------------
//添加新增操作类型名称  model
function addOperaType(){
	$("#myModal").modal("hide");
	$("#otModal").modal("show");
	 document.getElementById('objectClassName').value="";
	 $('#objectMsg').html('<font> </font>');
}
function objectChange(){
		$("#objectChange").text("");
	}
function objectComm() {
	var taskName = document.getElementById('objectClassName').value
	if(taskName == '') {				
		$('#objectMsg').html('<font color="red"> ! 业务操作对象类别不能为空</font>');
		return;
	}
	var num_reg =/^[\u4e00-\u9fa5]*$/;//纯中文
	if(!num_reg.test(taskName)) {
	
		$('#objectMsg').html('<font color="red"> ! 名称为:纯中文</font>');
		document.getElementById('objectClassName').value="";
		document.getElementById('objectClassName').focus();
		return; 
	}
	$.ajax({
	    type:"POST",
	    url:basePath+"/requirements/page/systemManager/add2.action",
	    data : {
	    	objectClassName : $("#objectClassName").val()
	      
	    },
	    success : function(meg) {
	    	if(meg =="添加成功"){
	    		alert(meg);
	  	      $("#otModal").modal("hide");
	  	      $("#select_Depart1").chosen("destroy"); 
	  	      document.getElementById('objectClassName').value="";
	    	}else{
	    		$('#objectMsg').html('<font color="red"> ! '+meg+'</font>');
	    	}
	      
	    },
	    error:function (XMLHttpRequest, textStatus, errorThrown) {
	      
	    }
	
	});	
}