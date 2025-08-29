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

// coppy btn counting
let coppyBtn = document.getElementsByClassName('coppy-btn');
let coppyBtnID = getElement('coppy-btn-main');
for(let i of coppyBtn){
i.addEventListener('click', function(){
   let currentValue = parseInt(coppyBtnID.innerText); // বর্তমান ভ্যালু নিবে
    coppyBtnID.innerText = currentValue + 1;

})}




// call btn



function getTitleAndNumber(id) {
  const card = document.getElementById(id);


  const title = card.querySelector('h5').innerText;
  const price = card.querySelector('h1').innerText; 

  const total = title + " " + price; 
  alert(total);

    let coinEl = document.getElementById('coin'); 
  let currentCoin = parseInt(coinEl.innerText); 
//    if(currentCoin < 20){
//     console.log('❌আপনার যথেষ্ট কয়েন নেই! কল করতে অন্তত ২০টি কয়েন লাগবে।')
//     return;
//   }
  currentCoin = currentCoin - 20;
 

            coinEl.innerText = currentCoin;
        


    const newCart = document.createElement("div");
    const now = new Date();
  const currentTime = now.toLocaleTimeString(); // ex: 10:25:30 AM

  // inner HTML বসাও
  newCart.innerHTML = `
    <div class="cart-items flex flex-row justify-between items-center bg-amber-50 p-3">
    <div class="flex flex-col gap-0.5">
    
      <h2 class="font-bold">${title}</h2>
      <h2 class="font-bold">${price}</h2>
      </div>
        <h1 class="font-bold text-lg">${currentTime}</h1>
    </div>
  
  `

const cartContainer = document.getElementById('newcarSection');
  cartContainer.appendChild(newCart);
  return;
}
document.getElementById('card1').addEventListener('click', function(){
    getTitleAndNumber('card1')
})
document.getElementById('card2').addEventListener('click', function(){
    getTitleAndNumber('card2')
})
document.getElementById('card3').addEventListener('click', function(){
getTitleAndNumber('card3');
})
document.getElementById('card4').addEventListener('click', function(){
getTitleAndNumber('card4');
})
document.getElementById('card5').addEventListener('click', function(){
getTitleAndNumber('card5');
})
document.getElementById('card6').addEventListener('click', function(){
getTitleAndNumber('card6');
})
document.getElementById('card7').addEventListener('click', function(){
getTitleAndNumber('card7');
})
document.getElementById('card8').addEventListener('click', function(){
getTitleAndNumber('card8');
})
document.getElementById('card9').addEventListener('click', function(){
getTitleAndNumber('card9');
})



document.getElementById('btn-clear').addEventListener('click', function(){
    const cartContainer = document.querySelectorAll('.cart-items');

   cartContainer.forEach(item => {
        item.remove();
    });
    document.getElementById('total').innerText = 0;
    document.getElementById('number').innerText = 0;
})