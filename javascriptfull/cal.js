let lastout=0;

let change="black";
document.querySelector('.switch').onclick = function(){
if(change=="white"){
    document.querySelector('body').style.backgroundColor = "black";
    change ="black";
}
else
{
    document.querySelector('body').style.backgroundColor= "white";
    change ="white";
}
}

displaynumber ="";
document.querySelector('.display').value = displaynumber;

document.querySelector('.buttonc').onclick =function(){
    displaynumber = displaynumber="";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.button1').onclick = function(){
    displaynumber = displaynumber + "1";
    document.querySelector('.display').value = displaynumber;
}
document.querySelector('.button2').onclick =function(){
    displaynumber = displaynumber + "2";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.buttonp').onclick =function(){
    displaynumber = displaynumber + "+";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.button3').onclick =function(){
    displaynumber = displaynumber + "3";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.button4').onclick =function(){
    displaynumber = displaynumber + "4";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.button-').onclick =function(){
    displaynumber = displaynumber + "-";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.button5').onclick =function(){
    displaynumber = displaynumber + "5";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.button6').onclick =function(){
    displaynumber = displaynumber + "6";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.buttonM').onclick =function(){
    displaynumber = displaynumber + "*";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.button7').onclick =function(){
    displaynumber = displaynumber + "2";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.button8').onclick =function(){
    displaynumber = displaynumber + "2";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.buttond').onclick =function(){
    displaynumber = displaynumber + "/";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.buttone').onclick =function(){
    displaynumber =eval(displaynumber);
    last=displaynumber;
    document.querySelector('.display').value = displaynumber;
    document.querySelector('.lastout').innerText =`YOUR LAST CALCULATION IS ${last} `;
}
document.querySelector('.button9').onclick =function(){
    displaynumber = displaynumber + "9";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.button0').onclick =function(){
    displaynumber = displaynumber + "0";
    document.querySelector('.display').value= displaynumber;
}
document.querySelector('.buttondot').onclick =function(){
    displaynumber = displaynumber + ".";
    document.querySelector('.display').value= displaynumber;
}










