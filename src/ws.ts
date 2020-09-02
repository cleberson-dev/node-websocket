import WebSocket from 'ws';

const PORT = 8080;

const messages = [
  'Servidor: Ei, cliente!',
  'Servidor: Sou eu, o servidor!'
];

export function runServer() {
  const wss = new WebSocket.Server({ port: PORT });

  wss.on('listening', () => {
    console.log(`WS server listening on port ${PORT}`);
  })

  wss.on('connection', (ws) => {
    console.log('Nova conexão WS criada!', wss.clients.size, 'totais.');

    messages.forEach(msg => ws.send(msg));

    ws.on('message', (newMessage) => {
      console.log(newMessage);
      messages.push(newMessage.toString());
      wss.clients.forEach(client => {
        if (client.readyState !== WebSocket.OPEN) return;
        client.send(newMessage);
      });
    });
  });
}