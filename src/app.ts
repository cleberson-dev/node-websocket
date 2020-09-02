import app from './http';
import { runServer as runWSS } from './ws';

const HTTP_PORT = Number(process.env.HTTP_PORT || 5000);

app.listen(HTTP_PORT, () => console.log('Running HTTP server on port ' + HTTP_PORT));
runWSS();