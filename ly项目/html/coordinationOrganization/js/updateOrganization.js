var updateOrgApp = angular.module("updateOrg", []);
updateOrgApp.controller("updateOrgCtrl", function($scope, $http, $location) {
	var regionalId = sessionStorage.getItem("regionalId");
	$scope.regionalId = regionalId;
	var id = sessionStorage.getItem("id");
	$http.get(urlpath+'coordinationOrganization/uporganization.do?id=' + id).then(function (result){
		$scope.organization = result.data.organization;
		$scope.areaName = result.data.areaName;
		$scope.areaid = result.data.areaid;
	}, function() {
		alert("网络错误");
	});
	
	
	$scope.updateOrg = function() {
		var option = {
            type:"post",
            url: urlpath + "coordinationOrganization/updateCo.do",
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
	    $("#updateForm").ajaxSubmit(option);
	}
	
	$scope.rt = function() {
		window.location.href = "coordinationOrganization.html";
	}
});


//修改选择区域方法
/*function selectParent() {
	$.ajax({
		traditional: true,
		type: "post",
		url: "<%=basePath%>regionalManagement/selectParentRm.do",
		success: function(result) {
			var treeNodes = result;
			zTreeObj = $.fn.zTree.init($("#tree"), setting, treeNodes);
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert("网络错误");
		}
	});
}	*/

//设定选中的区域
/*function selected() {
	var treeObj = $.fn.zTree.getZTreeObj("tree");
	var nodes = treeObj.getSelectedNodes(); //获得一个对象
	for (var i = 0; i < nodes.length; i++) {
		var regionalId = nodes[i].regionalId;
		var regionalName = nodes[i].regionalName;
	}
	$("#sid").val(regionalId);
	$("#sname").val(regionalName);
	$("#myModal").modal("hide");
}*/