var BC = angular.module('cl',['angular-popups']);
var templateId = localStorage.templateId;
BC.controller('contentLicense',function($scope, $http){
	$http.get(urlpath+'ContentLicense/intoContentLicense.do?templateId='+templateId).then(function(result){
		
		$scope.contentLicenses = result.data.list;
		$scope.departMap = result.data.departMap;
		$scope.handMatterMap = result.data.handMatterMap;
		$scope.map = result.data.map;
		
		for(var i  in $scope.contentLicenses){
			//由谁核实
			if($scope.contentLicenses[i].fromCheck!=null&&$scope.contentLicenses[i].fromCheck!=""){
				$scope.contentLicenses[i].cfromCheck = ky($scope.contentLicenses[i].fromCheck,$scope.departMap);
			}
			//向谁核实
			if($scope.contentLicenses[i].toCheck!=null&&$scope.contentLicenses[i].toCheck!=""){
				$scope.contentLicenses[i].ctoCheck = ky($scope.contentLicenses[i].toCheck,$scope.departMap);
			}
			//共享方
			if($scope.contentLicenses[i].checkShareHandlMatterIds!=null&&$scope.contentLicenses[i].checkShareHandlMatterIds!=""){
				$scope.contentLicenses[i].ccheckShareHandlMatterIds = ky($scope.contentLicenses[i].checkShareHandlMatterIds,$scope.handMatterMap);
			}
			//入库方
			//共享方
			if($scope.contentLicenses[i].storageOrgIds!=null&&$scope.contentLicenses[i].storageOrgIds!=""){
				$scope.contentLicenses[i].cstorageOrgIds = ky($scope.contentLicenses[i].storageOrgIds,$scope.map);
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
		window.location.href="addContentLicense.html";
	}
	//修改页面跳转
	$scope.update = function(x){
		sessionStorage.setItem("contentLicense",JSON.stringify(x));
		window.location.href="updateContentLicense.html";
	}
	//删除功能
	$scope.delete = function(id){
		if(confirm("确认删除吗？")){
			$http({
				method  : 'POST',
	        	url     : urlpath+"ContentLicense/deleteContentLicense.do",
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
BC1.controller('addcontentLicense',function($scope,$http){
	$http.get(urlpath+'ContentLicense/addcontentLicense.do?templateId='+templateId).then(function(result){
		$scope.shareOrgDeparts = result.data;
		console.log(result.data);
	});
	$scope.submitForm = function() {
		var option = {
            type:"post",
            url: urlpath + "ContentLicense/insertContentLicense.do",
            data:{
            	templateId:templateId,
            	projId:localStorage.projId
            },
            success:function(result){
            	if(result.result) {
            		alert("添加成功");
            		window.location.href="contentLicense.html";
            	} else{
            		alert("添加失败");
            	}
            }
	    }
	    $("#testForm").ajaxSubmit(option);
	}
});
var BC2 = angular.module('updatecl',[]);
BC2.controller('updatecontentLicense',function($scope,$http){
	$http.get(urlpath+'ContentLicense/addcontentLicense.do?templateId='+templateId).then(function(result){
		$scope.shareOrgDeparts = result.data;
	});
	var x = JSON.parse(sessionStorage.getItem("contentLicense"));
	$scope.contentLicense={};
	$scope.contentLicense.name = x.name;
	$scope.contentLicense.fileName = x.fileName;
	$scope.contentLicense.ifCheck = x.ifCheck;
	$scope.contentLicense.fromCheck = x.fromCheck;
	$scope.contentLicense.toCheck = x.toCheck;
	$scope.contentLicense.checkShareHandlMatterIds = x.checkShareHandlMatterIds;
	$scope.contentLicense.storageOrgIds = x.storageOrgIds;
	//中文
	$scope.contentLicense.cfromCheck = x.cfromCheck;
	$scope.contentLicense.ctoCheck = x.ctoCheck;
	$scope.contentLicense.ccheckShareHandlMatterIds = x.ccheckShareHandlMatterIds;
	$scope.contentLicense.cstorageOrgIds = x.cstorageOrgIds;
	$scope.submitForm = function() {
		var option = {
            type:"post",
            url: urlpath + "ContentLicense/updateContentLicense1.do",
            data:{
            	id:x.id,
            	templateId:templateId,
            	projId:localStorage.projId
            },
            success:function(result){
            	if(result.result) {
            		alert("修改成功");
            		window.location.href="contentLicense.html";
            	} else{
            		alert("修改失败");
            	}
            }
	    }
	    $("#testForm").ajaxSubmit(option);
	}
});
