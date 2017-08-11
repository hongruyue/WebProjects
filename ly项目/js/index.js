jQuery.support.cors = true;
var BC= angular.module('index', []);
BC.controller('indexCtrlgroup', function($scope, $http, $location) {
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
	var putHttp = function($http, url, jsonData, callback, config) { //回调函数
		$http.put(url, jsonData, config).success(function(data, status, headers, config) {
			callback(data);
		}).error(function(data, status, headers, config) {
			alert('连接失败' + status);
		});
	}
	//验证码
	$scope.myCode=urlpath+'login/AuthCode.do';
	$scope.refresh= function () {
		$scope.myCode=urlpath+'login/AuthCode.do?abc='+Math.random();
	}
	//提交
	$scope.sub=function(username,password,code){
		
		if(username==""){		
			$("#message").html("请输入账号");
		}
		else if(username!=""&&password==""){		 	
		 	$("#message1").html("请输入密码");
		}
		else{
			var jsonData = {
			"username": username,
			"password": password,
			"code":code
			}
		var url=urlpath+"login/login.do";
		postHttp($http, url, jsonData, function(data) {
			if(data == "main"){
          		location.href =path+"/html/main.html";
            }else if(data == "admain"){
                location.href =path+"/html/main_p.html";
            }else{
            	$("#message2").html(data);
            }
			/*console.log(data)*/
		});
	 }
	}

});



