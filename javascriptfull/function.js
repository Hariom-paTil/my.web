let computer_choice;
let user_choice;
let random;
let choice;
let wintable;

document.querySelector('.reset').onclick=function(){
    localStorage.clear();
    wintable={
        userwin:0,
        computer: 0,
        same: 0
    };
    winrate();
}
let stringwintable = localStorage.getItem('wintable');
if (stringwintable) {
    wintable = JSON.parse(stringwintable);  
} else {
    wintable = {  
        userwin: 0,
        computer: 0,
        same: 0
    };
}
document.querySelector('.stone').onclick =function(){
    user_choice= "stone";
    choice=randomnumber();
    if(choice==="paper")
    {
        document.querySelector('.info').innerText = `COMPUTER WIN`;
        wintable.computer++;
    }
    else if(choice==="stone")
    {
        document.querySelector('.info').innerText = `SAME-CHOICE`;
        wintable.same++;
    }
    else
    {
        document.querySelector('.info').innerText = `USER WIN THE GAME`;
        wintable.userwin++;
    }
    winrate();
    
}
document.querySelector('.paper').onclick =function(){
    user_choice= "paper";
    choice= randomnumber();
    if(choice==="paper")
    {
        document.querySelector('.info').innerText = `SAME-CHOICE`;
        wintable.same++;
    }
    else if(choice==="stone")
    {
        document.querySelector('.info').innerText = `COMPUTER WIN`;
        wintable.computer++;
    }
    else
    {
        document.querySelector('.info').innerText = `USER WIN`;
        wintable.userwin++;
    }
    winrate()
   
}
document.querySelector('.scissor').onclick =function(){
    user_choice= "scissor";
    choice= randomnumber();
    if(computer_choice==="scissor")
    {
        document.querySelector('.info').innerText = `SAME-CHOICE`;
        wintable.same++;
    }
    else if(computer_choice==="stone")
    {
        document.querySelector('.info').innerText = `COMPUTER WIN`;
        wintable.computer++;
    }
    else
    {
        document.querySelector('.info').innerText = `USER WIN`;
        wintable.userwin++;
    }
    winrate();
    
}

function randomnumber(){
     random = Math.random() * 3;
    if(random>0 && random<=1){

       return computer_choice ="paper";
    }
    else if (random>1 && random<=2)
    {
        return computer_choice ="stone";
    }
    else
    {
       return computer_choice ="scissor";
    }
}
function winrate(){
    document.querySelector('.printresult').innerText=` user:-${wintable.userwin} computer:-${wintable.computer} same:-${wintable.same}`;
    localStorage.setItem('wintable',JSON.stringify(wintable));
}

