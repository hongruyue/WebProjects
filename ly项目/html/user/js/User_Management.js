var BC= angular.module('userApp', []);
BC.controller('User_Management', function($scope, $http, $location) {
	var pid = localStorage.projId;
	$http.get(urlpath+'user/showUser.do?projId='+pid).then(function (result){
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
				$http({
					method  : 'POST',
	    		    url     : urlpath+"user/showUser.do",
	      		    data    : $.param($scope.dataid),
				    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).then(function (result) {
					$scope.metadatas = result.data.list;
				});
			}
		});
	});
	//查询
	$scope.submitForm= function() {
	    $http({
	        method  : 'POST',
	        url     : urlpath+"user/getUserLike.do?projId="+pid,
	        data    : $.param($scope.formData),  // pass in data as strings
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
	    })
        .success(function(data) {
//      	console.log(data);
 			$scope.metadatas = data.list;
        });
	};
	//修改密码
	$scope.updatePassword =function(x){
			$scope.formData={}
			sessionStorage.setItem("x",JSON.stringify(x));
			$scope.formData.uId = x.userId;	
			$scope.formData.projId = localStorage.projId;
		}
	$scope.submitPassword= function() {
	    $http({
	        method  : 'POST',
	        url     : urlpath+"user/updatePassword.do",
	        data    : $.param($scope.formData),  // pass in data as strings
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
	    })
        .success(function(data) {
            if(data.result){
            	alert("修改密码成功");
            	location.href="User_Management.html";
            }else{
            	if(data.message) {
            		alert(data.message);
            	} else {
            		alert("修改密码失败");
            	}
            }
        });
	};
	$scope.addUser=function(){
		window.location.href="addUser_Management.html";
	}
	$scope.updateUser=function(x){
		sessionStorage.setItem("x",JSON.stringify(x));
		window.location.href="updateUser_Management.html";
	}
	$scope.deleteUser=function(a){
		if(confirm("确认删除吗？")){
			$scope.dataid={}
			$scope.dataid.id = a;
			$http({
				method  : 'POST',
		        url     : urlpath+"user/deleteUser.do",
		        data    : $.param($scope.dataid),
				headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
			.success(function(data) {
				if(data.result){
            		alert("删除成功");
            		location.reload();
           		}else{
            		alert("删除失败");
          		}
			});
		} else{
			return;
		}
		
	};
});
//添加页面
var addMeta = angular.module("addUserapp",[]);
addMeta.controller('addUserCtrl',function($scope, $http){
	$scope.formData={}
	$scope.formData.projId = localStorage.projId;
	$scope.submitForm= function() {
	    $http({
	        method  : 'POST',
	        url     : urlpath+"user/saveUser.do",
	        data    : $.param($scope.formData),  // pass in data as strings
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
	    })
        .success(function(data) {
            if(data.result){
            	alert("保存成功");
            	location.href="User_Management.html";
            }else{
            	alert("保存失败");
            }
        });
	};
	$scope.rt = function () {
		location.href="User_Management.html";
	}

});
//修改页面
var updateMeta = angular.module("updateapp",[]);
updateMeta.controller('updateUserCtrl',function($scope, $http){
	$scope.formData={}
	$scope.formData.projId = localStorage.projId;
	var x = JSON.parse(sessionStorage.getItem("x"));
	console.log(x)
	$scope.formData.alias = x.alias;
	$scope.formData.username =x.username;
	$scope.formData.email =x.email;
	$scope.formData.phone =x.phone;
	$scope.formData.userId=x.userId;
	$scope.submitForm = function() {
		$http({
			method : 'POST',
			url    : urlpath+"user/udUser.do",
			data   : $.param($scope.formData),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(data) {
			console.log(data)
			if(data.result){
            	alert("修改成功");
            	location.href="User_Management.html";
            }else{
            	alert("修改失败");
            }
		})
	}
	$scope.rt = function () {
		location.href="User_Management.html";
	}
})