var BC = angular.module('appAttr', ['angular-popups']);
BC.controller('appAttrCtrl', function($scope, $http, $location) {
	var postHttp = function($http, url, jsonData, callback, config) { //回调函数
		$http.post(url, jsonData, config).success(function(data, status, headers, config) {
			callback(data);
		}).error(function(data, status, headers, config) {
			/*alert('连接失败');*/
		});
	}
	var getHttp = function($http, url, callback) { //回调函数
		$http.get(url).success(function(data, status, headers, config) {
			callback(data);
		});
	}
	$scope.depart = function() {
		var url = urlpath + "approvalAttributy/selectDepartsByOrgId.do?orgId=" + $scope.formData.organizationId;
		getHttp($http, url, function(data) {
			$scope.departs = data;
			$scope.formData.departId = $scope.departs[0].departId
		})
	}
	//显示左侧列表
	var templateId = localStorage.templateId;
	var url = urlpath + "approvalAttributy/intoApprovalNode.do?templateId=" + templateId;
	getHttp($http, url, function(data) {
		$scope.json = data;
		/*	console.log($scope.json)*/
	})

	$scope.formData = {};
	var url = urlpath + "approvalAttributy/selectAllOrg.do?templateId=" + templateId;
	getHttp($http, url, function(data) {
		$scope.approval = data;
		$scope.formData.organizationId = $scope.approval[0].id;
		$scope.depart();
	})
	//点击添加弹出框
	$scope.preAdd = function() {
		$("#myModal").modal("show");
		$("input[type='radio']").prop("checked", false);
		$(".btm").css("display", "none");
		$("#Update").css("display", "none");
		$("#deleteApproval").css("display", "none");
		$scope.trans = "";
	}

	//添加保存
	$scope.formData.projId = localStorage.projId;
	$scope.formData.templateId = localStorage.templateId;
	$scope.submitForm = function() {
		$http({
				method: 'POST',
				url: urlpath + "approvalAttributy/addApprovalNode.do",
				data: $.param($scope.formData), // pass in data as strings
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				} // set the headers so angular passing info as form data (not request payload)
			})
			.success(function(data) {
				if(data.result) {
					alert("保存成功");
					$("#myModal").modal("hide");
					location.href = "approvalAttribute.html"
				} else {
					alert("网络错误保存失败");
				}

			});
	}

	//修改
	$scope.updateData = {};
	$scope.preUpdate = function() {
		$("#upModal").modal("show");
		$("input:radio[name='approval']:checked").each(function() {
			var va = $(this).val();
			for(i in $scope.json) {
				if(va == $scope.json[i].nodeId) {
					$scope.updateData.organizationId = $scope.json[i].organizationId;
					$scope.updateData.departId = $scope.json[i].departId;
					$scope.updateData.approvalnodeName = $scope.json[i].nodeName;
				}
			}
			$scope.updateData.nodeId = parseInt(va);
		})
	}
	//修改保存
	$scope.updateForm = function() {
		/*console.log($scope.updateData)*/
		$http({
				method: 'POST',
				url: urlpath + "approvalAttributy/updateApprovalNode.do",
				data: $.param($scope.updateData), // pass in data as strings
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				} // set the headers so angular passing info as form data (not request payload)
			})
			.success(function(data) {
				if(data.result) {
					alert("保存成功");
					$("#upModal").modal("hide");
					location.href = "approvalAttribute.html"
				} else {
					alert("网络错误保存失败");
				}

			});
	}
	//删除
	$scope.deleteApprovalNode = function() {
		if(confirm("确认删除吗？")) {
			$("input:radio[name='approval']:checked").each(function() {
				var va = $(this).val();
				var url = urlpath + "approvalAttributy/deleteApprovalNode.do?approvalNodeId=" + va;
				getHttp($http, url, function(data) {
					if(data.result) {
						alert("删除成功");
						location.href = "approvalAttribute.html"
					} else {
						alert("网络错误删除失败");
					}
				})
			})
		}

	}

	//点击左侧列表显示右边
	$scope.changeApp = function(nodeId) {
		var url = urlpath + "transactLink/selectAll.do?nodeId=" + nodeId;
		getHttp($http, url, function(data) {
			/*	console.log(data)*/
			$scope.trans = data;
		})
		$("#nodeId").val(nodeId)
		$("#nodeId1").val(nodeId)
		$("#nodeIdimg").val(nodeId)
		
		$(".btm").css("display", "inline-block");
		$("#Update").css("display", "inline-block");
		$("#deleteApproval").css("display", "inline-block");

	}
	$("#ordinary").css("display", "none");
	if(sessionStorage.linkId != undefined) {
		$scope.nodeId = parseInt(sessionStorage.linkId);
		$scope.changeApp($scope.nodeId);

	}
	$scope.addclear = function() {
		$("#addInitialLink").modal("show");
		$("#initialLink").val(0)
		$("#gist").val('');
		$("#inits").css("display", "block");
		$("#ordinary").css("display", "none");

		$("#applyTime").val("年/月/日");
		$("#rollinTime1").val("年/月/日");
		$("#makeTime").val("年/月/日");
		$("#finishTime").val("年/月/日");
		$("#sendoutTime").val("年/月/日");

		$("#arrivalTime").val("年/月/日");
		$("#receiveTime").val("年/月/日");
		$("#transactTime").val("年/月/日");
		$("#rollinTime").val("年/月/日");

		$("#nextSendoutTime").val("年/月/日");
		$("#ratedTime").val("年/月/日");
		$("#actualTime").val("年/月/日");
		$("#issignature").val(1);
		$(".showflie").html("");

	}
	//环节添加
	$scope.addLinkForm = function() {
		$("#myForm").ajaxSubmit({
			url: urlpath + "transactLink/addTransactLink.do",
			type: "post",
			enctype: "multipart/from-data",
			dataType: "json",
			success: function(data) {
				if(data.result) {
					alert("保存成功");
					$("#addInitialLink").modal("hide");
					$scope.changeApp($("#nodeId1").val())
				} else {
					alert("网络错误保存失败");
				}
			},
			error: function(data) {
				alert("网络错误");
			}

		})
	};
	//环节修改	
	$scope.UpdateInitialLink = function(x) {
		$("#linkId").val(x.linkId)
		$scope.initialLinka = String(x.initialLink);
		if(x.initialLink == "0") {
			$("#inits1").css("display", "block");
			$("#ordinary1").css("display", "none");
			$scope.applyTimea = x.applyTime;
			$scope.rollinTimea = x.rollinTime;
			$scope.makeTimea = x.makeTime;
			$scope.finishTimea = x.finishTime;
			$scope.sendoutTimea = x.sendoutTime;
		}
		if(x.initialLink == "1") {
			$("#inits1").css("display", "none");
			$("#ordinary1").css("display", "block");
			$scope.arrivalTimea = x.arrivalTime;
			$scope.receiveTimea = x.receiveTime;
			$scope.transactTimea = x.transactTime;
			$scope.rollinTimea = x.rollinTime;
		}
		$scope.gista = x.gist;
		$scope.nextSendoutTimea = x.nextSendoutTime;
		$scope.ratedTimea = x.ratedTime;
		$scope.actualTimea = x.actualTime;
		$scope.issignaturea = String(x.issignature);
		if(x.issignature == "0") {
			$("#showFlie1").css("display", "none");
		}
		if(x.issignature == "1") {
			$("#showFlie1").css("display", "block");
			$(".showflie").html(x.signatureName);
		}

		$("#updInitialLink").modal("show");

	}
	//环节修改保存
	$scope.updLinkForm = function() {
		$("#updlink").ajaxSubmit({
			url: urlpath + "transactLink/updateTransactLink.do",
			type: "post",
			enctype: "multipart/from-data",
			dataType: "json",
			success: function(data) {
				if(data.result) {
					alert("保存成功");
					$("#updInitialLink").modal("hide");
					$scope.changeApp($("#nodeId").val())
				} else {
					alert("网络错误保存失败");
				}
			},
			error: function(data) {
				alert("网络错误");
			}

		})
	};
	//环节删除
	$scope.deleteInitialLink = function(linkId) {
		if(confirm("确认删除吗？")) {
			var url = urlpath + "/transactLink/deleteTransactLink.do?linkId=" + linkId;
			getHttp($http, url, function(data) {
				if(data.result) {
					alert("删除成功");
					$scope.changeApp($("#nodeId1").val())
				} else {
					alert("网络错误删除失败");
				}
			})
		}
	}
	//跳转细节页面
	$scope.goOtherPage2 = function(linkId) {
		location.href = "transactDetail.html";
		sessionStorage.setItem("linkId", $("#nodeId").val());
	}

	//印章添加
	$scope.addseal = function() {
		$("#uploadImg").modal("show");
	}
	$scope.submitImg = function() {
		$("#addimg").ajaxSubmit({
			url: urlpath + "signet/saveSignet.do ",
			type: "post",
			enctype: "multipart/from-data",
			dataType: "json",
			success: function(data) {
				console.log(data)
			},
			error: function(data) {
				alert("网络错误");
			}

		})
	}
});
