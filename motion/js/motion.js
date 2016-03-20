

var cogwheel = new Raster('pics/zahnrad.svg');
	cogwheel.onLoad = function() {
	console.log('Successfully loaded image!');
	};
	
	var w = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	var h = window.innerHeight
	|| document.documentElement.clientHeight
	|| document.body.clientHeight;
	
	var center = view.center;
	
	cogwheel.scale(2);
	cogwheel.position = center;
	
/*
	window.onload =onClick();*/

function onFrame(event){
	
	/*var x,y;
	x =  (-1+Math.sqrt(5)/2);
	y =  (3-Math.sqrt(5)/2);
	cogwheel.position = center + [event.time * x * 10, event.time * y * 10];
*/
	cogwheel.rotate(3);

	return;	
}


function onMouseDown(event) {
	console.log('You pressed the mouse!');
	cogwheel.position = new Point(w,0 );
	console.log(cogwheel.position.innerHeight)

	cogwheel.position


}

/*function onMouseMove(event) {
	cogwheel.position = event.point;

}*/

