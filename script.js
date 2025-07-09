const message = document.getElementById('message');
const speechRecognition = new window.SpeechRecognition();
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
speechRecognition.start();
function getRandomNumber() {
     return Math.floor(Math.random() * 100) + 1;
}
const randomNumber = getRandomNumber();
function writeMessage(text){
     message.innerHTML = `
          <div>You said: </div>
          <span class="box">${text}</span>
     `;
}
function checkNumber(text){
     const number = +text;
     if(Number.isNaN(number)){
          message.innerHTML += '<div>That is not a Valid Number</div>';
          return;
     }
     if(number > 100 || number < 1){
          message.innerHTML += '<div>Number Must be Between 1 and 100</div>';
          return;
     }
     if(number === randomNumber){
          document.body.innerHTML = `
               <h2>Congrats! You have guessed the number! <br><br> It was ${number}</h2>
               <button class="play-again" id="play-again">Play Again</button>
          `;
     }else if(number > randomNumber){
          message.innerHTML += '<div>GO LOWER</div>';
     }else{
          message.innerHTML += '<div>GO HIGHER</div>';
     }
}
function onSpeak(event){
     const text = event.results[0][0].transcript;
     writeMessage(text);
     checkNumber(text);
}
speechRecognition.addEventListener('result',onSpeak);
document.body.addEventListener('click',event => {
     if(event.target.id == 'play-again'){
          window.location.reload();
     }
});