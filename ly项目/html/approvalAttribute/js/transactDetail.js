(function() {
angular.module('TD', ['angular-popups'])
.controller('AppController', AppController);
    AppController.$inject = ['$scope','$http'];
    function AppController($scope,$http) {
	    var vm = this;   
		var templateId=localStorage.templateId;	
		var url=urlpath+"transactDetail/selectAll.do?temId="+templateId+"&linkId="+sessionStorage.linkId;	
		sessionStorage.setItem("linkId",sessionStorage.linkId);
		$http.get(url).then(function (result){
			 vm.appData = result.data;	
		});	
		vm.updateTD = updateTD;
		vm.deleteTD = deleteTD;
		function updateTD(outerIndex, item) {
			location.href="updateTransactDetail.html";		
			sessionStorage.setItem("updateTD",JSON.stringify(item));	
       	}		
		function deleteTD(id) {
			if(confirm("确认删除吗？")){
				var url=urlpath+"transactDetail/deleteTransactDetail.do?id="+id;		
				$http.get(url).then(function (result){
					if(result.data.result){
		            	alert("删除成功");
		            	location.href="transactDetail.html"
		            }else{
		            	alert("网络错误删除失败");
		            }
				});	
			}
       	}	
    }     
})();


//添加页面
var add= angular.module('addTD', []);
add.controller('addTDCtrl', function($scope, $http, $location) {
	var getHttp = function($http, url, callback) { //回调函数
		$http.get(url).success(function(data, status, headers, config) {
			callback(data);
		});
	}
	$scope.rt=function(){
		location.href="transactDetail.html";
		sessionStorage.setItem("linkId",sessionStorage.linkId);
	}
	$("#linkId").val(sessionStorage.linkId)
	//显示下拉 和 所有部门
	var url=urlpath+"transactDetail/selectInfoByTemId.do?temId="+localStorage.templateId;
	getHttp($http, url, function(data) {
		$scope.docInfo=data.docInfo;
		$scope. departs= data.departs;	
		$("#resultExampleId").empty();
		for(i in $scope.docInfo){
			var op="<option value="+$scope.docInfo[i].id+">"+$scope.docInfo[i].name+"</option>";
			$("#resultExampleId").append(op);
		}
	})
		
	//选择系统弹出
	$scope.modalShow=function(title){
		$("input[type='checkbox']").prop("checked",false);
		switch (title){	
		 case "systemIds": $("#departsTitle").html("转下一办理部门和系统"),
							$("#departsSec").val("systemIds");				
				break;
		 case "archiveSystemId": $("#departsTitle").html("转下一办理部门和系统"),
		 				  $("#departsSec").val("archiveSystemId");
	  		break;
		}
		$("#departModal").modal("show");
		$scope.stJson="";
	}	
	
	// 全选 全消
	$scope.dCheck= function(id,name){		
		var bischecked=$('#'+id).is(':checked'); 			
        var fruit=$('input[name="'+name+'"]');  
        fruit.prop('checked',bischecked);  
        if(name=="dpatM"){
        	$scope.matters();
        }
        if(name=="dpatSysm"){
        	$scope.depart();
        }
	}
	
	
	
	//部门显示系统
	$scope.depart=function(){
		var check_val = [];   
		$("input:checkbox[name='dpatSysm']:checked").each(function(){
			check_val.push($(this).val());
		})
		var url=urlpath+"transactDetail/getShareOrgDepSys.do?temId="+localStorage.templateId+"&departIds="+check_val;
		getHttp($http, url, function(data) {
			$scope.stJson=data;
		})
	}
	//事项弹出框
	$scope.nextM=function(){
		$("input[type='checkbox']").prop("checked",false);
		$("#nextModal").modal("show");
		$scope.matter="";
	}

	//勾选部门显示事项
	$scope.matters=function(){
		var check_val = [];   
		$("input:checkbox[name='dpatM']:checked").each(function(){
			check_val.push($(this).val());
		})
		console.log(check_val);
		
		var url=urlpath+"transactDetail/getShareHandlMatterDepSys.do?departIds="+check_val;
		getHttp($http, url, function(data) {
			console.log(data)	
			$scope.matter=data;			
		})
	}
	//保存办理事项
	$scope.saveMatter=function(){
		var check_id = [],check_val = [];   
		$("input:checkbox[name='Matter']:checked").each(function(){
			check_id.push(this.id);
			check_val.push($(this).val());
		})

		$("#matterIds").val(check_val)
		$("#matterIds1").val(check_id)
		$("#nextModal").modal("hide");
	}
	//保存系统
	$scope.saveSys=function(){
		var id=$("#departsSec").val();
		var check_id = [],check_val = [];   
		$("input:checkbox[name='systemId']:checked").each(function(){
			check_id.push(this.id);
			check_val.push($(this).val());
		})
		$("#"+id+"1").val(check_id);
		$("#"+id).val(check_val);
		$("#departModal").modal("hide");
	}
	//页面保存
	$scope.saveAll= function(){
		$("#myForm").ajaxSubmit({
    		 url:urlpath+"transactDetail/addTransactDetail.do",
    		 type:"post",
    		 dataType:"json",
    		 success:function(data){
                if(data.result){
	            	alert("保存成功");           	
					location.href="transactDetail.html"
	            }else{
	            	alert("网络错误保存失败");
	            }
           },
            error:function(data){
                alert("网络错误");
            }
            
    	})
	}
	
	
})

//修改页面
var updata= angular.module('updataTD', []);
updata.controller('updataTDCtrl', function($scope, $http, $location) {
	var getHttp = function($http, url, callback) { //回调函数
		$http.get(url).success(function(data, status, headers, config) {
			callback(data);
		});
	}
	$scope.rt=function(){
		location.href="transactDetail.html";
		sessionStorage.setItem("linkId",sessionStorage.linkId);
	}
	$("#linkId").val(sessionStorage.linkId)
	//显示下拉 和 所有部门
	updateTD = JSON.parse(sessionStorage.getItem("updateTD"));
	var url=urlpath+"transactDetail/selectInfoByTemId.do?temId="+localStorage.templateId;
	getHttp($http, url, function(data) {
		$scope.docInfo=data.docInfo;
		$scope. departs= data.departs;	
		$("#resultExampleId").empty();
		for(i in $scope.docInfo){
			var op="<option value="+$scope.docInfo[i].id+">"+$scope.docInfo[i].name+"</option>";
			$("#resultExampleId").append(op);
		}
		 $("#resultExampleId option[value='" + updateTD.resultExampleId + "']").attr("selected", true);
	})
	console.log(updateTD)
	$("#id").val(updateTD.id)			
	$("#matterIds1").val(updateTD.matterIds)
	$("#systemIds1").val(updateTD.systemIds)
	$("#archiveSystemId1").val(updateTD. archiveSystemIds)	
	var mat_val=[];
	for(i in updateTD.matNames){
		mat_val.push(updateTD.matNames[i].matName)
	}
	$("#matterIds").val(mat_val);
	var next_val=[];
	for(i in updateTD.nextSysNames){
		next_val.push(updateTD.nextSysNames[i].nextSysName)
	}
	$("#systemIds").val(next_val);
	var arc_val=[];
	for(i in updateTD.achSysNames){
		arc_val.push(updateTD.achSysNames[i].achSysName)
	}
	$("#archiveSystemId").val(arc_val);
	
	$("#verify option[value='" + updateTD.isarchive + "']").attr("selected", true);
	if(updateTD.isarchive==1){
		$("#needVerify").css("display","block");
		
	}
	if(updateTD.isarchive==0){
		$("#needVerify").css("display","none");
		
	}
	//选择系统弹出
	$scope.modalShow=function(title){
		$("input[type='checkbox']").prop("checked",false);
		switch (title){	
		 case "systemIds": $("#departsTitle").html("转下一办理部门和系统"),
							$("#departsSec").val("systemIds");				
				break;
		 case "archiveSystemId": $("#departsTitle").html("转下一办理部门和系统"),
		 				  $("#departsSec").val("archiveSystemId");
	  		break;
		}
		$("#departModal").modal("show");
		$scope.stJson="";
	}
	// 全选 全消
	$scope.dCheck= function(id,name){		
		var bischecked=$('#'+id).is(':checked'); 			
        var fruit=$('input[name="'+name+'"]');  
        fruit.prop('checked',bischecked);  
        if(name=="dpatM"){
        	$scope.matters();
        }
        if(name=="dpatSysm"){
        	$scope.depart();
        }
	}
	//部门显示系统
	$scope.depart=function(){
		var check_val = [];   
		$("input:checkbox[name='dpatSysm']:checked").each(function(){
			check_val.push($(this).val());
		})
		var url=urlpath+"transactDetail/getShareOrgDepSys.do?temId="+localStorage.templateId+"&departIds="+check_val;
		getHttp($http, url, function(data) {
			$scope.stJson=data;
		})
	}
	//事项弹出框
	$scope.nextM=function(){
		$("input[type='checkbox']").prop("checked",false);
		$("#nextModal").modal("show");
		$scope.matter="";
	}
	//勾选部门显示事项
	$scope.matters=function(){
		var check_val = [];   
		$("input:checkbox[name='dpatM']:checked").each(function(){
			check_val.push($(this).val());
		})
		console.log(check_val);
		
		var url=urlpath+"transactDetail/getShareHandlMatterDepSys.do?departIds="+check_val;
		getHttp($http, url, function(data) {
			console.log(data)	
			$scope.matter=data;			
		})
	}
	//保存办理事项
	$scope.saveMatter=function(){
		var check_id = [],check_val = [];   
		$("input:checkbox[name='Matter']:checked").each(function(){
			check_id.push(this.id);
			check_val.push($(this).val());
		})

		$("#matterIds").val(check_val)
		$("#matterIds1").val(check_id)
		$("#nextModal").modal("hide");
	}
	//保存系统
	$scope.saveSys=function(){
		var id=$("#departsSec").val();
		var check_id = [],check_val = [];   
		$("input:checkbox[name='systemId']:checked").each(function(){
			check_id.push(this.id);
			check_val.push($(this).val());
		})
		$("#"+id+"1").val(check_id);
		$("#"+id).val(check_val);
		$("#departModal").modal("hide");
	}
	//页面保存
	$scope.saveAll= function(){
		$("#myForm").ajaxSubmit({
    		 url:urlpath+"transactDetail/updateTransactDetail.do",
    		 type:"post",
    		 dataType:"json",
    		 success:function(data){
                if(data.result){
	            	alert("保存成功");           	
					location.href="transactDetail.html"
	            }else{
	            	alert("网络错误保存失败");
	            }
           },
            error:function(data){
                alert("网络错误");
            }
            
    	})
	}
	
})