var BC= angular.module('productionApp', []);
BC.controller('addManagement', function($scope, $http, $location) {
	var getHttp = function($http, url, callback) { //回调函数
		$http.get(url).success(function(data, status, headers, config) {
			callback(data);
		});
	}
	var url=urlpath+"credentials/credential.do?projId="+localStorage.projId+"&templateId="+localStorage.templateId;
	getHttp($http, url, function(result) {
		$scope.inradios = result.credentialsWithBLOBs;
		
	})
	//选择部门系统，填写凭证表
	$scope.AformData={}
	$scope.RformData={}
	if(sessionStorage.val!==undefined && sessionStorage.trans=="1"){
		console.log(sessionStorage.val)
		$scope.intradio= sessionStorage.val;
		$("#operation").css('display','inline-block');
    	$(".sty").css('display','block');
		    var data = JSON.parse(sessionStorage.getItem("data"));
		    $scope.data=data;
		   
		    $(".departId").val($scope.data.certificateUseParam.departmentId);
			$(".systemId").val($scope.data.certificateUseParam.systemId);
			$(".templateId").val($scope.data.certificateUseParam.templateId);
			$(".projId").val($scope.data.certificateUseParam.projId);
			$("#credentialsWithBLOBID").val($scope.data.certificateUseParam.singleCredentialsWithBLOBs.id);
			$("#receiptCredentialsWithBLOBID2").val($scope.data.certificateUseParam.receiptCredentialsWithBLOBs.id);
			//
			$scope.AformData.blankBusinessCredentialsRuleStr= sessionStorage.blankBusinessCredentialsRuleStr;
			$scope.AformData.handleCredentialsRule =sessionStorage.handleCredentialsRule;
			$scope.AformData.handleCheckChapterRuleStr =sessionStorage.handleCheckChapterRuleStr;
			$scope.AformData.handleTimeStampRuleStr =sessionStorage.handleTimeStampRuleStr;
			
			$("#fileblankBusiness").text(sessionStorage.fileblankBusiness);
			$("#fileHandleCredentials").text(sessionStorage.fileHandleCredentials);
			$("#fileHandleCheckChapter").text(sessionStorage.fileHandleCheckChapter);
			$("#fileHandleTimeStamp").text(sessionStorage.fileHandleTimeStamp);
			
			//回执表
			$scope.RformData.blankBusinessCredentialsRuleStr =sessionStorage.blankBusinessCredentialsRuleStr1;
			$scope.RformData.handleCredentialsRuleStr=sessionStorage.handleCredentialsRule1;
			$scope.RformData.handleCheckChapterRuleStr=sessionStorage.handleCheckChapterRuleStr1;
			$scope.RformData.handleTimeStampRuleStr=sessionStorage.handleTimeStampRuleStr1;
			$("#fileblankBusiness1").text(sessionStorage.fileblankBusiness1);
			$("#fileHandleCredentials1").text(sessionStorage.fileHandleCredentials1);
			$("#fileHandleCheckChapter1").text(sessionStorage.fileHandleCheckChapter1);
			$("#fileHandleTimeStamp1").text(sessionStorage.fileHandleTimeStamp1);
			
	}
	//$scope.AformData={}
	
	$scope.inradio=function(a,b,c){
		
		$("#operation").css('display','inline-block');
    	$(".sty").css('display','block');
    	valsel();
    	$scope.dataid={}
    	$scope.dataid.departSystemId=a+"-"+b+"-"+c;
    	$http({
			method  : 'POST',
	        url     : urlpath+"credentials/credentials.do?projId="+localStorage.projId+"&templateId="+localStorage.templateId,
	        data    : $.param($scope.dataid),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		})
		.success(function(data) {
			$scope.data=data;
			$scope.Applydatas = data.certificateUseParam.singleCredentialsWithBLOBs;
			$scope.receiptdatas = data.certificateUseParam.receiptCredentialsWithBLOBs;
			sessionStorage.setItem("data",JSON.stringify(data));
			
			$(".departId").val(data.certificateUseParam.departmentId);
			$(".systemId").val(data.certificateUseParam.systemId);
			$(".templateId").val(data.certificateUseParam.templateId);
			$(".projId").val(data.certificateUseParam.projId);
			$("#credentialsWithBLOBID").val($scope.Applydatas.id);
			$("#receiptCredentialsWithBLOBID2").val($scope.receiptdatas.id);
			//申领表
			$scope.AformData.blankBusinessCredentialsRuleStr= $scope.Applydatas.blankBusinessCredentialsRuleStr;
			$scope.AformData.handleCredentialsRule =$scope.Applydatas.handleCredentialsRuleStr;
			$scope.AformData.handleCheckChapterRuleStr =$scope.Applydatas.handleCheckChapterRuleStr;
			$scope.AformData.handleTimeStampRuleStr =$scope.Applydatas.handleTimeStampRuleStr;
			
			$("#fileblankBusiness").text($scope.Applydatas.blankBusinessCredentialsRuleName);
			$("#fileHandleCredentials").text($scope.Applydatas.handleCredentialsRuleName);
			$("#fileHandleCheckChapter").text($scope.Applydatas.handleCheckChapterRuleName);
			$("#fileHandleTimeStamp").text($scope.Applydatas.handleTimeStampRuleName);
			// 回执表 
			$scope.RformData.blankBusinessCredentialsRuleStr =$scope.receiptdatas.blankBusinessCredentialsRuleStr;
			$scope.RformData.handleCredentialsRuleStr=$scope.receiptdatas.handleCredentialsRuleStr;
			$scope.RformData.handleCheckChapterRuleStr=$scope.receiptdatas.handleCheckChapterRuleStr;
			$scope.RformData.handleTimeStampRuleStr=$scope.receiptdatas.handleTimeStampRuleStr;
			
			$("#fileblankBusiness1").text($scope.receiptdatas.blankBusinessCredentialsRuleName);
			$("#fileHandleCredentials1").text($scope.receiptdatas.handleCredentialsRuleName);
			$("#fileHandleCheckChapter1").text($scope.receiptdatas.handleCheckChapterRuleName);
			$("#fileHandleTimeStamp1").text($scope.receiptdatas.handleTimeStampRuleName);
		
		});
	}
	//添加
	$scope.selectsystem=function (){
		$scope.departid=$scope.department.depart_id;
	 	var url=urlpath+"PerformanceRule/selectsystem.do?templateId="+localStorage.templateId+"&departid="+$scope.departid;
		 getHttp($http, url, function(result) {
			$scope.snames = result.list;
			if($scope.snames.length!=0){
				$scope.sname=$scope.snames[0].system_id;
			}
		})
	}
	$scope.preAdd=function(){	
		$scope.department={}
       var url=urlpath+"CertificateTrail/selectdepart.do?templateId="+localStorage.templateId;
		getHttp($http, url, function(result) {
			$scope.production = result.Organizationlist;
			$scope.department=$scope.production[0];
			$scope.selectsystem();
		})
	}
	
	//保存
	$scope.addsubmitForm= function() {
		$scope.addsubmit={}
		$scope.addsubmit.departid=$scope.department.depart_id;
		$scope.addsubmit.systemId=$scope.sname;
		$scope.addsubmit.projectId=localStorage.projId;
		$scope.addsubmit.templateId=localStorage.templateId;
	    $http({
	        method  : 'POST',
	        url     : urlpath+"credentials/addDepartMentSystem.do",
	        data    : $.param($scope.addsubmit),  // pass in data as strings
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
	    })
        .success(function(data) {
            if(data.msg=="添加失败，已有重复数据"){
            	alert(data.msg);
            }else if(data.msg=="添加成功"){
            	alert(data.msg);
            	location.reload();
            }else{
            	alert("网络错误保存失败");
            }
        });
	};
	//删除
	$scope.deleteData=function(){
		if(confirm("确认删除吗？")){
			$http({
			method  : 'POST',
	        url     : urlpath+"credentials/deletecredential.do?projId="+localStorage.projId+"&templateId="+localStorage.templateId+"&departSystemId="+$scope.dataid.departSystemId,
	        //data    : $.param($scope.dataid),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
			.success(function(data) {
					if(data){
	            		alert("删除成功");
	            		location.reload();
	           		}else{
	            		alert("网络错误删除失败");
	          		}
			});
		}else{
				return;
			}
		
	};
	
	
	//添加核实凭证使用规则-申领
	 $scope.addRule=function (){
	 	sessionStorage.credentialsWithBLOBID=$("#credentialsWithBLOBID").val();
		sessionStorage.id=$scope.data.certificateUseParam.singleCredentialsWithBLOBs.id;
		sessionStorage.projectId=$scope.data.certificateUseParam.singleCredentialsWithBLOBs.projectId;
		sessionStorage.coordinationSystemId=$scope.data.certificateUseParam.singleCredentialsWithBLOBs.coordinationSystemId;
		sessionStorage.coordinationDepartmentId=$scope.data.certificateUseParam.singleCredentialsWithBLOBs.coordinationDepartmentId;
		sion();
		window.location.href="addproductionUse.html"
	} 
	//添加核实凭证使用规则-回执
	 $scope.addReceipt=function (){
	 	sessionStorage.credentialsWithBLOBID=$("#receiptCredentialsWithBLOBID2").val();
		sessionStorage.id=$scope.data.certificateUseParam.receiptCredentialsWithBLOBs.id;
		sessionStorage.projectId=$scope.data.certificateUseParam.receiptCredentialsWithBLOBs.projectId;
		sessionStorage.coordinationSystemId=$scope.data.certificateUseParam.receiptCredentialsWithBLOBs.coordinationSystemId;
		sessionStorage.coordinationDepartmentId=$scope.data.certificateUseParam.receiptCredentialsWithBLOBs.coordinationDepartmentId;
		sion();
		window.location.href="addproductionUse.html"
	}
	 function sion(){
	 	//申领表
	 	sessionStorage.blankBusinessCredentialsRuleStr=$("#blankBusinessCredentialsRuleStr").val();
		sessionStorage.handleCredentialsRule=$("#handleCredentialsRuleStr").val();
		sessionStorage.handleCheckChapterRuleStr=$("#handleCheckChapterRuleStr").val();
		sessionStorage.handleTimeStampRuleStr=$("#handleTimeStampRuleStr").val();
		sessionStorage.fileblankBusiness=$("#fileblankBusiness").text();
		sessionStorage.fileHandleCredentials=$("#fileHandleCredentials").text();
		sessionStorage.fileHandleCheckChapter=$("#fileHandleCheckChapter").text();
		sessionStorage.fileHandleTimeStamp=$("#fileHandleTimeStamp").text();
		//回执表
		sessionStorage.blankBusinessCredentialsRuleStr1=$("#blankBusinessCredentialsRuleStr1").val();
		sessionStorage.handleCredentialsRule1=$("#handleCredentialsRuleStr1").val();
		sessionStorage.handleCheckChapterRuleStr1=$("#handleCheckChapterRuleStr1").val();
		sessionStorage.handleTimeStampRuleStr1=$("#handleTimeStampRuleStr1").val();
		sessionStorage.fileblankBusiness1=$("#fileblankBusiness1").text();
		sessionStorage.fileHandleCredentials1=$("#fileHandleCredentials1").text();
		sessionStorage.fileHandleCheckChapter1=$("#fileHandleCheckChapter1").text();
		sessionStorage.fileHandleTimeStamp1=$("#fileHandleTimeStamp1").text();
	 }
	//保存申领表
	//$scope.AformData={}
	$scope.AsubmitForm = function () {
    	$("#Apply").ajaxSubmit({
    		 url:urlpath+"credentials/updatecredential.do",
    		 type:"post",
    		 enctype:"multipart/from-data",
    		 dataType:"json",
    		 success:function(data){
                if(data){
	            	alert("保存成功");
	            }else{
	            	alert("网络错误保存失败");
	            }
           },
            error:function(data){
                alert("保存失败");
            }
    	})
    };
    //保存回执表
	//$scope.RformData={}
	$scope.RsubmitForm = function () {
    	$("#Receipt").ajaxSubmit({
    		 url:urlpath+"credentials/updatecredential.do",
    		 type:"post",
    		 enctype:"multipart/from-data",
    		 dataType:"json",
    		 success:function(data){
                if(data){
	            	alert("保存成功");
	            }else{
	            	alert("网络错误保存失败");
	            }
           },
            error:function(data){
                alert("保存失败");
            }
    	})
    };
	
});
//添加页面
var addMeta = angular.module("addproductionApp",[]);
addMeta.controller('addproduction',function($scope, $http,$compile){
	var getHttp = function($http, url, callback) { //回调函数
		$http.get(url).success(function(data, status, headers, config) {
			callback(data);
		});
	}
	$(".credentialsWithBLOBID").val(sessionStorage.credentialsWithBLOBID) ;
	var url=urlpath+"credentials/getTheAddPage.do?id="+sessionStorage.id+"&projId="+sessionStorage.projectId+"&systemId="+sessionStorage.coordinationSystemId+"&templateId="+sessionStorage.coordinationDepartmentId;
		getHttp($http, url, function(result) {
			$scope.dataLists=result.dataList;
			//console.log(result)
			$scope.contentLicenseList=result.contentLicenseList;
			$scope.contentVitalDocumentList=result.contentVitalDocumentList;
		})
		
		//数据
	var url=urlpath+"credentials/getData.do?templateId="+localStorage.templateId;
		getHttp($http, url, function(result) {
			//console.log(result)
			$scope.getData=result;
		})
	//证照
	var url=urlpath+"credentials/getContentLicense.do?templateId="+localStorage.templateId;
		getHttp($http, url, function(result) {
			$scope.contentLicenseLists=result;
		})
	//要件
	var url=urlpath+"credentials/getContentVitalDocument.do?templateId="+localStorage.templateId;
		getHttp($http, url, function(result) {
			$scope.contentVitalDocumentLists=result;
			
		})
		
		


<!--//////////////数据核实凭证使用规则////////////////////  -->
	$scope.datasubmitForm = function () {
		//$scope.Dform.dataSel=$("#"+Id+" .selAttributes option");
    	$("#dataForm").ajaxSubmit({
    		 url:urlpath+"credentials/updateVerificationCertificate.do",
    		 type:"post",
    		 enctype:"multipart/from-data",
    		 dataType:"json",
    		 success:function(data){
    		 	if(data.ifSuccess){
	            	alert("保存成功");
	            	addClick(data.id);
	            	mobileDialogElement = $compile(angular.element('<a ng-click="deles('+data.id+')"> 删除</a>'))($scope);
					angular.element("#"+data.id).append(mobileDialogElement);
	            }else{
	            	alert("网络错误保存失败");
	            }
           },
            error:function(data){
                alert("保存失败");
            }
    	})
    };
<!-- //////////////证照核实凭证使用规则////////////// -->
	$scope.licencesubmitForm = function () {
		//$scope.Lform.licenceSel=$("#"+Id+" .selAttributes option");
    	$("#licenceForm").ajaxSubmit({
    		 url:urlpath+"credentials/updateVerificationCertificate.do",
    		 type:"post",
    		 enctype:"multipart/from-data",
    		 dataType:"json",
    		 success:function(data){
                if(data.ifSuccess){
	            	alert("保存成功");
	            	addClick(data.id);
	            	//通过$compile动态编译html
						mobileDialogElement = $compile(angular.element('<a ng-click="deles('+data.id+')"> 删除</a>'))($scope); 
						angular.element("#"+data.id).append(mobileDialogElement); 
	            }else{
	            	alert("网络错误保存失败");
	            }
           },
            error:function(data){
                alert("保存失败");
            }
    	})
    };
<!-- ////////////要件核实凭证使用规则///////////////////// -->
	$scope.importantsubmitForm = function () {
		//$scope.Iform.importantSel=$("#"+Id+" .selAttributes option");
    	$("#importantForm").ajaxSubmit({
    		 url:urlpath+"credentials/updateVerificationCertificate.do",
    		 type:"post",
    		 enctype:"multipart/from-data",
    		 dataType:"json",
    		 success:function(data){
                if(data.ifSuccess){
	            	alert("保存成功");
	            	addClick(data.id);
					mobileDialogElement = $compile(angular.element('<a ng-click="deles('+data.id+')"> 删除</a>'))($scope); 
					angular.element("#"+data.id).append(mobileDialogElement);
	            }else{
	            	alert("网络错误保存失败");
	            }
           },
            error:function(data){
                alert("保存失败");
            }
    	})
    };
    //删除
    $scope.deles=function(a){
    	if(confirm("确认删除吗？")){
				$http({
			method  : 'POST',
	        url     : urlpath+"credentials/deleteVerificationCertificate.do?id="+a,
	        //data    : $.param($scope.dataid),
			headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
			.success(function(data) {
					if(data){
	            		del(a);
	            		alert("删除成功");
	           		}else{
	            		alert("网络错误删除失败");
	          		}
			});
		}else{
				return;
			}
	};
	$scope.rt = function () {
		sessionStorage.trans=1;
		location.href="productionUse.html"
	}
});
