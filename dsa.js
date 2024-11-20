console.log("-------------stack------------------");
let stack=[];
let n=5
top=0;
let get =()=>{

        if(top==5)
        {
            alert("your stack is full");
        }
        else
        {
            let item=prompt("push the value an the stack");
            stack.push(item);
            top++;
        }
}
let remove=()=>{
    
    if(top==0)
    {
        alert("stack is  already empty");
    }
    else
    {
        stack.pop();
        alert("element is deleted form stack");
        top--;
    }

}
let position=()=>{

    if(top==0)
    {
        alert("your stack already empty");
    }
    else
    {
        alert("your stack position is:-",stack[top]);
    }

}
let change=()=>{
        let ele=prompt("enter the itam");
        let pos=prompt('enter the position');
        if(top<pos)
        {
               alert("no element present there");
        }
        else
        {
            alert('element is replace')
            stack[pos]=ele;
        }

}
let display=()=>{
    for(let i=1;i<=n;i++)
    {
        console.log("stack element:-", stack[i]);
    }
}
let ch=0;
while(ch!=6)
{
    let ch=prompt("1push,2remove,3top,4change,5display")
switch (ch) 
{
    case 1: get();
        break;
    case 2: remove();
        break;  
    case 3: position();
        break;
    case 4: change();
        break;
    case 5: display();
        break;
    default:
        break;
}
}

