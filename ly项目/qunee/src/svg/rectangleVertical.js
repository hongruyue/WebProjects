var SVGrectangleVertical = {
"rectangleVertical.svg": {
 draw: function(ctx){
ctx.save();
ctx.strokeStyle="rgba(0,0,0,0)";
ctx.miterLimit=4;
ctx.font="";
ctx.font="   10px sans-serif";
ctx.translate(-30,30);
ctx.save();
ctx.fillStyle="#FFFFFF";
ctx.strokeStyle="#030000";
ctx.lineWidth=1.5;
ctx.miterLimit="10";
ctx.font="   10px sans-serif";
ctx.beginPath();
ctx.moveTo(31.5,-28.5);
ctx.lineTo(88.5,-28.5);
ctx.quadraticCurveTo(88.5,-28.5,88.5,-28.5);
ctx.lineTo(88.5,88.5);
ctx.quadraticCurveTo(88.5,88.5,88.5,88.5);
ctx.lineTo(31.5,88.5);
ctx.quadraticCurveTo(31.5,88.5,31.5,88.5);
ctx.lineTo(31.5,-28.5);
ctx.quadraticCurveTo(31.5,-28.5,31.5,-28.5);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
}

}}
