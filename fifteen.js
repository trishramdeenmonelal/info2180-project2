window.onload=function(){
	var puzzlearea = $("#puzzlearea");
	var c = puzzlearea.children();
	var x = 0;
	var y = 0;
	var count = 0;

	function setUpGrid(){
		for (var i= 0; i < c.length; i++){
			$(c[i]).addClass("puzzlepiece");
			c[i].style.backgroundSize='400px 400px';
			//c[i].style.backgroundPosition=`-${i}px 400px`;

			c[i].style.top = y + "px";
			c[i].style.left = x + "px";

			x+= 100;
			count+=1;


			if(count%4 ==0){
			y+=100;
			x=0;

		}
		//c[i].style.backgroundPosition=`-${x}px -${y}px`; 
	}
}
c[0].style.backgroundPosition = "0px 0px";
c[1].style.backgroundPosition = "-100px 0px";
c[2].style.backgroundPosition = "-200px 0px";
c[3].style.backgroundPosition = "-300px 0px";

c[4].style.backgroundPosition = "0px -100px";
c[5].style.backgroundPosition = "-100px -100px";
c[6].style.backgroundPosition = "-200px -100px";
c[7].style.backgroundPosition = "-300px -100px";

c[8].style.backgroundPosition = "0px -200px";
c[9].style.backgroundPosition = "-100px -200px";
c[10].style.backgroundPosition = "-200px -200px";
c[11].style.backgroundPosition = "-300px -200px";

c[12].style.backgroundPosition = "0px -300px";
c[13].style.backgroundPosition = "-100px -300px";
c[14].style.backgroundPosition = "-200px -300px";
//c[15].style.backgroundPosition = "0px 0px";
	setUpGrid();


}

