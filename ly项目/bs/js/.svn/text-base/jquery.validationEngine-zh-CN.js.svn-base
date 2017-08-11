(function($){
	// 验证规则
	$.fn.validationEngineLanguage = function(){};
	$.validationEngineLanguage = {
		newLang:function(){
			$.validationEngineLanguage.allRules = {
				"required":{ // Add your regex rules here, you can take telephone as an example
					"regex":"none",
					"alertText":"* 此处不可空白",
					"alertTextCheckboxMultiple":"* 请选择一个项目",
					"alertTextCheckboxe":"* 该选项为必选",
					"alertTextDateRange":"* 日期范围不可空白"
				},
				"dateRange":{
					"regex":"none",
					"alertText":"* 无效的 ",
					"alertText2":" 日期范围"
				},
				"dateTimeRange":{
					"regex":"none",
					"alertText":"* 无效的 ",
					"alertText2":" 时间范围"
				},
				"minSize":{
					"regex":"none",
					"alertText":"* 最少 ",
					"alertText2":" 个字符"
				},
				"maxSize":{
					"regex":"none",
					"alertText":"* 最多 ",
					"alertText2":" 个字符"
				},
				"groupRequired":{
					"regex":"none",
					"alertText":"* 至少填写其中一项"
				},
				"min":{
					"regex":"none",
					"alertText":"* 最小值为 "
				},
				"max":{
					"regex":"none",
					"alertText":"* 最大值为 "
				},
				"past":{
					"regex":"none",
					"alertText":"* 日期需在 ",
					"alertText2":" 之前"
				},
				"future":{
					"regex":"none",
					"alertText":"* 日期需在 ",
					"alertText2":" 之后"
				},	
				"maxCheckbox":{
					"regex":"none",
					"alertText":"* 最多选择 ",
					"alertText2":" 个项目"
				},
				"minCheckbox":{
					"regex":"none",
					"alertText":"* 最少选择 ",
					"alertText2":" 个项目"
				},
				"equals":{
					"regex":"none",
					"alertText":"* 两次输入的密码不一致"
				},
                "creditCard": {
                    "regex": "none",
                    "alertText": "* 无效的信用卡号码"
                },
				"phone":{
					// credit:jquery.h5validate.js / orefalo
					"regex":/^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
					"alertText":"* 无效的电话号码"
				},
				"email":{
					// Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
					"regex":/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
					"alertText":"* 只能填写正确的邮件地址"
				},
				"integer":{
					"regex":/^[\-\+]?\d+$/,
					"alertText":"* 无效的整数"
				},
				"number":{
					// Number, including positive, negative, and floating decimal. credit:orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
					"alertText":"* 无效的数值"
				},
				"date":{
					"regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
					"alertText":"* 无效的日期，格式必需为 YYYY-MM-DD"
				},
				"ipv4":{
					"regex":/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
					"alertText":"* 无效的 IP 地址"
				},
				"url":{
					"regex":/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
					"alertText":"* 无效的网址"
				},
				"onlyNumberSp":{
					"regex":/^[0-9\ ]+$/,
					"alertText":"* 只能填写数字"
				},
				"onlyLetterSp":{
					"regex":/^[a-zA-Z\ \']+$/,
					"alertText":"* 只能填写英文字母"
				},
				"onlyLetterNumber":{
					"regex":/^[0-9a-zA-Z]+$/,
					"alertText":"* 只能填写数字与英文字母"
				},
				//tls warning:homegrown not fielded 
				"dateFormat":{
					"regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
					"alertText":"* 无效的日期格式"
				},
				//tls warning:homegrown not fielded 
				"dateTimeFormat":{
					"regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
					"alertText":"* 无效的日期或时间格式",
					"alertText2":"可接受的格式： ",
					"alertText3":"mm/dd/yyyy hh:mm:ss AM|PM 或 ", 
					"alertText4":"yyyy-mm-dd hh:mm:ss AM|PM"
				},
				// 自定义规则示例，提供参考，可删除
				//用户
				'chineseName': {
					  'regex': /^[\u4e00-\u9fa5]{2,20}$/,
					  'alertText': '* 只能填写2-20位以内中文',
				},
				'loginName': {
					  'regex': /^[\u4e00-\u9fa5A-Za-z][A-Za-z\u4e00-\u9fa5\d]{1,19}$/,
					  'alertText': '* 只能填写2-20位以内中文或英文或数字(不能数字开头)',
				},
				"loginNameAjax": {
                    "url": urlpath+" user/checksaveUser.do",
                    // you may want to pass extra data on the ajax call
                    "extraData": "username",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 此名称可以使用",
                    "alertText": "* 此名称已被其他人使用",
                    "alertTextLoad": "* 正在确认帐号名是否有其他人使用，请稍等。"
                },
				'userPwd': {
					  'regex': /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,18}$/,
					  'alertText': '* 只能填写6-18位以内字母和数字，至少各一个大小写字母',
				},
				'userPhone': {
					  'regex': /^1\d{10}$/,
					  'alertText': '* 只能填写11位以内中国大陆手机号',
				},
				'industryCodea': {
					  'regex': /^[\d]{4}$/,
					  'alertText': '* 只能填写4位编码',
				},
				"checkindustrycode": {
                  "url": urlpath+" bussinessIndustry/checkindustrycode.do",
                  "alertTextOk": "* 此行业编码可以使用",
                  "alertText": "* 此行业编码已被其他人使用",
                  "alertTextLoad": "* 正在确认行业编码是否有其他人使用，请稍等。"
              },
              'industryNamea': {
					  'regex': /^[A-Za-z\u4e00-\u9fa5]{2,20}$/,
					  'alertText': '* 只能填写2-20位以内中文或英文',
				},
				"checkindustryname": {
                  "url": urlpath+" bussinessIndustry/checkindustryname.do",
                  "alertTextOk": "* 此行业名称可以使用",
                  "alertText": "* 此行业名称已被其他人使用",
                  "alertTextLoad": "* 正在确认帐号行业名称是否有其他人使用，请稍等。"
              },
              "checkupindustrycode": {
                  "url": urlpath+" bussinessIndustry/checkupindustrycode.do",
                  "extraData": "industryid="+$("#industryId").val(),
                  "alertTextOk": "* 此行业编码可以使用",
                  "alertText": "* 此行业编码已被其他人使用",
                  "alertTextLoad": "* 正在确认行业编码是否有其他人使用，请稍等。"
              },
              "checkupindustryname": {
                  "url": urlpath+" bussinessIndustry/checkupindustryname.do",
                  "extraData": "industryid="+$("#industryId").val(),
                  "alertTextOk": "* 此行业名称可以使用",
                  "alertText": "* 此行业名称已被其他人使用",
                  "alertTextLoad": "* 正在确认行业名称是否有其他人使用，请稍等。"
              },
              'keyValue': {
            	  'regex': /^[A-Za-z\d]{1,10}$/,
				  'alertText': '* 只能填写10位以内的数字或字母',
			  },
			  'rank': {
	            	  'regex': /^([1-9]|[1-9]\d)$/,
					  'alertText': '* 只能填写100以内的数字',
			  },
				"checkBusineDictKeyValue": {
                  "url": urlpath+" busineDict/checkBusineDictKeyValue.do",
                  "extraData": "industryId="+$("#industryId").val(),
                  "alertTextOk": "* 此键值可以使用",
                  "alertText": "* 此键值已被其他人使用",
                  "alertTextLoad": "* 正在确认键值是否有其他人使用，请稍等。"
              },
              
              'labelValue': {
            	  'regex': /^[\u4e00-\u9fa5]{2,10}$/,
				  'alertText': '* 只能填写2-10位以内中文',
			  },
              "checkBusineDictLabelValue": {
                  "url": urlpath+" busineDict/checkBusineDictLabelValue.do",
                  "extraData": "typeValue="+$("#typeId").val()+"&industryId="+$("#industryId").val(),
                  "alertTextOk": "* 此标签可以使用",
                  "alertText": "* 此标签在该类型下已被其他人使用",
                  "alertTextLoad": "* 正在确认标签是否有其他人使用，请稍等。"
              },
              //admin项目管理
              
              "projNameAjax": {
                  "url": urlpath+" project/checkProjName.do",                
                  "alertTextOk": "* 此项目名称可以使用",
                  "alertText": "* 此项目名称已被其他人使用",
                  "alertTextLoad": "* 正在确认项目名称是否有其他人使用，请稍等。"
              },
              'regDate': {
				  'regex': /^\d{4}[\.|\-|\/][0|1]?\d{1}[\.|\-|\/][0-3]?\d{1}$/,
				  'alertText': '* 只能填写yyyy-mm-dd格式的日期',
              },
              'pjDate': {				  
				  'alertText': '* 只能填写yyyy-mm-dd格式的日期',
              },
              "projNameAjaxup": {
                  "url": urlpath+" project/checkProjName2.do", 
                  "extraData": "projId="+$("#projId").val(),
                  "alertTextOk": "* 此项目名称可以使用",
                  "alertText": "* 此项目名称已被其他人使用",
                  "alertTextLoad": "* 正在确认项目名称是否有其他人使用，请稍等。"
              },
	            //区域管理
	            'rmcode': {
					  'regex': /^[0-9]{4}$/,
					  'alertText': '* 只能填写4位数字',
				},
	            //添加区域名称，重名验证
	            "addareaNameAjax": {
                    "url": urlpath+"regionalManagement/checkaddregionalname.do",
                    // you may want to pass extra data on the ajax call
                    "extraData": "qname",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 此区域名称可以使用",
                    "alertText": "* 此区域名称已存在",
                    "alertTextLoad": "* 正在确认此区域名称是否存在"
                },
               
              //添加区域编码，重名验证
	            "addareaCodeAjax": {
                    "url": urlpath+"regionalManagement/checkaddregionalcode.do",
                    // you may want to pass extra data on the ajax call
                    "extraData": "qcode",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 此区域编码可以使用",
                    "alertText": "* 此区域编码已存在",
                    "alertTextLoad": "* 正在确认此区域编码是否存在"
                },
                //修改区域，区域名称重名验证
	            "upareaNameAjax": {
                    "url": urlpath+"regionalManagement/checkupregionalname.do",
                    // you may want to pass extra data on the ajax call
                    "extraData": "regionalid="+$('#qid').val(),
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 此区域名称可以使用",
                    "alertText": "* 此区域名称已存在",
                    "alertTextLoad": "* 正在确认此区域名称是否存在"
                },
              //修改区域编码，重名验证
	            "upareaCodeAjax": {
                    "url": urlpath+"regionalManagement/checkupregionalcode.do",
                    // you may want to pass extra data on the ajax call
                    "extraData": "regionalid="+$('#qid').val(),
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 此区域编码可以使用",
                    "alertText": "* 此区域编码已存在",
                    "alertTextLoad": "* 正在确认此区域编码是否存在"
                },
                //管理员页面行业管理验证
                "industryName": {
                	"regex":/^[\u4e00-\u9fa5a-zA-Z]{2,10}$/,
                	"alertText": "* 只能填写2-10位以内中文或英文"
                },
                "industryNameAjax":{
                	"url": urlpath+" industryManagement/checkaddindustryname.do",
                    "alertTextOk": "* 此名称可以使用",
                    "alertText": "* 此名称已被使用",
                    "alertTextLoad": "* 正在确认行业名称是可用，请稍等。"
                },
                "industryCode": {
                	"regex":/^([1-9]{1}[0-9]{1}|[0]{1}[1-9]{1})$/,
                	"alertText": "* 只能填写2位以内数字"
                },
                "industryCodeAjax":{
                	"url": urlpath+" industryManagement/checkaddindustrycode.do",
                    "alertTextOk": "* 此行业编码可以使用",
                    "alertText": "* 此行业编码已被使用",
                    "alertTextLoad": "* 正在确认行业编码是否可用，请稍等。"
                },
                "industryNameAjaxUp":{
                	"url": urlpath+" industryManagement/checkupindustryname.do",
                	"extraData": "industryid="+$("#industryId").val(),
                    "alertTextOk": "* 此行业名称可以使用",
                    "alertText": "* 此行业名称已被使用",
                    "alertTextLoad": "* 正在确认行业名称是可用，请稍等。"
                },
                "industryCodeAjaxUp":{
                	"url": urlpath+" industryManagement/checkupindustrycode.do",
                	"extraData": "industryid="+$("#industryId").val(),
                    "alertTextOk": "* 此行业编码可以使用",
                    "alertText": "* 此行业编码已被使用",
                    "alertTextLoad": "* 正在确认行业编码是否可用，请稍等。"
                },
                //角色英文验证
                'EnglishName': {
					  'regex': /^[A-Za-z]{2,20}$/,
					  'alertText': '* 只能填写2-20位以内英文',
				},
				//添加角色名称，重名验证
				"roleNameAjax": {
                    "url": urlpath+" role/checkaddRole.do",
                    "extraData": "projId="+$("#projId").val(),

                    "alertTextOk": "* 此角色名称可以添加",
                    "alertText": "* 此角色名称已存在",
                    "alertTextLoad": "* 正在确认此角色名称是否存在。"
                },
              //修改角色名称，重名验证
				"uproleNameAjax": {
                    "url": urlpath+" role/checkupdateRole.do",
                    "extraData": "roleid="+$("#roleId").val() + "&" + "projId="+$("#projId").val(),

                    "alertTextOk": "* 此角色名称可以添加",
                    "alertText": "* 此角色名称已存在",
                    "alertTextLoad": "* 正在确认此角色名称是否存在。"
                }, 
                
                
                "validate2fields": {
                    "alertText": "* 请输入 HELLO"
                },
                "requiredInFunction": { 
                    "func": function(field,rules,i,options){
                        return (field.val()=="test") ? true : false;
                    },
                    "alertText": "* 必须输入 test"
                },
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* 此名称已被其他人使用",
                    "alertTextLoad": "* 正在确认名称是否有其他人使用，请稍等。"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 此帐号名称可以使用",
                    "alertText": "* 此名称已被其他人使用",
                    "alertTextLoad": "* 正在确认帐号名称是否有其他人使用，请稍等。"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* 此名称可以使用",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 此名称已被其他人使用",
                    // speaks by itself
                    "alertTextLoad": "* 正在确认名称是否有其他人使用，请稍等。"
                },
				 "ajaxNameCallPhp": {
	                // remote json service location
	                "url": "phpajax/ajaxValidateFieldName.php",
	                // error
	                "alertText": "* 此名称已被其他人使用",
	                // speaks by itself
	                "alertTextLoad": "* 正在确认名称是否有其他人使用，请稍等。"
	            },
	            //元数据名称验证，请输入2-20位以内中文或中文加数字且不能数字开头
                'metadataChName': {
					  'regex': /^[\u4E00-\u9FA5][0-9\u4E00-\u9FA5]{1,19}$/,
					  'alertText': '* 只能填写2-20位以内中文或中文加数字(不能数字开头)',
				},
				//元数据英文名验证，请输入2-20位以内英文或英文加数字且不能数字开头
				'metadataEnName': {
					  'regex': /^[a-zA-Z][0-9a-zA-Z]{1,19}$/,
					  'alertText': '* 只能填写2-20位以内英文或英文加数字(不能数字开头)',
				},
				//元数据长度验证，请输入2-10以内数字,输入0*也算不合格
				'metadataLength': {
					  'regex': /^[0-9]{1,9}$/,
					  'alertText': '* 只能填写2-10位以内数字',
				},
				//元数据小数位数验证，请输入4位以内数字
				'metadataDecimal': {
					  'regex': /^[0-4]{1,4}$/,
					  'alertText': '* 只能填写4位以内数字',
				},
				//元数据添加重名验证
				"metadataChNameAddAjax": {
					"url": urlpath+" metadata/checkadd.do",
					"extraData": "projId="+$("#projId").val(),
                    "alertText": "* 此名称已被使用",
                    "alertTextOk": "* 此名称可以使用",
                    "alertTextLoad": "* 正在确认名称是否有被使用，请稍等。"
                },
                //元数据修改重名验证
				"metadataChNameUpAjax": {
					"url": urlpath+" metadata/checkup.do?mid="+$("#mid").val(),
					"extraData": "projId="+$("#projId").val(),
                    "alertText": "* 此名称已被使用",
                    "alertTextOk": "* 此名称可以使用",
                    "alertTextLoad": "* 正在确认名称是否有被使用，请稍等。"
                },
                //部门名称验证，请输入2-20位以内汉字
				'departName': {
					  'regex': /^[\u4E00-\u9FA5]{2,20}$/,
					  'alertText': '* 只能填写2-20位以内中文',
				},
				//部门添加重名验证 
				"departNameAddAjax": {
					"url": urlpath+"depart/checkAddName.do",
					"extraData": "orgId="+$("#orgId").val(),				
                    "alertText": "* 此名称已被使用",
                    "alertTextOk": "* 此名称可以使用",
                    "alertTextLoad": "* 正在确认名称是否有被使用，请稍等。"
                },
                //机构下修改部门重名验证 
                "departNameUpdateAjax": {
                	"url": urlpath+"/BusinessCollaboration/depart/checkUpdateName.do",
                	"extraData": "orgId="+$("#orgId").val() + "&departId=" + $("#departId").val(),
                	"alertText": "* 此名称已被使用",
                	"alertTextOk": "* 此名称可以使用",
                	"alertTextLoad": "* 正在确认名称是否有被使用，请稍等。"
              	},
                //组织机构名称
                'chineseFifteen': {
					  'regex': /^[\u4e00-\u9fa5]{1,15}$/,
					  'alertText': '* 只能填写1-15位以内中文',
				},
				//组织机构代码
				'organizacode': {
					  'regex': /^[0-9]{9}$/,
					  'alertText': '* 只能填写9位数字',
				},
				//协同作业名称
				'areaName': {
					"regex":/^[\u4e00-\u9fa5a-zA-Z]{1,15}$/,
                	"alertText": "* 只能填写15位以内中文或英文"
				},
				"outNameAddAjax":{
					"url": urlpath+" businessCollaboration/checkNameAdd.do",
					"extraData": "projId=" + $("#projId").val(),
                    "alertText": "* 此名称已被使用",
                    "alertTextOk": "* 此名称可以使用",
                    "alertTextLoad": "* 正在确认名称是否有被使用，请稍等。"
				},
				"outNameUpdateAjax":{
					"url": urlpath+" businessCollaboration/checkNameUpdate.do",
					"extraData": "coordinationOutId=" + $("#outId").val() + "&projId=" + $("#proId").val(),
                    "alertText": "* 此名称已被使用",
                    "alertTextOk": "* 此名称可以使用",
                    "alertTextLoad": "* 正在确认名称是否有被使用，请稍等。"
				},
				"inNameUpdateAjax":{
					"url": urlpath+" coordinationIn/updadecheckCollaborationInName.do",
					"extraData": "inId=" + $("#inId").val() + "&projId=" + $("#proId").val(),
                    "alertText": "* 此名称已被使用",
                    "alertTextOk": "* 此名称可以使用",
                    "alertTextLoad": "* 正在确认名称是否有被使用，请稍等。"
				}
			};
			
		}
	};
	$.validationEngineLanguage.newLang();
})(jQuery);