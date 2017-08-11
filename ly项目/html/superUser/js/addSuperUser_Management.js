var addSuperUserApp = angular.module('addSuperUser', []);

addSuperUserApp.controller('addSuperUserCtrl', function($scope, $http, $location) {
	//返回
	$scope.rt = function(){
		window.location.href = "SuperUser_Management.html";
	}
	//添加用户
	$scope.addUser = function(){
		var option = {
        	type:"get",
            url: urlpath + "superuser/saveSuperUser.do",
            data:{
            },
            success:function(result){
            	if(result.result) {
            		alert("添加成功");
            	} else{
            		alert("添加失败");
            	}
            	window.location.href = "SuperUser_Management.html";
            }
	    }
	    $("#addUserForm").ajaxSubmit(option);
	}
	
});
