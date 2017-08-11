var editPersonApp = angular.module("editPerson", []);
editPersonApp.controller("editPersonCtrl", function($scope, $http, $location) {
	$scope.user = JSON.parse(sessionStorage.getItem("user"));
	//返回
	$scope.rt = function(){
		location.href = "Personal_Information.html";
	}
	//修改
	$scope.update = function() {
		var option = {
    		type:"post",
    		url: urlpath + "personInfo/saveEditInfo.do",
    		data:{
    		},
    		success:function(result){
            	if(result.result) {
            		alert("修改成功");
            		window.location.href = "Personal_Information.html";
            	} else{
            		alert("修改失败");
            	}
        	}
			}
		$("#editForm").ajaxSubmit(option);
	}
});