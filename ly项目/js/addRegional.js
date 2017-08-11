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
				 callback: {
						onClick: zTreeOnClick
					}
		        };  

 function zTreeOnClick(event, treeId, treeNode) {
	// alert(treeNode.regionalId+"="+treeNode.regionalName);
	 tid = treeNode.regionalId;
	 tname = treeNode.regionalName;
 };