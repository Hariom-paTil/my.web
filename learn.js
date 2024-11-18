/* let firtname = "hariom";
let lastname ="patil";
console.log("using let:-",firtname);
console.log("-------------------------");
const student ={                           // the object that a store the multply varaible or key 

    name:"rahul",    //rule to declare a value we used ":" & after the declaration we end the line with ","
    last:"patil",
    age:12,
    male:true,
}
console.log(student);
student["name"] = "hariom";               //to chanage the updating new value;
student["age"] = student["age"]+1; 
console.log(student["age"]);              //to finde a specific variable or value to find
console.log(student); 
console.log("boolean--------------------");
let person = true;   //boolean is check to true or false
console.log(person);
console.log("------------------------------------");

console.log("Q1. creat a chart that store name,age,follo or not, reting and store the info and print");
console.log("answer----");
let user = "abc";
let ages = 17;
let follow =true;
let reting  = 4.5
console.log("name of person",user);
console.log("age",ages)
console.log("follow our not",follow);
console.log("reting",reting);  */


/*  console.log("----condition and operators------");
console.log("arithmatic op");                 //   +.-.*,/,%
console.log("asignment op")                // = transfer value , a+=1 [a+1], same as all
console.log("comparsion op");             // == , !=" not equal to", ==="check value more strickle mostly used"
console.log("logical op");              //&&  || !


console.log("-------conditon statement------");
let a=10;
if(a==10)
{
    console.log("true");
}

console.log("-----else if.....");
if(a==5)
{
    console.log('true');

}
else if(a==6)
{
    console.log('else if condtion is true 1');
}
else if(a==10)
{
    console.log('else if condtion second true 2');
}


console.log('----------promt---------------');
let numbere = prompt("plz enter the value to check number is even our odd"); //promt pop a message on screen
if(numbere%=0)
{
     console.log('the numberc is even');

}
else
{
    console.log('the odd');
}                                                    */


/*  console.log('----------loop for while and do---------------')

for (let i=1; i<=5; i++)
{
    console.log("hariom");
}
let count;
count=0;
for(let i=1;i<10;i++)
{
    count++;
}
console.log("how much time loop will be run",count);


console.log('------------while loop-----------');
let check=5;
count=0;
let time;
time=0;
while(check>count)
{
    check--;
    time++;
}
console.log("how much time loop run",time);


console.log("------ do while----------skip-----");

console.log('----------for of loop--------');
let str="hariom patil";
for(let i of str)                                                  // important note: forofloop used to calculet string 
{
    console.log("i=",i);
}


console.log('----------forinloop----------')                 // important note:- used to print object data our key
{
     const used={
        name:"om",
        age:32,
        male:true

     }


     for(let i in used)
     {
        console.log(i);
     }

}                             *///
                                             

console.log('-----GAME TO PLAY ----')
alert("5 LUCKY GUESS TO WIN GAME")
for(let i=1;i<=5;i++) {
let result=prompt("enter the value");
if(result==7)
{
    alert("you win the game");
    count++;
    break;
}  
else
{
    alert('wrong')
}
result=0;
}
if(count==0)
{
    alert("you loose the game");     
}
 

