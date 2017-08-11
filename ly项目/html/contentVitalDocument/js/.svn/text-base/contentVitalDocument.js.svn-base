var BC = angular.module('cl',['angular-popups']);
var templateId = localStorage.templateId;
BC.controller('contentVitalDocument',function($scope, $http){
	$http.get(urlpath+'ContentVitalDocument/intoContentVitalDocument.do?templateId='+templateId).then(function(result){
		
		$scope.contentVitalDocument = result.data.list;
		$scope.departMap = result.data.departMap;
		$scope.handMatterMap = result.data.handMatterMap;
		$scope.map = result.data.map;
		
		for(var i  in $scope.contentVitalDocument){
			//由谁核实
			if($scope.contentVitalDocument[i].fromCheck!=null&&$scope.contentVitalDocument[i].fromCheck!=""){
				$scope.contentVitalDocument[i].cfromCheck = ky($scope.contentVitalDocument[i].fromCheck,$scope.departMap);
			}
			//向谁核实
			if($scope.contentVitalDocument[i].toCheck!=null&&$scope.contentVitalDocument[i].toCheck!=""){
				$scope.contentVitalDocument[i].ctoCheck = ky($scope.contentVitalDocument[i].toCheck,$scope.departMap);
			}
			//共享方
			if($scope.contentVitalDocument[i].checkShareHandlMatterIds!=null&&$scope.contentVitalDocument[i].checkShareHandlMatterIds!=""){
				$scope.contentVitalDocument[i].ccheckShareHandlMatterIds = ky($scope.contentVitalDocument[i].checkShareHandlMatterIds,$scope.handMatterMap);
			}
			//入库方
			//共享方
			if($scope.contentVitalDocument[i].storageOrgIds!=null&&$scope.contentVitalDocument[i].storageOrgIds!=""){
				$scope.contentVitalDocument[i].cstorageOrgIds = ky($scope.contentVitalDocument[i].storageOrgIds,$scope.map);
			}
		}
		
	});
	
	function ky (x,y){
		var chararray = new Array();
		var xx = x.split(",");
		for(var h in xx){
			if(y[xx[h]]!=null){
				chararray.push(y[xx[h]]+"/");
			}
		}
		var str=chararray.join("")
		return str;
	}
	//增加跳转
	$scope.add = function() {
		window.location.href="addContentVitalDocument.html";
	}
	//修改页面跳转
	$scope.update = function(x){
		sessionStorage.setItem("contentVitalDocument",JSON.stringify(x));
		window.location.href="updateContentVitalDocument.html";
	}
	//删除功能
	$scope.delete = function(id){
		if(confirm("确认删除吗？")){
			$http({
				method  : 'POST',
	        	url     : urlpath+"ContentVitalDocument/deleteContentVitalDocument.do",
	        	params  : {id:id},
				headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).success(function(data){
				if(data.result){
            		alert("删除成功");
            		location.reload();
           		}else{
            		alert("网络错误");
          		}
			});
		}else{
			return;
		}
	}
});
var BC1 = angular.module('addcl',[]);
BC1.controller('addcontentVitalDocument',function($scope,$http){
	$http.get(urlpath+'ContentVitalDocument/addContentVitalDocument.do?templateId='+templateId).then(function(result){
		$scope.shareOrgDeparts = result.data;
		console.log(result.data);
	});
	$scope.submitForm = function() {
		var option = {
            type:"post",
            url: urlpath + "ContentVitalDocument/insertContentVitalDocument.do",
            data:{
            	templateId:templateId,
            	projId:localStorage.projId
            },
            success:function(result){
            	if(result.result) {
            		alert("添加成功");
            		window.location.href="contentVitalDocument.html";
            	} else{
            		alert("添加失败");
            	}
            }
	    }
	    $("#testForm").ajaxSubmit(option);
	}
});
var BC2 = angular.module('updatecl',[]);
BC2.controller('updatecontentVitalDocument',function($scope,$http){
	$http.get(urlpath+'ContentVitalDocument/addContentVitalDocument.do?templateId='+templateId).then(function(result){
		$scope.shareOrgDeparts = result.data;
	});
	var x = JSON.parse(sessionStorage.getItem("contentVitalDocument"));
	$scope.contentVitalDocument={};
	$scope.contentVitalDocument.name = x.name;
	$scope.contentVitalDocument.fileName = x.fileName;
	$scope.contentVitalDocument.ifCheck = x.ifCheck;
	$scope.contentVitalDocument.fromCheck = x.fromCheck;
	$scope.contentVitalDocument.toCheck = x.toCheck;
	$scope.contentVitalDocument.checkShareHandlMatterIds = x.checkShareHandlMatterIds;
	$scope.contentVitalDocument.storageOrgIds = x.storageOrgIds;
	//中文
	$scope.contentVitalDocument.cfromCheck = x.cfromCheck;
	$scope.contentVitalDocument.ctoCheck = x.ctoCheck;
	$scope.contentVitalDocument.ccheckShareHandlMatterIds = x.ccheckShareHandlMatterIds;
	$scope.contentVitalDocument.cstorageOrgIds = x.cstorageOrgIds;
	$scope.submitForm = function() {
		var option = {
            type:"post",
            url: urlpath + "ContentVitalDocument/updateContentVitalDocument1.do",
            data:{
            	id:x.id,
            	templateId:templateId,
            	projId:localStorage.projId
            },
            success:function(result){
            	if(result.result) {
            		alert("修改成功");
            		window.location.href="contentVitalDocument.html";
            	} else{
            		alert("修改失败");
            	}
            }
	    }
	    $("#testForm").ajaxSubmit(option);
	}
});
