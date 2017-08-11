var BC= angular.module('consensusTemplate', []);
    BC.controller('consensusTemplate', function($scope, $http, $location) {
	//缓存值
	var pid = localStorage.projId;
	var templateId = localStorage.templateId;
	var childId = localStorage.childId;
	//参数取值
	$("#templateId").val(templateId+"");
	//获取基本属性所有数据
	var urlPasicProperty=urlpath+'coordinationTemplate/basicProperty.do?projId='+pid+"&templateId="+templateId+"&childId="+childId;
	$http.get(urlPasicProperty).then(function (result){
		console.log(result)
		$scope.dataSource=result.data.dataSourceSys;
		$scope.dataIProvider=result.data.dataSupplierSys;
		$scope.infoStand=result.data.infoStandardSupplierSys;
		$scope.lvStand=result.data.lvStandardSupplierSys;
		$scope.dataList=result.data.shareOrgDeparts;
	});
	//点击选择按钮
	$scope.modalShow = function(title){
	    $("#Msg").html("");
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
    $scope.dataDeparts = []   //打开摸态框，从新定义这个对象
	$("#dataSource").modal("show");
	}
	//部门复选框选中
	$scope.departIng = function(){
	var check_val = [];  
	$("input:checkbox[name='dpat']:checked").each(function(){
		check_val.push($(this).val());
		console.log(check_val)
	})
	if(check_val.length!=0){
		var dataDepart={
			templateId:$("#templateId").val(),
			departIds:check_val
		}
		$http({
			method  : 'POST',
	        url :urlpath+"coordinationTemplate/getShareOrgDepSys.do",
	        params:dataDepart,
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(result) {
			$scope.dataDeparts = result;
		});
	}else{
			$scope.dataDeparts = []
	}
}
	//点击保存按钮
	$scope.saveAll = function(){
	var title=$("#title").html();
	switch (title){
	 case "选择数据来源": $scope.saveDataSource();
 		break;
	case "选择数据接口提供方": $scope.saveDataSupplier();
		break;
	case "选择数据项入库标准提供方": $scope.saveInfoStandardSupplier();
		break;
	case "选择证件与要件入库标准提供方": $scope.saveLvStandardSupplier();
		break;
 	 } 
}
//保存数据来源
$scope.saveDataSource=function(){
	var check_val = [];   
	$("input:checkbox[name='system']:checked").each(function(){
		check_val.push($(this).val());
	})
	if(check_val.length==0){
		$("#Msg").html("请选择业务系统！")
	    console.log(check_val.length)	
	}else{
		var datasystem={
			templateId:$("#templateId").val(),
			systemIds:check_val
		}
		$http({
			method  : 'POST',
	        url : urlpath+"coordinationTemplate/saveDataSource.do", 
	        params:datasystem,
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(result) {
			alert("添加成功 ！")
				$("#fromCheck").val(result.value)
				$("#dataSource").modal("hide");
		});
	}
}
//保存数据提供接口
$scope.saveDataSupplier=function(){
	var check_val = [];   
	$("input:checkbox[name='system']:checked").each(function(){  
		check_val.push($(this).val());
	})
	if(check_val.length==0){
		$("#Msg").html("请选择业务系统！")
	}else{
		var datasystem={
			templateId:$("#templateId").val(),
			systemIds:check_val
		}
		$http({
			method  : 'POST',
	        url : urlpath+"coordinationTemplate/saveDataSupplier.do", 
	        params:datasystem,
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(result) {
			alert("添加成功 ！")
				$("#toCheck").val(result.value)
				$("#dataSource").modal("hide");
		});
	}
}

//保存数据项入库标准提供方
$scope.saveInfoStandardSupplier= function(){
	var check_val = [];   
	$("input:checkbox[name='system']:checked").each(function(){
		check_val.push($(this).val());
	})
	if(check_val.length==0){
		$("#Msg").html("请选择业务系统！")
	}else{
		var datasystem={
			templateId:$("#templateId").val(),
			systemIds:check_val
		}
		$http({
		   method  : 'POST',
	       url :urlpath+"coordinationTemplate/saveInfoStandardSupplier.do", 
	       params:datasystem,
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(result) {
			alert("添加成功 ！")
				$("#checkShareOrgIds").val(result.value)
				$("#dataSource").modal("hide");
		});
	}
}

//保存证照和要件入库标准提供方
$scope.saveLvStandardSupplier = function(){
	var check_val = [];   
	$("input:checkbox[name='system']:checked").each(function(){
		check_val.push($(this).val());
	})
	if(check_val.length==0){
		$("#Msg").html("请选择业务系统！")
	}else{
		var datasystem={
			templateId:$("#templateId").val(),
			systemIds:check_val
		}
		$http({
			method  : 'POST',
	        url :urlpath+"coordinationTemplate/saveLvStandardSupplier.do",
	        params:datasystem,
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(result) {
			alert("添加成功 ！")
				$("#storageOrgIds").val(result.value)
				$("#dataSource").modal("hide");
		});
	}
}
//左侧  全选 取消
$scope.departChoose= function(name){
//	 console.log("全选")
	if($('#departChooseId').is(':checked')) {
   		$scope.checkAll(name);
	 }else{
//	 	 console.log("取消")
	 	$scope.clearAll(name);
	 }
	
}
//右侧    全选 取消
$scope.systemChoose= function(name){
//	console.log("全选")
	if($('#systemChooseId').is(':checked')) {
   		$scope.checkAll(name)
	}else{
//		console.log("取消")
	 	$scope.clearAll(name);
	 }
}

//全部选中
$scope.checkAll= function(name){
	var el = document.getElementsByTagName('input'); 
	var len = el.length; 
	for(var i=0; i<len; i++) { 
		if((el[i].type=="checkbox") && (el[i].name==name)) { 
		el[i].checked = true; 
		} 
	} 
	if(name=="dpat"){
		$scope.departIng();
		return;
	}
}

//全取消
$scope.clearAll=function(name) {
	var el = document.getElementsByTagName('input'); 
	var len = el.length; 
	for(var i=0; i<len; i++) { 
		if((el[i].type=="checkbox") && (el[i].name==name)) { 
		el[i].checked = false; 
		} 
	} 
	if(name=="dpat"){
		$scope.departIng();
		return;
	}
}
});

 


