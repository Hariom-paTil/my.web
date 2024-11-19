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
                                             
/*
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
    */
   
/*
console.log(" Q string take name from ");
let name =  prompt("enter the user name");
 let newname= name.length;
 let username="@"+ name +newname;
 alert(username); */

/*
console.log('-------------------array-----------------');
let sum=0;
let arry=[10, 23, 78, 97, 45, 28];
for(let i in arry)
{
    sum+=arry[i];
}
let result=0;
result=sum/6;
console.log(result);
                           */



/*
console.log("array push pop splilt")
let arry=[10,20,30,40,50,60];
console.log(arry);
arry.push(99);                               //add element at end
console.log(arry);
arry.pop();
console.log(arry);
arry.unshift(999);                          //add element at start of a arry
console.log(arry);
arry.shift();                              // del ele form a start
console.log(arry);
console.log(arry.slice(1,4));           // slice(start,end)
console.log(arry.splice(3,0,44));       //IMP note:- splice(index,delete,adding);
console.log(arry);                     */


/*
console.log("function an javascript");
function adding(a,b)            //basic rule to write function
{
    console.log(a+b);
}
adding(10,20);

let add=(a,b)=>{          //arrow function mostly used an javasc 
    
    return a+b;
}
add(30,20);  */

/*
console.log('function question');
let check;
check=prompt('enter the value to check');
even(check);
fact(check);
prime(check);
function even(a)
{
    if(a%2==0)
    {
        console.log("even");
    }
    else
    {
        console.log("odd");
    }
}
function fact(b)
{
    let fact=1;
    for(let i=1;i<=b;i++)
    {
        fact=fact*i;
    }
    console.log(fact);
   
}
function prime(c){
let count=0;
        for(let i=1;i<=c;i++){
            if(c%i==0)
            {
                count++;
            }
        }
    if(count==2)
    {
        console.log("the given number is prime:+",c);
    }
    alert("all function found perfectly");
}
            */

/*
console.log("-----------for each loop--------------");
let arry=[1,2,3,4,5,6,7];
arry.forEach(function multi(val,ind,ele){
     let total=val*val;
     console.log(`new arry form ${total} index=${ind} element of arry ${ele}`);
     total=0;
});   */


/*
let arry=["hariom","rahul","vikas","jayesh","tushar"]

arry.forEach(function username(name,ind){
    let creat="@"+name+name.length;
    console.log("new user name of a user:-",creat," user id:- ",ind);
});   */



console.log('largest function calling program');
let arry=[1,2,3,4,5,6,7,8];
let sum=(a)=>{
    if(a%2==0)
    {
        console.log('even',a);
    }
    else
    {
        console.log("odd",a);
    }
    square(a);
}
arry.forEach(function fact(val)
{
    let fact=1;
         for(i=1;i<=val;i++)
         {
            fact=fact*i;
         }
         console.log("factorial:-",fact);
         sum(fact);
         fact=1;
});
function square(sq)
{
    let find=0;
    find=sq*sq;
    let get=find;
    console.log("after the arry-\n",get);
    get=0;
}


