let min=1,max=10,winningNum=getWinNum(min,max),guessleft=3;

const game=document.getElementById('game');
const minNum=document.querySelector('.min-num');
const maxNum=document.querySelector('.max-num');
const guessBtn=document.getElementById('guess-btn');
const guessInput=document.getElementById('guess-input');
const message=document.querySelector('.message');
minNum.textContent=min;
maxNum.textContent=max;

guessBtn.addEventListener('click',function(){
  let guess=parseInt(guessInput.value);
  if(isNaN(guess) || guess<min || guess>max){
    setMessage(`Please Enter A number Between ${min} & ${max}`,"red");
  }
  else{
  if(guess === winningNum){
    gameOver(true,`${winningNum} is Correct,You Win`);
  }
  else{
    guessleft--;
    if(guessleft===0){
     gameOver(false,`Its hard to tell u that you Loose {;_;} correct Number:${winningNum}`);
     playAgain();
    }else{
    setMessage(`You Loose Your Prestigious Guess,and u left with ${guessleft} more guess`,"red");
    guessInput.value='';
    guessInput.style.borderColor="red";
  }
  }
  }
});

function playAgain(){
 guessBtn.addEventListener('click',function(){
   window.location.reload();
 })
}

function gameOver(won,msg){
  let color;
  won===true?color="green":color="red";
  
  guessInput.disabled=true;
  guessInput.style.borderColor=color;
  setMessage(msg,color);
  guessBtn.value='Play Again';
  guessBtn.className='play-again';
  playAgain();
}

function getWinNum(min,max){
  return (Math.floor(Math.random()*(max-min+1)+min));
}

function setMessage(msg,color){
  message.style.color = color;
  message.textContent=msg;
}