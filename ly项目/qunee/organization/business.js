var graph;
var dataColor;
var basePath = window.location.protocol+"//"+window.location.host
var daname="";
var dename="";
$(function(){
	for(var name in SVGrectangleCross){
	    Q.registerImage(name, SVGrectangleCross[name]);
	}
	for(var name in SVGrectangleVertical){
	    Q.registerImage(name, SVGrectangleVertical[name]);
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
		images: [{
            name:'图元',
            images: [
				{
				    image: "rectangleCross.svg",
				    properties: {
	                	size: {width: 100,height:37}
					},
				    styles:{
				        'shape.stroke':1.5,
				        'shape.fill.color':'#FFFFFF',
				        'shape.stroke.style':'#000000',
				        'label.position':'cm',
				        'label.anchor.position':'cm',
				        'background.gradient':'#FFFFFF'
				     },
				   label: '业务部门'
				 },
				 {
				    image: "rectangleVertical.svg",
				    properties: {
	                	size: {width: 40,height:100}
					},
				    styles:{
				        'shape.stroke':1.5,
				        'shape.fill.color':'#FFFFFF',
				        'shape.stroke.style':'#000000',
				        'label.position':'cm',
				        'label.anchor.position':'cm',
				        'background.gradient':'#FFFFFF'
				    },
				    label: '业\n务\n部\n门'
				 }
            ]
        }], callback: function (editor) {
        	showChart(editor)
        	savePicture(editor.graph, editor)
        	init(editor.graph, editor)
        	checkUIName(editor.graph, editor)
        	graph = editor.graph;
            graph.moveToCenter()
            //graph.enableWheelZoom = false;
            //graph.isMovable = false;
            //graph.isSelectable = false;
            //graph.editable = false;
            // 去除自环线
            graph.interactionDispatcher.addListener(function(evt){
            	if(evt.kind == Q.InteractionEvent.ELEMENT_CREATED){
                	if(evt.data instanceof Q.Edge && evt.data.isLooped()){
                		graph.removeElement(evt.data)
                	}
                }
            })
            //关闭右键框选功能
            graph.enableRectangleSelectionByRightButton = false;
            // 禁用delete
            graph.onkeydown = function(evt){
            	if(evt.keyCode == '46'){
            		graph.removeSelectionByInteraction = function (evt) {
            			var selection = this.selectionModel.datas;
            	        if (selection.length != 0) {
            	            return false;
            	        }
            	        /*var selection = this.selectionModel.datas;
            	        if (!selection || selection.length == 0) {
            	            return false;
            	        }
            	        Q.confirm("确认要删除该图元？",function () {
            	            var selection = this.removeSelection();
            	        },this);*/
            		}
            	}
            }
            //去除连线上名字
            graph.onElementCreated = function (element, evt, dragInfo) {
				if(element instanceof Q.Edge){
	                element.name = null;
	            }
            } 
            // 双击进去图元
            graph.ondblclick = function(evt){
            	var nodeName = graph.getElement(evt);
            	var organizaid=$("#id").val();
            	var organizaname=$("#organizaname").val();
            	var regionalId=$("#regionalId").val();
        		if(nodeName instanceof Q.Edge){
        			return;
        		}
        		if(nodeName instanceof Q.Node){
        			nodeName.editable = false;
        			if(nodeName.name === "业\n务\n部\n门"){
            			Q.alert("请先修改部门名称并保存");
            		}else if(nodeName.name === "业务部门"){
            			Q.alert("请先修改部门名称并保存");
            		}
            		else{
            			//alert("userId:" + nodeName.userId);
            			//跳转到部门基本信息页面
            			
            			window.location.href=basePath+"/BusinessCollaboration/depart/departInfo.do?departId="+nodeName.userId+"&organizaid="+organizaid+"&organizaname="+organizaname+"&regionalId="+regionalId;
            		}
        		}
        	}
         // 移动连线
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
            // 监听移动的连线重新获取连接点
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
	                         var edgeNum = edge.getEdgeBundle();
	                         if(edgeNum.edges.length >1 ){
	                             edge.to = oldNode;
	                         }
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
                    edge.setStyle(Q.Styles.EDGE_COLOR,"#000000");
                    edge.setStyle(Q.Styles.LABEL_ROTATABLE, false);
                    if(edge instanceof Q.Edge){
                        var edgeNum = edge.getEdgeBundle();
                        if(edgeNum.edges.length >1 ){
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
     	        	result.unshift({
     	        		text:'删除部门',action:function(evt){
     	        			if(graph.isSelected(data)){
     	        				if(data.name == "业务部门" || data.name == "业\n务\n部\n门"){
     	        					Q.confirm('确定要删除该图元？',function(){
     	        						graph.removeSelection();
                         				backups();
     	        					})
                     			}else{
                     				if(data.hasOutEdge()){
                             			Q.alert("请先从子部门删除");
                             		}else{
                             			Q.confirm('确认要删除该部门下的所有信息吗？',function(){
                             				var departName = data.name.replace(/[\n]/ig,'');
                             				var departId = data.userId;
                             				var busId = $("#busId").val();
                                 			deleteDepart(departName,departId,busId);
                                 		})
                             		}
                     			}
     	        			}else{
     	        				Q.alert("请点击选中后在删除");
     	        			}
                     	 }
                   })
                   if(data.image == "rectangleCross.svg"){
                	   if(data.name == "业务部门"){
                		   result.unshift({
                           	text: '编辑名称', action: function (evt){
                           	 $("#checkSpan").text("");	
                           		daname= data.name;
                           		$("#departName").val(data.name);
                           		$('#myModal').modal('show');
                           		//select_Level();
                           		 //保存部门名称
                               	 var select_Btn = document.getElementById("select_Btn");
                              	     select_Btn.onclick = function(){
                              	     checkAs();
                              	   	 if($("#checkSpan >font").text()=='此部门名称可以使用'){
                              	   	alert($("#departName").val())
                              	    	if("业务部门" == $("#departName").val()){
                               			 alert("请添加部门名称")
                               			 derp.length=0;
                               			 $("#checkSpan").text("");	
                              	    	}else{
	                               			 if($("#departName").val() == data.name){
	                               				 	$('#myModal').modal('hide');
	                               				 	backups();
	                                     		  }else{
	                                     			  var departName = $("#departName").val();
	                                     			  var levelName = $("#select_Level").val();
	                                     			  var orgId = $("#orgId").val();
	             	                    			  saveDepart1(data,departName,levelName,orgId);
	                                     		}
                               		 	}
                              	    } 
                                }
                           	 }
                         }) 
                	   }else{
                		   result.unshift({
                           	text: '修改名称', action: function (evt) {
                           	 $("#checkSpan").text("");	
                           		daname= data.name;
                           		//$("#departName").val(data.name);
                           		var departId = data.userId;
                           		showDepartInfo(departId);
                           		$('#myModal').modal('show');
                           		//select_Level();
                           		 //更新部门名称
                               	 var select_Btn = document.getElementById("select_Btn");
                              	     select_Btn.onclick = function(){
                              	     checkAs();
                              	   	if($("#checkSpan >font").text()=='此部门名称可以使用'){
                              	    	if("业务部门" == $("#departName").val()){
                               			 alert("请添加部门名称")
                               			 derp.length=0;
                               			 $("#checkSpan").text("");
                               		}else{
                               			  $("#checkSpan").text("");	
	                               		  checkAs();
	                      				  var departName = $("#departName").val();
	                      				  var departLv = $("#select_Level").val();
	                      				  updateDepart1(data,departName,departLv,departId);
                               		  }
                               	  }
                               }
                           	}
                       })
                	}
     	         }
     	      }
     	      var det="";
     	      var derp=[];
     	       if(data.image == "rectangleVertical.svg"){
     	    	   if(data.name=="业\n务\n部\n门"){
     	    		  result.unshift({
     	                   	text: '编辑名称', action: function (evt) {
     	                   	$("#checkSpan").text("");	
     	                   	daname= data.name;
     	                   		derp.length=0;
     	                   		$("#departName").val(data.name);
     	                   		$('#myModal').modal('show');
     	                   		//select_Level();
     	                   		//保存部门名称
     	                       	 var select_Btn = document.getElementById("select_Btn");
     	                       	 var depName=""
     	                       	 var td=""
     	                    	 select_Btn.onclick = function(){
     	                       		derp.length=0;
     	                       		det="";
     	                       		checkAs();
     	                        	if($("#checkSpan >font").text()=='此部门名称可以使用'){
     	                       		 depName=$("#departName").val()
     	                       		 var character = depName[1];
     	                       		 var text = depName.length;
     	                       	     for (var i=0;i<text;i++) {
     	                       			 if(i<text-1){
     	                       				 ss = depName[i] + "\n";
     	                            		 derp.push(ss) 
     	                       			 }else{
     	                       				 td = depName[i] ;
     	                         			 derp.push(td) 
     	                       			 }
     	                       		  }
     		                       	  for(var t=0;t<text;t++){
     		                       		 det+=derp[t]
     		                       	  }
     		                       	 if("业务部门" == $("#departName").val()){
     	                       			 alert("请添加部门名称")
     	                       			 dte="";
     	                       		 $("#checkSpan").text("");	
     	                       		 }else{
     	                       			 	checkAs();
     	                       			 	var departName = $("#departName").val().replace(/[\n]/ig,'');
	     	                       			var levelName = $("#select_Level").val();
	     	                       			var orgId = $("#orgId").val();
	                            			var busId = $("#busId").val();
	                            			var proId = $("#proId").val();
     	                       			 	saveDepart2(data,det,departName,levelName,orgId,busId,proId);
	     	                       		}
     	                             }
     	                       	 }
     	                   	  }
     	                 })
     	    	   }else{
     	    		  result.unshift({
   	                   	text: '修改名称', action: function (evt) {
   	                   	$("#checkSpan").text("");	
   	                   	daname= data.name;
   	                   		derp.length=0;
   	                   		//$("#departName").val(data.name);
   	                   		var departId = data.userId;
	                   		showDepartInfo(departId);
   	                   		$('#myModal').modal('show');
   	                   		//select_Level();
   	                   		//保存部门名称
   	                       	 var select_Btn = document.getElementById("select_Btn");
   	                       	 var depName=""
   	                       		 var td=""
   	                    	select_Btn.onclick = function(){
   	                       	checkAs();
   	                       	if($("#checkSpan >font").text()=='此部门名称可以使用'){
   	                    	 depName=$("#departName").val()
	                       		 var character = depName[1];
	                       		 var text = depName.length;
	                       	     for (var i=0;i<text;i++) {
	                       			 if(i<text-1){
	                       				 ss = depName[i] + "\n";
	                            		 derp.push(ss) 
	                       			 }else{
	                       				 td = depName[i] ;
	                         			 derp.push(td) 
	                       			 }
	                       		  }
		                       	  for(var t=0;t<text;t++){
		                       		 det+=derp[t]
		                       	  }
		                       	 if("业务部门" == $("#departName").val()){
	                       			 alert("请添加部门名称")
	                       			 $("#checkSpan").text("");	
	                       			 derp.length=0;
	                       		 }else{
	                       			$("#checkSpan").text("");	
	                       			if($("#departName").val() == data.name){
	                       				$("#checkSpan").text(" ");	
	                       			}else{
	                         			$("#checkSpan").text("");	
	                         			checkAs();
	                         			var departName = $("#departName").val().replace(/[\n]/ig,'');
	                         			var departLv = $("#select_Level").val();
                            			var busId = $("#busId").val();
                            			updateDepart2(data,det,departName,departLv,departId);
                            		    }
	                       			}
   	                       		  }
   	                       	   }
   	                        }
   	                   })
     	    	   }
              }
     	     if(isEdge){
     	    	result.unshift({	
 	        		text: '删除连线', action: function (evt, item) {
 	        			if(graph.isSelected(data)){
 	        				Q.confirm('确认要删除该连线吗?',function(){
     	        				graph.removeSelection();
     	        				backups();
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
               }
     	       return result;
     	    }  
        }
	});
	
	//取消提示信息
	$("#departName").mouseover(function(){
		$('#checkSpan').html("");
	});	
});
	// 编辑颜色
	function saveColor(color){
		dataColor.setStyle('render.color', color);
		dataColor.setStyle(Q.Styles.LABEL_BACKGROUND_COLOR,color);
		dataColor.setStyle(Q.Styles.BACKGROUND_GRADIENT,color);
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
	    	saveAndUpdate();
	    }
	    toolbar.appendChild(button);
	}
	//创建保存图片按钮
	function savePicture(graph, editor) {
	    editor.toolbox.hideDefaultGroups();
	    editor.toolbox.hideButtonBar();
	    var toolbar = editor.toolbar;
	    var div = document.createElement('div');
	    div.className = "btn btn-default btn-sm";
	    div.textContent = '存成图片';
	    var layouter = new AutoLayouter(graph);
	    div.onclick = function () {
	    	savePictures();
	    }
	    toolbar.appendChild(div);
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
	
	// 定时保存
	//setInterval("backups1()",1000*60*3);
	
	//更新部门时展示部门信息
	function showDepartInfo(departId) {
		$.ajax({
			type: "POST", 
	        url: basePath+"/BusinessCollaboration/depart/info.do",               
	        data: {
	        	"departId":departId
	        },
	        success: function(Depart){
	        	//alert("更新成功");
	        	$("#departName").val(Depart.departName);
           		//$("#departId").val(Depart.departId);
           		$("#select_Level").val(Depart.departLv);
	        }
		}); 
	}