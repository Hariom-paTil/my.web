let bag=0;
document.querySelector('.addtoback').onclick = function(){
bag++;
document.querySelector('#summer').innerText =`your bags has ${bag} item`;
}
document.querySelector('.wish').onclick = function(){
    bag--;
    document.querySelector('#summer').innerText =`your bags has ${bag} item`;
    }
    document.querySelector('.sale').onclick = function(){
        bag+=2;
        document.querySelector('#summer').innerText =`your bags has ${bag} item`;
        }
    
    document.querySelector('#name').innerText = "hariom";
        