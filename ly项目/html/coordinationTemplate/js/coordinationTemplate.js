var BC = angular.module('ct1',[]);
var templateId = localStorage.templateId;
BC.controller('coordinationTemplate1',function($scope, $http,$location) {
	$http.get(urlpath+'coordinationTemplate/coordinationTemplate1.do?templateId='+templateId).then(function (result) {
		refresh();
		sessionStorage.setItem("dataScope",result.data.dataScope);
		$scope.formData={}
		$scope.formData.templateName=result.data.templateName;
		$scope.formData.idRule=result.data.idRule;
		$scope.formData.idLink=result.data.idLink;
		$scope.formData.idPoeriod=result.data.idPoeriod;
		$scope.formData.idApply=result.data.idApply;
		$scope.formData.templateId=result.data.templateId;
		$scope.submitForm = function () {
		$http({
			method : 'POST',
			url    : urlpath+"coordinationTemplate/updateConsensusTemplate.do?childId="+localStorage.childId,
			data   : $scope.formData,
			headers : { 'Content-Type': 'application/json;charset=UTF-8' }
		}).success(function(data) {
			if(data.result){
				console.log(templateId);
				window.parent.document.getElementById('leftTree').contentWindow.editName(templateId,$scope.formData.templateName);
				alert("保存成功");
			}else{
				alert("网络错误保存失败");
			}
		});
		}
	});
});

var BC1 = angular.module('ct2',[]);
BC1.controller('coordinationTemplate2' ,function($scope,$http){
	$scope.dataScope = sessionStorage.getItem("dataScope");
	$scope.saveDataScope = function () {
	$http({
			method : 'POST',
			url    : urlpath+"coordinationTemplate/saveDataScope.do",
			data   : $.param({
				templateId : templateId,
				dataScope  : $scope.dataScope
			}),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(function(data) {
			if(data.result){
				alert("保存成功");
			}else{
				alert("网络错误保存失败");
			}
		});
	}
});



 //刷新页面列表数据
 function refresh(){
	   $("#tree_table tbody").html('');
	   $.ajax({
		    	traditional: true,
		    	type:"post",
				url:urlpath+"coordinationTemplate/getShareInfo.do",
				data:{
					templateId:templateId
				},
				success:function(result){						
					  var data=result;
					 for(var i=0;i<data.length;i++){
			         		filltr($("#tree_table"),data[i]);	    				        		 
			        	 } 
			        	 $("#tree_table").treeTable({expandable:true});
				 },
				error:function (XMLHttpRequest, textStatus, errorThrown) {      
		            alert("网络错误");
				}
		    }); 
 }
 //生成数据
 function filltr(apendtotable,datai){
     if(datai.parentNodeId==0){
  	   if(datai.sign=="o"){  
         $("tbody",apendtotable).append("<tr id='"+datai.nodeId+"' class='parentnode'><td style='padding-left:20px'>"+datai.regionalName + datai.organizationName+"</td><td><a onclick='deleteTorg("+datai.id+")'>删除</a>&nbsp;&nbsp;<a onclick='addDm("+datai.id+","+datai.regionalId+")'>添加部门信息</a></td></tr>");
  	   }
     }else{
  	   switch (datai.sign){
			case "d": $("#"+datai.parentNodeId,apendtotable).after("<tr id='"+datai.nodeId+"' class='child-of-"+datai.parentNodeId+"'><td>"+datai.departName+"</td><td><a onclick='deleteTdepart("+datai.departId+")'>删除</a>&nbsp;&nbsp;<a onclick='addSystem("+datai.departId+")'>添加业务系统</a></td></tr></tr>");		        	  	   				
	 			break;
			case "s": $("#"+datai.parentNodeId,apendtotable).after("<tr id='"+datai.nodeId+"' class='child-of-"+datai.parentNodeId+"'><td>"+datai.systemName+"（系统地址："+datai.systemAddress+"）</td><td><a onclick='deleteTsystem("+datai.systemId+")'>删除</a></td></tr></tr>");		        	     
 				break;
		    }  
     }
 }
var BC2 = angular.module('creat',[]);
BC2.controller('creatTemplate',function($scope, $http) {
	var jsonData = {
		projChildId :localStorage.childId,
		projId :localStorage.projId,
	}
	$scope.submitForm = function () {
		jsonData.templateName = $scope.templateName;
		console.log($scope.templateName)
		$http({
			method : 'POST',
			url    : urlpath+"coordinationTemplate/saveConsensusTemplate.do",
			data   : $.param(jsonData),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		}).success(function(result) {
			sessionStorage.setItem("templateName",result.templateName);
			sessionStorage.setItem("newNodes",result.newNodes);
			sessionStorage.setItem("templateParentId",result.templateParentId);
			location.href="templateSucc.html";
		});
		}
});
var BC3 = angular.module('st',[]);
BC3.controller('successTemplate',function($scope, $http){
	window.parent.document.getElementById('leftTree').contentWindow.addNode(sessionStorage.getItem("newNodes"),sessionStorage.getItem("templateParentId"));
	$scope.templateName =sessionStorage.getItem("templateName");
});