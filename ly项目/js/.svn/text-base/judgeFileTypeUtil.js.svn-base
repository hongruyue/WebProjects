//获取浏览器
function getBrowserInfo(){
	var agent = navigator.userAgent.toLowerCase();
	return agent;
}
function judgeFileType(fileType,fileObj,typeArr){
	//if(fileObj.value.length > 0){
		var fileEnd = fileObj.value.toLowerCase().substr(fileObj.value.lastIndexOf(".")); 
		var isFileType = false;
		for(var i = 0;i < typeArr.length;i++){
			if(fileEnd == typeArr[i]){
				isFileType = true;
				break;
			}
		}
		if(isFileType){
			var filesize;
			//var maxSize = filemaxSize;
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
				filesize  = fileObj.files[0].size; 
			}
			/*if(filesize > maxSize){
				alert("文件大小不符合要求，限制"+maxSize+"以内");
				return;
			}*/
			return filesize;
		}else{
			alert(fileType+" 只能上传"+typeArr.toString()+"格式的文件,建议文件名不要有空格");
			return 0;
		}
	//}
}