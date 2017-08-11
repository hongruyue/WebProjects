
/**
 * playImgs jQuery plugin
 *
 * Copyright (c) 2009 Xing,Xiudong
 * 
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * @author Xing,Xiudong  xingxiudong@gmail.com | http://blog.csdn.net/xxd851116
 * @since: 2009-08-06
 * @version 1.0 2009-08-06
 * @deprecated 1.1 update a problem: the same index li element's show or hide is repeated when mouse over it at 2009-09-23
 * @deprecated 1.2 add row($title_bar.width($container.width() - 5 * 2);) to remove '$title_bar' left-padding and right-padding at 2010-02-24
 */
(function($){
	$.fn.playImgs = function(settings){
		var options = $.extend({
			imgCSS		: {}, 
			transition	: 0,  
			width		: '', 
			height		: '', 
			time		: 0,  
			duration	: 500,
			onStart		: function(){}, 
			onStop		: function(){}, 
			onShow		: function($) {$.show();}, 
			onHide		: function($) {$.hide();}  
		}, settings);

		var __defaultCSSDiv = {'border':'0px solid #CCC','padding':'1px','align':'center','position':'relative','overflow':'hidden','width':options.width,'height':options.height};
		var __defaultCSSImg = {'position':'absolute','z-index':'0','border':'1px solid #d7d7d7','padding':'1px','width':'476px','height':'236px'};
		var __defaultCSSUL  = {'margin':'0 2px 2px 2px','padding':'0','fontSize':'12px','z-index':'2','position':'absolute','bottom':'0px','right':'2px','list-style-type':'none'};
		var __defaultCSSLI  = {'float':'left','border':'1px solid black','padding':'2px 2px 2px 2px','width':'12px','text-align':'center','vertical-align':'top','margin-left':'2px','cursor':'pointer','background-color':'black','color':'white','line-height':'14px','font-family':'Arial'};
		//var __defaultCSSTitle= {'background-color':'#eee','position':'absolute','z-index':'1','line-height':'25px', 'font-weight':'700','font-size':'12px','padding':'0 5px','bottom':'0'};


		var $container 	= this.hide().css(__defaultCSSDiv);

		var $images 	= $container.find("img").hide().css(options.imgCSS).css(__defaultCSSImg);

		var lastIndex 	= $images.length - 1;

		var prevIndex	= lastIndex;
		var index = 0;		
		var timer;	


		//var $title_bar = $("<div>&nbsp;</div>").appendTo($container).css(__defaultCSSTitle).fadeTo('fast', "0.75");
		//$title_bar.width($container.width() - 5 * 2);

		var $indexGroups = $("<ul></ul>").css(__defaultCSSUL).fadeTo('fast', 0.9);
		for (var i = 0; i < $images.length; i++) {
			$indexGroups.append("<li>" + (i + 1) + "</li>");
		}

		var $sn = $indexGroups.appendTo($container).children("li");
		$images.hover(function(){
			pause();
		},function(){
			timer = setTimeout(run, options.time);
		});

		$sn.css(__defaultCSSLI).hover(function() {

			index = $.trim($(this).text()) - 1;

			if (prevIndex != index) {
				hide(prevIndex);
				show(index);
			}
			// alert("prevIndex : " + prevIndex + ",  index : " + index);

			prevIndex = index;

			pause();
		}, function() {
			prevIndex = $.trim($(this).text()) - 1;
			timer = setTimeout(run, options.time);
		});

		function run() {
			index = index == prevIndex ? index + 1 : index;

			index = index > lastIndex ? 0 : index;

			if (options.transition == 23) {
				var random_num = parseInt(Math.random() * 5) + 1;
				$container.playAction(random_num);
			}

			hide(prevIndex);
			show(index);

			prevIndex = index;
			index++;

			timer = setTimeout(run, options.time);
		}

		function show(index) {

			//$("#consle").html("index: " + index + ", prevIndex: " + prevIndex); 

			options.onShow($images.eq(index));
			//$title_bar.text($images.eq(index).parent("a").attr("title"));

			$sn.eq(index).css({'background-color':'red','border-color':'red'});
			$("#consle").html("<a class=\"piclink\" href=\""+$images.eq(index).parent("a").attr("href") +"\"target=\"_blank\"\">"+$images.eq(index).parent("a").attr("title")+"</a>");

		}

		function hide(index) {
			options.onHide($images.eq(index));
			$sn.eq(index).css({'background-color':'black','border-color':'black','fontColor':'red'});
		}

		function pause() {
			options.onStop();
			clearTimeout(timer);
		}

		$container.start = function(){ options.onStart();run();return $container;}
		$container.stop  = function(){ options.onStop();pause();return $container;}

		$container.playAction = function(n) {
			switch(n) {
				case 1 :
					options.onShow = function($_) {$_.fadeIn(options.duration);};
					options.onHide = function($_) {$_.fadeOut(options.duration);};
					break;
				case 2 : 
					options.onShow = function($_) {$_.slideDown(options.duration);};
					options.onHide = function($_) {$_.slideUp(options.duration);};
					break;
				case 3 : 
					options.onShow = function($_){
						$_.css("left",  -$_.width() + 'px').show().animate({left: "0px"}, options.duration);
					};
					options.onHide = function($_){
						$_.css("left", '0px').animate({left: $_.width() + 'px'}, options.duration);
					};
					break;
				case 4 : 
					options.onShow = function($_){
						$_.css("top", -$_.height() + 'px').show().animate({top: "0px"}, options.duration);
					};
					options.onHide = function($_){
						$_.css("top", '0px').animate({top: $_.height() + 'px'}, options.duration);
					};
					break;
				case 5 : 
					options.onShow = function($_){
						$_.css("bottom", -$_.height() + 'px').show().animate({bottom: "0px"}, options.duration);
					};
					options.onHide = function($_){
						$_.css("bottom", '0px').animate({bottom: $_.height() + 'px'}, options.duration);
					};
					break;
				case 6 : 
					options.onShow = function($_){
						$_.css("left",  $_.width() + 'px').show().animate({left: "0px"}, options.duration);
					};
					options.onHide = function($_){
						$_.css("left", '0px').animate({left: -$_.width() + 'px'}, options.duration);
					};
					break;
				case 23 :
					var random = parseInt(Math.random() * 5) + 1;
					break;
			}
			return this;
		}

		return $container.playAction(options.transition).show();
	}
})(jQuery);
