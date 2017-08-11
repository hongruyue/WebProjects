var graph;
var serviceId;//当前服务的id
var selectEvent;//当前选中的事件的id
var nowHeight;//当前连线高度
graph = new Q.Graph("editor");
graph.editable = false;
function createBus(path) {  					 			//创建线的方法
          var bus = new Q.Bus(null, path);
          bus.set('type', 'main.line');                    //主线
          graph.graphModel.add(bus);
          bus.setStyle(Q.Styles.SHAPE_STROKE, 2);			//线的属性  尺寸         
          bus.setStyle(Q.Styles.SHAPE_STROKE_STYLE , "#7a7a7a");
          bus.editable = false;     
          //bus.name="aa";
          return bus;
            }
function Lane(){  	
	graph.editable = false;
	var xsta=75,//x开始
	xend=640,//x结束
	ste=30,//节点间隔 与CreateHLineInteraction.js变量一致
	ln=630,//l长度
	max=90,//节点初始
	lnode=180,//线初始
	yste=250,//线间隔
	picx=60;//图片x轴
	
	for(var s=1, x = max;x<=ln;x+=30,s+=1){  	//循环可连接的点
		bus= createBus();				
		var label2 = new Q.LabelUI();
		label2.position = Q.Position.CENTER_TOP;
		label2.anchorPosition = Q.Position.CENTER_BOTTOM;
		label2.offsetX = -18;
		label2.offsetY = 8;
		bus.addUI(label2, [{
		    property : "label2",
		    propertyType : Q.Consts.PROPERTY_TYPE_CLIENT,
		    bindingProperty : "data"
		}]);				
		bus.set("label2", ''+s);
		bus.moveTo(100,x);
		bus.lineTo(105,x);	
										
	}	
		bus0= createBus();
   		bus0.moveTo(100, xsta);     			//生成线
   		bus0.lineTo(100, xend);	
   		
	
	pic1 = graph.createNode("", lnode, picx);
	pic1.image = "../qunee/imgs/operpage2.png";
	pic1.onclick =false;	
	//pic1.isSelectable=false;//是否可以选中
	pic1.sendToBottom = true;//置底显示
	pic1.tooltip = "页面";
    bus1 = createBus();  				 //hello      
	for(x = max;x<=ln;x+=ste){  	//循环可连接的点
	bus1.moveTo(lnode-4,x);
	bus1.lineTo(lnode+4,x);				
	}	
   		bus1.moveTo(lnode, xsta);     			//生成线
   		bus1.lineTo(lnode, xend);	
   		pic1.host = bus1;					//将图元和线连接	       		
   		lnode+=yste;
   		
   	pic2 = graph.createNode("", lnode, picx);
    pic2.image = "../qunee/imgs/operc2.png";
    pic2.tooltip = "程序";
    bus2 = createBus();  				//qunee
	for(x = max;x<=ln;x+=ste){  	//循环可连接的点
	   	 bus2.moveTo(lnode-4, x);
   	   	 bus2.lineTo(lnode+4,x);		    
   }	
   		 bus2.moveTo(lnode, xsta);
    	 bus2.lineTo(lnode, xend);				//线的参数，后面的是长度
    	 pic2.host = bus2;					//将图元和线连接	
    	 lnode+=yste;
	
    pic3 = graph.createNode("", lnode, picx);
    pic3.image = "../qunee/imgs/operdate2.png";
    pic3.tooltip = "关系数据库";
    bus3 = createBus(); 				//three           
	for(x = max;x<=ln;x+=ste){  	//循环可连接的点
		 bus3.moveTo(lnode-4, x);
   		 bus3.lineTo(lnode+4,x);
    }	
    	bus3.moveTo(lnode, xsta);
    	bus3.lineTo(lnode, xend);				//线的参数，后面的是长度
    	pic3.host = bus3;					//将图元和线连接
    	lnode+=yste;
   		
   	/*pic4 = graph.createNode("", lnode, picx);
    pic4.image = "../qunee/imgs/oper2.png";
    pic4.tooltip = "页面信息";
    bus4 = createBus(); //four       
	for(x = max;x<=ln;x+=ste){  	//循环可连接的点
		bus4.moveTo(lnode-4, x);
   		bus4.lineTo(lnode+4,x);
    }	
        bus4.moveTo(lnode, xsta);
        bus4.lineTo(lnode, xend);			//线的参数，后面的是长度
        pic4.host = bus4;				//将图元和线连接
        lnode+=yste;
   		
  	pic5 = graph.createNode("", lnode, picx);
	pic5.image = "../qunee/imgs/oper1.png";
	pic5.tooltip = "关系数据库";
    bus5 = createBus(); //four       
		for(x = max;x<=ln;x+=ste){  	//循环可连接的点
			bus5.moveTo(lnode-4, x);
	   		bus5.lineTo(lnode+4,x);
        }	
            bus5.moveTo(lnode, xsta);
            bus5.lineTo(lnode, xend);			//线的参数，后面的是长度
            pic5.host = bus5;
           lnode+=yste;*/
}
    Q.Editor.prototype.initToolbar = function (toolbar, graph) {
        Q.createToolbar(graph, toolbar, {editor: [ ]
        })
    }
    
var basePath = window.location.protocol+"//"+window.location.host
$(function(){
	for(var name in SVGstart){
	    Q.registerImage(name, SVGstart[name]);
	}		
	$('#editor').graphEditor({		
		callback: function (editor) {
//        	showChart(editor)
        	init(editor.graph, editor)
	    	//泳道类型按钮
	    	init2(editor.graph, editor,1,'读页面',"url('../qunee/imgs/operbtn5.png')")
	    	init2(editor.graph, editor,2,'写页面',"url('../qunee/imgs/operbtn6.png')")
	    	init2(editor.graph, editor,3,'页面跳转',"url('../qunee/imgs/operpa.png')")
	    	init2(editor.graph, editor,4,'新增',"url('../qunee/imgs/operbtn1.png')")
	    	init2(editor.graph, editor,5,'删除',"url('../qunee/imgs/operbtn2.png')")
	    	init2(editor.graph, editor,6,'查询',"url('../qunee/imgs/operbtn3.png')")
	    	init2(editor.graph, editor,7,'修改',"url('../qunee/imgs/operbtn4.png')")
	    	/*init2(editor.graph, editor,8,'数据读出',"url('../qunee/imgs/operbtn1.png')")
	    	init2(editor.graph, editor,9,'数据写入',"url('../qunee/imgs/operbtn2.png')")
	    	init2(editor.graph, editor,10,'验签验证',"url('../qunee/imgs/operbtn3.png')")*/
	    	graph = editor.graph;
        	//graph.onclick =false;
        	//graph.isMovable= false;
        //---------------------------------------------------------
            graph.onElementCreated = function (element, evt, dragInfo) {
				if(element instanceof Q.Edge){
	                element.name = null;
	            }
            }
            graph.isMovable = function(evt){
            	if(evt instanceof Q.Node){
            		return false;
            	}
            }
            
            // 监听 图元连线
            graph.interactionDispatcher.addListener(function(data){
				if(data.kind == Q.InteractionEvent.ELEMENT_CREATED){
					var edge = data.data;
					var isEdge = edge instanceof Q.Node;				
					 lineH(edge);
					 Q.log("当前类型为"+edge.name+edge.properties.dtypeid);					 
				}
            })
            //自定义菜单
            graph.popupmenu.getMenuItems = function (graph, data, evt) {
            	
        		var result = Q.PopupMenu.prototype.getMenuItems.apply(this, arguments);
       			result.unshift(Q.PopupMenu.Separator);	
       		//判断是否是泳道线
                if(data != null && data._mof.type == 'h.line'){ 
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
	     	         result.unshift({
	   	        		text: '删除操作', action: function (evt, item) {
	   	        			if(graph.isSelected(data)){
   	        				    // 获取选中的图元的名称
   	        					var selection = graph.selectionModel.datas;	   	        				
                	        	Q.confirm('确定要删除该图元吗？',function(){
                	        		//删除泳道
                	        		if(data._mof.did != null){
                	        			delLaneLine(data._mof.did)
                	        		}
                	        		graph.removeSelection();
                	        		//删除后更新画布信息
                	        		save(1);             	        		             	        		
                	        	});                    	      
	   	        			}else{
	   	        				Q.alert("请先选中图元在进行操作");
	   	        			}
	   	        		}
	   	        	});    	        
                 	result.unshift({
                 		text: '设置属性', action: function (evt, item) {
                 			if(graph.isSelected(data)){	 
                 				//获取读取页面需要展示的关联值
                 				var nameData = selectOperationObjectName();
                 				if(data._mof.dtypeid == 3){
                 					var type3Date =  getAtomPageTabs();
                 					//给页面跳转页面赋参数
       								putType3Date(type3Date);
	   	        				}else if(data._mof.dtypeid == 1 || data._mof.dtypeid == 2){
	   	        						
	   	        				}else if(data._mof.dtypeid == 4 || data._mof.dtypeid == 5 || data._mof.dtypeid == 6 || data._mof.dtypeid == 7){
	   	        					var type4Date =  getFromTabs();
	   	        					//给选数据库赋参数
       								putType4Date(type4Date);
	   	        				}
	   	        				if(data._mof.did == null){
	   	        					console.log("新连的泳道");
	   	        					//$("#selectUrl").val("");
	   	        					if(data._mof.dtypeid == 3){		   	        							
	   	        						//给页面跳转页面赋值
	   	        						$("#selectUrl").val("");
	   	        					}else if(data._mof.dtypeid == 1 || data._mof.dtypeid == 2){
	   	        						//给读页面页面赋值 
	   	        						selectMetaName(nameData);
	   	        					}else if(data._mof.dtypeid == 4 || data._mof.dtypeid == 5 || data._mof.dtypeid == 6 || data._mof.dtypeid == 7){	   	        					
	   	        						//TODO:根据输入的元数据对应的信息域找出对应的表，新连的泳道默认勾选 
	   	        						var type4Date =  getFromTabs();
	   	        						newType4Date(type4Date);
	   	        						//	$("#selectData").val("");
		   	        				}
	   	        				}else{
	   	        					//查询保存的泳道（根据泳道的id）
	   	        					$.ajax({
		   	        					type:"POST",
		   	        					url:basePath+"/ModelingAndSimulation/laneLine/getlaneLine.do?lineId="+data._mof.did,
		   	        					success:function(info){
		   	        						if(info == "" || info == null){	   	        							
		   	        							
		   	        						}else{
		   	        							console.log("查询出来的泳道");
		   	        							console.log(info);		   	        							
		   	        							if(data._mof.dtypeid == 3){		   	        							
		   	        								//给页面跳转页面赋值
		   	        								$("#selectUrl").val(parseInt(info.param1));
		   	 	   	        					}else if(data._mof.dtypeid == 1 || data._mof.dtypeid == 2){
		   	 	   	        						//给读页面页面赋值 
			   	 	   	        					selectMetaName(nameData);
			   	 	   	        					//选择之前保存的数据  字符串拆分成数组，遍历选中
			   	 	   	        					var param1 = info.param1.split(",");
			   	 	   	        					if (param1 != "") {
				   	 	   	        					for (i in param1) {
				   	 	   	        						$("input:checkbox[value="+param1[i]+"]").attr("checked",true);
				   	 	   	        					}
			   	 	   	        					}
		   	 	   	        					}else if(data._mof.dtypeid == 4 || data._mof.dtypeid == 5 || data._mof.dtypeid == 6 || data._mof.dtypeid == 7){
			   	 	   	        					var param1 = info.param1.split(",");
			   	 	   	        					if (param1 != "") {
				   	 	   	        					for (i in param1) {
				   	 	   	        						$("input:checkbox[value="+param1[i]+"]").attr("checked",true);
				   	 	   	        					}
			   	 	   	        					}
		   			   	        				}
		   	        						}		
		   	        				    },
		   	        					error:function(){	   	        					
		   	        					}
		   	        				});
	   	        				}
	   	        				//显示model
	   	        				if(data._mof.dtypeid == 3){
	   	        					$('#urlModal').modal('show');	
	   	        				}else if(data._mof.dtypeid == 1 || data._mof.dtypeid == 2){
	   	        					if (data._mof.dtypeid == 2) {
	   	        						$("#isWriteOrRead").html("写页面");
	   	        					}
	   	        					$('#wriModal').modal('show');	
	   	        				}else if(data._mof.dtypeid == 4 || data._mof.dtypeid == 5 || data._mof.dtypeid == 6 || data._mof.dtypeid == 7){
	   	        					$('#dataModal').modal('show');
		   	        			}
	   	        				//保存泳道
	   	        				var param1;
                         		var param2;                         		
	   	        				var urlBtn = document.getElementById("urlBtn");
	   	        				var wriBtn = document.getElementById("wriBtn");
	   	        				var dataBtn = document.getElementById("dataBtn");
	   	        				urlBtn.onclick = function(){ 
	   	        					//组合参数
	   	        					param1 = $("#selectUrl").val();
                             		saveLaneLine(data,param1,param2);   //保存泳道图                          		
                             		cleanModel(); //关闭modal        
                             	};
                             	wriBtn.onclick = function(){
                             		var metas = "";
                            		$('input:checkbox[name=wr]:checked').each(function(index,element){
                            			metas += element.value+",";
                            		});
                            		param1 = metas.substring(0,metas.length-1);
                             		saveLaneLine(data,param1,param2);
                             		cleanModel();
                             	};
                             	dataBtn.onclick = function(){
                             		var metas = "";
                            		$('input:checkbox[name=data]:checked').each(function(index,element){
                            			metas += element.value+",";
                            		});
                            		param1 = metas.substring(0,metas.length-1);
                             		saveLaneLine(data,param1,param2);
                             		cleanModel();
                             	};
	   	        			}else{
	   	        				Q.alert("请先选中图元在进行操作");
	   	        			}
	   	        		}
                 	})
                }        		
               return result;
            }
        }
	});
});

// 创建组件
function AutoLayouter(graph) {
    this.graph = graph;
    this._layouters = {};
}
//创建保存按钮
function init(graph, editor) {
    editor.toolbox.hideDefaultGroups();
    editor.toolbox.hideButtonBar();
    var toolbar = editor.toolbar;
    var button = document.createElement('button');
    button.className = "btn btn-default btn-sm";
    button.style="width:38px;padding:5px;";
    button.textContent = '保存';
    var layouter = new AutoLayouter(graph);
    button.onclick = function () {
    	save();
    }
    toolbar.appendChild(button);
    
}
//创建泳道类型按钮
function init2(graph, editor,typeId,typeName,bg) {
    editor.toolbox.hideDefaultGroups();
    editor.toolbox.hideButtonBar();
    var toolbar = editor.toolbar;
    var button = document.createElement('button');
    button.className = "btn btn-default btn-sm";	     
    button.style="background:"+bg+" no-repeat;height:35px;width:35px;border:none;";
    button.title=typeName;
    //button.textContent = typeName;
    var layouter = new AutoLayouter(graph);
    button.onclick = function () {
    	setId(typeId,typeName);
    	graph.interactionMode = 'create.h.line';	    	
    }
    toolbar.appendChild(button);
    
}
var nowType={
		id:0,
		name:""
}
function setId(id,name){
	nowType.id = id;
	nowType.name = name;
}
//连线之后调用此方法设置线的类型
function lineH(edge){
	edge.name = nowType.name;//泳道的名字
	edge.set('dtypeid', nowType.id);//泳道的类型
	edge.set('did', null);//泳道的id
}
//显示流程图 
function showChart(){
	$.ajax({
		type:"POST",
		url:basePath+"/ModelingAndSimulation/operService/getOperServiceTest.do",
		data: {
        	"eventId":selectEvent,  
        	"atomId":$("#atomId").val()
        },
		success:function(data){
			var json = data;
            if(data == "" || data == null ){
                serviceId = null;
                graph.clear();
                //没有绑过服务，只显示泳道线
                Lane();
            }else{
                graph.clear();
                //绑过服务，显示保存的泳道线
                graph.parseJSON(json.serviceText);
                console.log("数据库中的数据为",eval('('+json.serviceText+')'));
                serviceId = json.serviceId;
            }			
	    },
		error:function(){
			//alert("解析错误");
		}
	});
}
//保存服务表到数据库
function save(type){
	if(selectEvent == undefined || selectEvent == ""){
		alert("请选择按钮");
		return false; 
	}
	/*if(checkOperationNames("原子操作","原子判断","人工操作")>0){
		$("#chenkUI").html("<font style='color:red'>有未修改的操作名称,不能保存</font>");
		return false; 
	}
	if(JSON.stringify(JSON.parse(graph.toJSON(true))).indexOf("datas") < 0){
		$("#chenkUI").html("<font style='color:red'>未画图不能保存</font>");
		return;
	}*/
	
	$.ajax({
		type: "POST", 
        url: basePath+"/ModelingAndSimulation/operService/saveOperServiceTest.do?",   
        async: false,
        data: {
        	"eventId":selectEvent, 
        	"atomId":$("#atomId").val(),
        	"serviceId":serviceId,
        	"serviceText":JSON.stringify(JSON.parse(graph.toJSON(true)))
        },
        success: function(data){
        	if(data !== null){
        		if(serviceId == null  ||serviceId ==''){
        			serviceId = data.serviceId;
        		}
        		if(type == 1){	 
        			console.log("更新成功");
        		} else{
        			alert("保存成功");
        		}     		
        		return;
        	}
        }
     }); 
}	
//关闭modal
function cleanModel(){
	$('#urlModal').modal('hide');
	$('#wriModal').modal('hide');
	$('#dataModal').modal('hide');
}
//保存泳道
function saveLaneLine(data,param1,param2){
	//1 保存服务表（判断服务表存不存在）
		if(serviceId == null  ||serviceId ==''){
			save(1);
		}                            		
	//2保存泳道表
	$.ajax({
		type: "POST", 
		async: false,
        url: basePath+"/ModelingAndSimulation/laneLine/savelaneLine.do?",              
        data: {
        	"lineId":data._mof.did, 
        	"serviceId":serviceId, 
        	"lineName" :data.name,
        	"lineType" :data._mof.dtypeid,
        	"param1":param1,
        	"param2":param2,
        	"lineOrder": nowHeight
        },
        success: function(msg){
        	if(msg !== null){
        		data._mof.did = msg.lineId                          	        	
        		//3把泳道表的id存到图元中在保存服务表
        		save(1);
        		return;
        	}
        }
     }); 
		
}
//删除泳道
function delLaneLine(lineId){
	$.ajax({
		type: "POST", 
		async: false,
        url: basePath+"/ModelingAndSimulation/laneLine/delLaneLine.do",              
        data: {
        	"lineId":lineId       	
        },
        success: function(msg){
        	console.log("删除成功");
        }
     }); 
		
}

//获取读取页面需要展示的关联值
function selectOperationObjectName() {
	var data =[];
	$.ajax({
		type:"post",
		data:{"atomId":$("#atomId").val()},
		async:false,
		url:basePath+"/ModelingAndSimulation/laneLine/selectOperationObjectName.do",
		success:function(result) {
			data = result;
		}
		
	});
	return data;
}
//页面赋值
function selectMetaName(nameData) {
	var newRow = "<tr >";
	for (i=0;i<nameData.length;i++) {
		if ((i+1) != nameData.length) {
			//3个数据换行
			if ((i+1)%3 !=0) {
				newRow += "<td><input type='checkbox' value='"+nameData[i].metaName+"' name='wr' >"
				+"<span >"+nameData[i].metaName+"</span></input></td>";
			} else {
				newRow += "<td><input type='checkbox' value='"+nameData[i].metaName+"' name='wr'>"
				+"<span >"+nameData[i].metaName+"</span></input></td></tr><tr>";
			}
		} else {
			newRow += "<td><input type='checkbox' value='"+nameData[i].metaName+"' name='wr'>"
			+"<span >"+nameData[i].metaName+"</span></input></td></tr>";
		}
	}
	$("#operationObjectName").html(newRow);
}
function getAtomPageTabs(){
	var data =[];
	$.ajax({
		type:"post",
		data:{
			"operId":$("#operId").val()
			},
		async:false,
		url:basePath+"/ModelingAndSimulation/laneLine/getAtomPageTabs.do",
		success:function(result) {
			console.log(result);
			data = result;
		}
		
	});
	return data;
}
function putType3Date(data){
	$("#selectUrl").empty();
	var content ="";
	data.forEach(function(item){
		content +=" <option  value='"+item.atomId+"'>" +item.atomName+item.atomType +"</option>";
	});
	$("#selectUrl").append(content);
}
function getFromTabs(){
//选择以生成表的表单	
	var data =[];
	$.ajax({
		type:"post",
		data:{
			"operId":$("#operId").val()
			},
		async:false,
		url:basePath+"/ModelingAndSimulation/laneLine/getFromTabs.do",
		success:function(result) {
			console.log(result);
			data = result;
		}
		
	});
	return data;
}
function putType4Date(nameData){
	var newRow = "<tr >";
	for (var j=0,i=0;i<nameData.length;i++) {				
		if(nameData[i].sign == 1){
			j=j+1;			
			if ((j+1) != nameData.length) {
				//3个数据换行
				if ((j)%3 !=0) {
					newRow += "<td><nobr><input type='checkbox' value='"+nameData[i].tid+"' name='data' >" +
							"<span >"+nameData[i].ename+"</span></input></nobr></td>";
				} else {
					newRow += "<td><nobr><input type='checkbox' value='"+nameData[i].tid+"' name='data'>"
					+"<span >"+nameData[i].ename+"</span></input></nobr></td></tr><tr>";
				}
			} else {
				newRow += "<td><nobr><input type='checkbox' value='"+nameData[i].tid+"' name='data'>"
				+"<span >"+nameData[i].ename+"</span></input></nobr></td></tr>";
			}
			// 每张表的元数据
			getMetaDataIdsByFormTabId(nameData[i].tid);
		}
		
	}
	$("#fromTabNames").html(newRow);
}

//w 每张表的元数据
function getMetaDataIdsByFormTabId(formTabId){
	$.ajax({
		type : "POST",
		url : basePath+"/ModelingAndSimulation/laneLine/getMetaDataIdsByFormTabId.do",
		data : {
			"formTabId" : formTabId
		},
		success : function(jsonData){
			console.log(jsonData);
		}
	});
}

function back(operId){
    window.location.href="<%=basePath%>operation/intoOperation.do?nodeId="+operId;
}
function newType4Date(data){
	$.ajax({
		type:"post",
		data:{
			"atomId":$("#atomId").val()
			},
		async:false,
		url:basePath+"/ModelingAndSimulation/oerationAtom/getAtomById.do",
		success:function(result) {				
			
			//取出当前原子操作关联的信息域组成数组
			 var infoIds =[];
			 var demo = result.inputid.split("/");			
			 demo.forEach(function(item){
				 var demo2 = item.split(".");
				 if(infoIds.indexOf(demo2[demo2.length-1]) < 0){
					 infoIds.push(demo2[demo2.length-1]);
				 }			
			 });
			 //循环每个表，如果表包含的信息域引用，默认打对勾
			 data.forEach(function(item){
				 if(item.sign == 1){
					 var info = item.infofieldids.split("/");
					 info.forEach(function(item2){
						 if(infoIds.indexOf(item2) >= 0){
	        				$("input:checkbox[value="+item.tid+"]").attr("checked",true);
						 }
					 });					
				 }
			 });
		}
		
	});
	
}