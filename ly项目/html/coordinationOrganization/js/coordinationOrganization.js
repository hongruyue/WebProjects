var setting = {
	data: {
		simpleData: {
			enable: true,
			idKey: "regionalId",
			pIdKey: "superiorRegional",
			rootPId: 0,
		},
		key: {
			name: "regionalName",
		}
	},
	view: {
		selectedMulti: false
	},
	callback: {
		onClick: zTreeOnClick
	}
};

function zTreeOnClick(event, treeId, treeNode) {
	// alert(treeNode.regionalId+"="+treeNode.regionalName);
	var regionalId = treeNode.regionalId;
	var regionalName = treeNode.regionalName;
	sessionStorage.setItem("regionalId", regionalId);
	sessionStorage.setItem("regionalName", regionalName);
	window.location.href = "coordinationOrganization.html";
}

var orgApp = angular.module("org", []);
orgApp.controller("orgCtrl", function($scope, $http, $location) {
	var regionalId = sessionStorage.getItem("regionalId");
	if(!regionalId) {
		regionalId = 0;
	}
	$http.get(urlpath+'coordinationOrganization/queryAllOrganization.do?regionalId=' + regionalId).then(function (result){
		$scope.Organizationlist = result.data.Organizationlist;
	}, function() {
		alert("网络错误");
	});

	//操作按钮显示下拉切换
	$scope.toggle = function(i) {
		$(".pop_operation" + i).slideToggle();
	}

	$scope.add = function() {
		var treeObj = $.fn.zTree.getZTreeObj("tree");
		var nodes = treeObj.getSelectedNodes(); //获得一个对象
		//console.log(nodes.length)
		if (nodes.length == 0) {
			alert("请先选中一个区域！")
		} else {
			for (var i = 0; i < nodes.length; i++) {
				var regionalId = nodes[i].regionalId;
				var regionalName = nodes[i].regionalName;
			}
			sessionStorage.setItem("regionalId", regionalId);
			sessionStorage.setItem("regionalName", regionalName);
			window.location.href = "addOrganization.html";
		}
	}

	$scope.del = function(id) {
		if(confirm("确认删除吗？")) {
			$.ajax({
				type: "post",
				url: urlpath + "coordinationOrganization/deleteorganiza.do",
				data: {
					"id": id
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
	//跳转到修改组织机构页面
	$scope.update = function(id) {
		sessionStorage.setItem("id", id);
		window.location.href = "updateOrganization.html";
	}

	//进入部门、系统、事项系统管理
	$scope.System = function(orgId, regionalId, organizationName) {
		sessionStorage.setItem("orgId", orgId);
		sessionStorage.setItem("organizationName", organizationName);
		sessionStorage.setItem("regionalId", regionalId);
		window.location.href = "CoordinationsSystem.html";
	}
	
	$(function() {
		//获取所有区域
		$.ajax({
			traditional: true,
			type: "post",
			url: urlpath + "regionalManagement/selectParentRm.do",
			success: function(result) {
				var treeNodes = result;
				zTreeObj = $.fn.zTree.init($("#tree"), setting, treeNodes);
				var regionalId = sessionStorage.regionalId;
				var node = zTreeObj.getNodeByParam("regionalId", regionalId, null);
				zTreeObj.selectNode(node);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				alert("网络错误");
			}
		});
	});
	
});
