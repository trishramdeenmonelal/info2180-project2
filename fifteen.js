//Trishawna Ramdeen
//620107141
//Extra Feature- Transition of tiles



window.onload=function(){
    var puzzlearea = $("#puzzlearea");
    var c = puzzlearea.children();
    var x = 0;
    var y = 0;
    //var count = 0;
    var b_Top= "100px";
    var b_Left= "100px";
    var b_Top, b_Left;
    var count = 0;

    //var shuffle= document.getElementById("shufflebutton");
    //shuffle.onclick= 

    //var

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

let shuf_button= document.getElementById('shufflebutton');
    shuf_button.addEventListener("click", shuffle);
     for(var i=0; i < c.length; i++){
          (function(index) {
            c[index].addEventListener("mouseover", function(){
            validMove(this);
            });
            c[index].addEventListener("click", function(){
            if (validMove(this)){
                     move(c[index]);
            }
            });
            c[index].addEventListener("mouseout", function(){
                       this.setAttribute("class", "puzzlepiece");
            });
          })(i);

     }

function shuffle(){
         var tile;
         for (var i=0; i<100; i++){
                 tile=  Math.floor(Math.random() * 15);
                 move(c[tile]);
         }
     }

function move(puzzlepiece){
            blockTop=puzzlepiece.offsetTop;
            blockLeft=puzzlepiece.offsetLeft;
            puzzlepiece.setAttribute("id", "selected");
            $('#selected').animate({
                backgroundImage: "url(background.jpg)",
                border: "2px solid black",
                height: "96px",
                lineHeight: "96px",
                position: "absolute",
                textAlign: "center",
                verticalAlign: "middle",
                width: "96px",
                left: b_Left,
                top: b_Top
             });
              puzzlepiece.style.top = b_Top;
              puzzlepiece.style.left = b_Left;
              b_Top= blockTop + "px";
              b_Left=blockLeft + "px";
              puzzlepiece.removeAttribute("id");
    }




    function validMove(puzzlepiece){
                blockTop=puzzlepiece.offsetTop;
                blockLeft= puzzlepiece.offsetLeft;
                var top= blockTop + "px";
                var left= blockLeft + "px";

                var testleft= Math.abs(parseInt(left) - parseInt(b_Left));
                if (top == b_Top && testleft==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;

                       }

                var testright= Math.abs(parseInt(top) - parseInt(b_Top));
                if (left == b_Left && testright==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;

                       }

    }
}