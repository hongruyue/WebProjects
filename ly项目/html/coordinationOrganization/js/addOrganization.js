var addOrgApp = angular.module("addOrg", []);
addOrgApp.controller("addOrgCtrl", function($scope, $http, $location) {
	var regionalId = sessionStorage.getItem("regionalId");
	var regionalName = sessionStorage.getItem("regionalName");
	$scope.regionalId = regionalId;
	$scope.regionalName = regionalName;
	
	$scope.addOrg = function() {
		var option = {
            type:"post",
            url: urlpath + "coordinationOrganization/addCo.do",
            data:{
            },
            success:function(result){
            	if(result.result) {
            		alert("保存成功");
            	} else{
            		alert("保存失败");
            	}
            	window.location.href = "coordinationOrganization.html";
            }
	    }
	    $("#addForm").ajaxSubmit(option);
	}
	
	$scope.rt = function() {
		window.location.href = "coordinationOrganization.html";
	}
});
