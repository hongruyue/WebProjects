//添加页面
var addRoleModule = angular.module("myApp",[]);
addRoleModule.controller('addRole',function($scope, $http){
	$scope.formData={}
	$scope.formData.projId = localStorage.projId;
	$scope.submitForm = function() {
		console.log($scope.formData);
	    $http({
	        method  : 'POST',
	        url     : urlpath + "role/addRole.do",
	        data    : $.param($scope.formData), //jquery的ajax默认会将对象进行序列化，这里手动 
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
	    })
        .success(function(data) {
            if(data.result){
            	alert("保存成功");
            	location.href="Role_Management.html";
            }else{
            	alert("保存失败");
            }
        });
	};
	$scope.rt = function () {
		location.href="Role_Management.html";
	}
	
	//清空input框
	$(function() {
		$('.input').val("");
	});
	
});






/*function checkName() {
	$.ajax({
		type: "POST",
		url: "<%=basePath%>role/checkaddRole.do ",
		data: {
			rolename: $("#chineserole").val()
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
		url: "<%=basePath%>role/checkaddRole.do",
		data: {
			rolename: $("#chineserole").val()
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