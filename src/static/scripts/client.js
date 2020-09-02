const wsUrl = 'ws://localhost:8080';
const ws = new WebSocket(wsUrl);

ws.onopen = () => {
  ws.send('Hey, server! Its me, the client!');
};

ws.onerror = (error) => {
  console.log(`Ooops! There was an error`);
  console.log(error);
}

ws.onmessage = (e) => {
  console.log(e.data);
};
