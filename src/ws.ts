import WebSocket from 'ws';

const PORT = Number(process.env.WS_PORT) || 6000;

export function runServer() {
  const wss = new WebSocket.Server({ port: PORT });

  wss.on('listening', () => {
    console.log(`WS Server listening on port ${PORT}`);
  })

  wss.on('connection', (ws) => {
    ws.on('message', (message) => {
      console.log('Mensagem recebida: ' + message);
    });

    ws.send('Hey!');
    ws.send('Ho!');
  });
}