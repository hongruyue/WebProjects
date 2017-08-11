var pid = localStorage.projId;
var templateId = localStorage.templateId;
//展示页面
var basicInfo = angular.module('myApp', ['angular-popups']);
basicInfo.controller('basicInfoCtrl', function($scope, $http, $location,$log) {
	$http.get(urlpath+'templateContent/contentBasicInfoList.do?projId='+pid+"&templateId="+templateId).then(function (result){
		$scope.fromCheckDepart =result.data.contentBasicInfoList
		$scope.basicInfoList = result.data.contentBasicInfoList;
		//分页
		var page= result.data.total;
	    var curren=result.data.pageNum;
		$(".tcdPageCode").createPage({
			pageCount:page,
			current:curren,
			backFn:function(p){
				$scope.dataid={};
				$scope.dataid.pageNum = p;
				$scope.dataid.projId = pid;
				$scope.dataid.templateId = templateId;
				$http({
					method  : 'post',
	    		    url     : urlpath+"templateContent/contentBasicInfoList.do",
	      		    data    : $.param($scope.dataid),
				    headers : {'Content-Type': 'application/x-www-form-urlencoded'}
				})
				.then(function (result) {
					$scope.basicInfoList = result.data.contentBasicInfoList;
				});
			}
		});
	});
	// 跳转到添加页面
	$scope.add = function(){
		window.location.href="addMeta.html";
	}
	// 跳转到修改页面
	$scope.update=function(contentBasicInformationId){
		sessionStorage.setItem("contentBasicInformationId",JSON.stringify(contentBasicInformationId));
		window.location.href="updateBasicInfo.html";
	}
    //删除基本信息
	$scope.delete = function(contentBasicInId){
		if (confirm("确定要删除该条信息吗?")){
			$http({
				method  : 'get',
		        url     : urlpath + "templateContent/deleteBasicInfo.do",
		        params  : {
		        	id : contentBasicInId,
		        }
			})
			.then(function(data) {
				if(data){
					window.location.href="contentBasicInfoList.html";
				}
			});
		}
	}
});
//添加元数据
var addMetadata = angular.module("addapp",[]);
addMetadata.controller('addMetadata',function($scope, $http){
	//获取元数据
	$http.get(urlpath+'templateContent/addMeta.do?projId='+pid+"&templateId="+templateId).then(function (result){
		$scope.meteDataList = result.data;
	});
	//元数据全选
	$scope.choseAllMetaDataIds = [];
	var flag = "";
	$scope.allMetaData = function(c,v){
		if(c == true){
			$scope.m = true;
			flag = 'a';
			for (var i=0; i<v.length; i++) {
				$scope.choseAllMetaDataIds.push(v[i].metadataId);
			}
		}else{
			$scope.m = false;
			$scope.choseAllMetaDataIds.length = 0;
			flag = 'b';
		}
	}
	//元数据单选
	$scope.choseMetaData = function(o,x){
		var metaDataId = o.metadataId;
		if(x == true){
			$scope.choseAllMetaDataIds.push(metaDataId);
			flag = 'c';
			if($scope.choseAllMetaDataIds.length == $scope.meteDataList.length){
				$scope.meteDataModel = true;
			}
		}else{ //取消全选
			$scope.choseAllMetaDataIds.splice($scope.choseAllMetaDataIds.indexOf(metaDataId),1);
		}
		if($scope.choseAllMetaDataIds.length == 0){
			$scope.meteDataModel = false;
		}
	}
	//添加元数据
	$scope.add = function(){
		var check_val = $scope.choseAllMetaDataIds;  
		if(check_val.length > 0) {
			$http({
   				method : "post",
   				url:  urlpath + "templateContent/addInfoMeta.do",
   				params:{
   					projId: pid,
   					templateId: templateId,
   					metaDataIds: check_val
   				}
   			})
			.then(function(data){
				if(data){
					alert("添加成功")
					window.location.reload();
				}
   			});
   		} else {
			alert("勾选不能为空");
		}
	}
	//返回
	$scope.back = function(){
		window.location.href="contentBasicInfoList.html";
	}
	//搜索
	$scope.search = function(){
		var storeId = document.getElementById('store');
        var rowsLength = storeId.rows.length;
        var key = $scope.metaDataName;    	  
        var searchCol = 2;//要搜索的哪一列，这里是第一列，从0开始数起  	   	    	  
        for(var i=1;i<rowsLength;i++){
            var searchText = storeId.rows[i].cells[searchCol].innerHTML;
            if(searchText.match(key)){
                storeId.rows[i].style.display='';  
            }else{  
                storeId.rows[i].style.display='none';
            }  
        }  
	}
});
//修改页面
var updateBasicInfo = angular.module("updateapp",[]);
updateBasicInfo.controller('updateContentBasicInfo',function($scope, $http,$log){
	var contentBasicInformationId = JSON.parse(sessionStorage.getItem("contentBasicInformationId"));
	//单个信息
	$http.get(urlpath+'templateContent/intoUpdateBasicInfo.do?projId='+pid+"&templateId="+templateId+"&id="+contentBasicInformationId).then(function (result){
		$scope.metadataCname = result.data.basicInfoVO.metaData.metadataCname;
		$scope.metadataId = result.data.basicInfoVO.metaData.metadataId;
		$scope.ifCheck = result.data.basicInfoVO.contentBasicInformation.ifCheck+"";
		$scope.fromChecks = result.data.basicInfoVO.fromChecks;
		$scope.fromCheck = result.data.basicInfoVO.contentBasicInformation.fromCheck;
		$scope.toChecks = result.data.basicInfoVO.toChecks;
		$scope.toCheck = result.data.basicInfoVO.contentBasicInformation.toCheck;
		$scope.shareHandlMatters = result.data.basicInfoVO.shareHandlMatters;
		$scope.checkShareHandlMatterIds = result.data.basicInfoVO.contentBasicInformation.checkShareHandlMatterIds;
		$scope.storageOrgs = result.data.basicInfoVO.storageOrgs;
		$scope.storageOrgIds = result.data.basicInfoVO.contentBasicInformation.storageOrgIds;
		//部门数据
		$scope.shareOrgDeparts = result.data.shareOrgDeparts;
	});
	//下拉选择
	$scope.select = function(ifCheck){
		if(ifCheck == 1){
			$("#needVerify").css("display","block");
			return;
		}
		if(ifCheck == 0){
			$("#needVerify").css("display","none");
			$scope.fromCheck = "";
			$scope.fromCheck1 = "";
			$scope.toCheck = "";
			$scope.toCheck1 = "";
			return;
		}
	}
	//修改数据
	$scope.updateForm = function(){
		var datas = {
			id : contentBasicInformationId,
			ifCheck : $scope.ifCheck,
			fromCheck : $scope.fromCheck,
			toCheck : $scope.toCheck,
			checkShareHandlMatterIds : $scope.checkShareHandlMatterIds,
			storageOrgIds : $scope.storageOrgIds,
			metadataId : $scope.metadataId,
			templateId : templateId,
			projId : pid
		}
		$http({
			method : "post",
			url : urlpath + "templateContent/updateBasicInfo.do",
			params: datas,
		})
		.success(function(jsonData){
			if(jsonData){
				window.location.href="contentBasicInfoList.html";
			}
		});
	}
	//数据来源
	$scope.modalShow = function(title){
		switch (title){
			case "byVerify": $scope.fromVerifyTitle = "选择该证照由谁核实",
			 				 $scope.fromVerifySec = "fromCheck";
			 	$scope.choseFromVerifyDpats = [];
				$scope.choseFromVerifyDpatIds = [];
				$scope.f = false; // 未选择部门
				$scope.fromVerifyModel = false; // 未全选部门
				$("input[name='fromDpat']").removeAttr("checked");
			 	$("#fromVerify").modal("show");
			 	break;
			case "toVerify": $scope.toVerifyTitle = "选择该证照向谁核实",
							 $scope.toVerifyTitleSec = "toCheck";
				$scope.choseToVerifyDpats = [];
				$scope.choseToVerifyDpatIds = [];
				$scope.t = false;  // 未选择部门
				$scope.toVerifyModel = false;  // 未全选部门
				$("input[name='toDpat']").removeAttr("checked");
				$("#toVerify").modal("show");
				break;
			case "shared": $scope.shareTitle = "选择该核实结果谁需要共享",
						   $scope.shareSec = "checkShareOrgIds";
				$scope.choseArrHandlMatter = [];
				$scope.shareHandlMatter = "";
				$("input[name='shareDepart']").removeAttr("checked");
				$scope.shareModel = false; //共享未全选
				$scope.x = false;//共享部门未选中
				$scope.matterMaster = false; //办理事项未全选
				$scope.choseHandlMatters = [];
				$scope.choseHandlMatterIds = [];
				$("#share").modal("show");
				break;
			case "putStorage": $scope.storageTitle = "选择该核实结果谁需要入库",
			     			   $scope.storageSec = "storageOrgIds";
			    $scope.choseArrStorage = [];
			    $scope.storagemSystem = "";
			    $("input[name='storageDepart']").removeAttr("checked");
			    $scope.storageDepartModel = false; //入库未全选
				$scope.x = false;//入库部门未选中
				$scope.systemModel = false; // 系统未全选
				$scope.choseStorageSystemIds = [];
				$scope.choseStorageSystems = [];
			    $("#storage").modal("show");
				break;
	  	}
	}
	//由谁核实全选
	var flag = "";
	$scope.allFromVerifyDpat = function(c,v){
		if(c==true){
			$scope.f = true;
			flag = 'a';
			for(var i=0; i<v.length; i++) {
				$scope.choseFromVerifyDpats.push(v[i].depart.departName+"("+v[i].organization.organizationName+")");
				$scope.choseFromVerifyDpatIds.push(v[i].depart.departId);
			}
		}else{
			$scope.f = false;
			$scope.choseFromVerifyDpats.length = 0;
			$scope.choseFromVerifyDpatIds.length = 0;
			flag = 'b';
		}
	}
	//由谁核实单选
	$scope.choseFromVerifyDpat = function(o,x){
		var departId = o.depart.departId;
		var orgDepartName = o.depart.departName+"("+o.organization.organizationName+")"
		//选中
		if (x == true) {
			$scope.choseFromVerifyDpats.push(orgDepartName);
			$scope.choseFromVerifyDpatIds.push(departId);
			flag='c';
			if($scope.choseFromVerifyDpatIds.length == $scope.shareOrgDeparts.length){
		   		 $scope.fromVerifyModel = true;
		   	}
		}else {
			//取消选中
			$scope.choseFromVerifyDpatIds.splice($scope.choseFromVerifyDpatIds.indexOf(departId),1);
			$scope.choseFromVerifyDpats.splice($scope.choseFromVerifyDpats.indexOf(orgDepartName),1);
		}
		if($scope.choseFromVerifyDpatIds.length == 0){
			$scope.fromVerifyModel=false;
		}
	}
	//由谁核实保存
	$scope.saveFromVerify = function(){
		$scope.fromChecks = $scope.choseFromVerifyDpats;
		$scope.fromCheck = $scope.choseFromVerifyDpatIds.toString();
		$("#fromVerify").modal("hide");
	}
	//向谁核实全选
	var flag = "";
	$scope.allToVerifyDpat = function(c,v){
		if(c==true){
			$scope.t = true;
			flag = 'a';
			for (var i=0; i<v.length; i++) {
				$scope.choseToVerifyDpats.push(v[i].depart.departName+"("+v[i].organization.organizationName+")");
				$scope.choseToVerifyDpatIds.push(v[i].depart.departId);
			}
		}else{
			$scope.t = false;
			flag = 'b';
			$scope.choseToVerifyDpats.length = 0;
			$scope.choseToVerifyDpatIds.length = 0;
		}
	}
	// 向谁核实单选
	$scope.chosetoVerifyDpat = function(o,x){
		var departId = o.depart.departId;
		var orgDepartName = o.depart.departName+"("+o.organization.organizationName+")";
		if(x == true){
			$scope.choseToVerifyDpats.push(orgDepartName);
			$scope.choseToVerifyDpatIds.push(departId);
			flag = 'c';
			if($scope.choseToVerifyDpatIds.length ==  $scope.shareOrgDeparts.length){
				$scope.toVerifyModel = true;
			}
		}else{
			$scope.choseToVerifyDpatIds.splice($scope.choseToVerifyDpatIds.indexOf(departId),1);
			$scope.choseToVerifyDpats.splice($scope.choseToVerifyDpats.indexOf(orgDepartName),1);
		}
		if($scope.choseToVerifyDpatIds.length == 0){
			$scope.toVerifyModel = false;
		}
	}
	//向谁核实保存
	$scope.saveToVerify = function(){
		$scope.toChecks = $scope.choseToVerifyDpats;
		$scope.toCheck = $scope.choseToVerifyDpatIds.toString();
		$("#toVerify").modal("hide");
	}
	//共享全选
	$scope.x = false;//默认未选中
	var flag='';
	$scope.allShareDepart = function(c,v){ 
		if(c == true){
			$scope.x = true;
			flag='a';
			for (var i=0; i<v.length; i++) {
				$scope.choseArrHandlMatter.push(v[i].depart.departId);
			}
		}else{
			$scope.x = false;
			$scope.choseArrHandlMatter.length = 0;
			flag='b';
		}
		var arrs = $scope.choseArrHandlMatter;
		handlMatterFun($http,$scope,arrs);
	}
	//共享部门单选
	$scope.handlMatter = function(z,x){
		var departId = z.depart.departId;
		//选中
		if (x == true) {
			$scope.choseArrHandlMatter.push(departId);
			flag='c';
			if($scope.choseArrHandlMatter.length == $scope.shareOrgDeparts.length){
		   		 $scope.shareModel = true;
		   	}
		}else {
			//取消选中
			$scope.choseArrHandlMatter.splice($scope.choseArrHandlMatter.indexOf(departId),1);
		}
		if($scope.choseArrHandlMatter.length==0){
			$scope.shareModel=false;
		}
		var arrs = $scope.choseArrHandlMatter;
		handlMatterFun($http,$scope,arrs);
	}
	//办理事项全选
	$scope.m = false; 
	$scope.allHandMatter = function(c,v){
		if(c == true){
			$scope.m = true;
			flag='a1';
			for (var i=0; i<v.length; i++) {
				$scope.choseHandlMatters.push(v[i].organization.organizationName+v[i].depart.departName+v[i].handlMatter.handlMatterName);
				$scope.choseHandlMatterIds.push(v[i].handlMatter.handlMatterId);
			}
		}else{
			$scope.m=false;
			$scope.choseHandlMatterIds.length = 0; 
			$scope.choseHandlMatters.length = 0;
			flag='b1';
		}
	}
	//办理事项单选
	$scope.choseHandlMatter = function(o,x){
		var handlMatterId = o.handlMatter.handlMatterId;
		var orgDpatMatterName = o.organization.organizationName+o.depart.departName+o.handlMatter.handlMatterName;
		//选中
		if (x == true) {
			$scope.choseHandlMatters.push(orgDpatMatterName);
			$scope.choseHandlMatterIds.push(handlMatterId);
			flag='c';
			if($scope.choseHandlMatterIds.length == $scope.shareHandlMatter.length){
		   		 $scope.matterMaster = true;
		   	}
		}else {
			//取消选中
			$scope.choseHandlMatterIds.splice($scope.choseHandlMatterIds.indexOf(handlMatterId),1);
			$scope.choseHandlMatters.splice($scope.choseHandlMatters.indexOf(orgDpatMatterName),1);
		}
		if($scope.choseHandlMatterIds.length == 0){
			$scope.matterMaster=false;
		}
	}
	//共享保存
	$scope.saveShare = function(){
	    $scope.checkShareHandlMatterIds = $scope.choseHandlMatterIds.toString();
		$scope.shareHandlMatters = $scope.choseHandlMatters;
		$("#share").modal("hide");
	}
	//入库全选
	$scope.x = false;//默认未选中
	var flag='';
	$scope.allStorageDepart = function(c,v){
		if(c == true){
			$scope.x = true;
			flag='a';
			for (var i=0; i<v.length; i++) {
				$scope.choseArrStorage.push(v[i].depart.departId);
			}
		}else{
			$scope.x = false; 
			$scope.choseArrStorage.length = 0;
			flag='b';
		}
		var arrs = $scope.choseArrStorage;
		dpatSysm($http,$scope,arrs);
	};
	//入库部门单选
	$scope.depart = function(z,x){
		var departId = z.depart.departId;
		//选中
		if (x == true) {
			$scope.choseArrStorage.push(departId);
			flag='c';
			if($scope.choseArrStorage.length == $scope.shareOrgDeparts.length){
		   		 $scope.storageDepartModel = true;
		   	}
		}else {
			//取消选中
			$scope.choseArrStorage.splice($scope.choseArrStorage.indexOf(departId),1);
		}
		if($scope.choseArrStorage.length == 0){
			$scope.storageDepartModel = false;
		}
		var arrs = $scope.choseArrStorage;
		dpatSysm($http,$scope,arrs);
	};
	//入库系统全选
	$scope.s = false; // 未单选
    $scope.allStorageSystem = function(c,v){
    	if(c == true){
    		$scope.s = true;
			flag = 'a';
			for (var i=0; i<v.length; i++) {
				$scope.choseStorageSystems.push(v[i].organization.organizationName+v[i].depart.departName+v[i].system.systemName);
				$scope.choseStorageSystemIds.push(v[i].system.systemId);
			}
		}else{
			$scope.s = false; 
			$scope.choseStorageSystems.length = 0;
			$scope.choseStorageSystemIds.length = 0;
			flag = 'b';
		}
	}
	//入库系统单选
	$scope.choseSystem = function(o,x){
		var systemId = o.system.systemId;
		var orgDpatSysName = o.organization.organizationName+o.depart.departName+o.system.systemName;
		//选中
		if (x == true) {
			$scope.choseStorageSystems.push(orgDpatSysName);
			$scope.choseStorageSystemIds.push(systemId);
			flag = 'c';
			if($scope.choseStorageSystemIds.length == $scope.storagemSystem.length){
		   		 $scope.systemModel = true;
		   	}
		}else {
			//取消选中
			$scope.choseStorageSystemIds.splice($scope.choseStorageSystems.indexOf(systemId),1);
			$scope.choseStorageSystems.splice($scope.choseStorageSystemIds.indexOf(orgDpatSysName),1);
		}
		if($scope.choseStorageSystemIds.length == 0){
			$scope.systemModel = false;
		}
	}
	//入库保存
	$scope.saveStorage = function(){
		$scope.storageOrgs = $scope.choseStorageSystems;
		$scope.storageOrgIds = $scope.choseStorageSystemIds.toString();
		$("#storage").modal("hide");
	}
	//返回首页
	$scope.rt = function(){
		window.location.href="contentBasicInfoList.html"
	}
});
//办理事项
function handlMatterFun($http,$scope,arrs){
		$scope.shareHandlMatter = "";
		if(arrs.length != 0){
			$http({
		    	method : "post",
				url : urlpath +"coordinationTemplate/getShareOrgDepHandlMatter.do",
				params : {
		        	departIds : arrs
	        	}
			})
			.then(function(result){
				if(result.data.length != 0){
					$scope.shareHandlMatter = result.data;
				}
			});
		}else{
			$scope.shareHandlMatter = "";
	}
}
//部门勾选显示系统
function dpatSysm($http,$scope,arrs){
	$scope.storagemSystem = "";
	if(arrs.length != 0){
		$http({
	    	method : "post",
			url : urlpath +"coordinationTemplate/getShareOrgDepSys.do",
			params : {
				templateId : templateId,
	        	departIds : arrs
        	}
		})
		.then(function(result){
			if(result.data.length!=0){
				 $scope.storagemSystem = result.data;
			}
		});
	}else{
		$scope.storagemSystem = "";
	}
}
