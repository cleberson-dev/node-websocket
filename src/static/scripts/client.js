if (!WebSocket) alert('Not Web Socket support');


const form = document.querySelector('#sendToWSForm');
const messageInput = document.querySelector('#messageInput');
const messagesList = document.querySelector('#messagesList');

const wsUrl = 'ws://localhost:8080';
const ws = new WebSocket(wsUrl);

ws.onopen = () => {  
  form.addEventListener('submit', submitHandler);
};

ws.onclose = () => {
  form.removeEventListener('submit', submitHandler);
}

ws.onerror = (error) => {
  console.log(`Ooops! There was an error`);
}

ws.onmessage = (e) => {
  const { data: message } = e;

  const messageEl = document.createElement('li');
  messageEl.innerText = message;
  messagesList.appendChild(messageEl);
};

const submitHandler = (e) => {
  e.preventDefault();

  const messageToSend = `Algum cliente: ${messageInput.value}`;

  ws.send(messageToSend);

  messageInput.value = '';
}
