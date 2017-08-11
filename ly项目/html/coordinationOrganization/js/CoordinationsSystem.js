
var sysApp = angular.module("sys", ["ngRoute"]);
sysApp.config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/systems',{templateUrl: "system.html"})
                .when('/matters',{templateUrl: "matter.html"})
                .when('/signets',{templateUrl: "signet.html"});
            }]);
sysApp.controller("sysCtrl", function($scope, $http, $location) {
	//组织机构id
	var orgId = sessionStorage.getItem("orgId");
	//组织机构名称
	var organizationName = sessionStorage.getItem("organizationName");
	//区域id，用于返回定位
	var regionalId = sessionStorage.getItem("regionalId");
	//部门id(如果有则查询部门下系统，选中的部门id)
	var departId = sessionStorage.getItem("departId");
	$scope.departId = departId;
	$scope.orgId = orgId;
	$scope.organizationName = organizationName;
	//查询组织机构下部门
	$scope.selectDepsByOId = function() {
		$http.get(urlpath+'depart/selectDepsByOId.do?orgId=' + orgId).then(function (result){
			$scope.departs = result.data.departs;
		}, function() {
			alert("网络错误");
		});	
	}
	//查询组织机构下部门
	$scope.selectDepsByOId();
	
	//隐藏
	$(function(){
		if ($scope.departId == null) {
			$(".operation").css('display', 'none');
			$("#myTab").css('display', 'none');
		}
	});
	//返回
	$scope.back = function(){
		//区域id和组织机构id已经在sessionStorage中
		window.location.href = "coordinationOrganization.html";
	}
	
	//切换到业务系统模块，并再次查询
	$scope.intoSystem = function(){
		$scope.selectSysByDId($scope.departId, $scope.sysPageNum);
	}
	
	//根据部门id查询系统(部门点击事件，重置选中部门)
	$scope.depart = function(departId) {
		$scope.departId = departId;
		//部门的修改和删除按钮
		$(".operation").css('display', 'inline-block');
		//系统和事项的模块
		$("#myTab").css('display', 'inline-block');
		
		//判断a标签选中
		var flag = $("#systemLi").hasClass("active");
		if(flag) {
			//定位到系统页面
			window.location.href = "#/systems";
			$scope.selectSysByDId(departId);
		} else {
			//定位到事项页面
			window.location.href = "#/matters";
			$scope.selectHandMatter();
		}
		var flag1 = $("#signetLi").hasClass("active");
		if(flag1) {
			//定位到印章页面
			window.location.href = "#/signets";
			$scope.selectsignets();
		} 
	}
	//根据部门id查询系统
	$scope.selectSysByDId = function(departId, pageNo) {
		var url = urlpath+'coordinationsSystem/selectSystem.do?departId=' + departId;
		if(pageNo) {
			url = urlpath+'coordinationsSystem/selectSystem.do?departId=' + departId + "&pageNo=" + pageNo;
		}
		$http.get(url).then(function(result){
			$scope.systems = result.data.systems;
			//分页
			var page = result.data.Total;
		    var curren = result.data.pageNum;
			$("#tcdPageCode1").createPage({
				pageCount:page,
				current:curren,
				backFn:function(p){
					$http.get(urlpath+'coordinationsSystem/selectSystem.do?departId=' + departId + "&pageNo=" + p).then(function (result){
						$scope.systems = result.data.systems;
						$scope.sysPageNum = result.data.pageNum;
					}, function() {
						alert("网络错误");
					});
				}
			});
		});
	}
	
	
	//添加部门
	$scope.addDep = function() {
		var option = {
            type:"post",
            url: urlpath + "depart/insertDepart.do",
            data:{
            },
            success:function(result){
            	if(result.result) {
            		alert("添加成功");
            	} else{
            		alert("添加失败");
            	}
            	$("#addDep").modal("hide");
				$scope.selectDepsByOId();
            }
	    }
	    $("#addDepForm").ajaxSubmit(option);
	}
	
	// 删除部门
	$scope.deleteDep = function(){
		var departId = $scope.departId;
		if(departId != null && departId != "") {
			if(confirm("确定要删除该条信息?")){
				$.ajax({ 
					url : urlpath + "depart/deleteDepart.do",
					type : "get",
					data : {
						"departId" : departId
					},
					success:function(result){
						if(result.result) {
		            		alert("删除成功");
		            	} else{
		            		alert("删除失败");
            			}
		            	$scope.departId = null;
		            	$scope.selectDepsByOId();
		            	//未选中部门，隐藏系统和事项html
		            	$(".operation").css('display', 'none');
						$("#myTab").css('display', 'none');
					}
				});
			}
		} else {
			alert("请选择部门。。。");
		}
		
	}
	
	//修改部门
	$scope.updateDep = function() {
		var option = {
            type:"post",
            url: urlpath + "depart/updateDepart.do",
            data:{
            },
            success:function(result){
            	console.log(result);
            	if(result.result) {
            		alert("修改成功");
            	} else{
            		alert("修改失败");
            	}
            	$("#updateDep").modal("hide");
            	$scope.selectDepsByOId();
            }
	    }
	    $("#updateDepForm").ajaxSubmit(option);
	}
	
	//添加系统
	$scope.addSystem = function() {
		var option = {
            type:"post",
            url: urlpath + "coordinationsSystem/insertSystem.do",
            data:{
            },
            success:function(result){
            	console.log(result);
            	if(result.result) {
            		alert("添加成功");
            	} else{
            		alert("添加失败");
            	}
            	$("#addSys").modal("hide");
            	$scope.selectSysByDId($scope.departId, $scope.sysPageNum);
            }
	    }
	    $("#addSystemForm").ajaxSubmit(option);
	}
	
	//修改系统
	$scope.updateSystem = function() {
		var option = {
            type:"post",
            url: urlpath + "coordinationsSystem/updateSystem.do",
            data:{
            },
            success:function(result){
            	console.log(result);
            	if(result.result) {
            		alert("修改成功");
            	} else{
            		alert("修改失败");
            	}
            	$("#updateSys").modal("hide");
            	$scope.selectSysByDId($scope.departId, $scope.sysPageNum);
            }
	    }
	    $("#updateSystemForm").ajaxSubmit(option);
	}
	
	//删除系统
	$scope.deleteSystem = function(systemId) {
		if(confirm("确认删除吗？")) {
			$.ajax({
				type:"post",
	            url: urlpath + "coordinationsSystem/deleteSystem.do",
	            data:{
	            	systemId : systemId
	            },
	            success:function(result){
	            	console.log(result);
	            	if(result.result) {
	            		alert("删除成功");
	            	} else{
	            		alert("删除失败");
	            	}
	            	$scope.selectSysByDId($scope.departId, $scope.sysPageNum);
	            }
			});
		}
	}
	
	//查找办理事项 
	$scope.selectHandMatter = function(pageNum){
		var url = urlpath + "handlMatters/selectHandlMatters.do?departId=" + $scope.departId;
		if(pageNum) {
			url = urlpath + "handlMatters/selectHandlMatters.do?departId=" + $scope.departId + "&pageNo=" + pageNum;
		}
		$http.get(url).then(function (result){
			$scope.matters = result.data.list;
			//分页
			var page = result.data.pages;
		    var curren = result.data.pageNum;
			$("#tcdPageCode2").createPage({
				pageCount:page,
		        current:curren,
		        backFn:function(p){
		        	var url = urlpath + "handlMatters/selectHandlMatters.do?departId=" + $scope.departId + "&pageNo=" + p;
		        	$http.get(url).then(function(result){
		        		$scope.matters = result.data.list;
		        		$scope.matterPageNum = result.data.pageNum;
		        	});
		        }
	     	});
		});
	}
	
	
	//进入增加办理事项模态框
	$scope.intoAddMatter = function(){
			$("#handlMatterName").val("");
			$("#handlMatterContent").val("");
			$("#handlMatterName").placeholder="请输入办理事项名称";
			$("#handlMatterContent").placeholder="请输入办理内容"; 
			$("#HandlingMatters").modal("show");
		}
		//添加办理事项
		$scope.addMatter = function(){
			if($("#handlMatterName").val().trim() ==""){
				return;
			}
			if($("#handlMatterContent").val().trim() ==""){
				return;
			}
			$.ajax({ 
				url : urlpath + "handlMatters/addHandlMatter.do",
				type : "POST",
				data : $('#handlMatterForm').serialize(),
				success:function(result){
					if(result.result) {
	            		alert("添加成功");
	            	} else{
	            		alert("添加失败");
	            	}
					$("#HandlingMatters").modal("hide");
					$scope.selectHandMatter($scope.matterPageNum);
				}
			});
		}
		//进入修改办理事项模态框
		$scope.intoUpdateMatter = function(matter){
			$("#upHandlingMatters").modal("show"); 
			$("#handlMatterId").val(matter.handlMatterId);
			$("#uphandleName").val(matter.handlMatterName);
			$("#uphandleContent").val(matter.handlMatterContent);
		}
		//修改办理事项 
		$scope.updateMatter = function(){
			var option = {
	            type:"post",
	            url: urlpath + "handlMatters/updateHandlMatter.do",
	            data:{
	            },
	            success:function(result){
	            	//console.log(result);
	            	if(result.result) {
	            		alert("修改成功");
	            	} else{
	            		alert("修改失败");
	            	}
	            	$("#upHandlingMatters").modal("hide");
	            	$scope.selectHandMatter($scope.matterPageNum);
	            }
		    }
	    	$("#upHandMattersForm").ajaxSubmit(option);
		}
		// 删除办理事项
		$scope.deleteHandlMatter = function(handlMatterId){
			if(confirm("确定要删除该条信息?")){
				$.ajax({ 
					url : urlpath + "handlMatters/deleteHandlMatter.do",
					type : "get",
					data : {
						"handlMatterId" : handlMatterId
					},
					success:function(result){
						if(result.result) {
		            		alert("删除成功");
		            	} else{
		            		alert("删除失败");
		            	}
						$scope.selectHandMatter($scope.matterPageNum);
					}
				});
			}
		}
	
	
	//进入增加部门的模态框
	$scope.intoAddDep = function() {
		$("#addDepForm").find("input[name='departName']").val("");
    	$("#addDepForm").find("select[name='departLv']").val("等级一");
    	$("#addDepForm").find("select[name='departInfo']").val("");
    	$("#addDep").modal("show");
	}
	
	//进入修改部门的模态框
	$scope.intoUpdateDep = function() {
		var departId = $scope.departId;
		if(departId != null && departId != "") {
			$.ajax({
        		type: "post",
				url:urlpath + "depart/info.do",
				data : {
					departId : departId
			    },
			    dataType: "json",
			    success : function(result) {
			    	$("#updateDepForm").find("input[name='departId']").val(result.departId);
			    	$("#updateDepForm").find("input[name='departName']").val(result.departName);
			    	$("#updateDepForm").find("select[name='departLv']").val(result.departLv);
			    	$("#updateDepForm").find("select[name='departInfo']").val(result.departInfo);
			    	$("#updateDep").modal("show");
			    }
			});
		} else {
			alert("请选择部门。。。");
		}
	}
	
	//进入增加系统的模态框
	$scope.intoAddSys = function() {
		$("#addSystemForm").find("input[name='systemName']").val("");
    	$("#addSystemForm").find("input[name='systemAddress']").val("");
    	$("#addSys").modal("show");
	}
	
	//进入修改系统的模态框
	$scope.intoUpdateSys = function(system) {
		$scope.upSystem = system;
		$("#updateSys").modal("show");
	}

	//显示印章列表
	$scope.selectsignets=function(){
		var url = urlpath + "signet/selectSignet.do?departId=" + $scope.departId;	
		$http.get(url).then(function (result){
			$scope.signet = result.data.list;
			//分页
			var page = result.data.pages;
		    var curren = result.data.pageNum;
			$("#tcdPageCode2").createPage({
				pageCount:page,
		        current:curren,
		        backFn:function(p){
		        	var url = urlpath + "signet/selectSignet.do?departId=" + $scope.departId + "&pageNo=" + p;
		        	$http.get(url).then(function(result){
		        		$scope.signet = result.data.list;
		        		$scope.signetPageNum = result.data.pageNum;
		        	});
		        }
	     	});
		});
	}
	//进增加模态框
	$scope.addSignet=function(){
		$("#addSignets").modal("show");
		$("#signetName").val("");
		$("#img").val("");
		$("#showImgName").val("");
	}
	//增加印章
	$scope.submitImg = function() {
		$("#addimg").ajaxSubmit({
			url: urlpath + "signet/saveSignet.do ",
			type: "post",
			enctype: "multipart/from-data",
			dataType: "json",
			success: function(data) {
				if(data.result){
					alert("保存印章成功！")
					$("#addSignets").modal("hide");
					$scope.selectsignets();
				}else{
					alert("网络错误保存印章失败！")
				}
			},
			error: function(data) {
				alert("网络错误");
			}

		})
	}
	//进修改模态框
	$scope.updateSignet=function(x){
		$scope.signetName=x.signetName;
		$("#signetId").val(x.signetId);
		$("#upImgName").html(x.name);
		$("#upSignets").modal("show");
	}
	//印章修改保存
	$scope.submitUpImg=function(){
		$("#updateImg").ajaxSubmit({
			url: urlpath + "signet/updateSignet.do",
			type: "post",
			enctype: "multipart/from-data",
			dataType: "json",
			success: function(data) {
				if(data.result){
					alert("修改成功！");
					$("#upSignets").modal("hide");
					$scope.selectsignets();
				}else{
					alert("网络错误修改失败！")
				}
			},
			error: function(data) {
				alert("网络错误");
			}

		})
	}
	//印章删除
	$scope.deleteSignet=function(signetId){
		$http.get(urlpath+'signet/deleteSignet.do?signetId=' + signetId).then(function (result){
			console.log(result.result)
			if(result.result){
				alert("删除成功！");
				$scope.selectsignets();
			}else{
				alert("网络错误删除失败！")
			}
		}, function() {
			alert("网络错误");
		});
	}
	//印章下载
	$scope.downloadSignet=function(signetId){
		$scope.download=urlpath+'signet/downloadSignet.do?signetId=' + signetId;
	}
});

