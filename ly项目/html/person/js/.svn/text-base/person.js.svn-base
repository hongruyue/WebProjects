var BC = angular.module('ps',[]);
BC.controller('person',function ($scope, $http) {
	$http.get(urlpath+'personInfo/person.do').then(function (result){
		$scope.user={};
		$scope.user.userId = result.data.userId;
		$scope.user.alias=result.data.alias;
		$scope.user.username=result.data.username;
		$scope.user.email=result.data.email;
		$scope.user.phone=result.data.phone;
	});
	//跳转到编辑个人信息页面
	$scope.editInfo = function(user) {
		sessionStorage.setItem("user", JSON.stringify(user));
		window.location.href = "EditPerson_Information.html";
	}
});
BC.controller('password',function ($scope, $http) {
	$scope.submitForm= function() {
		$scope.formData ={
				oldPassword : $scope.pwd,
				newPassword1 : $scope.npwd,
				newPassword2 : $scope.napwd
		};
	    $http({
	        method  : 'POST',
	        url     : urlpath+"superuser/updateSuperUserPassword.do",
	        data    : $.param($scope.formData),  // pass in data as strings
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
	    })
        .success(function(data) {
        	alert(data.msg);
        	cleck();
        	$("#updatepwd").modal("hide");
        });
	}
});