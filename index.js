function getElement(id){
    const element =  document.getElementById(id);
    return element;
}


// heart btn counting
let heartBtn = document.getElementsByClassName('heart-icon');
let heartBtnID = getElement('heart-icon-main');
for(let y of heartBtn){
y.addEventListener('click', function(){
   let currentValueHeart = parseInt(heartBtnID.innerText); // বর্তমান ভ্যালু নিবে
    heartBtnID.innerText = currentValueHeart + 1;

})}









