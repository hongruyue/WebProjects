var BC= angular.module('certiApp', []);
BC.controller('certificateTrail', function($scope, $http, $location) {
	var getHttp = function($http, url, callback) { //回调函数
		$http.get(url).success(function(data, status, headers, config) {
			callback(data);
		});
	}
	var url=urlpath+"CertificateTrail/getCertificate.do?projId="+localStorage.projId+"&templateId="+localStorage.templateId;
	getHttp($http, url, function(result) {
		console.log(result)
		$scope.metadatas = result.sharesystem;
		//分页
		var page= result.total;
	    var curren=result.pageNum;
		var projId = localStorage.projId;
		$(".tcdPageCode").createPage({
			pageCount:page,
			current:curren,
			backFn:function(p){
				$scope.dataid={};
				$scope.dataid.pageNo = p;
				$scope.dataid.projId = projId;
				$http({
					method  : 'POST',
	    		    url     : urlpath+"CertificateTrail/getCertificate.do",
	      		    data    : $.param($scope.dataid),
				    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).then(function (result) {
					$scope.metadatas = result.sharesystem;
				});
			}
		});
	})
	//添加页面
	$scope.addRule=function(){
		window.location.href="addCertificateTrail.html"
	}	
	//修改页面
	$scope.update=function(x){
		sessionStorage.setItem("x",JSON.stringify(x));
		window.location.href="upCertificateTrail.html"
	}
	//删除
	$scope.del=function(id){
		$scope.dataid={}
		$scope.dataid.id = a;
		$http({
			method  : 'POST',
	        url     : urlpath+"CertificateTrail/deleteRule.do?id="+$scope.dataid.id,
	        //data    : $.param($scope.dataid),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(data) {
				if(data){
            		alert("删除成功");
            		location.reload();
           		}else{
            		alert("网络错误");
          		}
		});
	}
});
//添加页面
var addMeta = angular.module("addcertiApp",[]);
addMeta.controller('addcertificateTrail',function($scope, $http){
	var getHttp = function($http, url, callback) { //回调函数
		$http.get(url).success(function(data, status, headers, config) {
			callback(data);
		});
	}
	//下拉框
       var url=urlpath+"CertificateTrail/selectdepart.do?templateId="+localStorage.templateId;
		getHttp($http, url, function(result) {
			console.log(result)
			$scope.names = result.Organizationlist;
		})
	$scope.selectsystem=function (){
		$scope.departid=$scope.coordinationOrganizationId.depart_id;
		//console.log($scope.departid)
	 	var url=urlpath+"PerformanceRule/selectsystem.do?templateId="+localStorage.templateId+"&departid="+$scope.departid;
		 getHttp($http, url, function(result) {
			console.log(result)
			$scope.sname = result;
			$("#coordinationSystemId").empty(); 
			for(i in result){
				console.log(result[i])
				var op="<option value='"+result[i].system_id+"'>"+result[i].system_name+"</option>"
  				$("#coordinationSystemId").append(op);
			}
		})
	}
	//$scope.form={}
	$scope.submitForm= function() {
		//$scope.form.system_id=$scope.form.coordinationSystemId;
		//$scope.form.depart_id=$scope.form.coordinationOrganizationId.depart_id;
		console.log($scope.form)
		console.log(localStorage.projId)
		console.log(localStorage.templateId)
		console.log($scope.coordinationSystemId)
		$("#testForm").ajaxSubmit({
    		 url:urlpath+"CertificateTrail/insertRule.do?projId="+localStorage.projId+"&templateId="+localStorage.templateId,
    		 type:"post",
    		 enctype:"multipart/from-data",
    		 dataType:"json",
    		 success:function(data){
    		 	console.log(data)
                if(data){
	            	alert("保存成功");
	            }else{
	            	alert("网络错误保存失败");
	            }
           },
            error:function(data){
            	console.log(data)
                alert("网络错误");
            }
    	})
	};
	$scope.rt = function () {
		location.href="certificateTrail.html"
	}

});
//修改页面
var updateMeta = angular.module("upcertiApp",[]);
updateMeta.controller('upcertificateTrail',function($scope, $http){
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
		$("#testForm").ajaxSubmit({
    		 url:urlpath+"CertificateTrail/upcertificateTrail.do",
    		 type:"post",
    		 enctype:"multipart/from-data",
    		 dataType:"json",
    		 success:function(data){
    		 	console.log(data)
                if(data){
	            	alert("保存成功");
	            }else{
	            	alert("网络错误保存失败");
	            }
           },
            error:function(data){
                alert("网络错误");
            }
    	})
	}
	$scope.rt = function () {
		location.href="certificateTrail.html"
	}
})