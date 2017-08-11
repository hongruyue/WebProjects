var BC= angular.module('myApp', []);
BC.controller('metadataCtrl', function($scope, $http, $location) {
	var pid = localStorage.projId;
	$http.get(urlpath+'metadata/metadata.do?projId='+pid).then(function (result){
		console.log(result)
		$scope.metadatas = result.data.list;
		//分页
		var page= result.data.Total;
	    var curren=result.data.pageNum;
		var projId = localStorage.projId;
		$(".tcdPageCode").createPage({
			pageCount:page,
			current:curren,
			backFn:function(p){
				$scope.dataid={};
				$scope.dataid.pageNo = p;
				$scope.dataid.projId = projId;
				console.log($.param($scope.dataid))
				$http({
					method  : 'POST',
	    		    url     : urlpath+"metadata/metadata.do",
	      		    data    : $.param($scope.dataid),
				    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).then(function (result) {
					$scope.metadatas = result.data.list;
				});
			}
		});
	});
	//
	$scope.addMetaData=function(){
		window.location.href="addMetadata.html"
	}
	$scope.updateMeta=function(x){
		sessionStorage.setItem("x",JSON.stringify(x));
		window.location.href="updateMetadata.html"
	}
	$scope.deleteMeta=function(a){
		$scope.dataid={}
		$scope.dataid.id = a;
		if(confirm("确认删除吗？")){
		$http({
			method  : 'POST',
	        url     : urlpath+"metadata/deleteMetaData.do",
	        data    : $.param($scope.dataid),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(data) {
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
	};
});
//添加页面
var addMeta = angular.module("addapp",[]);
addMeta.controller('addMetadata',function($scope, $http){
	$scope.formData={}
	$scope.formData.projId = localStorage.projId;
	$scope.submitForm= function() {
		console.log($scope.formData)
	    $http({
	        method  : 'POST',
	        url     : urlpath+"metadata/saveMetaData.do",
	        data    : $.param($scope.formData),  // pass in data as strings
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
	    })
        .success(function(data) {
            if(data.result=="success"){
            	alert("保存成功");
            	location.href="metadata.html"
            }else{
            	alert("网络错误保存失败");
            }
        });
	};
	$scope.rt = function () {
		location.href="metadata.html"
	}

});
//修改页面
var updateMeta = angular.module("updateapp",[]);
updateMeta.controller('updateMetadata',function($scope, $http){
	$scope.formData={}
	$scope.formData.projId = localStorage.projId;
	var x = JSON.parse(sessionStorage.getItem("x"));
	$scope.formData.mid = x.metadataId;
	$scope.formData.chName =x.metadataCname;
	$scope.formData.enName =x.metadataEname;
	$scope.formData.type =x.metadataType;
	$scope.formData.length =x.metadataLength;
	$scope.formData.decimal =x.metadataDecimal;
	$scope.formData.range =x.metadataRange;
	$scope.formData.remark =x.metadataRemark;
	$scope.submitForm = function() {
		$http({
			method : 'POST',
			url    : urlpath+"metadata/updateSaveMetaData.do",
			data   : $.param($scope.formData),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(data) {
			if(data.result){
            	alert("修改成功");
            	location.href="metadata.html"
            }else{
            	alert("网络错误保存失败");
            }
		})
	}
	$scope.rt = function () {
		location.href="metadata.html"
	}
})