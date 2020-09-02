import express from 'express';
import path from 'path';

const app = express();

const directories = {
  views: path.join(process.cwd(), 'src', 'views'),
  static: path.join(process.cwd(), 'src', 'static'),
}

app.set('view engine', 'pug');
app.set('views', directories.views);

app.use('/static', express.static(directories.static));

app.get('/', (_, res) => {
  res.render('index');
});

export default app;