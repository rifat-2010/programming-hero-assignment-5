function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// heart btn counting
let heartBtn = document.getElementsByClassName("heart-icon");
let heartBtnID = getElement("heart-icon-main");
for (let y of heartBtn) {
  y.addEventListener("click", function () {
    let currentValueHeart = parseInt(heartBtnID.innerText);
    heartBtnID.innerText = currentValueHeart + 1;
  });
}




// coppy btn counting

let coppyBtn = document.getElementsByClassName("coppy-btn");
let coppyBtnID = getElement("coppy-btn-main");
let number = document.getElementsByClassName("number");
for (let i of coppyBtn) {
  i.addEventListener("click", function () {
    let currentValue = parseInt(coppyBtnID.innerText);
    coppyBtnID.innerText = currentValue + 1;
  });
}


function handleCopy(event) {

console.log(event)

} 

function getCoppyBtn(id) {

  const card = document.getElementById(id);
   
  const title = "নম্বর কপি হয়েছে :";
  console.log(id)
  const price = card.querySelector("h1").innerText;
console.log(price);
  const total = title + " " + price;

  // coppy btn real coppy js code
  navigator.clipboard
    .writeText(price)
    .then(() => {
      alert(total); // কপি হওয়ার পর আলার্ট
    })
    .catch((err) => {
      alert("কপি করতে সমস্যা হয়েছে: " + err);
    });
    return;
}



// call btn



function getTitleAndNumber(id) {
  const card = document.getElementById(id);

  const title = card.querySelector("h5").innerText;
  const price = card.querySelector("h1").innerText;

  

  let coinEl = document.getElementById("coin");
  let currentCoin = parseInt(coinEl.innerText);
  console.log(currentCoin)
     if(currentCoin <= 0){
      alert('❌আপনার যথেষ্ট কয়েন নেই! কল করতে অন্তত ২০টি কয়েন লাগবে।')
    return;
    }
  currentCoin = currentCoin - 20;

  coinEl.innerText = currentCoin;
const total = "📞 Calling " + title + " " + price;
  alert(total);
  
  const newCart = document.createElement("div");
  const now = new Date();
  const currentTime = now.toLocaleTimeString(); // ex: 10:25:30 AM

  // inner HTML
  newCart.innerHTML = `
    <div class="cart-items flex flex-row justify-between items-center bg-amber-50 p-3">
    <div class="flex flex-col gap-0.5">
    
      <h2 class="font-bold">${title}</h2>
      <h2 class="font-bold">${price}</h2>
      </div>
        <h1 class="font-bold text-lg">${currentTime}</h1>
    </div>
  `;

  const cartContainer = document.getElementById("newcarSection");
  cartContainer.appendChild(newCart);

// clear btn
document.getElementById("btn-clear").addEventListener("click", function () {


  const cartContainer = document.getElementById("newcarSection");
  cartContainer.innerHTML = ""
  document.getElementById("total").innerText = 0;
  document.getElementById("number").innerText = 0;
});


  return;
}
