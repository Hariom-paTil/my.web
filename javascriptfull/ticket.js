let gander=prompt("enter the gander");
let age=prompt("enter the age");
let price=100;
let femaleticket;
if(gander==="male")
    {
           
    }
    else if(gander==="female")
    {
          femaleticket=(50/price)*100;
        }
        else if(age<=5)
        {
             femaleticket="free";
        
        }
        else if(age<=8)
        {
           femaleticket=femaleticket/2;
        }
        else if(age<=65)
        {
            femaleticket=(30/femaleticket)*100;
        }
        else{
            
    
        }
        
            console.log(`your ticket price is:-${femaleticket}`);
        
    