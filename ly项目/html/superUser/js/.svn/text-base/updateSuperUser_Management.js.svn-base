var upSuperUserApp = angular.module('upSuperUser', []);

upSuperUserApp.controller('upSuperUserCtrl', function($scope, $http, $location) {
	$scope.upUser = JSON.parse(sessionStorage.getItem("upUser"));
	//返回
	$scope.rt = function(){
		window.location.href = "SuperUser_Management.html";
	}
	//修改用户
	$scope.updateUser = function() {
		var option = {
        	type:"get",
            url: urlpath + "superuser/udSuperUser.do",
            data:{
            },
            success:function(result){
            	if(result.result) {
            		alert("修改成功");
            	} else{
            		alert("修改失败");
            	}
            	window.location.href = "SuperUser_Management.html";
            }
	    }
	    $("#updateUserForm").ajaxSubmit(option);
	}
	
});

