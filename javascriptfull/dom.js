let time;
time = new Date();
let count=0;

if(1<=time.getHours() && 12>time.getHours())
{
     document.querySelector('.time').innerText="good morning hariom";
}
else if(12<time.getHours() && 24>time.getHours())
{
    document.querySelector('.time').innerText="good afternon hariom";
}
else
{

}

document.querySelector('.count').onclick=function(){
    count=JSON.parse(localStorage.getItem('count'));  // syntax 
    count++;
    if(count%2===0)
    {
        document.querySelector('.count').style.color = "red";    }
    else{
        document.querySelector('.count').style.color = "green";
    }
    document.querySelector('.count').innerText=count;
    localStorage.setItem("count",JSON.stringify(count));
}