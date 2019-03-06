
var x=600
var y=75
var y1=y
var x1=x
var w=300
var d=600
var h=Math.sqrt((d*d)-(w*w))
var canvas;
var k=3


function draw() {
var ctx; 		
canvas = document.getElementById('canvas');

if(canvas.getContext)	        
{	        ctx=canvas.getContext('2d');
		ctx.strokeRect(x,y,w,h);
		// draw 1st diagonal			
		ctx.beginPath(); 
  		// Staring point (500,150)
	        ctx.moveTo(x,y);
  		// End point (180,47)
  		ctx.lineTo(x+w,y+h);
  		// Make the line visible
  		ctx.stroke();
		//draw 2nd diagonal
		ctx.beginPath(); 
  		// Staring point (500,150)
	        ctx.moveTo(x+w,y);
  		// End point (180,47)
  		ctx.lineTo(x,y+h);
  		// Make the line visible
  		ctx.stroke();
}
}

function up() {

if(canvas.getContext)	        
{	
	
		var ctx=canvas.getContext('2d');
		ctx.clearRect(0,0,canvas.width, canvas.height);
		y=y-k;
		
		ctx.moveTo(x+w,y+h);
		ctx.lineTo(x1+w,y1);
		ctx.moveTo(x,y);
  		ctx.lineTo(x+w,y+h);
		ctx.moveTo(x,y);	
		ctx.lineTo(x1,y1+h);		
		ctx.lineTo(x1+w,y1)
		ctx.moveTo(x1,y1+h);
		ctx.lineTo(x+w,y+h);
		ctx.moveTo(x1+w,y1);
		ctx.lineTo(x,y);
		ctx.stroke();
}
}

function down() {

if(canvas.getContext)	        
{	
	
		var ctx=canvas.getContext('2d');
		ctx.clearRect(0,0,1805,755);
		y=y+k;
		ctx.moveTo(x+w,y+h);
		ctx.lineTo(x1+w,y1);
		ctx.moveTo(x,y);
  		ctx.lineTo(x+w,y+h);
		ctx.moveTo(x,y);	
		ctx.lineTo(x1,y1+h);		
		ctx.lineTo(x1+w,y1)
		ctx.moveTo(x1,y1+h);
		ctx.lineTo(x+w,y+h);
		ctx.moveTo(x1+w,y1);
		ctx.lineTo(x,y);
		ctx.stroke();
}
}

function right() {
if(canvas.getContext)	        
{	
		var ctx=canvas.getContext('2d');
		ctx.clearRect(0,0,1805,755);
		
		x=x+k;
		ctx.moveTo(x,y);
  		ctx.lineTo(x+w,y+h);
		ctx.moveTo(x+w,y+h);
		ctx.lineTo(x1+w,y1);
		ctx.moveTo(x,y);	
		ctx.lineTo(x1,y1+h);		
		ctx.lineTo(x1+w,y1)
		ctx.moveTo(x1,y1+h);
		ctx.lineTo(x+w,y+h);
		ctx.moveTo(x1+w,y1);
		ctx.lineTo(x,y);
		ctx.stroke();
}
}

function left() {

if(canvas.getContext)	        
{	
		var ctx=canvas.getContext('2d');
		ctx.clearCanvas(0,0,canvas.width, canvas.height);
		x=x-k;
		ctx.moveTo(x,y);
  		ctx.lineTo(x+w,y+h);
		ctx.moveTo(x+w,y+h);
		ctx.lineTo(x1+w,y1);
		ctx.moveTo(x,y);	
		ctx.lineTo(x1,y1+h);		
		ctx.lineTo(x1+w,y1)
		ctx.moveTo(x1,y1+h);
		ctx.lineTo(x+w,y+h);
		ctx.moveTo(x1+w,y1);
		ctx.lineTo(x,y);
		ctx.stroke();
}
}
