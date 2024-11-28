let inputvalue;
let inputtime;
let time;
let list;
let arry=[];
let arrytime=[];
document.querySelector('.add').onclick =function(){
    inputtime=document.querySelector('.input_time');
    time=inputtime.value;
    arrytime.push(time);
    inputtime.value=0;
    inputvalue=document.querySelector('.input_value');
    list=inputvalue.value
    arry.push(list);
    listfunction();
    inputvalue.value="";
    
}
function listfunction(){
    let listprint=document.querySelector('.listvalue');
    let creat="";
    for(let i=0;i < arry.length; i++)
    {
        creat+=`<div><span> TASK:-${arry[i]} <span>TIME:- ${arrytime[i]} </span> </span><button onclick=delelet();>delete</button></div>`;
    }
    listprint.innerHTML=creat;
}
function delelet(){
    arry.pop();
    listfunction();
}


