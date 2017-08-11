var superUserApp = angular.module('superUser', []);

superUserApp.controller('superUserCtrl', function($scope, $http, $location) {
	$http.get(urlpath + "superuser/showSuperUser.do").then(function(result) {
		//console.log(result);
		$scope.users = result.data.users;
		//分页
		var page = result.data.Total;
		var curren = result.data.pageNum;
		$(".tcdPageCode").createPage({
			pageCount: page,
			current: curren,
			backFn: function(p) {
				$http({
					method: 'get',
					url: urlpath + "superuser/showSuperUser.do?pageNo=" + p,
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(function(result) {
					$scope.pageNo = result.data.pageNum;
					$scope.roles = result.data.users;
				});
			}
		});
	});
	//删除用户
	$scope.deleteUser = function(userId) {
		var msg = confirm("是否确认删除？");
		if (msg) {
			$.ajax({
				type: "POST",
				url: urlpath + "superuser/deleteSuperUser.do",
				data: {
					id: userId
				},
				success: function(result) {
					if(result.result) {
	            		alert("删除成功");
	            	} else{
	            		alert("删除失败");
	            	}
					window.location.reload();
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert("网络错误");
				}
			});
		} else {
			return;
		}

	}
	//增加用户
	$scope.addUser = function(){
		window.location.href = "addSuperUser_Management.html";
	}
	//修改用户
	$scope.intoUpdateUser = function(user) {
		sessionStorage.setItem("pageNo", $scope.pageNo);
		sessionStorage.setItem("upUser", JSON.stringify(user));
		window.location.href = "updateSuperUser_Management.html";
	}
	//进入修改密码模态框
	$scope.intoUpdatePassword = function(userId) {
		$("#uId").val(userId);
		$("#password").val("");
		$("#confirmpassword").val("");
	}
	//修改密码
	$scope.updatePassword = function() {
		var option = {
        	type:"get",
            url: urlpath + "superuser/updatePassword.do",
            data:{
            },
            success:function(result){
            	if(result.result) {
            		alert("密码修改成功");
            		$("#updatepwd").modal("hide");
            	} else{
            		if(result.message) {
            			alert(result.message);
            		} else {
            			alert("密码修改失败");
            		}
            	}
            }
	    }
	    $("#updateForm").ajaxSubmit(option);
	}
	
	
});

