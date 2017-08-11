//选择部门
$scope.preAdd=function(templateId){
	$http({
		type:"POST",
		url :urlpath+"CertificateTrail/selectdepart.do?templateId="+templateId,
		dataType: 'json',
		headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	}).success(function(result) {
		for(var i=0;i<result.length;i++){		    				   
		var option="<option name='departId'  value='"+result[i].depart_id+"'>"+result[i].dpName+"</option>";
			$("#department").append(option); 
		}
	});
};
//选择部门下的系统
$scope.selectsystem=function(departid,templateId){
		$('#sname').html("");
		if(va.value=="请选择"){
			 var option="<option selected='selected' value='请选择'>请选择</option>";
			    $("#sname").append(option); 
		}else{				
			$http({
				type:"POST",
				url :urlpath+"PerformanceRule/selectsystem.do?departid="+departid+"&templateId="+templateId,
				dataType: 'json',
				headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
			}).success(function(result) {
			    for(var i=0;i<result.length;i++){		    				   
				    var option="<option name='systemId'  value='"+result[i].system_id+"'>"+result[i].system_name+"</option>";
				    var input1="<input type='hidden' id='templateId1' name='templateId1' value='"+result[i].template_id+"'/>";
				    var input2="<input type='hidden' id='projId1' name='projId1' value='"+result[i].proj_id+"'/>"
				    $("#sname").append(input1); 
				    $("#sname").append(input2);  
				    $("#sname").append(option); 
				}
			})
		}
}

$scope.addRule=function(){
		var pro = $('#projId').val();
		var temp = $('#templateId').val();
		window.location.href = urlpath+"credentials/getTheAddPage.do?projId="+pro+"&templateId="+temp;
} 

$scope.editor=function(){
		var pro = $('#projId').val();
		var temp = $('#templateId').val();
		var val = $('input:radio[name="radio"]:checked').val();
		window.location.href = urlpath+"credentials/credentials.do?projId="+pro+"&templateId="+temp+"&departSystemId="+val;
}

$scope.deleteData=function(){
		var pro = $('#projId').val();
		var temp = $('#templateId').val();
		var val = $('input:radio[name="radio"]:checked').val();
		window.location.href = urlpath+"credentials/deletecredential.do?projId="+pro+"&templateId="+temp+"&departSystemId="+val;
}

/添加页面
var addproduction = angular.module("addproduction",[]);
addproduction.controller('addManagement',function($scope, $http){
	var pid = localStorage.projId;
	var templateid = localStorage.templateId;
	alert(pid)
	$http.get(urlpath+'credential/credential.do?projId='+pid+'&templateId='+templateid).then(function (result){
		console.log(result)
		$scope.managements = result.data.credentialsWithBLOBs;
	});
	$scope.formData={}
	$scope.formData.projId = localStorage.projId;
	$scope.submitForm= function() {
		console.log($scope.formData)
	    $http({
	        method  : 'POST',
	        url     : urlpath+"metadata/saveMetaData.do",
	        data    : $.param($scope.formData),  // pass in data as strings
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
	    })
        .success(function(data) {
            if(data.result=="success"){
            	alert("保存成功");
            	location.href="metadata.html"
            }else{
            	alert("网络错误保存失败");
            }
        });
	};
	$scope.rt = function () {
		location.href="metadata.html"
	}

});