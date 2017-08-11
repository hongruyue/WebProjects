var basePath = window.location.protocol + "//" + window.location.host; 
//数据来源
function modalShow(title){
	$("#Msg").html("");
	$("#Ls").html("");
	 $("input[type='checkbox']").prop("checked",false);
	switch (title){
	 case "byVerify": $("#title").html("选择该证照由谁核实"),
	 				  $("#sec").val("fromCheck");
  		break;
	case "toVerify": $("#title").html("选择该证照向谁核实"),
					 $("#sec").val("toCheck");
		break;
	case "shared": $("#title").html("选择该核实结果谁需要共享"),
				   $("#sec").val("checkShareOrgIds");
		break;
	case "putStorage": $("#title").html("选择该核实结果谁需要入库"),
	     			   $("#sec").val("storageOrgIds");
		break;
   } 
	$('#dataSource').modal('show');
}