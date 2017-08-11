var start = {
	elem: '#start',
	format: 'YYYY-MM-DD hh:mm:ss',
	event: 'click',
	/*   min: laydate.now(), //设定最小日期为当前日期 */
	max: '2099-06-16 23:59:59', //最大日期
	istime: true, //是否开启时间选择
	isclear: true, //是否显示清空
	istoday: false, //是否显示今天
	issure: true, //是否显示确认
	festival: true, //是否显示节日
	choose: function(datas) {
		end.min = datas; //开始日选好后，重置结束日的最小日期
		end.start = datas; //将结束日的初始值设定为开始日
	}
};
var end = {
	elem: '#end',
	event: 'click',
	format: 'YYYY-MM-DD hh:mm:ss',
	min: laydate.now(),
	max: '2099-06-16 23:59:59',
	istime: true, //是否开启时间选择
	isclear: true, //是否显示清空
	istoday: false, //是否显示今天
	issure: true, //是否显示确认
	festival: true, //是否显示节日
	choose: function(datas) {
		start.max = datas; //结束日选好后，重置开始日的最大日期
	}
};
laydate(start);
laydate(end);

var logApp = angular.module("log", []);
logApp.controller('logCtrl', function($scope, $http) {
	$scope.logdes = "";
	$scope.tempLogdes = "";
	$scope.logStart = "";
	$scope.tempLogStart = "";
	$scope.logEnd = "";
	$scope.tempLogEnd = "";
	$scope.showlog = function() {
		$scope.logdes = $(".tempLogdes").val();
		$scope.logStart = $(".tempLogStart").val();
		$scope.logEnd = $(".tempLogEnd").val();
		var url = urlpath + "operationLog/showOperationlog.do";
		url += "?logdes=" + $scope.logdes;
		url += "&logStart=" + $scope.logStart;
		url += "&logEnd=" + $scope.logEnd;
		$http.get(url).then(
			function(result) {
				$scope.operationLogs = result.data.operationLogs;
				var pageC = result.data.Total;
				var curren = result.data.pageNum;
				$(".tcdPageCode").createPage({
					//pageCount：总页数         current：当前页 p当前页
					pageCount: pageC,
					current: curren,
					backFn: function(p) {
						var url1 = url + "&pageNo=" + p;
						$http.get(url1).then(
							function(result) {
								$scope.operationLogs = result.data.operationLogs;
							},
							function() {
								alert("网络错误");
							}
						);
					}
				});
			},
			function() {
				alert("网络错误");
			}
		);
	}
	$scope.showlog();
});