import WebSocket from 'ws';

const PORT = 8080;

export function runServer() {
  const wss = new WebSocket.Server({ port: PORT });

  wss.on('listening', () => {
    console.log(`WS server listening on port ${PORT}`);
  })

  wss.on('connection', (ws) => {
    ws.send('Hey, client!');
    ws.send('Ho, client! Its me, server!');

    ws.on('message', (message) => {
      console.log('Mensagem recebida: ' + message);
    });
  });
}