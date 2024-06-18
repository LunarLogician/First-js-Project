const randomDecimal = Math.random();
var r = Math.floor(randomDecimal*6+1);
if (r===1){
    document.querySelector("img.left").setAttribute("src", "dice1.png");

}
else if(r===2){
    document.querySelector("img.left").setAttribute("src", "dice2.png");

}
else if (r===3){
    
    document.querySelector("img.left").setAttribute("src", "dice3.png");
    
}
else if(r===4){
    document.querySelector("img.left").setAttribute("src", "dice4.png");
    
}
else if(r===5){
    document.querySelector("img.left").setAttribute("src", "dice5.png");

}
else{
    document.querySelector("img.left").setAttribute("src", "dice6.png");

}


var ran = Math.random();
var o = Math.floor(ran*6+1);
if (o===1){
    document.querySelector("img.right").setAttribute("src", "dice1.png");

}
else if(o===2){
    document.querySelector("img.right").setAttribute("src", "dice2.png");

}
else if (o===3){
    
    document.querySelector("img.right").setAttribute("src", "dice3.png");
    
}
else if(o===4){
    document.querySelector("img.right").setAttribute("src", "dice4.png");
    
}
else if(o===5){
    document.querySelector("img.right").setAttribute("src", "dice5.png");

}
else{
    document.querySelector("img.right").setAttribute("src", "dice6.png");

}


 if (r > o ){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
 }else if(r<o){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";

 }
 else{
    document.querySelector("h1").innerHTML = " Draw";

 }
