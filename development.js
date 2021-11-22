const button = document.querySelector('.talk');
const content = document.querySelector('.content');
const greetings = ['i am good you little piece of love','doing good coding','leave me alone'];
const weather = ['weather is fine','you need a mentor'];
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognizing = new SpeechRecognition();
recognizing.addEventListener('start',function(){
     console.log('voice is activated, you can use microphone');
});
recognizing.addEventListener('result',function(event){
     const current = event.resultIndex;
     const transcript = event.results[current][0].transcript;
     content.textContent = transcript;
     readOutLoud(transcript);
});
button.addEventListener('click',() => {
     recognizing.start();
});
button.style.marginTop = '100px';
button.style.marginLeft = '410px';
button.style.backgroundColor = 'red';
button.style.color = 'white';
button.style.borderRadius = '5px';
button.style.fontSize = '30px';
button.style.textTransform = 'uppercase';
function readOutLoud(message){
     const speech = new SpeechSynthesisUtterance();
     speech.text = 'i dont know what you said';
     if(message.includes('what is your name')){
          const finalText = greetings[Math.floor(Math.random() * greetings.length)];
          speech.text = finalText;
     }
     speech.volume = 1;
     speech.rate = 1;
     speech.pitch = 1;
     window.speechSynthesis.speak(speech);
}