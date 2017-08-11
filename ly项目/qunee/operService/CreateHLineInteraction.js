
function CreateHLineInteraction() {
    Q.doSuperConstructor(this, CreateHLineInteraction, arguments);
}
CreateHLineInteraction.prototype = {
    destroy: function (graph) {
        Q.doSuper(this, CreateHLineInteraction, "destroy", arguments);
        graph.cursor = "";
        this.start = null;
    },
    doDraw: function (g, scale) {    //鼠标点位置的坐标
        if (this.start && this.currentPoint) {
            g.moveTo(this.start.x, this.start.y);
            g.lineTo(this.currentPoint.x, this.start.y);
            this.styleDraw(g);
        }
    },
    createLine: function (from, to,evt) {
        var edge = this.graph.createShapeNode();         
        edge.moveTo(from.x, from.y);
        edge.lineTo(to.x, from.y);
        edge.setStyle(Q.Styles.ARROW_TO, true);
        edge.setStyle(Q.Styles.SHAPE_STROKE_STYLE, this.getDefaultDrawStyles().strokeStyle);
        edge.setStyle(Q.Styles.SHAPE_FILL_COLOR, null);
        edge.setStyle(Q.Styles.SHAPE_FILL_GRADIENT, null);
        edge.setStyle(Q.Styles.LAYOUT_BY_PATH, true);
        edge.set('type', 'h.line');
        //edge.name = ''; 
        var graph = this.graph;      
        graph.onElementCreated(edge, evt);
        var event = new Q.InteractionEvent(graph, Q.InteractionEvent.ELEMENT_CREATED, evt, edge);
        graph.onInteractionEvent(event);  
    },
    canLink: function (node) {
        return node && node.get('type') == 'main.line';
    },
    startdrag: function (evt, graph) {    //连线开始的方法
        if (evt.responded) {
            return;
        }
        var start = evt.getData();       //是当前鼠标点位置的图元对象
        if (!this.canLink(start)) {
            return;
        }
        evt.responded = true;
        var xy = graph.toLogical(evt);    //可以获取鼠标点的逻辑坐标，根据这个坐标找到匹配的主线
        this.start = {x: start.path.bounds.cx + start.x, y: xy.y};
        graph.cursor = "crosshair";
        this.addDrawable();
    },
    ondrag: function (evt, graph) {    //获取鼠标点位置的坐标
        if (!this.start) {
            return;
        }
        Q.stopEvent(evt);
        this.currentPoint = graph.toLogical(evt);
        this.invalidate();
    },
    enddrag: function (evt, graph) {   //吸附功能的方法
    	if (!this.start) {
            return;
        }
        this.invalidate();
	        var ste=30,//节点间隔  变量与operService.js保持一致
			ln=630,//l长度 
			max=90,//节点初始
	        lnode=180,//线初始
			yste=250;//线间隔
	        for(var i=max;i<ln;i+=ste){//循环每个节点
           		xy = graph.toLogical(evt);
           		
           		end = evt.getData();
           		if(this.start.y>=i-5 && this.start.y<=i+5 && this.start.x>=150 && xy.x>=150){//判断线的开始是否在节点上
           			for(var j=0;j<=2;j++){//j=泳道的数量
           				if (xy.x - this.start.x > 120 && xy.x>lnode+yste*j-120 && xy.x <lnode+yste*j+120){
               	        	end = {x: lnode+yste*j, y: i};//向右画线
               	        	
               	        	this.start.y=i;
               	        	this.createLine(this.start, end);//根据坐标创建线
               	        }
           				else if (this.start.x < xy.x && xy.x - this.start.x < 120 && this.start.x>lnode*j-120 && this.start.x <lnode*j+120){
               	        	end = {x: lnode+yste*j, y: i};//向右画
               	        	
               	        	this.start.y=i;
               	        	this.createLine(this.start, end);
               	        }
           				else if (this.start.x - xy.x > 120 && xy.x>lnode+yste*j-120 && xy.x <lnode+yste*j+120){
           					
                   	        end = {x: lnode+yste*j, y: i};//向左画
                   	       	this.start.y=i;
                   	       	this.createLine(this.start, end);
           				}
           				else if (this.start.x > xy.x && this.start.x - xy.x < 120 && xy.x>lnode+yste*j-120 && xy.x <lnode+yste*j+120){
               	        	end = {x: lnode+yste*j-yste, y: i};//向左画
               	        	
               	        	this.start.y=i;
               	        	this.createLine(this.start, end);
               	        }
           				
           			}           			
       				nowHeight=end.y;       						
           		}          		
           	}
        this.destroy(graph);
    },
    getDefaultDrawStyles: function () {
        return {
            lineWidth: 1,
            strokeStyle: '#888',
        }
    }
}
Q.extend(CreateHLineInteraction, Q.DrawPathInteraction);
Q.Defaults.registerInteractions('create.h.line', [CreateHLineInteraction, Q.PointsInteraction, Q.MoveInteraction, Q.SelectionInteraction, Q.PanInteraction, Q.WheelZoomInteraction, Q.TooltipInteraction, Q.RectangleSelectionInteractionByRightButton])