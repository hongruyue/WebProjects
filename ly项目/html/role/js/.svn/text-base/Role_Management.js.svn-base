var RO = angular.module('myApp', []);

RO.controller('roleCtrl', function($scope, $http, $location) {
	var projId = localStorage.projId;
	$http.get(urlpath + 'role/queryAllRole.do?projId=' + projId).then(function(result) {
		console.log(result);
		$scope.roles = result.data.roles;
		//分页
		var page = result.data.Total;
		var curren = result.data.pageNum;
		$(".tcdPageCode").createPage({
			pageCount: page,
			current: curren,
			backFn: function(p) {
				$scope.dataid = {};
				$scope.dataid.pageNo = p;
				$scope.dataid.projId = projId;
				$http({
					method: 'POST',
					url: urlpath + "role/queryAllRole.do",
					data: $.param($scope.dataid),
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(function(result) {
					$scope.roles = result.data.roles;
				});
			}
		});
	});

	//删除角色
	$scope.deleteRole = function(roleId) {
		if(confirm("确认删除吗？")){
			$http.get(urlpath + 'role/deleteRoleById.do?id=' + roleId)
			.then(function(result) {
				if(result.data.result) {
					alert("删除成功");
					window.location.reload();
				} else {
					alert("删除失败");
				}
				
				
			}, function() {
				alert("网络错误");
			});
		}
		
	}

	//跳转到添加角色页面
	$scope.intoAddRole = function(projId) {
		window.location.href = "addRole.html";  
	}

	//进入修改角色页面
	$scope.intoUpdateRole = function(role) {
		console.log(role);
		sessionStorage.setItem("role", JSON.stringify(role));
		sessionStorage.setItem("projId", projId);
		window.location.href = "updateRole.html";
	}

	//进入分配用户界面
	$scope.intoAssignUser = function(roleId) {
		sessionStorage.setItem("roleId", roleId);
		sessionStorage.setItem("projId", projId);
		window.location.href = "Assignment_User.html";
	}

});