var BC= angular.module('user', []);
BC.controller('userCtrl', function($scope, $http, $location) {
	var pid = localStorage.projId;
	var getHttp = function($http, url, callback) { //回调函数
		$http.get(url).success(function(data, status, headers, config) {
			callback(data);
		});
	}
	var setting = {
		check: {
			enable: true
		},
		data: {
			simpleData: {
				enable: true,
				idKey: "childId",
				pIdKey: "parentId",
				rootPId: -1	
			},
			key: {
				name:"nodeName"						
			} 
		}
	};
	var url = urlpath+'authority/userauth.do?projId='+pid;
    getHttp($http, url, function(data) {
    	console.log(data);
		$scope.users = data.users;
		var treeNodes=data.treeJson;
		for(var i=0;i<treeNodes.length;i++){
			  switch (treeNodes[i].nodeTypeId){
				  case 0: treeNodes[i].icon="../../img/pt.png";
				  	break;
				  case 1: treeNodes[i].icon="../../img/yw.png";
				    break;
  			  case 2: treeNodes[i].icon="../../img/zx.png";
		   		break;
  			 case 9: treeNodes[i].icon="../../img/xietongmoban.png";
		   		break;
  			case 10: treeNodes[i].icon="../../img/xtmoban.png";
	   			break;
  			case 11: treeNodes[i].icon="../../img/guanlishuxing.png";
	   			break;
			    } 
			} 
		zTreeObj = $.fn.zTree.init($("#tree"), setting, treeNodes);
	});
	
	//查看每个用户的权限
	$scope.listur = function(userId){
		$http({
			method  : 'get',
	        url     : urlpath + "authority/userChoice.do",
	        params  : {
	        	userId : userId,
	        	projId : pid
	        }
		})
		.success(function(data) {
			var zTree = $.fn.zTree.getZTreeObj("tree");
			zTree.checkAllNodes(false);
			var nodes = data;
			for (var i = 0;i < nodes.length; i++){
    			 var childId = nodes[i].childId;
    			 var treeNode = zTree.getNodeByParam("childId",childId, null);
    			 if(treeNode!=null){
    				zTree.checkNode(treeNode, true, false);
    			 }
		    } 
		});
	}
	
	// 保存用户权限
	$scope.save = function(){
		var userId;
		$('input[name="user"]:checked').each(function(){  
            userId = $(this).val();  
        });  
        if(userId != undefined){
			var nodes =  $.fn.zTree.getZTreeObj("tree").getCheckedNodes(true);
			var ids = [];
			for(var i=0;i<nodes.length;i++){
				ids[i] = nodes[i].childId;
			}
			//避免未赋值前先发生异步传值
			if(1 == 1){
				$http({
					method  : 'post',
			        url     : urlpath + "authority/userSave.do",
			        params  : {
			        	selectIDs : ids,
			        	userId : userId,
			        	projId : pid
			        }
				})
				.success(function(data){
					if(data){
						alert("保存成功");
					}
				});
			}
		}
	}
})