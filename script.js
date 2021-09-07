const image_dict = {1:"images/dice1.png",2:"images/dice2.png",3:"images/dice3.png",4:"images/dice4.png",5:"images/dice5.png",6:"images/dice6.png"};
var dice1 = Math.random();
dice1 = Math.floor(dice1*6)+1;
var dice2 = Math.random();
dice2 = Math.floor(dice2*6)+1; 
document.getElementsByTagName("img")[0].setAttribute("src",image_dict[dice1]);
document.getElementsByTagName("img")[1].setAttribute("src",image_dict[dice2]);

if (dice1 > dice2)
{
    document.querySelector(".container h1").innerHTML = "🚩 Player1 wins";
}
else if (dice1 < dice2)
{
    document.querySelector(".container h1").innerHTML = "Player2 wins! 🚩";
}
else
{
    document.querySelector(".container h1").innerHTML = "Both Tied";
}