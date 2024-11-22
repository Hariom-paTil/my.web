class studentinfo{
      
    getdata(name,email)
    {
        this.student=name;
        this.email=email;
    }
    viewdata()
    {
        console.log(`WElcome ${this.student} to over college`);
        console.log(`your email is ${this.email} plz check`)
    }

}

let obj=new studentinfo();
obj.getdata("hariom","hariom1@gmail.com");
obj.viewdata();



console.log("--------inheritance--------");
class demo{
    get(){
        this.name1=prompt("entre the user name");
        this.id=prompt("enter the id");
        this.roll_no=prompt("write roll no");
    }
    
}
class child extends demo{
    show(){
        console.table(this.name1,this.id,this.roll_no);
    }
}

let call=new child();
let count;
    call.get();
    call.show();



console.log("----------------constructor-----------");
class calling{
    constructor(){
        console.log("constructor of parent class");
    }
    number1(){
        let no=prompt("ENTER ANY NUMBER");
    }
    number2(){
        
            console.log('number send form number1 function to another funtion number2');
        
    }
}
class calling2 extends calling{
    number(){
        console.log("main function to calling code to find how function flow");
        this.number1();
        this.number2();
    }

}
let my=new calling2()
my.number();