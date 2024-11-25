let computer_choice;
let user_choice;
let random;
document.querySelector('.stone').onclick =function(){
    user_choice= "stone";
    random = Math.random() * 3;
    if(random>0 && random<=1){

        computer_choice ="paper";
    }
    else if (random>1 && random<=2)
    {
        computer_choice ="stone";
    }
    else
    {
        computer_choice ="scissor";
    }

    if(computer_choice==="paper")
    {
        document.querySelector('.info').innerText = `COMPUTER WIN`;
    }
    else if(computer_choice==="stone")
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
    random = Math.random() * 3;
    if(random>0 && random<=1){

        computer_choice ="paper";
    }
    else if (random>1 && random<=2)
    {
        computer_choice ="stone";
    }
    else
    {
        computer_choice ="scissor";
    }

    if(computer_choice==="paper")
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
document.querySelector('.scissor').onclick =function(){
    user_choice= "scissor";
    random = Math.random() * 3;
    if(random>0 && random<=1){

        computer_choice ="scissor";
    }
    else if (random>1 && random<=2)
    {
        computer_choice ="stone";
    }
    else
    {
        computer_choice ="paper";
    }

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


