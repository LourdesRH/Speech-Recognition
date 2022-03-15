const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('Cómo estas')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'Muy bien, muchas gracias';
      texts.appendChild(p)
    }
    if (text.includes("Cuál es tu nombre") || text.includes('cuál es tu nombre')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'My Name is Cifar';
      texts.appendChild(p)
    }
    if (text.includes('Abre YouTube')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening youtube channel';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.youtube.com/channel/UCdxaLo9ALJgXgOUDURRPGiQ')
    }
    p = document.createElement('p');
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();
