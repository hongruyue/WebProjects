var assignmentUserModule = angular.module('myApp', []);
assignmentUserModule.controller('assignmentUser', function($scope, $http, $location) {
	var projId = localStorage.projId;
	$scope.projId = projId;
	$scope.roleId = sessionStorage.getItem("roleId");
	$http.get(urlpath + 'role/assignUser.do?roleId=' + $scope.roleId).then(function(result) {
		console.log(result);
		$scope.list = result.data.list;
	});
	
	//获取没有关联的用户
	$scope.getNoAssignUser = function() {
		$("#userlist").html("");
		//console.log($("#projId"));
		var projId = $("#projId").val();
		$.ajax({
			type: "POST",
			url: urlpath + "role/getNoAssignUser.do",
			data: {
				roleId: $scope.roleId,
				projId: $scope.projId
			},
			success: function(result) {
				var select = document.getElementById("userlist");
				for (var i = 0; i < result.length; i++) {
					var option = document.createElement("option");
					option.innerHTML = result[i].alias + "  (" + result[i].username + ")";
					option.value = result[i].userId
					select.appendChild(option);
				}
	
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("网络错误");
			}
		});

	}
	//移除当前角色的user
	$scope.removeUser = function(userId) {
		if(confirm("确认删除吗？")){
			$.ajax({
				type: "POST",
				url: urlpath + "role/removeUser.do",
				data: {
					userId: userId
				},
				success: function(result) {
					if(result.result) {
						alert("删除成功");
					} else {
						alert("删除失败");
					}
					window.location.reload();
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert("网络错误");
				}
			});
		}
	}
	
	$scope.saveAssignUser = function(roleId) {
		var userArrray = [];
		var projId = $("#projId").val();
		$('#selectedUser option').each(function() {
			var $option = $(this);
			var value = $option.val();
			userArrray.push(value);
		});
		if (userArrray.length > 0) {
			$.ajax({
				traditional: true,
				type: "POST",
				url: urlpath + "role/saveAssignUser.do",
				data: {
					userArrray: userArrray,
					roleId: roleId,
					projId: projId
				},
				success: function(result) {
					console.log(result);
					if(result.result) {
						alert("保存成功");
					} else {
						alert("保存失败");
					}
					window.location.reload();
					
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					alert("网络错误");
				}
			});
		}
	}
	//返回
	$scope.rt = function() {
		sessionStorage.setItem("projId", $("#projId").val());
		window.location = "Role_Management.html";
	}
	
});



$(function() {
	//移到右边
	$('#add1').click(function() {
		//先判断是否有选中
		if (!$("#userlist option").is(":selected")) {
			alert("请选择需要移动的选项")
		}
		//获取选中的选项，删除并追加给对方
		else {
			$('#userlist option:selected').appendTo('#selectedUser');
		}
	});
	//移到左边
	$('#remove1').click(function() {
		//先判断是否有选中
		if (!$("#selectedUser option").is(":selected")) {
			alert("请选择需要移动的选项")
		} else {
			$('#selectedUser option:selected').appendTo('#userlist');
		}
	});

});


