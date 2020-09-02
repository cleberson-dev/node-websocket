import express from 'express';
import path from 'path';

const app = express();

const viewsDir = path.join(process.cwd(), 'src', 'views');

app.set('view engine', 'pug');
app.set('views', viewsDir);

app.get('/', (_, res) => {
  res.render('index');
});

export default app;