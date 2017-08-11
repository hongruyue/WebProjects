jQuery.support.cors = true;
var BC= angular.module('leftTree', []);
BC.controller('leftTree', function($scope, $http, $location) {
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
	//树节点配置信息
	var setting = {  
    data: {
			simpleData: {
				enable: true,
				idKey: "childId",
				pIdKey: "parentId",
				rootPId: -1							
		 	},
		   key: {
				name:"nodeName"	,
				title: "t"
			} 
		},
		callback: {
			onClick: zTreeOnClick,
			onRightClick: zTreeOnRightClick
		}
    };
	/*http://192.168.2.48:8080/BusinessCollaboration/tree/leftTree1.do*/
	//定义链接 发送请求 显示树
	var url=urlpath+'tree/leftTree1.do';	
	getHttp($http, url, function(data) {
		var treeNodes=data;
		for(var i=0;i<treeNodes.length;i++){
			treeNodes[i].t='id='+treeNodes[i].childId+'';
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
	})
	 //左键跳转
	function zTreeOnClick(event,treeId, treeNode) {
		tId = treeNode.childId;
		tname = treeNode.nodeName;
		var typeid=treeNode.nodeTypeId;
		show.style.visibility = 'hidden'; 
		var frameid = parent.document.getElementById("middle");
		var projId="",childId='',templateId="";
		localStorage.clear();
		switch (typeid){
		     //3元数据 
		 case 3: frameid.src="metadata/metadata.html";
		  		localStorage.projId=treeNode.projId;
		    break;
		     //6角色
		  case 6: frameid.src="role/Role_Management.html";
		  		localStorage.projId=treeNode.projId;
		    break;
		     //7用户
		  case 7: frameid.src="user/User_Management.html";
		  		localStorage.projId=treeNode.projId;
		    break;
		     //8权限 
		  case 8: frameid.src="menu/menu_management.html";   
				localStorage.projId=treeNode.projId;	  
		    break;
		    // 4区域 
		  case 4:frameid.src="regionalManagement/regionalManagement.html";			  
		  /*urlpath+"/regionalManagement/getregionalMAll.do"*/
	    	break;
	    	// 5组织机构管理
		  case 5:frameid.src="coordinationOrganization/coordinationOrganization.html";
		  		sessionStorage.setItem("regionalId", 0);
		    break;
		    // 9进入模板页面
		  case 9: frameid.src="coordinationTemplate/coordinationTemplate1.html";   				  
				localStorage.projId=treeNode.projId;
		    	localStorage.childId=treeNode.childId;
		    	localStorage.templateId=treeNode.nodeId;		    	
		    break;
		 	 // 10进入基本属性页面
		  case 10: frameid.src="basicProperty/basicProperty.html";   				  
				localStorage.projId=treeNode.projId;
		    	localStorage.childId=treeNode.childId;
		    	localStorage.templateId=treeNode.nodeId;				  
		    break;
		    // 12审批属性
			case 12:frameid.src="approvalAttribute/approvalAttribute.html";			  
				localStorage.projId=treeNode.projId;
		    	localStorage.childId=treeNode.childId;
		    	localStorage.templateId=treeNode.nodeId;
		    	sessionStorage.removeItem("linkId"); 
			break;
	    	//基础信息
		  case 16: frameid.src="templateContent/contentBasicInfoList.html";
		  		localStorage.projId=treeNode.projId;
		    	localStorage.childId=treeNode.childId;
		    	localStorage.templateId=treeNode.nodeId;
		    break; 
		    //服务绩效管理
		  case 20: frameid.src=urlpath+"PerformanceRule/getPerformance.do?projId="+treeNode.projId+"&templateId="+treeNode.nodeId;  
		  		localStorage.projId=treeNode.projId;
		    	localStorage.childId=treeNode.childId;
		    	localStorage.templateId=treeNode.nodeId;
		    break; 
		    //证照与要件
		  case 17: frameid.src="contentLicense/contentLicense.html";  
		  		localStorage.projId=treeNode.projId;
		    	localStorage.childId=treeNode.childId;
		    	localStorage.templateId=treeNode.nodeId;
		    break; 
		  //凭证制发与使用管理
		  case 18: frameid.src="management/productionUse.html";  
		 		localStorage.projId=treeNode.projId;
		    	localStorage.childId=treeNode.childId;
		    	localStorage.templateId=treeNode.nodeId; 
		    	sessionStorage.trans=0;
		    break;
		   //收发与踪迹管理s
		  case 19: frameid.src="management/certificateTrail.html"; 
		  		localStorage.projId=treeNode.projId;
		    	localStorage.childId=treeNode.childId;
		    	localStorage.templateId=treeNode.nodeId;
		    break;
		}

	};
	//右键菜单显示
	function zTreeOnRightClick(event,treeId, treeNode) {
		console.log(treeNode)
		zTree = $.fn.zTree.getZTreeObj("tree");		
		var typeid=treeNode.nodeTypeId;
		var show = document.getElementById('show');    
		if(document.all) event = window.event; 
		var _Left;
		var _Top;
		var clxz = document.body.clientWidth - event.clientX;
		if(clxz < 140) {
			_Left = event.clientX + document.body.scrollLeft-135; 
			_Top = event.clientY + document.body.scrollTop-5; 
		}else {
			_Left = event.clientX + document.body.scrollLeft-5; 
			_Top = event.clientY + document.body.scrollTop-5; 
		}
		show.style.left = '60px'; /* _Left.toString() + 'px' */
		show.style.top = _Top.toString() + 'px'; 
		if(typeid==1){
			show.style.visibility = 'visible'; 
			content = "<a href='../coordinationTemplate/createTemplate.html' style='cursor: pointer;' target='middle'>创建模板</a>";
			localStorage.projId=treeNode.projId;
		    localStorage.childId=treeNode.childId;
			show.innerHTML=content;
		}
		if(typeid==9){
			show.style.visibility = 'visible'; 
			content = "<a onclick='deleteTemplate("+treeNode.nodeId+","+'"'+treeNode.nodeName+'"'+")' style='cursor: pointer;' target='middle'>删除模板</a>";
			show.innerHTML=content;
		}
	}

 
	//右键菜单消失
	$scope.reback=function (ev) {
		var show = document.getElementById('show');
		show.style.visibility = 'hidden'; 
	 	if(document.all) ev = window.event; 
		return false;
	}
	//刷新
	$scope.re =function(){
	 	location.href="leftTree.html";
	}
	//展开关闭
	$scope.AllBtn=function(){
		var zTree = $.fn.zTree.getZTreeObj("tree"),
		nodes = zTree.getSelectedNodes();
		var btn=$('#AllBtn').html();
		if(btn=="展开"){
			zTree.expandAll(true);
			$('#AllBtn').html("关闭");
		} 
		if(btn=="关闭"){
			zTree.expandAll(false);
			$('#AllBtn').html("展开");
		}
	}
});
//删除模板
function deleteTemplate(x,name){
	if(confirm("确认删除"+name+"吗？")) {
		$.ajax({
			type:"post",
			url:urlpath+"coordinationTemplate/deleteTemplate.do?templateId="+x,
			async:true,
			success :function(data){
				if(data.result){
					var treeObj = $.fn.zTree.getZTreeObj("tree");
					var nodes = treeObj.getNodeByParam("nodeId", x, null)
					treeObj.removeNode(nodes);
				}
			}
		});
	}
}


