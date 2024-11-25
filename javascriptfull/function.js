let computer_choice;
let user_choice;
let random;
let choice;
document.querySelector('.stone').onclick =function(){
    user_choice= "stone";
    choice=randomnumber();
    if(choice==="paper")
    {
        document.querySelector('.info').innerText = `COMPUTER WIN`;
    }
    else if(choice==="stone")
    {
        document.querySelector('.info').innerText = `SAME-CHOICE`;
    }
    else
    {
        document.querySelector('.info').innerText = `USER WIN THE GAME`;
    }
}
document.querySelector('.paper').onclick =function(){
    user_choice= "paper";
    choice= randomnumber();
    if(choice==="paper")
    {
        document.querySelector('.info').innerText = `SAME-CHOICE`;
    }
    else if(choice==="stone")
    {
        document.querySelector('.info').innerText = `COMPUTER WIN`;
    }
    else
    {
        document.querySelector('.info').innerText = `USER WIN`;
    }
}
document.querySelector('.scissor').onclick =function(){
    user_choice= "scissor";
    choice= randomnumber();
    if(computer_choice==="scissor")
    {
        document.querySelector('.info').innerText = `SAME-CHOICE`;
    }
    else if(computer_choice==="stone")
    {
        document.querySelector('.info').innerText = `COMPUTER WIN`;
    }
    else
    {
        document.querySelector('.info').innerText = `USER WIN`;
    }
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


