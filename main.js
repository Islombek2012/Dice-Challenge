const diceTitle = document.querySelector('.dice__title');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const diceBtn = document.querySelector('.diceBtn');
diceBtn.addEventListener('click', ()=>{
      let random1 = Math.floor(Math.random() * 6 + 1);
      img1.src = `./images/dice${random1}.jpg`;
      let random2 = Math.floor(Math.random() * 6 + 1);
      img2.src = `./images/dice${random2}.jpg`;
      if(random1 > random2){
            diceTitle.textContent = 'PLAYER 1 WIN'
      }else if(random1 < random2){
            diceTitle.textContent = 'PLAYER 2 WIN'
      }else if(random1 == random2){
            diceTitle.textContent = 'DRAW'
      }else{
            console.log('error');
      }
})