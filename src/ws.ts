import WebSocket from 'ws';

const PORT = 8080;

export function runServer() {
  const wss = new WebSocket.Server({ port: PORT });

  wss.on('listening', () => {
    console.log(`WS server listening on port ${PORT}`);
  })

  wss.on('connection', (ws) => {
    console.log('Nova conexão WS criada!');

    ws.send('Ei, cliente!');
    ws.send('Sou eu, o servidor!');

    ws.on('message', (message) => {
      console.log(message);
    });
  });
}