var graph;
var dataColor;
var oldTaskname ;
var relationName;
var relateOpId;
var basePath = window.location.protocol+"//"+window.location.host
$(function(){
	
	for(var name in SVGbranch){
	    Q.registerImage(name, SVGbranch[name]);
	}
	for(var name in SVGdiamond){
	    Q.registerImage(name, SVGdiamond[name]);
	}
	for(var name in SVGdottedRectangle){
	    Q.registerImage(name, SVGdottedRectangle[name]);
	}
	for(var name in SVGend){
	    Q.registerImage(name, SVGend[name]);
	}
	for(var name in SVGfolder){
	    Q.registerImage(name, SVGfolder[name]);
	}
	for(var name in SVGhalf){
	    Q.registerImage(name, SVGhalf[name]);
	}
	for(var name in SVGpersonnel){
	    Q.registerImage(name, SVGpersonnel[name]);
	}
	for(var name in SVGrectangle){
	    Q.registerImage(name, SVGrectangle[name]);
	}
	for(var name in SVGstart){
	    Q.registerImage(name, SVGstart[name]);
	}
	for(var name in SVGsubProcess){
	    Q.registerImage(name, SVGsubProcess[name]);
	}
	//全局opername
	var selectName;
	//全局operType
	var selectName1;
	var selectName2;
	var selectName3;
	var taskName;
	
	$("#select_Depart").on('change',function(){
		selectName = $("#select_Depart option:selected").val();
		document.getElementById("opName").value=selectName+""+selectName1;
		/*if(selectName!="请选择"){
			if(selectName1=="请选择"||selectName1==undefined){
				document.getElementById("opName").value=selectName+""; 
			}else{
				document.getElementById("opName").value=selectName+""+selectName1; 
			}
		}
		else{
			document.getElementById("opName").value=selectName1+""; 
		}*/
		
	});
	$("#select_Depart1").on('change',function(){
		
		selectName1 = $("#select_Depart1 option:selected").val();
		document.getElementById("opName").value=selectName+""+selectName1;
		/*//alert(selectName1)
		if(selectName!="请选择"&&selectName!=undefined){
				document.getElementById("opName").value=selectName+""+selectName1; 
		}else{
			if(selectName1=="请选择"){
				//alert(22)
				document.getElementById("opName").value=""; 
			}
			else{
				//alert(33)
				document.getElementById("opName").value=selectName1+""; 
			}
			
		}
		*/
	});
	$("#select_task").on('change',function(){
		selectName2 = $("#select_task option:selected").val();
	});
	$("#select_dot").on('change',function(){
		selectName3 = $("#select_dot option:selected").val();
	});

	var path = new Q.Path();
	path.moveTo(0, 0);
	path.lineTo(100, 0);
	path.arcTo(100, 50, 50, 50, 50);
	path.arcTo(0, 50, 0, 0, 50);
	
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
		 images: [{
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
                        'LABEL_SHADOW_COLOR':'#FFFFFF',
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
				    label: '操作'
				},
				/*{
	                image: Q.Shapes.getShape(Q.Consts.SHAPE_DIAMOND,100,70),
	                styles:{
	                	'shape.stroke': 1.1,
	                    'shape.fill.color':'#FFFFFF',
	                    'shape.stroke.style':'#000000',
	                    'label.position':'cm',
	                    'label.anchor.position':'cm',
	                    'label_font_size':'50px',
	                    'label_color':'#000000'
	                },
	                label: '判断操作'
		            },*/
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
					    label: '判断'
					},
		        {
	                image: 'half.svg', 
	                properties: {
	                	size: {width: 90,hegth:60}
	                },
	                styles:{
	                	'shape.stroke':1.5,
				        'label.position':'cm',
				        'label.anchor.position':'cm',
				        'background.gradient':'#FFFFFF'
				    },
	                label: '分支操作'
		        },
		        {
	                image: 'branch.svg',
	                properties: {
	                	size: {width: 100,height:45},
	                	border_color:"#FFFFFF"
	                },
	                styles:{
				        'label.position':'cm',
				        'label.anchor.position':'cm',
				        'shape.stroke.style':'#000000',
				        'background.gradient':'#FFFFFF'
				    },
	                label: '汇聚操作'
		        },
		        {
	                image: 'personnel.svg', 
	                properties: {
	                	size: {width: 30,height:65},
	                	border_color:"#FFFFFF"
	                },
	                styles:{
	                	'background.gradient':'#FFFFFF'
	                },
	                label: '人工操作'
		        },
		        {
	                image: 'subProcess.svg', 
	                properties: {
	                	size: {width: 95,hegth:30}
	                },
	                styles:{
	                	'shape.stroke':2.5,
				        'label.position':'cm',
				        'label.anchor.position':'cm',
				        'background.gradient':'#FFFFFF'
				    },
	                label: '子流程'
		        },
		        {
		        	   image: 'folder.svg', 
		                properties: {size: {width: 70,height:50}},
		                styles:{
		                	'shape.stroke':2.5,
					        'label.position':'cm',
					        'label.anchor.position':'cm',
					        'background.gradient':'#FFFFFF'
					    },
		                label: '关联作业'
		          },
		          {
		                image: 'dottedRectangle.svg', 
		                properties: {size: {width: 70,height:50}},
		                styles:{
		                	'shape.stroke':2.5,
					        'label.position':'cm',
					        'label.anchor.position':'cm',
					        'background.gradient':'#FFFFFF'
					    },
		                label: '关联操作'
		           },
		           {
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
            graph.interactionDispatcher.addListener(function(evt){
                if(evt.kind == Q.InteractionEvent.ELEMENT_CREATED){
                	if(evt.data instanceof Q.Edge && evt.data.isLooped()){
                		graph.removeElement(evt.data)
                	}
                	// 禁用连线拖动
                	/*if(evt.data instanceof Q.Edge && evt.data.isConnected()){
                		evt.data.editable = false;
                 	}*/
                }
            })
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
            //去除连线上的字
            graph.onElementCreated = function (element, evt, dragInfo) {
				if(element instanceof Q.Edge){
	                element.name = null;
	            }
				//Q.log(element);
        		/*graph.forEach(function(element){
        			Q.log("画布上-->"+element.image);
        			graph.getDropInfo = function(evt,text){
    	            	var element2 = JSON.parse(text);
    	            	Q.log("拖拽信息-->"+element2.image);
    	            	if(element.image == element2.image){
    	            		Q.log("开始");
    	            		graph.removeElement(element2);
    	            		return;
    	            	}
    	            	return element2;
        	        }
        		});*/
            } 
            // 双击进去图元
        	graph.ondblclick = function(evt,editor){
        		var element = graph.getElement(evt);
        		if(element instanceof Q.Node){
        			element.editable = false;
        		}
            	var taskId = $("#parentId").val();
        		if(element.image.indexOf("half.svg")==0){ //分支操作
        			findAtomOper(element);
        		}
        		if(element.image.indexOf("rectangle.svg")==0){ 
        			findAtomOper(element);
        		}
        		if(element.image.indexOf("branch.svg")==0){ //汇聚操作
        			findAtomOper(element);
        		}
        		if(element.image.indexOf("diamond.svg")==0){ //判断
        			findAtomOper(element);
        		}
            	if(element.image.indexOf("personnel.svg")==0){ //人工操作
            		findAtomOper(element);
        		}
            	function findAtomOper(element){
    				var operId = element.userId;
            		if(operId == null){
    					alert("请先选择类并保存");
    				}else{
    					var url = basePath+"/ModelingAndSimulation/operation/intoOperation.do?nodeId="+operId;
    	    			window.location.href=url;
    				}
            	}
            }
        	//测试拖拽连线
	        /*function findNodeAt(evt){
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
	        }*/
	       	graph.interactionDispatcher.on(function(evt){
	             if(evt.kind == Q.InteractionEvent.POINT_MOVE_END && evt.data instanceof Q.Edge && evt.point && evt.point.isEndPoint){
	                 /*var edge = evt.data;
	                 var point = evt.point;
	                 var isFrom = point.isFrom;
	                 var oldNode = isFrom ? edge.from : edge.to;
	                 var currentNode = findNodeAt(evt.event);*/
	                 //Q.log(currentNode)
	                 //再进行拖拽连线时，会出现bug
	                 /*if(currentNode.hasInEdge()){
	                	 graph.removeElement(edge);
	                	 var edgeNew = graph.createEdge(edge.from, edge.to,Q.Consts.EDGE_TYPE_DEFAULT);
	                	 return;
	                 }*/
	                 /*if(currentNode && oldNode != currentNode){
	                     edge.setStyle(isFrom ? Q.Styles.EDGE_FROM_OFFSET : Q.Styles.EDGE_TO_OFFSET, null);
	                     if(isFrom){
	                         edge.from = currentNode;
	                     }else{
	                         edge.to = currentNode;
	                     }
	                 }*/
	                
	                 if(edge.from.image.indexOf("dottedRectangle.svg") == 0 ){
	                	 var relationTaskName = edge.from._im.from.name;
	                	 var relationOperName = edge.from.name;
	                	 var operName = currentNode.name;
	                	 var busineId = $("#select_task").find("option:selected").attr("business_id");
	                	 var taskId = $("#parentId").val()
	                	 var relationTaskId = getTaskId(relationTaskName); // 关联作业id
		                 var relationOperId = getOperId(relationTaskId,relationOperName); //关联操作id
		                 var operId = getOperId(taskId,operName);                  //指向操作id
		                 addRelationTaskId(oldTaskname,relationTaskName,relationOperName,relationTaskId,relationOperId,operId);
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
                    // 设置虚线
                    /* if(data.kind == Q.InteractionEvent.ELEMENT_CREATED){
	                    if(graph.interactionProperties && graph.interactionProperties.styles){
	                        //Q.log(graph.interactionProperties.styles);
	                        if(edge.to.name != null){
	                        	//backups();
	                        	data.data.putStyles(graph.interactionProperties.styles)
	                        	save();
	                        }
	                    }
	    			}*/
                   if(edge instanceof Q.Edge){
                    	//Q.log(graph.interactionProperties.name)
                    	taskName = edge.from.name;
                    	var edgeNum = edge.getEdgeBundle();
                        if(edgeNum.edges.length >1){
                            graph.removeElement(edge);
                            return;
                        }
                        var nodeFrom = edge.from.image;
            			var nodeTo = edge.to.image;
            			// 定义节点连入线的个数
                        function getEachInEdges(){
        					var edges = [];
                            edge.to.forEachInEdge(function(e){
                                 edges.push(e);
                            });
                            return edges;
        				}
                        // 定义节点连出线的个数
                        function getEachOutEdges(){
        					var edges = [];
                            edge.from.forEachOutEdge(function(e){
                                 edges.push(e);
                            });
                            return edges;
        				}
                        if(nodeTo.indexOf("start.svg") == 0 ){
            				graph.removeElement(edge);
            				return;
            			}
            			if(nodeFrom.indexOf("start.svg") == 0 && nodeTo.indexOf("half.svg") == 0){
            				graph.removeElement(edge);
            				return;
            			}
            			if(nodeFrom.indexOf("start.svg") == 0 && nodeTo.indexOf("branch.svg") == 0){
            				graph.removeElement(edge);
            				return;
            			}
            			if(nodeTo.indexOf("half.svg") == 0){
            				if(getEachInEdges().length>1){
            			    	graph.removeElement(edge);
            			    	return;
            			    }
            			}
            			if(nodeTo.indexOf("personnel.svg") == 0 ){
            				if(getEachInEdges().length>1){
            			    	graph.removeElement(edge);
            			    	return;
            			    }
            			}
            			if(nodeTo.indexOf("subProcess.svg") == 0){
            				if(getEachInEdges().length>1){
            			    	graph.removeElement(edge);
            			    	return;
            			    }
            			}
            			if(nodeFrom.indexOf("subProcess.svg") == 0){
            				if(getEachOutEdges().length>1){
            			    	graph.removeElement(edge);
            			    	return;
            			    }
            			}
            			if(nodeFrom == "start.svg" && nodeTo == "diamond.svg" || nodeTo == "start.svg"){
            				graph.removeElement(edge);
            				return;
            			}
            			
            			if(nodeFrom.indexOf("start.svg") == 0 && nodeTo.indexOf("end.svg") == 0){
            				graph.removeElement(edge);
            				return;
            			}
            			if(nodeFrom.indexOf("end.svg") == 0){
            				graph.removeElement(edge);
            				return;
            			}
            			if(nodeTo.indexOf("folder.svg") == 0){
            				graph.removeElement(edge);
            				return;
            			}
            			if(nodeFrom.indexOf("folder.svg") == 0 && nodeTo.indexOf("dottedRectangle.svg") == 0){
            				if(getEachOutEdges().length>1){
            			    	graph.removeElement(edge);
            			    	return;
            			    }
            			}
            			if(nodeFrom.indexOf("folder.svg") == 0 && nodeTo.indexOf("dottedRectangle.svg") != 0){
            				graph.removeElement(edge);
            			    return;
            			}
            			if(nodeFrom.indexOf("dottedRectangle.svg") == 0 && nodeTo.indexOf("end.svg") == 0){
            				graph.removeElement(edge);
            				return;
            			}
            			if(nodeFrom.indexOf("dottedRectangle.svg") == 0){
            				if(getEachOutEdges().length>1){
            			    	graph.removeElement(edge);
            			    	return;
            			    }
            			}
            			if(nodeFrom.indexOf("folder.svg") != 0 && nodeTo.indexOf("dottedRectangle.svg") == 0){
            				graph.removeElement(edge);
            				return;
            			}
            			if(nodeFrom.indexOf("dottedRectangle.svg") == 0){
            				if(edge.from.name == "关联操作"){
            					Q.alert("请先选择关联操作在进行连接");
            					graph.removeElement(edge);
            					return;
                			}
            				//TODO 添加关联关系
            				var relationTaskName = edge.from._im.from.name;
            				var relationOperName = edge.from.name;
   	                	    var operName = edge.to.name;
   	                	    var busineId = $("#select_task").find("option:selected").attr("business_id");
   	                	 	var taskId = $("#parentId").val();
   	                	 	var relationTaskId = getTaskId(relationTaskName); // 关联作业id
   	                	 	var relationOperId = getOperId(relationTaskId,relationOperName); //关联操作id
   	                	 	var operId = getOperId(taskId,operName);                  //指向操作id
   	                	    //console.log(busineId);
   	                	 	addRelationTaskId(oldTaskname,relationTaskName,relationOperName,relationTaskId,relationOperId,operId);
   	                	 	//saveToTaskTab1(oldTaskname,relationTaskName,relationOperName,taskId,relationOperId);
            			}
            		 }
                  }
               })
             // 自定义菜单
			 graph.popupmenu.getMenuItems = function (graph, data, evt) {
				if(data == null){
	        		return;
	        	}
           		var result = Q.PopupMenu.prototype.getMenuItems.apply(this, arguments);
           			result.unshift(Q.PopupMenu.Separator);
 				var isNode = data instanceof Q.Node;
 				var isEdge = data instanceof Q.Edge;
         	       /* result.unshift({
    	        		text: '设置颜色', action: function (evt, item) {
    	        			dataColor = data;
     	        			$('#myColor').modal('show');
    	        		}
    	        	});*/
	         	  /* if(isNode){
	         		  result.unshift({
		   	        		text: '删除操作', action: function (evt, item) {
		   	        			if(graph.isSelected(data)){
		   	        				    // 获取选中的图元的名称
		   	        					var selection = graph.selectionModel.datas;
		                    	        if(selection[0].name=="操作"||selection[0].name=="判断"||selection[0].name=="分支操作"||selection[0].name=="汇聚操作"||selection[0].name=="人工操作"||selection[0].name=="子流程"||selection[0].name=="关联作业" ||selection[0].name=="关联操作" ||selection[0].name=="开始"||selection[0].name=="结束"){
		                    	        	Q.confirm('确认要删除该图元吗？',function(){
			                    	        	graph.removeSelection();
			                    	        	backups();
		                    	        	})
		                    	        }else {
		                    	        	if(selection[0].image.indexOf("subProcess.svg")==0 || selection[0].image.indexOf("rectangle.svg")==0||selection[0].image.indexOf("diamond.svg")==0||selection[0].image.indexOf("half.svg")==0||selection[0].image.indexOf("branch.svg")==0||selection[0].image.indexOf("personnel.svg")==0){
		                    	        		Q.confirm('确定要删除该图元下的所有信息吗？',function(){
			                    	        		//Q.log(selection[0].name);
			                    	        		var operName = selection[0].name;
			                        	            var taskId = $("#parentId").val();
			                        	            var operId = getOperId(taskId,operName);
			                        	            $.ajax({
			                        	            	type:"post",
			                        	            	url:basePath+"/requirements/page/task/deleteByName.action",
			                        	            	data:{"operName":operName,"taskId":taskId},
			                        	            	success:function(){
			                        	            		//alert("删除成功");                      	     
			                        	            		graph.removeSelection();
			                        	            		top.leftTree.remove(operId);
			                        	            		backups();
			                        	            	},
			                        	            	error:function(){
			                        	            		alert("删除失败，请刷新页面");
			                        	            	}
			                        	            });
			                    	        	})
		                    	        	}else{
		                    	        		if(selection[0].image.indexOf("folder.svg")==0){
		                    	        			if(selection[0].hasOutEdge()){
		                    	        				Q.alert("请先删除关联操作");
		                    	        				return;
		                    	        			}
		                    	        			Q.confirm('确定要删除关联作业？',function(){
		                    	        				$.ajax({
			                    	        				async:true,
			                    	        				type:"post",
			                    	        				url:basePath+"/requirements/page/task/deleteFolder.action",
			                    	        				data:{
			                    	        					"taskId":$("#parentId").val(),
			                    	        					"folderName":selection[0].name
			                    	        				},
			                    	        				success:function(){
			                    	        					graph.removeSelection();
			    			                    	        	backups();
			                    	        					Q.log("删除成功");
			                    	        				}
			                    	        			});
				                    	        	})
		                    	        			
		                    	        		}
		                    	        		if(selection[0].image.indexOf("dottedRectangle.svg")==0){
		                    	        			Q.confirm('确定要删除关联操作？',function(){
		                    	        				$.ajax({
			                    	        				async:true,
			                    	        				type:"post",
			                    	        				url:basePath+"/requirements/page/task/deleteRelLine.action",
			                    	        				data:{
			                    	        					"taskId":$("#parentId").val(),
			                    	        					"relationTaskName":selection[0]._im.from.name,
			                    	        				},
			                    	        				success:function(){
			                    	        					graph.removeSelection();
			    			                    	        	backups();
			                    	        					Q.log("删除成功");
			                    	        				}
			                    	        			});
				                    	        	})
		                    	        		}
		                    	        	}
		                    	        	
		                    	        }
		   	        			}else{
		   	        				Q.alert("请先选中图元在进行操作");
		   	        			}
		   	        		}
		   	        	});
         	        	if(data.image.indexOf("rectangle.svg")==0||data.image.indexOf("diamond.svg")==0||data.image.indexOf("half.svg")==0||data.image.indexOf("branch.svg")==0||data.image.indexOf("personnel.svg")==0){
         	        		if(data.name == "操作" || data.name == "判断" || data.name == "分支操作" || data.name == "汇聚操作" || data.name == "人工操作"){
         	        			result.unshift({
            	        			 text: '编辑名称', action: function () {
        	       						$("#myModal").modal("show");
        	       						$("#select_Depart").empty();
        	       						//$("#select_Depart").append("<option>请选择</option>");
        	       						$("#select_Depart1").empty();
        	       						//$("#select_Depart1").append("<option>请选择</option>");
        	       						$("#resultMsg").html("");
        	       						$("#opName").val("");
        	       						var thisProId = $("#ppro_id").val();//当前项目Id
        	       						//获取OperationName
        	       						$.ajax({
    	                             		type:'GET',
    	                             		url:basePath+"/requirements/page/task/operationName.action?pId="+thisProId,
    	                             		async:false,
    	                             		success:function(json){
    	                             			var data = eval('('+json+')');
    	                             			var selectDepart = document.getElementById("select_Depart");
    	                             			for(var i=0;i<data.length;i++){
    	                             				var option = document.createElement("option");
    	                             				option.value = data[i].opName;
    	                             				option.text = data[i].opName;
    	                             				selectDepart.add(option);
    	                             			}
    	                             			selectName = data[0].opName;   	                             		
    	                             			operationNameD("select_Depart");	
    	                             		},
    	                             		error:function(){
    	                             			alert("获取信息失败,请刷新页面")
    	                             		}
    	                             	});
        	       						//获取OperationType
        	       						$.ajax({
    	                             		type:'GET',
    	                             		url:basePath+"/requirements/page/task/selectoptype.action?pId="+thisProId,
    	                             		async:false,
    	                             		success:function(json){
    	                             			var data = eval('('+json+')');
    	                             			var selectDepart1 = document.getElementById("select_Depart1");
    	                             			for(var i=0;i<data.length;i++){
    	                             				var option = document.createElement("option");
    	                             				option.value = data[i].objectClassName;
    	                             				option.text = data[i].objectClassName;
    	                             				selectDepart1.add(option);
    	                             			}
    	                             			selectName1 = data[0].objectClassName;   	                             			
    	                             			operationNameD("select_Depart1");	
    	                             		},
    	                             		error:function(){
    	                             			alert("获取信息失败,请刷新页面");
    	                             		}
    	                             	});
        	       						$("#opName").val(selectName+selectName1);
        	                         	//保存操作名称类型
        	     						//判断是否为初始操作，若是执行插入操作，不是执行修改操作
        	       						//console.log(data.name);
       	                         	var select_Btn = document.getElementById("select_Btn");
       	                         	select_Btn.onclick = function(){
       	                         		var opName = $("#opName").val();
       	                         		var taskId = $("#parentId").val();
       	                         		    //alert("执行插入操作");
       	                         			//进行名称和类型检查是否同时重复
           	                        		$.ajax({
           	                        			type:"POST",
           	                        			async:false,
           	                        			url:basePath+"/requirements/page/task/checkOpName.action",
           	                        			data:{'task_id':taskId},
           	                        			success:function(json){
           	                        				var data1 = eval('('+json+')');
           	                        				var temp;
           	                        				for(var i=0;i<data1.length;i++){
           	                        					var result =data1[i].operName+data1[i].operationType+"";
           	                        					if(opName == result){
           	                        						$("#resultMsg").html("操作名称已存在");
           	                        						temp = 1;
           	                        						break;
           	                        					}else{
           	                        						$("#resultMsg").html("");
           	                        					}
           	                        				}
           	                        				if(temp != undefined){
           	                        					console.log("名称重复，无法保存");
           	                        				}else{
           	                        					//执行插入操作
           	                        					$.ajax({
           	     	     	                       		   type: "POST", 
           	     	     	                               url: basePath+"/requirements/page/task/addoperName.action",
           	     	     	                               datatype: "json",
           	     	     	                               data: {"opername":$("#select_Depart").val(),
           	     	     	                            	"treepath":$("#treepath").val(),
           	     	     	                            	"gpId":$("#gpId").val() ,
           	     	     	                            	"parentId":$("#parentId").val(),
           	     	     	                            	"opertype":$("#select_Depart1").val()
           	     	     	                               },  
           	     	     	                               success: function(stringData){
           	     	     	                            	    data.name = opName; 
           	     	     	                            	    var operId = getOperId(taskId,opName);
           	     	     	                            	    data.userId = operId;
           	     	     	                            	    //console.log("dataId=="+data.id);
           	     	     	                            	    $('#myModal').modal('hide');
           	     	     	                            	    var string = eval("("+stringData+")");
           	     	     	                            	    top.leftTree.addNode(string[0].url,string[0].treepath,string[0].isFolder,string[0].id,string[0].typeId,string[0].name,string[0].clickFlag,string[0].parentId,string[0].grandparentId);
           	     	     	                            	    //data.id = string[0].id;
           	     	     	                            	    $("#chenkUI").html(" ");
           	     	     	                            	    backups();
           	     	     	                               },
           	     	     	                               error:function(data){
           	     	     	                               		alert("保存失败")
           	     	     	                               }
           	     	     	                   	     });
           	                        			   }
           	                        			}
           	                        	  });
       	                         	} 
       	                        }
       	       	            })
         	        	}else{
         	        		result.unshift({
        	        			 text: '修改名称', action: function () {
    	       						$("#myModal").modal("show");
    	       						$("#select_Depart").empty();
    	       						//$("#select_Depart").append("<option>data.name</option>");
    	       						$("#select_Depart1").empty();
    	       						//$("#select_Depart1").append("<option>请选择</option>");
    	       						$("#resultMsg").html("");
    	       						$("#opName").val("");
    	       						var previousNT = data.name;
    	       						//获取OperationName
    	       						var thisProId = $("#ppro_id").val();//当前项目Id  	       						
    	       						var taskId = $("#parentId").val();    	       						 	       						
    	       						//获取操作对象
    	       						var datad = getOpera(taskId,previousNT);
    	       						console.log("数据库取出来的为"+datad.operName+"------"+datad.operationType);
    	       						$.ajax({
	                             		type:'GET',
	                             		url:basePath+"/requirements/page/task/operationName.action?pId="+thisProId,
	                             		async:false,
	                             		success:function(json){
	                             			var data = eval('('+json+')');
	                             			var selectDepart = document.getElementById("select_Depart");
	                             			for(var i=0;i<data.length;i++){
	                             				var option = document.createElement("option");
	                             				option.value = data[i].opName;
	                             				option.text = data[i].opName;
	                             				selectDepart.add(option);
	                             				if(data[i].opName ==datad.operName){
	                             					$("#select_Depart").val(data[i].opName);
	                             				}
	                             			}
	                             			selectName = $("#select_Depart").val();	                             				
	                             			operationNameD("select_Depart");	                             			
	                             			
	                             		},
	                             		error:function(){
	                             			alert("获取信息失败,请刷新页面")
	                             		}
	                             	});
    	       						//获取OperationType
    	       						$.ajax({
	                             		type:'GET',
	                             		url:basePath+"/requirements/page/task/selectoptype.action?pId="+thisProId,
	                             		async:false,
	                             		success:function(json){
	                             			var data = eval('('+json+')');
	                             			//console.log(data);
	                             			var selectDepart1 = document.getElementById("select_Depart1");
	                             			for(var i=0;i<data.length;i++){
	                             				var option = document.createElement("option");
	                             				option.value = data[i].objectClassName;
	                             				option.text = data[i].objectClassName;
	                             				selectDepart1.add(option);
	                             				if(data[i].objectClassName == datad.operationType){
	                             					$("#select_Depart1").val(data[i].objectClassName);
	                             				}
	                             			}
	                             			 selectName1 = $("#select_Depart1").val(); 
	                             			operationNameD("select_Depart1");
	                             		},
	                             		error:function(){
	                             			alert("获取信息失败,请刷新页面");
	                             		}
	                             	});
    	       						$("#opName").val(selectName+selectName1);
    	                         	//保存操作名称类型
    	     						//判断是否为初始操作，若是执行插入操作，不是执行修改操作
    	       						//console.log(data.name);
    	       					var frameName = data.name;
   	                         	var select_Btn = document.getElementById("select_Btn");
   	                         	select_Btn.onclick = function(){
   	                         		var opName = $("#opName").val();
   	                         		var taskId = $("#parentId").val();
   	                         			//alert("执行修改操作");
   	                         			var previousName = frameName;//用来去表里查询当前需要修改的记录id；
   	                         			if(frameName == opName){
   	                         				//alert("执行退出");
   	                         				$('#myModal').modal('hide');
   	                         			}else{
   	                         				//alert("执行修改操作1");
   	                         				//进行名称和类型检查是否同时重复
   	                         				$.ajax({
           	                        			type:"POST",
           	                        			url:basePath+"/requirements/page/task/checkOpName.action",
           	                        			data:{'task_id':taskId},
           	                        			success:function(json){
           	                        				var data1 = eval('('+json+')');
           	                        				var temp;
           	                        				for(var i=0;i<data1.length;i++){
           	                        					var result =data1[i].operName+data1[i].operationType+"";
           	                        					if(opName == result){
           	                        						$("#resultMsg").html("操作名称已存在");
           	                        						temp = 1;
           	                        						break;
           	                        					}else{
           	                        						$("#resultMsg").html("");
           	                        					}
           	                        				}
           	                        				if(temp != undefined){
           	                        					//console.log("名称重复，无法保存");
           	                        				}else{
           	                        					//执行修改操作
           	                        					$.ajax({
           	     	     	                       		   type: "POST", 
           	     	     	                               url: basePath+"/requirements/page/task/updateOpTabNameType.action",
           	     	     	                               //async:false,
           	     	     	                               data: {"opername":$("#select_Depart").val(),
           	     	     	                            	"taskId":taskId,"previousName":previousName,
           	     	     	                            	"opertype":$("#select_Depart1").val()
           	     	     	                               },  
           	     	     	                               success: function(){
           	     	     	                            	    data.name = opName;
           	     	     	                            	    var operId = getOperId(taskId,opName);
           	     	     	                            	    data.userId = operId;
           	     	     	                            	    //console.log("=="+data.id);
           	     	     	                            	   	//alert("保存成功");
           	     	     	                               		$('#myModal').modal('hide');
           	     	     	                               		var operId = getOperId(taskId,opName);
           	     	     	                               		top.frames["leftTree"].editName(operId,opName);
           	     	     	                               		backups();
           	     	     	                               },
           	     	     	                               error:function(data){
           	     	     	                               		alert("保存失败")
           	     	     	                               }
           	     	     	                   	     });
           	                        			   }
           	                        			}
           	                        		});
   	                         		   }
   	                         	  } 
   	                          }
   	       	              })
         	           }
         	        		
         	        }
         	        
         	        if(data.image.indexOf("folder.svg")==0){
         	        	result.unshift({
     	        			 text: '编辑名称', action: function () {
 	                        	$("#homeWork").modal("show");
  	       						$("#select_task").empty();
 	       						$("#select_task").append("<option>请选择</option>");
 	                         	//根据business查询对相应的task_config
 	                        	var select_business = document.getElementById('select_business');
 	                        	var tid =$("#tid").val() ;
 	                        	//var bname = $("#select_business").find("option:selected").val();
 	                         		$("#select_task").empty();
 		       						$("#select_task").append("<option>请选择</option>");
 	                         		$.ajax({
 	                             		type:'POST',
 	                             		url:basePath+"/requirements/page/task/selectByBname.action",
 	                             		data:{"taskId":tid},
 	                             		success:function(json){
 	                             			var data = eval('('+json+')');
 	                             			console.log(data);
 	                             			for(var i=0;i<data.length;i++){
 	                             				$("#select_task").append("<option business_id='"+data[i].business_id+"' thisId='"+data[i].task_id+"'>"+data[i].task_name+"("+data[i].business_name+")</option>");
 	                             			}
 	                             		},
 	                             		error:function(){
 	                             			alert("获取信息失败,请刷新页面")
 	                             		}
 	                             	});
 	                         	
 	                            selectName2 = document.getElementById('select_task');
 	                         	selectName2.selectedIndex = 0; 
 	                         	
 	                         	var relateTaskName;
 	                         	var relateTaskId;
 	                         	var temp;
 	                         	var select_task = document.getElementById('select_task'); 
 	                         	select_task.onchange = function(){
 	                         		//data._fo.to.name="关联操作";
 	                         		relateTaskName=$("#select_task").find("option:selected").val();
 	                         		var re = new RegExp("请选择");
 	                         		if(re.test(relateTaskName)){
 	                         			temp = 2;
 	                         		}else{
 	                         			temp = 1;
 	                         			//根据relateTaskName查询task_config表里的relateTaskId;
 	 	                         		//findIdByName() 在relate.js里定义减少这里代码；
 	 	                         		relateTaskId = $("#select_task").find("option:selected").attr("thisId");
 	                         		}
 	                        	};
 	                        	//保存关联作业名称
	                         	var select_Work = document.getElementById("select_Work");
	                         	select_Work.onclick = function(){
	                         		if(temp == 1){
	                         			var taskId = $("#parentId").val();
	                         			var busineId = $("#select_task").find("option:selected").attr("business_id");
	                         			if(data.hasOutEdge()){
	                         				var operObj = data._fo.to;
	                         			}
	                         			
	                         			operObj = null;
	                         			oldTaskname = data.name;
	                         			if("关联作业" != data.name){
	                         				delRelationTaskId(taskId,oldTaskname);
	                         			}
	                         			data.name =relateTaskName;
		                         		//保存relateTaskName,relateTaskId到表task_tab,根据task_id
	                         			$('#homeWork').modal('hide');
		                         		backups();
		                         		$("#chenkUI").html(" ");
		                         		// TODO
		                         		selectOperTab(relateTaskId,operObj);
	                         		}
	                         	}
	                         }
	       	            })
     	        	}
         	       if(data.image.indexOf("dottedRectangle.svg")==0){
         	    	  result.unshift({
	                        text: '编辑名称', action: function () {
	                        	if(data.hasInEdge()){
	                        		if(data._im.from.name == "关联作业" ){
	                        			Q.alert("请先选择关联作业");
		                        		return;
		                        	}
	                        		$("#dottedRectangle").modal("show");
	                        		$("#relate_operNT").empty();
	                        		var taskId = $("#parentId").val();
	                        		var busineId = $("#select_task").find("option:selected").attr("business_id");
	                        		var relTName = data._im.from.name;
	                        		var relateTaskId = getTaskId(relTName);
			                         if(relateTaskId != ""){
			                        	 //ajax请求根据relateTaskId查询表operation_tab表里的oper_name
			                        	 selectOperTab(relateTaskId,data);
			                         }else{
			                        	 alert("请先选择关联作业");
			                        	 $('#dottedRectangle').modal('hide');
			                         }
			                         //保存关联操作名称
		                         	 var select_dt = document.getElementById("select_dt");
		                         	 var relationTaskName = data._im.from.name;
		                         	 select_dt.onclick = function(){
		                         		 if(data.hasOutEdge()){
		                         			 var operName;
			                         		 if(!data._im.to._fo){  
			                         			operName = null;
			                         		 }else{
			                         			operName = data._im.to._fo.to.name;
			                         		 }
			                         		 relationName = $("#relate_operNT").find("option:selected").attr("thisId");
			 	                         	 relateOpId = $("#relate_operNT").find("option:selected").attr("thisId");
			 	                         	 var relationTaskName = data._im.from.name;
			 	                         	 var relateOper = $("#relate_operNT option:selected").val();
			                         		 var taskId = $("#parentId").val();
			                         		 //保存relateOpName,relateOpId到表task_tab,根据task_id
			                         		 data.name =relateOper;
			                         		 
			                         		 //saveToTaskTab1(oldTaskname,relationTaskName,relateOper,taskId,relateOpId);
		                         			 var busineId = $("#select_task").find("option:selected").attr("business_id");
	         	        					 var taskId = $("#parentId").val();  // 作业id
	         	        					 var relationTaskId = getTaskId(relationTaskName); // 关联作业id
	         	        					 // TODO
	         	        					 var operName = data._fo.to.name;
	         	        					 var operId = getOperId(taskId,operName);  
	         	        					 // 更改连线方法
	         	        					 addRelationTaskId(oldTaskname,relationTaskName,relateOper,relationTaskId,relateOpId,operId);
	         	        					 backups();
			                         		 $('#dottedRectangle').modal('hide');
			                         		 $("#chenkUI").html(" ");
		                         		 }else{
		                         			 //var bname = $("#select_business").find("option:selected").val();
			                         		 var operName;
			                         		 if(!data._im.to._fo){
			                         			operName = null;
			                         		 }else{
			                         			operName = data._im.to._fo.to.name;
			                         		 }
			                         		 relationName = $("#relate_operNT").find("option:selected").attr("thisId");
			 	                         	 relateOpId = $("#relate_operNT").find("option:selected").attr("thisId");
			                         		 var relateOper = $("#relate_operNT option:selected").val();
			                         		 var taskId = $("#parentId").val();
			                         		 //保存relateOpName,relateOpId到表task_tab,根据task_id
			                         		 data.name =relateOper;
			                         		 var relationTaskName = data._im.from.name;
			                         		 //saveToTaskTab1(oldTaskname,relationTaskName,relateOper,taskId,relateOpId);
			                         		 backups();
			                         		 $('#dottedRectangle').modal('hide');
			                         		 $("#chenkUI").html(" ");
		                         		 }
		                         	 } 
	                        	}else{
	                        		Q.alert("请先连接关联作业");
	                        	}
	                        }
	       	            })
  	        	}else if(data.image.indexOf("end.svg")!=0&&data.image.indexOf("diamond.svg")!=0&&data.image.indexOf("folder.svg")!=0&&data.image.indexOf("start.svg")!=0&&data.image.indexOf("drawable-7")!=0&&data.image.indexOf("rectangle.svg")!=0&&data.image.indexOf("half.svg")!=0&&data.image.indexOf("branch.svg")!=0&&data.image.indexOf("personnel.svg")!=0){
         	        	result.unshift({
                            text: '编辑名称', action: function () {
                            	Q.prompt(getI18NString('InputName'), data.name || '', function (name) {
                    	       		 if (name === null) {
                    	               return;
                    	             }
                    	             data.name = name;
                    	        })
                              }
                     	   })
         	        	}
         	        }  
     			if(isEdge){
     				result.unshift({
     	        		text: '删除连线', action: function (evt, item) {
     	        			if(graph.isSelected(data)){
     	        				if(data.from.image.indexOf("folder.svg") == 0 && data.to.image.indexOf("dottedRectangle.svg") == 0){
     	        					Q.alert("存在关联操作不允许删除");
     	        					return;
     	        				}
     	        				Q.confirm('确认要删除该连线吗?',function(){
     	        					if(data.from.image.indexOf("dottedRectangle.svg") == 0){
         	        					 var busineId = $("#select_task").find("option:selected").attr("business_id");
         	        					 var taskId = $("#parentId").val();  // 作业id
         	        					 var relationTaskName = data.from._im.from.name;
         	        					 // 删除方法
         	        					 delRelationTaskId(taskId,relationTaskName);
         	        					 graph.removeSelection();
             	        				 backups();
         	        				}else{
         	        					graph.removeSelection();
             	        				backups();
         	        				}
     	        				})
     	        			}else{
     	        				Q.alert("请先选中要删除的连线");
     	        			}
     	        			
     	        		}
	     	        })
     				result.unshift({
                        text: '编辑名称', action: function () {
                        	Q.prompt(getI18NString('InputName'), data.name || '', function (name) {
                	       		 if (name === null) {
                	               return;
                	             }
                	             data.name = name;
                	        })
                        }
                 	})
     		     }*/
     			//return result; 
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
	    	$.ajax({
	    		type:"POST",
	    		url: basePath+"/requirements/page/TaskName1/addImgInfo.action",
	    		data:{
	    			"id":$("#parentId").val(),
		        	"businessId":$("#gpId").val(),
		        	"json_name":JSON.stringify(JSON.parse(graph.toJSON(true))),
	    			"imgInfo":graph.exportImage(graph.scale,graph.bounds).data
			    },
	    		success:function(){
	    			alert("图片保存成功");
	    		},
	    		error:function(){
	    			alert("保存失败,请刷新后重试");
	    		}
	    	});
	    }
	   // toolbar.appendChild(div);
	}

	//创建保存按钮
	function AutoLayouter(graph) {
	    this.graph = graph;
	    this._layouters = {};
	}
	function init(graph, editor) {
	    editor.toolbox.hideDefaultGroups();
	    editor.toolbox.hideButtonBar();
	    var toolbar = editor.toolbar;
	    var button = document.createElement('button');
	    button.className = "btn btn-default btn-sm";
	    button.textContent = '保存';
	    var layouter = new AutoLayouter(graph);
	    button.onclick = function () {
	    	save();
	    }
	   // toolbar.appendChild(button);
	}
	
	//创建错误提示div
	function AutoLayouter(graph) {
	    this.graph = graph;
	    this._layouters = {};
	}
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
			type:"get",
			url:basePath+"/ModelingAndSimulation/task/showTaskFlowChart.do?taskId="+$("#taskId").val(),
			success:function(data){
				var json = editor.getJSONTextArea().value = data;
				graph.clear();
	            graph.parseJSON(json.taskflowChart);
		    },
			error:function(){
				alert("解析错误");
			}
		});
	}
	// 检查时候保存过流程图
	function checkChart(){
		var chartNum;
		$.ajax({
			  async:false,
	  		  type: "get", 
	  		  url: basePath+"/requirements/page/task/CheckTaskid.action",               
	          data: {
	       	   	  "task_id":$("#parentId").val()
	       	  }
		   }).done(function(stringData){
			  chartNum = stringData;
		   });
		return chartNum;
	}
	//保存到数据库
	function save(){
		//Q.log(graph.viewportBounds);
		$("#chenkUI").html(" ");
		if(checkTaskNames("操作","判断","分支操作","汇聚操作","人工操作","关联作业","关联操作")>0){
			$("#chenkUI").html("<font style='color:red'>有未修改的操作名称,保存失败</font>");
			return; 
		}
		if(JSON.stringify(JSON.parse(graph.toJSON(true))).indexOf("datas") < 0){
			$("#chenkUI").html("<font style='color:red'>未画图不能保存</font>");
			return;
		}
		$.ajax({
			type: "POST", 
	        url: basePath+"/requirements/page/task/update.action?id="+$("#parentId").val(),               
	        data: {
	        	"businessId":$("#gpId").val(),
	        	"json_name":JSON.stringify(JSON.parse(graph.toJSON(true))),
	        	"imgInfo":graph.exportImage(graph.scale,graph.bounds).data
	        },
	        success: function(data){
	        	alert("更新成功");
	        /*	window.parent.location.href=basePath+"/requirements/page/login/enterIntoMain.action?proj_id=276&userUri=page/TaskName1/viewoperation.action&taskId="+$("#busineId").val()+"&checkUrl=1&operationId="+$("#parentId").val();
	        	*/
	        	/*top.leftTree.location.reload();*/
	        	/*top.leftTree.opent($("#parentId").val());*/
	        	
	        }
	     }); 
		
		
	}

		

	//定时保存
	function backups(){
		if(JSON.stringify(JSON.parse(graph.toJSON(true))).indexOf("datas") < 0){
			console.log("未画图不能保存");
			return;
		}
		if(checkTaskNames("操作","判断","分支操作","汇聚操作","人工操作","关联作业","关联操作")>0){
			console.log("有未修改的操作名称,保存失败");
			return false; 
		}
		$.ajax({
				type: "POST", 
		        url: basePath+"/requirements/page/task/update.action?id="+$("#parentId").val(),               
		        data: {
		        	"businessId":$("#gpId").val(),
		        	"json_name":JSON.stringify(JSON.parse(graph.toJSON(true))),
		        	"imgInfo":graph.exportImage(graph.scale,graph.bounds).data
		        },
		        success: function(data){
		        	console.log("更新成功");
		        }
		     }); 
	}
	function backups1(){
		if(JSON.stringify(JSON.parse(graph.toJSON(true))).indexOf("datas") < 0){
			console.log("未画图不能保存");
			return;
		}
		if(checkTaskNames("操作","判断","分支操作","汇聚操作","人工操作","关联作业","关联操作")>0){
			console.log("有未修改的操作名称,保存失败");
			return false; 
		}
		$("#chenkUI").html(" ");
		 $.ajax({
				type: "POST", 
		        url: basePath+"/requirements/page/task/update.action?id="+$("#parentId").val(),               
		        data: {
		        	"businessId":$("#gpId").val(),
		        	"json_name":JSON.stringify(JSON.parse(graph.toJSON(true))),
		        	"imgInfo":graph.exportImage(graph.scale,graph.bounds).data
		        },
		        success: function(data){
		        	console.log("更新成功");
		        }
		     }); 
	}
	//setInterval("backups1()",1000*60*1)
	//查询task_tab刷新 作业属性
	// TODO
	function listTask_tab(){
		 var fromId=$(".fd").val();
		 if(fromId== undefined || fromId==null||fromId==""){
			 $(".fromId").css("display","none");
		 }else{
			 $(".fromId").css("display","block");
		 }
			var taskid = document.getElementById("treeid").value;
			//console.log(taskid);
			$.ajax({
				type:"POST",
				url:basePath+"/requirements/page/task/selectDataByTaskId.action",
				data:{'task_id':taskid},
				success:function(json){
					var data = eval('('+json+')');
					//console.log(data);
					document.getElementById("selectCategory").value=data[0].taskClass;
					document.getElementById("relatetaskid").value=data[0].taskRelation;
					//document.getElementById("relateoprid").value=data[0].relateOper;
					$("#selectLevel").html(data[0].taskLevel);
					document.getElementById("Days").value=data[0].daysPermonth;
				},
				error:function(){
          			alert("获取信息失败,请刷新页面")
          		}
			});
			listTaskLevel();
	}
	//展示作业级别下拉选项
	function listTaskLevel(){
		$.ajax({
			type:"POST",
			url:basePath+"/requirements/page/systemManager/taskLevel1.action",
			success:function(data){
				var elements = eval("("+data+")");
				for(i = 0;i<elements.length;i++){
					$("#Level").append("<option>"+elements[i].levelName+"</option>");
				}
			}
		});
	}
	// 取指向操作id
	function getOperId(taskId,operName){
		$.ajax({
			  async:false,
	  		  type: "get", 
	  		  url:basePath+"/requirements/page/TaskName1/findIdByOperId.action",               
	          data: {
	        	  "taskId":taskId,
				  "opName":operName
	       	  }
		   }).done(function(stringData){
			   var data = eval("("+stringData+")");
			   chartNum = data.operId;
		   });
		return chartNum;
	}
	
	// 取关联作业id
	function getRelationTaskId(operId){
		$.ajax({
			  async:false,
	  		  type: "get", 
	  		  url:basePath+"/requirements/page/TaskName1/findIdByOperId.action",               
	          data: {
	        	  "operId":operId,
			  }
		   }).done(function(stringData){
			   var data = eval("("+stringData+")");
			   chartNum = data;
		   });
		return chartNum;
	}
	// 保存关联关系 relationTaskId-relationOperId-operId
	function addRelationTaskId(oldTaskname,relationTaskName,relationOperName,relationTaskId,relateOpId,operId){
		$.ajax({
			  async:true,
	  		  type: "POST", 
	  		  url:basePath+"/requirements/page/task/addtaskRelation.action",               
	          data: {
	        	  "taskId":$("#parentId").val(),
	        	  "oldTaskname":oldTaskname,
	        	  "relationTaskName":relationTaskName,
	        	  "relationOperName":relationOperName,
	        	  "relationTaskId":relationTaskId,
	        	  "relationOperId":relateOpId,
	        	  "operId":operId
			  },
			  success:function(){
				  Q.log("保存成功");
			  }
		   });
	}
	
	// 取作业id
	function getTaskId(taskName){
		$.ajax({
			  async:false,
	  		  type: "get", 
	  		  url:basePath+"/requirements/page/TaskName1/getTaskIdByBIdAndTName.action",               
	          data: {
	        	  "taskName":taskName
			  }
		   }).done(function(stringData){
			   chartNum = stringData;
		   });
		return chartNum;
	}
	
	function delRelationTaskId(taskId,relationTaskName){
		$.ajax({
			  async:true,
	  		  type: "POST", 
	  		  url:basePath+"/requirements/page/task/deleteRelLine.action",               
	          data: {
	        	  "taskId":taskId,
	        	  "relationTaskName":relationTaskName
			  },
			  success:function(){
				  Q.log("删除成功");
			  }
		   });
	}
	