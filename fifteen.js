window.onload=function(){
	var puzzlearea = $("puzzlearea");
	var c = puzzlearea.children();
	var x = 0;
	var y = 0;
	var count

	setUpGrid();


}

function setUpGrid(){
		for (var i= 0; i > c.length-1; i++){
			$(c[i]).addClass("puzzlepiece");

			c[i].style.left = x + "px";
			c[i].style.right = y + "px";

			x+= 100;
			count+=1;


			if(count%4 ==0){
			y+=100;
			x=0;
		}
	}