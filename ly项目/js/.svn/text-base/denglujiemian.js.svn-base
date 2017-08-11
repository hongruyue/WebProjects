!function(window,document,$,undefined){
	var ipt_form = {		
		init:function(){
			ipt_form.bind_evt();
		},				
		bind_evt:function(){
			//$('#subBtn').on('click',this.onsubBtnClick);//登录			
			$('#btnToggle').on('click',this.onbtnToggleClick);//注册
			$('#close1').on('click',this.onCloselClick);//对话框关闭
			$('#nextBtn1').on('click',this.onNextBtn1Click);//下一步
			$('#wangpassd').on('click',this.onWangpassdClick);
		},
	/*onsubBtnClick: function(){		
		$("#loginForm").submit();		
		},*/		
	onbtnToggleClick : function(){
		//$('#target').slideDown(500);
			$('.masker-wp').show(500);		
	},
	onCloselClick : function(){
		//$('#target').slideUp(500);
		$('.masker-wp').hide(500);			
	},
	onWangpassdClick : function(){
		//$('#forgot_password').slideDown(500);
		$('.masker-wp1').show(500);		
	},	
	onNextBtn1Click : function(){
		alert(66)
	}
}
	$(document).ready(ipt_form.init);
}(window,document,jQuery);
/*用户注册：联系方式手机号或邮箱*/
function field(){
	var field=$('#field').val(),
	p_hone=document.getElementById("p_hone"),
	e_mail=document.getElementById("e_mail");
	if(field==1){
		p_hone.style.display="block";
		e_mail.style.display="none";
	}else{
		p_hone.style.display="none";
		e_mail.style.display="block";
	}
}
/*用户注册：失去焦点事件*/

function sky(regs,msgs,foc){
	var vals = foc.value;
	if(vals == ""){
		msgs.html('<font color="red">* 输入不能为空</font>');		
    }else if(!regs.test(vals)) {
    	msgs.html('<font color="red">! 格式不符</font>');
    	foc.focus();	    	
	}else{
		//msgs.html('<font color="green">✔</font>');
		return true;
	}
}
function pss(msgs,foc){
	var confirmpassword = foc.value,
	password = document.getElementById("password_a").value;
	if(password!=confirmpassword) {
		msgs.html('<font color="red">! 两次密码不一致</font>');
		foc.focus();				
		}
	else{
		msgs.html('<font color="green">✔</font>');
	}
}

function checkAs(){
	var regs= /^[A-Za-z\u4e00-\u9fa5]{2,10}$/, 
	msgs=$('#Msga'),
	foc=document.getElementById('as');	
	if(sky(regs,msgs,foc)==true){
		msgs.html('<font color="green">✔</font>');		
	}else{
		foc.focus();
	}
}
function checkName(){	
	var regs= /^[\dA-Za-z\u4e00-\u9fa5]{2,10}$/i,
	msgs=$('#Msg'),
	foc=document.getElementById('name');
	if(sky(regs,msgs,foc)==true){
		msgs.html('<font color="green">✔</font>');		
	}else{
		foc.focus();
	}
}
function checkPassword(){
	var regs= /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,18}$/,
	msgs=$('#Msgb'),
	foc=document.getElementById('password_a');	
	if(sky(regs,msgs,foc)==true){
		msgs.html('<font color="green">✔</font>');		
	}else{
		foc.focus();
	}
}
function checkConfirmPassword(){
	var regs= /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,18}$/,	
	msgs=$('#Msgbb'),
	foc=document.getElementById('confirmpassword');	
	if(sky(regs,msgs,foc)==true){	
		pss(msgs,foc);
	}else{
		foc.focus();
	}	
}
function checkPhone(){
	var regs= /^1[3-8][0-9]\d{8}$/;	
	msgs=$('#Msgd'),
	foc=document.getElementById('phone');	
	if(sky(regs,msgs,foc)==true){
		msgs.html('<font color="green">✔</font>');		
	}else{
		foc.focus();
	}			
}
function checkEmil(){
	var foc = document.getElementById("emil"),
	msgs=$('#Msgc'),
	regs=  /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
	if(sky(regs,msgs,foc)==true){
		msgs.html('<font color="green">✔</font>');		
	}else{
		foc.focus();
	}
}
	