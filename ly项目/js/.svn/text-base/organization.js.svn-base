var basePath = window.location.protocol + "//" + window.location.host; 
var setting = {  
		            data: {
						simpleData: {
							enable: true,
							idKey: "regionalId",
							pIdKey: "superiorRegional",
							rootPId: 0,
					 	},
					   key: {
							name:"regionalName",
						} 
					},
					view: {
						selectedMulti: false
					},
				 callback: {
						onClick: zTreeOnClick
					}
		        };  

 function zTreeOnClick(event, treeId, treeNode) {
		// alert(treeNode.regionalId+"="+treeNode.regionalName);
		 tid = treeNode.regionalId;
		 tname = treeNode.regionalName;
		 console.log(tid)
		 
		 window.location.href=basePath+"/BusinessCollaboration/coordinationOrganization/queryAllOrganization.do?regionalId="+tid;
		 /*$.ajax({
			 type:"post",
			 data:{
				 regionalId:tid
			 },
			 url:basePath+"/BusinessCollaboration/coordinationOrganization/queryAllOrganization.do",
			 success:function(result){
				 window.location.reload();
			 },
			 error:function (XMLHttpRequest, textStatus, errorThrown) {      
		            alert("网络错误");
			}
		 });*/
	 };