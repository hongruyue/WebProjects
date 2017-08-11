var updateRoleModule = angular.module("myApp", []);
updateRoleModule.controller('updateRole', function($scope, $http) {
	var role = JSON.parse(sessionStorage.getItem("role"));
	$scope.formData = {};
	$scope.formData.projId = role.projId;
	$scope.formData.roleId = role.roleId;
	$scope.formData.roleName = role.roleName;
	$scope.formData.engName = role.engName;
	$scope.formData.roleDesc = role.roleDesc;
	$scope.submitForm = function() {
		$http({
				method: 'POST',
				url: urlpath + "role/updateRole.do",
				data: $.param($scope.formData), //jquery的ajax默认会将对象进行序列化，这里手动 
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				} // set the headers so angular passing info as form data (not request payload)
			})
			.success(function(data) {
				if (data.result) {
					alert("保存成功");
					location.href = "Role_Management.html";
				} else {
					alert("保存失败");
				}
			});
	};
	//返回
	$scope.rt = function() {
		location.href = "Role_Management.html";
	}
});

/*function checkName() {
	$.ajax({
		type: "POST",
		url: "<%=basePath%>role/checkupdateRole.do",
		data: {
			rolename: $("#chineserole").val(),
			roleid: $("#roleId").val()
		},
		success: function(result) {
			if (result == "角色名称已存在") {
				$("#chineserole").testRemind("角色名称已存在,请重新输入");
			} else {
				$("#chineserole").testRemind("");
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert("网络错误");
		}
	});
}
$("form").html5Validate(function() {
	var self = this;
	$.ajax({
		type: "POST",
		url: "<%=basePath%>role/checkupdateRole.do",
		data: {
			rolename: $("#chineserole").val(),
			roleid: $("#roleId").val()
		},
		success: function(result) {
			if (result == "角色名称已存在") {
				$("#chineserole").testRemind("角色名称已存在,请重新输入");
			} else {
				$("#chineserole").testRemind("");
				self.submit();
			}
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert("网络错误");
		}
	});

});*/