// 行业管理页面

var NH= angular.module('industry_Management', []);
    NH.controller('industry', function($scope, $http, $location) {
    var pid = localStorage.projId;
    var pN = "1";  
	if(JSON.parse(sessionStorage.getItem("pN"))!=null){  //判断缓存页面是否为空,如果为空，默认第1页，如果不为空，取修改或新增缓存的页码
		pN=JSON.parse(sessionStorage.getItem("pN"));
	}
    $http.get(urlpath+'industryManagement/industry.do?projId='+pid+'&pageNo='+pN).then(function (result){  //读取服务器数据的函数
		$scope.industrys = result.data.industrylist;
		//分页
		var page= result.data.Total;   //总页数
	    var curren=result.data.pageNum;   //当前页
		var projId = localStorage.projId; 
		$(".tcdPageCode").createPage({
			pageCount:page,   //pageCount：总页数
			current:curren,   //current：当前页
			backFn:function(p){
				$scope.dataid={}; 
				pN=p;
				$scope.dataid.pageNo = p;
				$scope.dataid.projId = projId;
				$http({
					method  : 'POST',
	    		    url     : urlpath+"industryManagement/industry.do",
	      		    data    : $.param($scope.dataid),   //param()方法 创建数组或对象的序列化表示。
				    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
				}).then(function (result) {
					$scope.industrys = result.data.industrylist;
				});
			}
		});
	});
	
//跳转到添加页面
    $scope.addindustrys=function(){
    	sessionStorage.setItem("pNc", pN);//点击添加，页码放入缓存
		window.location.href="addindustry.html"
	}   
	
//跳转到修改页面
 $scope.updateMeta=function(x){// x 当前行内容
   		sessionStorage.setItem("industrys", JSON.stringify(x));//放入浏览器缓存
		sessionStorage.setItem("pNc", pN);
		window.location.href="updateindustry.html"
 }
//删除
	$scope.deleteRole = function(industrysId) {
		if(confirm("确认删除吗？")){
			$http.get(urlpath+'industryManagement/deleteindustry.do?industryId='+industrysId)
			.then(function(result) {
				if(result.data){
					alert("删除成功");
					window.location.reload();  //刷新页面
				} else { 
					alert("删除失败");
				}	
			}, function() {
				alert("网络错误");
			});
		}
		
	}
});

// 进入添加页面
var add= angular.module("Addindustry",[]);
    add.controller('add_industry',function($scope, $http){
    var pNc =  JSON.parse(sessionStorage.getItem("pNc"));
	$scope.formData={}   
	$scope.formData.projId = localStorage.projId;  
	$scope.submitForm= function() {
		console.log($.param($scope.formData))
	    $http({
	        method  : 'POST',
	        url     : urlpath+"industryManagement/addindustry.do", 
	        data    : $.param($scope.formData), 
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  
	    })
	  	.success(function(data) {	
	  	    console.log(data)
          if(data){
         	alert("保存成功");
         	sessionStorage.setItem("pN", pNc);//新增成功把页码放入缓存
         	location.href="industry_Management.html";
         }else{
          	alert("保存失败");
         }
        });
	};
	$scope.rt = function () {
		location.href="industry_Management.html";
		sessionStorage.setItem("pN", pNc);
	}
	//清空input框
	$(function() {
		$('.input').val("");
	});
	
});

//  进入修改页面
var XG = angular.module("Update", []);
    XG.controller('updateindustry', function($scope, $http) { 	
	var update = JSON.parse(sessionStorage.getItem("industrys")); //获取修改内容    将一个 JSON 字符串转换为对象
    var pNc =  JSON.parse(sessionStorage.getItem("pNc"));
	$scope.formData = {};
	$scope.formData.pageNo = pNc; 
	$scope.formData.industryId = update.industryId;
	$scope.formData.industryName = update.industryName;
	$scope.formData.industryCode = update.industryCode;
	$scope.formData.industryDesc = update.industryDesc;
	$scope.submitForm = function() {
		$http({
				method: 'POST',
				url     : urlpath+"industryManagement/updateindustry.do",
				data: $.param($scope.formData), 
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				} 
			})
			.success(function(data) {
//				console.log(data)
				if (data) {
					alert("保存成功");
					sessionStorage.setItem("pN", pNc);
					location.href = "industry_Management.html";
				} else {
					alert("保存失败");
				}
			});
	};
	//返回
	$scope.rt = function() {
		location.href = "industry_Management.html";
		sessionStorage.setItem("pN", pNc);
	}
});
//<script type="text/javascript">
//			$(function() {
//				$('.input').val("");
//			})
//			function rt(){
//				var pageNo=$("#pageNo").val();
//				window.location="<%=basePath%>industryManagement/industry.do?pageNo="+pageNo;
//			}
//		</script>
//function checkName(){
//	$.ajax({
//		type:"POST",
//		url :"<%=basePath%>industryManagement/checkupindustryname.do",
//		data : {  
//			industryName:$("#industryName").val(),
//			industryid:$("#industryId").val()
//	    },  
//	    success : function(result) {
//	    	if(result=="行业名称已存在"){
//	    		$("#industryName").testRemind(result+",请重新输入");  
//	    	}else{
//	    		$("#industryName").testRemind("");
//	    	}
//	    }
//	})
//}
//function checkCode(){
//	$.ajax({
//		type:"POST",
//		url :"<%=basePath%>industryManagement/checkupindustrycode.do",
//		data : {  
//			industryCode:$("#industryCode").val(),
//			industryid:$("#industryId").val()
//	    },  
//	    success : function(result) {
//	    	if(result=="行业编码已存在"){
//	    		$("#industryCode").testRemind(result+",请重新输入");  
//	    	}else{
//	    		$("#industryCode").testRemind("");
//	    	}
//	    },
//	    error:function (XMLHttpRequest, textStatus, errorThrown) {      
//          alert("网络错误");
//      }					
//	});

