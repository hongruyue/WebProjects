//获取浏览器
function getBrowserInfo(){
	var agent = navigator.userAgent.toLowerCase();
	return agent;
}

//w 展示信息域和元数据
var basePath = window.location.protocol+"//"+window.location.host
function showInfomation(){
	$('#madata').html(" ");
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationTemplateInfofield/selectAllCoordinationInfofield.do",
		data : {
			"templateId": $("#templateId").val()
		},
		success : function(jsonData){
			/*console.log(jsonData)*/
			var data=jsonData;
			if(data.length != 0){
				$('#attachment').removeClass("hide").addClass("show");
				for (var i = 0; i < data.length; i++) {
					$('#madata').append('<div><span class="glyphicon xxyicon"></span><span id="x'+data[i].informationId+'">'+data[i].informationName+'</span><a id="'+data[i].informationId+'" data-toggle="modal" data-target="#updateMetadata" type="button" class="modify">修改</a><a id="'+data[i].informationId+'" onclick="deleteInformationId(this)" class="delet">删除</a><a class="addmatec" onclick="addMetadata('+data[i].informationId+')">添加元数据</a><div id="u'+data[i].informationId+'"></div></div>');
					selectMatas(data[i].informationId)
					/*if(data[i].coordinaInfoMetaDataList.length != 0){
						for(var j = 0;j < data[i].coordinaInfoMetaDataList.length; j++){
							$('#u'+data[i].informationId).append('<label><span class="glyphicon ysjicon"></span>'+data[i].coordinaInfoMetaDataList[j].metadataCname+'</label><input type="text" readonly class="infor"><span class="glyphicon delicon" onclick="delMate('+data[i].informationId+','+data[i].coordinaInfoMetaDataList[j].metadataId+')"></span>');
						}
					}*/
				}
			}else{
				$('#attachment').removeClass("show").addClass("hide");
			}
		}
	});
}

//w 保存信息域
function saveInformation(){
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationTemplateInfofield/saveCoordinationInfofield.do",
		data : {
			"informationName" : $("#inforname").val(),
			"templateId" : $("#templateId").val(),
			"projId" : $("#projId").val()
		},
		success : function(josnData){
			/*console.log(josnData)*/
			if(josnData == 1){
				alert("信息域创建成功") 
				showInfomation();
				$('#attachment').removeClass("hide").addClass("show");
				$("#inforname").val(" ");
			}			
		}
	});
}
//w 修改信息域
function updateInformation(informationId){
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationTemplateInfofield/updateCoordinationInfofield.do",
		data : {
			"informationId" : informationId,
			"informationName" : $("#updateinforname").val(),
			"templateId" : $("#templateId").val(),
			"projId" : $("#projId").val()
		},
		success : function(josnData){
			if(josnData == 1){
				alert("修改成功") 
				//showInfomation();
				//$('#attachment').removeClass("hide").addClass("show");
			}			
		}
	});
}
//w 删除信息域
function deleteInformationId(obj){
	if(confirm('确定要删除吗？删除后不可恢复')){ 
		$.ajax({
			type : "POST",
			url : basePath+"/BusinessCollaboration/coordinationTemplateInfofield/deleteCoordinationInfofield.do",
			data :{
				"informationId" : obj.id
			},
			success : function(jsonData){
				if(jsonData == 1){
					showInfomation()
				}
			}
		});
	}
}

//查詢元数据
function selectMatas(infoID){
	$('#u'+infoID).html("");
		$.ajax({
			type : "POST",
			url : basePath+"/BusinessCollaboration/coordinationInforMetadata/selectMetadataByInforId.do",
			data :{
				"informationId" : infoID
			},
			success : function(jsonData){
				/*console.log(jsonData)*/
				var data=jsonData;
				if(data.length != 0){
					for(var i = 0;i < data.length; i++){
						$('#u'+infoID).append('<label><span class="glyphicon ysjicon"></span>'+data[i].metadataCname+'</label><input type="text" readonly class="infor"><span class="glyphicon delicon" onclick="delMate('+infoID+','+data[i].metadataId+')"></span>');
					}
				}
			}
		});
	
}
//删除元数据
function delMate(infoID,matadataID){
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationTemplateInfofield/deleteCoordinationInfofieldMetaData.do",
		data :{
			"informationId" :infoID,
			"metaDataId" : matadataID
		},
		success : function(jsonData){
			alert("删除成功")
			selectMatas(infoID);
		}
	});
}
//w 显示元数据
function selectMetaData(){
	$("#tbodyId").html(" ");
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationInforMetadata/selectAllMetadata.do",
		data :{
			"templateId" : $("#templateId").val(),
			"projId" :$("#projId").val()
		},
		success : function(jsonData){
			var data = jsonData;
			console.log(jsonData)
			var tbBody = "";
			for (var i = 0; i < data.length; i++) {
				tbBody +="<tr><td><input id="+data[i].metadataId+" type='checkbox' name='metaData'></td>"+
				"<td>"+data[i].metadataCname+"</td>"+
				"<td>"+data[i].metadataType+"</td>"+
				"<td>"+data[i].metadataLength+"</td>"+
				"<td>"+data[i].metadataDecimal+"</td></tr>";
			}
			$("#tbodyId").append(tbBody);
		}
	});
}
//w 保存元数据
function saveMetaData(informationId,metaDataArr){
	$.ajax({
		traditional: true,
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationInforMetadata/saveCoordinationInfofieldMetaData.do", 
		data : {
			"informationId" : informationId,
			"metaDataIds" : metaDataArr 
		},
		success : function(josnData){
			if(josnData == 1){
				alert("添加成功")  
				 $("#Metadatak").modal("hide");
				showInfomation();
				$('#attachment').removeClass("hide").addClass("show");
			}			
		}
	});
}
//w 修改元数据
function updateMetaData(informationId,metaDataArr){
	$.ajax({
		traditional: true,
		type : "POST",
		url : basePath+"/BusinessCollaboration/", 
		data : {
			"informationId" : informationId,
			"metaDataIds" : metaDataArr 
		},
		success : function(josnData){
			if(josnData == 1){
				alert("修改成功")  
				showInfomation();
				$('#attachment').removeClass("hide").addClass("show");
			}			
		}
	});
}
//w 获取凭证
function showVoucher(){
	$("#creden").html(" ");
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationVoucher/selectAllCoordinationVoucher.do",
		data : {
			"templateId" : $("#templateId").val(),
		},
		success : function(jsonData){
			var data = jsonData;
			if(data.length != 0){
				$('#AddCreden').removeClass("hide").addClass("show");
				for(var i = 0;i<data.length;i++){
					// 遍历所有凭证
					// class="show_sf"
					$("#creden").append('<div id="d'+data[i].voucherId+'"><div class="col-md-4 col-xs-4 col-sm-4"><div class="pzsclass"><table><tr><td><span class="glyphicon pzicon"></span><span style="font-size: 18px;">'+data[i].voucherName+'</span><a id="'+data[i].voucherId+'" type="button" class="Add_signature" data-toggle="modal" data-target="#signature">添加签章</a><a type="button" id="R'+data[i].voucherId+'" class="Add_Attach" data-toggle="modal" data-target="#AddAttachments">添加要件</a><a type="button" onclick="deleteVoucher('+data[i].voucherId+')" class="Add_Attach" data-toggle="modal" >删除</a></td></tr><tr><td><span class="left_name">文件：</span><span>'+data[i].voucherFileName+'</span></td></tr><tr><td><span class="left_name">内容：</span><span style="word-wrap: break-word;">'+data[i].voucherContent+'</span></td></tr></table></div></div><div class="col-md-4 col-xs-4 col-sm-4" id="Q'+data[i].voucherId+'"><div class="pzclass"><table></table></div></div><div class="col-md-4 col-xs-4 col-sm-4" id="F'+data[i].voucherId+'" style="display:none;"><div class="pzclass"><table></table></div></div></div></div></div>');
					//展示凭证下的签章
					showAllSignatures(data[i].voucherId);
					//展示凭证下的要件
					showAllEnclosures(data[i].voucherId);
				}
			}else{
				$('#AddCreden').removeClass("show").addClass("hide");
			}
		}
	});
}
//w 保存凭证
function saveVoucher(){
	var type = "save";
	var url = "/BusinessCollaboration/coordinationVoucher/saveCoordinationVoucher.do";
	saveAndUpdate(type,url);
}
 
// w 修改凭证
function updateVoucher(){
	var type = "update";
	var url = "/BusinessCollaboration/";
	var voucherId = 111;
	saveAndUpdate(type,url);
} 

//w 保存和修改凭证公共方法
function saveAndUpdate(type,url){
	var fileObj = document.getElementById("Document_file"); 
	var fileValue = fileObj.value;
	var fileEnd = fileValue.toLowerCase().substr(fileValue.lastIndexOf(".")); 
	console.log(fileEnd);
	if(fileValue.length > 0){
		if(fileEnd == ".docx" || fileEnd == ".doc" || fileEnd == ".txt" || fileEnd == ".xlsx" || fileEnd == ".xls" || fileEnd == ".pdf"){
			var filesize;
			var maxSize = 2 * 1024 * 1024;
			var browser = getBrowserInfo();
			if(browser.indexOf("msie") > 0){
				var regStr_ie = /msie [\d.]+;/gi ;
				var versionNum = (browser.match(regStr_ie)+"").replace(/[^0-9.]/ig,""); 
				if(versionNum >= 10){
					filesize  = fileObj.files[0].size; 
				}
				if(versionNum < 10){
					try{ 
						fileObj.select(); 
						//fileObj.blur();  嵌入框架下不能使用 如果不加会出现拒绝访问
						document.getElementById("fileDiv").focus(); // 使用一个包含file上传框的div可以解决
						var fso = new ActiveXObject("Scripting.FileSystemObject"); 
						var filePath = document.selection.createRange().text; 
						if(fso.FileExists(filePath)){
							filesize = fso.GetFile(filePath).size;
						}
					}catch(e){ 
						alert(e+"\n"+"如果错误为：Error:Automation 服务器不能创建对象；"+"\n"+"请按以下方法配置浏览器："+"\n"+"请打开【Internet选项-安全-Internet-自定义级别-ActiveX控件和插件-对未标记为可安全执行脚本的ActiveX控件初始化并执行脚本（不安全）-点击启用-确定】"); 
						return window.location.reload(); 
					}
				}
			}
			//firefox //Chrome
			if(browser.indexOf("firefox") > 0 || browser.indexOf("chrome") > 0 ){
				var maxSize = 2 * 1024 * 1024;
				filesize  = fileObj.files[0].size; 
			}
			if(filesize > maxSize){
				alert("文件大小不符合要求，限制2M以内");
				return;
			}
		}else{
			alert("只能上传doc,docx,txt,xls,xlsx,pdf格式的文件,建议文件名不要有空格");
			return;
		}
	}
	$("#voucherForm").ajaxSubmit({
		type : "POST",
		url : basePath + url,
		success : function(jsonData){
			if(jsonData == 1){
				if(type == "save"){
					alert("凭证创建成功");
					showVoucher();
					$("#projId2").val($("#projId").val());
					$("#templateId2").val($("#templateId").val());
					$("#Document_name").val(" ");
					$("#contentcc").val(" ");
				}
				if(type == "update"){
					alert("修改成功");
				}
			}
		}
	});
}

//w 删除凭证
function deleteVoucher(id){
	if(confirm('确定要删除吗？删除后不可恢复')){ 
		$.ajax({
			type : "POST",
			url : basePath+"/BusinessCollaboration/coordinationVoucher/deleteCoordinationVoucher.do",
			data : {
				"voucherId" : id,
			},
			success : function(jsonData){
				showVoucher();
				console.log("删除完成")
			}
		});
	}
} 
//w 展示单个凭证下的所有签章信息
function showAllSignatures(voucherId){
	$('#Q'+voucherId+">div>table").html(" ");
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationSignature/selectAllCoordinationSignature.do",
		data : {
			"voucherId" : voucherId,
		},
		success : function(jsonData){
			var data = jsonData;
			if(data.length != 0){
				$('#Q'+voucherId+'>div').css("display","block");
				for(var i = 0;i<data.length;i++){
					// 遍历单个凭证下的所有签章
					 $('#Q'+voucherId+">div>table").append('<tr><td><span class="glyphicon qzicon togs"></span><span id="jgname'+data[i].signatureId+'" type="button" class="togs">'+data[i].organizationName+'</span><a id="'+data[i].signatureId+'" name="'+voucherId+'" type="button" class="up_signature" data-toggle="modal" data-target="#updatesignature">修改</a><a id="'+data[i].signatureId+'" name="'+voucherId+'" type="button" onclick="deleteSignature(this)" class="del_signature">删除</a><div class="disig" style=""><table><tr><td><label>授权人：</label><span id="sq'+data[i].signatureId+'">'+data[i].authorizedPerson+'</span></td></tr><tr><td><label>签章编号：</label><span id="bh'+data[i].signatureId+'">'+data[i].signatureNumber+'</span></td></tr><tr><td><label>签章区域：</label><span id="qy'+data[i].signatureId+'">'+data[i].signatureArea+'</span></td></tr></table></div></td></tr>');
				}
			}else{
				$('#Q'+voucherId+'>div').css("display","none");
			}
		}
	});
}
//w 展示单个签章信息
function showOneSignatures(){
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/",
		data : {
			"signatureId" : 1,
		},
		success : function(jsonData){
			var data = eval("("+jsonData+")");
			//console.log(data.organizationName);
		}
	});
}
//w 保存签章
function saveSignature(voucherId){
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationSignature/saveCoordinationSignature.do",
		data : {
			"organizationName" : $("#signature_name").val(),
			"authorizedPerson" : $("#Authorized").val(),
			"signatureNumber" : $("#signature_number").val(),
			"signatureArea" : $("#signature_area").val(),
			"voucherId" : voucherId,
			"templateId" : $("#templateId").val(),
			"projId" : $("#projId").val(),
		},
		success : function(jsonData){
			if(jsonData == 1){
				alert("签章添加成功")
				showAllSignatures(voucherId);
			}
		}
	});
}

//w 修改签章
function updateSignature(signatureId,voucherId){
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationSignature/updateCoordinationSignature.do",
		data : {
			"signatureId" : signatureId,
			"organizationName" : $("#updatesignature_name").val(),
			"authorizedPerson" : $("#updateAuthorized").val(),
			"signatureNumber" : $("#updatesignature_number").val(),
			"signatureArea" : $("#updatesignature_area").val(),
			"voucherId" : voucherId,
			"templateId" : $("#templateId").val(),
			"projId" : $("#projId").val(),
		},
		success : function(jsonData){
			if(jsonData == 1){
				alert("签章修改成功");
				showAllSignatures(obj.name);
			}
		}
	});
}
//w 删除签章
function deleteSignature(obj){
	if(confirm('确定要删除吗？删除后不可恢复')){ 
		$.ajax({
			type : "POST",
			url : basePath+"/BusinessCollaboration/coordinationSignature/deleteCoordinationSignature.do",
			data : {
				"signatureId" : obj.id,
			},
			success : function(jsonData){
				showAllSignatures(obj.name);
				console.log("签章删除成功")
			}
		});
	}
}

// 展示凭证下的所有要件
function showAllEnclosures(voucherId){
	$('#F'+voucherId+">div>table").html(" ");
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationEnclosure/selectAllCoordinationSignature.do",
		data : {
			"voucherId" : voucherId,
		},
		success : function(jsonData){
			var data = jsonData;
			if(data.length != 0){
				$("#F"+voucherId).css("display","block");
				for(var i = 0;i<data.length;i++){
					// 遍历单个凭证下的所有要件
					$('#F'+voucherId+">div>table").append('<tr><td><span class="glyphicon fjicon togs"></span><span id="fj'+data[i].enclosureId+'" type="button" class="togs">'+data[i].enclosureName+'</span><a id="'+data[i].enclosureId+'" data-toggle="modal" data-target="#updateAttachments" name="'+voucherId+'" type="button" class="up_Attach">修改</a><a id="'+data[i].enclosureId+'" name="'+voucherId+'" type="button" onclick="deletEnclosure(this)" class="del_Attach">删除</a><div class="disig" style=""><table><tr><td><label>大小：</label><span id="sz'+data[i].enclosureId+'">'+data[i].enclosureSize+'</span></td></tr><tr><td><label>格式：</label><span id="gs'+data[i].enclosureId+'">'+data[i].enclosureFormat+'</span></td></tr><tr><td><label>内容：</label><span id="nr'+data[i].enclosureId+'">'+data[i].enclosureDescribe+'</span></td></tr></table></div></td></tr>');
				}
			}else{
				$("#F"+voucherId).css("display","none");
			}
		}
	});
}
//w 保存要件
function saveEnclosure(voucherId){
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationEnclosure/saveEnclosure.do",
		data : {
			"enclosureName" : $("#Enclosure").val(),
			"enclosureSize" : $("#att_size").val(),
			"enclosureFormat" : $("#format option:selected").val(),
			"enclosureDescribe" : $("#att_content").val(),
			"voucherId" : voucherId,
			"templateId" : $("#templateId").val(),
			"projId" : $("#projId").val(),
		},
		success : function(jsonData){
			if(jsonData == 1){
				alert("要件添加成功")
				showAllEnclosures(voucherId);
			}
		}
	});
}
// 修改要件
function updateEnclosure(numbs,att_voucherId){
	$.ajax({
		type : "POST",
		url : basePath+"/BusinessCollaboration/coordinationEnclosure/updateEnclosure.do",
		data : {
			"enclosureId" : numbs,
			"enclosureName" : $("#updateEnclosure").val(),
			"enclosureSize" : $("#updateatt_size").val(),
			"enclosureFormat" : $("#updateformat option:selected").val(),
			"enclosureDescribe" : $("#updateatt_content").val(),
			"voucherId" : att_voucherId,
			"templateId" : $("#templateId").val(),
			"projId" : $("#projId").val(),
		},
		success : function(jsonData){
			if(jsonData == 1){
				alert("修改成功")
				showAllEnclosures(obj.name);
			}
		}
	});
}
//w 删除要件
function deletEnclosure(obj){
	if(confirm('确定要删除吗？删除后不可恢复')){ 
		$.ajax({
			type : "POST",
			url : basePath+"/BusinessCollaboration/coordinationEnclosure/deleteEnclosure.do",
			data : {
				"enclosureId" : obj.id,
			},
			success : function(jsonData){
				showAllEnclosures(obj.name)
				console.log("要件删除成功")
			}
		});
	}
}
