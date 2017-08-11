var graph;
var dataColor;
var basePath = window.location.protocol+"//"+window.location.host
$(function(){
	for(var name in SVGstart){
	    Q.registerImage(name, SVGstart[name]);
	}
	for(var name in SVGrectangle){
	    Q.registerImage(name, SVGrectangle[name]);
	}
	for(var name in SVGdiamond){
	    Q.registerImage(name, SVGdiamond[name]);
	}
	for(var name in SVGpersonnel){
	    Q.registerImage(name, SVGpersonnel[name]);
	}
	for(var name in SVGend){
	    Q.registerImage(name, SVGend[name]);
	}
	var customShape = new Q.Path();
		customShape.moveTo(0, 0);
		customShape.lineTo(100, 0);
		customShape.arcTo(100, 50, 50, 50, 50);
		customShape.arcTo(0, 50, 0, 0, 50);
	var branch = new Q.Path();
		branch.moveTo(0, 0);
		branch.lineTo(100, 0);
		branch.arcTo(100, 50,50, 50, 50);
		branch.arcTo(0, 50, 0, 0, 50);
	$('#editor').graphEditor({
		images: [
		         {
            name:'图元',
            images: [
				{
				    image: "start.svg",
				    properties: {
	                	size: {width: 100,height:40}
	                },
				    styles:{
				        'shape.stroke': 1.5,
				        'shape.fill.color':'#FFFFFF',
				        'shape.stroke.style':'#000000',
				        'label.position':'cm',
				        'label.anchor.position':'cm',
				        'background.gradient':'#FFFFFF'
				    },
				    label: '开始'
				},
				{
				    image: "rectangle.svg",
				    properties: {
	                	size: {width: 100,height:40}
	                },
				    styles:{
				        'shape.stroke': 1.5,
				        'shape.fill.color':'#FFFFFF',
				        'shape.stroke.style':'#000000',
				        'label.position':'cm',
				        'label.anchor.position':'cm',
				        'background.gradient':'#FFFFFF'
				    },
				    label: '原子操作'
				},
            	{
				    image: "diamond.svg",
				    properties: {
	                	size: {width: 100,height:60}
	                },
				    styles:{
				        'shape.stroke': 1.5,
				        'shape.fill.color':'#FFFFFF',
				        'shape.stroke.style':'#000000',
				        'label.position':'cm',
				        'label.anchor.position':'cm',
				        'background.gradient':'#FFFFFF'
				    },
				    label: '原子判断'
				},
				{
	                image: 'personnel.svg',
	                properties: {
	                	size: {
	                		width: 35,height:75
	                	}
	                },
	                styles:{
	                	'background.gradient':'#FFFFFF'
	                },
	                label: '人工处理',
	            },{
				    image: "end.svg",
				    properties: {
	                	size: {width: 100,height:40}
	                },
				    styles:{
				        'shape.stroke': 1.1,
				        'shape.fill.color':'#FFFFFF',
				        'shape.stroke.style':'#000000',
				        'label.position':'cm',
				        'label.anchor.position':'cm',
				        'background.gradient':'#FFFFFF'
				    },
				    label: '结束'
				}
            ]
        }], callback: function (editor) {
        	showChart(editor)
        	savePicture(editor.graph, editor)
        	init(editor.graph, editor)
        	checkUIName(editor.graph, editor)
        	graph = editor.graph;
            graph.moveToCenter()
			graph.enableWheelZoom = false;
            graph.editable = false;
            graph.enableDoubleClickToOverview = false;
            graph.interactionDispatcher.addListener(function(evt){
                if(evt.kind == Q.InteractionEvent.ELEMENT_CREATED){
                	if(evt.data instanceof Q.Edge && evt.data.isLooped()){
                		graph.removeElement(evt.data)
                	}
                }
            })
            // 去除连线上的信息
            graph.onElementCreated = function (element, evt, dragInfo) {
				if(element instanceof Q.Edge){
	                element.name = null;
	            }
            }
            
            // 删除
            graph.onkeydown = function(evt){
            	if(evt.keyCode == '46'){
            		graph.removeSelectionByInteraction = function (evt) {
            			var selection = this.selectionModel.datas;
            	        if (selection.length != 0) {
            	            return false;
            	        }
            	    }
            	}
            }
            //关闭右键框选功能
            graph.enableRectangleSelectionByRightButton = false;
            // 获取拖拽信息
            /*graph.getDropInfo = function(evt, text){
            	var data = JSON.parse(text);
            	if(data.image != ""){
        			console.log("--------"+data.image);
        			save();
            	}
            	graph.forEach(function(node){
            		Q.log("----"+node.image);
            		if(data.image == "start.svg" && node.image == "start.svg"){
            			Q.log("进来了");
            		    graph.ondrop = function(evt){
            		    	var element = graph.getUIByMouseEvent(evt);
            		    	Q.log("++++"+element);
            		    }
            			
            			graph.removeElement(data);
                	}
            		var elememt = graph.getElement(data.id);
        			Q.log("++++"+elememt);
        		}); 
            	return data;
            	
            }*/
            // 去除双击时出现的编辑框
            graph.ondblclick = function(evt){
            	var element = graph.getElement(evt);
            	if(element instanceof Q.Node){
        			element.editable = false;
        		}
            	if(element.userId != 0){
//            		var url = basePath+"/ModelingAndSimulation/operService/toOperService.do?eventId=3&atomId="+element.userId;
                	var url = basePath+"/ModelingAndSimulation/operService/toOperService.do?operId="+$("#operId").val()+"&atomId="+element.userId;
        			window.location.href=url;
            	}
//            	
            }
            function findNodeAt(evt){
	               var xy = graph.toLogical(evt);
	               var x = xy.x, y = xy.y;
	               var result;
	               graph.forEachReverseVisibleUI(function (ui) {
	                   var data = ui.data;
	                   if (data instanceof Q.Node && ui.uiBounds.intersectsPoint(x - ui.x, y - ui.y) && ui.hitTest(x, y, 1)) {
	                       result = data;
	                       return false;
	                   }
	               });
	               return result;
	        }
            graph.interactionDispatcher.on(function(evt){
	             if(evt.kind == Q.InteractionEvent.POINT_MOVE_END && evt.data instanceof Q.Edge && evt.point && evt.point.isEndPoint){
	                 var edge = evt.data;
	                 var point = evt.point;
	                 var isFrom = point.isFrom;
	                 var oldNode = isFrom ? edge.from : edge.to;
	                 var currentNode = findNodeAt(evt.event);
	                 if(currentNode && oldNode != currentNode){
	                     edge.setStyle(isFrom ? Q.Styles.EDGE_FROM_OFFSET : Q.Styles.EDGE_TO_OFFSET, null);
	                     if(isFrom){
	                         edge.from = currentNode;
	                     }else{
	                         edge.to = currentNode;
	                     }
	                 }
	             }
	        })
            // 监听图元连线
        	graph.interactionDispatcher.addListener(function(data){
        		if(data.kind == Q.InteractionEvent.ELEMENT_CREATED){
                    var edge = data.data;
                    edge.setStyle(Q.Styles.EDGE_CORNER, Q.Consts.EDGE_CORNER_NONE);
                    edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_MIDDLE);
                    edge.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR, "#FFFFFF");
                    edge.setStyle(Q.Styles.LABEL_ROTATABLE, false);
                    if(edge instanceof Q.Edge){
                    	var edgeNum = edge.getEdgeBundle();
                        if(edgeNum.edges.length >1){
                            graph.removeElement(edge);
                        }
                        var nodeFrom = edge.from.image;
            			var nodeTo = edge.to.image;
            			if(nodeFrom == "start.svg" && nodeTo == "diamond.svg" || nodeTo == "start.svg"){
            				graph.removeElement(edge);
            			}
            			if(nodeFrom == "start.svg" && nodeTo == "branch.svg"){
            				graph.removeElement(edge);
            			}
            			if(nodeTo == "half.svg"){
            				if(edge.to.edgeCount>1){
            					graph.removeElement(edge);
            				}
            			}
            			if(nodeFrom == "start.svg" && nodeTo == "end.svg"){
            				graph.removeElement(edge);
            			}
            			if(nodeFrom == "end.svg"){
            				graph.removeElement(edge);
            			}
                     }
                    if(data.kind == Q.InteractionEvent.ELEMENT_CREATED){
                        if(graph.interactionProperties && graph.interactionProperties.styles){
                            data.data.putStyles(graph.interactionProperties.styles)
                        }
					}
                  }
             })
            //自定义菜单
            graph.popupmenu.getMenuItems = function (graph, data, evt) {
        		/*if(data == null){
        			return;
        		}*/
        		var result = Q.PopupMenu.prototype.getMenuItems.apply(this, arguments);
       			result.unshift(Q.PopupMenu.Separator);
				var isNode = data instanceof Q.Node;
				var isEdge = data instanceof Q.Edge;
                if(isNode){
                	result.unshift({
     	        		text: '设置颜色', action: function (evt, item) {
     	        			dataColor = data;
     	        			$('#myColor').modal('show');
     	        		}
	     	        })
	     	        
	     	        //禁用删除和修改
//	     	         result.unshift({
//	   	        		text: '删除操作', action: function (evt, item) {
//	   	        			if(graph.isSelected(data)){
//	   	        				    // 获取选中的图元的名称
//	   	        					var selection = graph.selectionModel.datas;
//	   	        					if(selection[0].name=="开始"||selection[0].name=="原子操作"||selection[0].name=="原子判断"||selection[0].name=="人工处理"||selection[0].name=="结束"){
//	                    	        	Q.confirm('确认要删除该图元吗？',function(){
//		                    	        	graph.removeSelection();
//		                    	        	backups1();
//	                    	        	});
//	                    	        }else {
//	                    	        	Q.confirm('确定要删除该图元下的所有信息吗？',function(){
//	                    	        		graph.removeSelection();
//	                    	        		//删除后更新画布信息
//	                    	        		saveCharAndImage(2);
//	                    	        	});
//	                    	        }
//	   	        			}else{
//	   	        				Q.alert("请先选中图元在进行操作");
//	   	        			}
//	   	        		}
//	   	        	});
	     	       if(data.image.indexOf("rectangle.svg")==0||data.image.indexOf("diamond.svg")==0||data.image.indexOf("personnel.svg")==0){
	     	    	   	var urlParameter = window.location.search.substr(1);//去掉？
	     	    	    var operId = urlParameter.split("&")[0].split("=")[1];
	     	    	    //留作以后参考
	     	    	   	/*if(window.location.search.substr(1).split("=")[0] == "id"){
	     	    	   		operId = window.location.search.substr(1).split("=")[1];
	     	    	   	}else{
	     	    		   	operId = window.location.search.substr(1).split("&")[1].split("=")[1];
	     	    	   	}*/
                		if(data.name == "原子操作" || data.name == "原子判断" || data.name == "人工处理"){
                			//禁用
//     	        			result.unshift({
//     	        				text: '编辑名称', action: function () {
//        	        				$('#myModal').modal('show');
//        	        				var selectName = $("#select_Name");
//        	        				var selectType = $("#select_Type");
//        	        				selectName.empty();
//        	        				selectType.empty();
//                                	$("#errorMsg").html("");
//                                	var operationName = data.name;
//                                 	// 操作ID
//                                 	var operId = $("#operId").val(); 	       						 	       						
//    	       						// 获取字典名称
//                                    selectBusineDictName(operationName,selectName,operId,1);
//    	       					    // 获取字典类型
//                                 	selectBusineDictName(operationName,selectType,operId,2);
//                                	//通过查询atom_manipulation，判断名称+类型是否重复
//                                	var select_Btn = document.getElementById("select_Btn");
//                                	select_Btn.onclick = function(){
//                                		var name = $("#select_Name").val();
//                                		var type = $("#select_Type").val();
//                                		var name_type = name+type;
//                                		data.name = name_type;
//                                		$('#myModal').modal('hide');
//                             			// 修改名称后实时保存
//                                		saveCharAndImage(2);
//                                	};
//        	        			 }
//     	        			})
     	        	}else{
     	        		//禁用
     	        		result.unshift({
    	        			 text: '修改名称', action: function () {
    	        				$('#myModal').modal('show');
    	        				var selectName = $("#select_Name");
    	        				var selectType = $("#select_Type");
    	        				selectName.empty();
    	        				selectType.empty();
                             	$("#errorMsg").html("");
                             	var operationName = data.name;
                             	// 操作ID
                             	var operId = $("#operId").val(); 	
                             	// 原子操作id
                             	var atomId = data.userId;
	       						// 获取字典名称
                                selectBusineDictName(operationName,selectName,"operation_name");
	       					    // 获取字典类型
                             	selectBusineDictName(operationName,selectType,"operation_type");
                             	// 修改名称
                             	var select_Btn = document.getElementById("select_Btn");
                             	select_Btn.onclick = function(){
                             		var name = $("#select_Name").val();
                             		var type = $("#select_Type").val();
                             		var name_type = name+type;
                             		if(name_type == data.name){
                             			$('#myModal').modal('hide');
                             			return;
                             		}else{
                             			// 修改原子操作名称
                             			if(name == "" || name == null || type == ""  || type == null){
                             				alert("名称或类型不能为空,请在字典管理中添加后再操作");
                             				$('#myModal').modal('hide');
                             			}else{
                             				updateAtomName(atomId,name,type,data);
                             			}
                             		}
                             	};
    	        			 }
	       	              })
     	        	    }
                	}
                }
        		if(isEdge){
        			
        			//禁用
//        			result.unshift({
//     	        		text: '删除连线', action: function (evt, item) {
//     	        			if(graph.isSelected(data)){
//     	        				Q.confirm('确认要删除该连线吗?',function(){
//         	        				graph.removeSelection();
//         	        				backups1();
//         	        			})
//     	        			}else{
//     	        				Q.alert("请先选中要删除的连线");
//     	        			}
//     	        		}
//	     	        })
        			result.unshift({
     	        		text: '设置颜色', action: function (evt, item) {
     	        			dataColor = data;
     	        			$('#myColor').modal('show');
     	        		}
     	        	})
//        			result.unshift({
//                        text: '编辑名称', action: function () {
//                        	Q.prompt(getI18NString('InputName'), data.name || '', function (name) {
//                	       		 if (name === null) {
//                	               return;
//                	             }
//                	             data.name = name;
//                	        })
//                        }
//                 	})
                }
               return result;
            } 
        }
	});
});
	//编辑颜色
	function saveColor(color){
		dataColor.setStyle('render.color', color);
		dataColor.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR,color);
		dataColor.setStyle(Q.Styles.ARROW_FROM_OUTLINE_STYLE,color);
		dataColor.setStyle(Q.Styles.ARROW_FROM_FILL_COLOR,color);
		dataColor.setStyle(Q.Styles.ARROW_TO_OUTLINE_STYLE,color);
		dataColor.setStyle(Q.Styles.ARROW_TO_FILL_COLOR,color);
		dataColor.setStyle(Q.Styles.EDGE_COLOR,color);
		dataColor.setStyle(Q.Styles.BACKGROUND_GRADIENT,color);
		dataColor.setStyle(Q.Styles.ARROW_TO_OUTLINE,color);
	}
	
	//创建保存图片按钮
	function AutoLayouter(graph) {
	    this.graph = graph;
	    this._layouters = {};
	}
	function savePicture(graph, editor) {
	    editor.toolbox.hideDefaultGroups();
	    editor.toolbox.hideButtonBar();
	    var toolbar = editor.toolbar;
	    var div = document.createElement('div');
	    div.className = "btn btn-default btn-sm";
	    div.textContent = '存成图片';
	    var layouter = new AutoLayouter(graph);
	    div.onclick = function () {
	    	saveCharAndImage(1);
	    }
	    toolbar.appendChild(div);
	}
	
	//创建保存按钮
	function init(graph, editor) {
	    editor.toolbox.hideDefaultGroups();
	    editor.toolbox.hideButtonBar();
	    var toolbar = editor.toolbar;
	    var button = document.createElement('button');
	    button.className = "btn btn-default btn-sm";
	    button.textContent = '保存';
	    var layouter = new AutoLayouter(graph);
	    button.onclick = function () {
	    	saveCharAndImage(1);
	    }
	    toolbar.appendChild(button);
	}
	//创建错误提示div
	function checkUIName(graph, editor) {
	    editor.toolbox.hideDefaultGroups();
	    editor.toolbox.hideButtonBar();
	    var toolbar = editor.toolbar;
	    var span = document.createElement('div');
	    span.id = "chenkUI";
	    span.className = "btn-group";
	    span.textContent = '';
	    var layouter = new AutoLayouter(graph);
	    toolbar.appendChild(span);
	}
	
	//显示流程图 
	function showChart(editor){
		$.ajax({
			type:"POST",
			url:basePath+"/ModelingAndSimulation/operation/operationFlowchart.do?operId="+$("#operId").val(),
			success:function(data){
				var json = editor.getJSONTextArea().value = data;
				graph.clear();
	            graph.parseJSON(json.operationFlowchart);
		    },
			error:function(){
				//alert("解析错误");
			}
		});
	}
	
	//修改原子操作名称
	function updateAtomName(atomId,name,type,data){
			$.ajax({
				async: true,
				type: "POST", 
		        url: basePath+"/ModelingAndSimulation/operation/updateAtomName.do?",              
		        data: {
		        	"atomId" : atomId,
		        	"oper_name" : name,
		        	"oper_type" : type
		        },
		        success: function(Jsondata){
		        	if(Jsondata == 0){
		        		data.name = name+type;
		        		$('#myModal').modal('hide');
		        		// 修改名称后实时保存
             			saveCharAndImage(2);
		        	}
		        }
		     }); 
	}
	
	//保存到数据库
	function saveCharAndImage(type){
		if(checkOperationNames("原子操作","原子判断","人工操作")>0){
			$("#chenkUI").html("<font style='color:red'>有未修改的操作名称,不能保存</font>");
			return false; 
		}
		if(JSON.stringify(JSON.parse(graph.toJSON(true))).indexOf("datas") < 0){
			$("#chenkUI").html("<font style='color:red'>未画图不能保存</font>");
			return;
		}
		$("#chenkUI").html(" ");
		$.ajax({
			async: true,
			type: "POST", 
	        url: basePath+"/ModelingAndSimulation/operation/saveOperationChar.do?",              
	        data: {
	        	"operId":$("#operId").val(),
	        	"taskId":$("#taskId").val(),
	        	"businessId":$("#businessId").val(),
	        	"projId":$("#projId").val(),
	        	"json_name":JSON.stringify(JSON.parse(graph.toJSON(true))),
	        	"imgInfo":graph.exportImage(graph.scale,graph.bounds).data,
	        },
	        success: function(data){
	        	if(data == 1){
	        		if(type == 1){
	        			alert("保存成功");
		        	}else{
		        		console.log("更新成功");
		        	}
	        		return;
	        	}
	        }
	     }); 
	}
	
	// 查询字典名称和类型
	function selectBusineDictName(operationName,selectName,typeValue){
		$.ajax({
			  async:false,
	  		  type: "get", 
	  		  url:basePath+"/ModelingAndSimulation/busineDict/selectBusineDictByType.do?",                 
	          data: {
	       	   	  "typeValue" :typeValue
	       	  },
	       	  success: function(busineDictName){
	       		  	for(var i = 0;i < busineDictName.length;i++){
	       		  		selectName.append("<option value="+busineDictName[i].label+">"+busineDictName[i].label+"</option>");
				    	if(operationName.indexOf(busineDictName[i].label) > -1){
				    		selectName.val(busineDictName[i].label);
				    	}
				    }
	       	  }
	    });
	}
	//定时保存
	/*function backups1(){
		$("#chenkUI").html(" ");
		if(JSON.stringify(JSON.parse(graph.toJSON(true))).indexOf("datas") < 0){
			console.log("未画图不能保存");
			return;
		}
		if(checkOperationNames("原子操作","原子判断","人工操作")>0){
			console.log("有未修改的操作名称,保存失败");
			return false; 
		}
		$.ajax({
				type: "POST", 
		        url: basePath+"/requirements/page/operation/update.action?id="+$("#oper_id").val(),               
		        data: {	       		   
		        	"task_id":$("#task_id").val(),
		        	"business_id":$("#business_id").val(),
		        	"json_name":JSON.stringify(JSON.parse(graph.toJSON(true))),
		        	"imgInfo":graph.exportImage(graph.scale,graph.bounds).data
		        },
		        success: function(data){
		        	Q.log("更新成功");
		        }
		     }); 
	}
	setInterval("backups1()",1000*60*1);*/