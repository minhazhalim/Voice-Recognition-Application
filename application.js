const texts = document.querySelector(".texts");
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const speechRecognition = new SpeechRecognition();
speechRecognition.interimResults = true;
let p = document.createElement("p");
speechRecognition.addEventListener("result",(event) => {
  texts.appendChild(p);
  const text = Array.from(event.results).map((result) => result[0]).map((result) => result.transcript).join("");
  p.innerText = text;
  if (event.results[0].isFinal) {
    if(text.includes("how are you")) {
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "I am fine";
      texts.appendChild(p);
    }
    if(text.includes("what's your name") || text.includes("what is your name")){
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "My Name is Zim";
      texts.appendChild(p);
    }
    if(text.includes("open my YouTube")){
      p = document.createElement("p");
      p.classList.add("replay");
      p.innerText = "opening youtube channel";
      texts.appendChild(p);
      window.open("https://www.youtube.com");
    }
    p = document.createElement("p");
  }
});
speechRecognition.addEventListener("end",() => {
  speechRecognition.start();
});
speechRecognition.start();