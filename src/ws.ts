import WebSocket from 'ws';

const PORT = 8080;

export function runServer() {
  const wss = new WebSocket.Server({ port: PORT });

  wss.on('listening', () => {
    console.log(`WS server listening on port ${PORT}`);
  })

  wss.on('connection', (ws) => {
    console.log('Nova conexão WS criada!', wss.clients.size, 'totais.');

    ws.send('Servidor: Ei, cliente!');
    ws.send('Servidor: Sou eu, o servidor!');

    ws.on('message', (message) => {
      console.log(message);
      wss.clients.forEach(client => {
        if (client.readyState !== WebSocket.OPEN) return;
        client.send(message);
      });
    });
  });
}