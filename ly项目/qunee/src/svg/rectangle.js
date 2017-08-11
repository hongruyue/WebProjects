var SVGrectangle = {
"rectangle.svg": {
 draw: function(ctx){
ctx.save();
ctx.strokeStyle="rgba(0,0,0,0)";
ctx.miterLimit=4;
ctx.font="";
ctx.font="   10px sans-serif";
ctx.scale(0.6666666666666666,0.6666666666666666);
ctx.save();
ctx.fillStyle="#FFFFFF";
ctx.strokeStyle="#030000";
ctx.lineWidth=1.5;
ctx.miterLimit="10";
ctx.font="   10px sans-serif";
ctx.beginPath();
ctx.moveTo(1.5,1.5);
ctx.lineTo(118.5,1.5);
ctx.quadraticCurveTo(118.5,1.5,118.5,1.5);
ctx.lineTo(118.5,58.5);
ctx.quadraticCurveTo(118.5,58.5,118.5,58.5);
ctx.lineTo(1.5,58.5);
ctx.quadraticCurveTo(1.5,58.5,1.5,58.5);
ctx.lineTo(1.5,1.5);
ctx.quadraticCurveTo(1.5,1.5,1.5,1.5);
ctx.closePath();
ctx.fill();
ctx.stroke();
ctx.restore();
ctx.restore();
}

}}
