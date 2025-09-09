import express from 'express';
const _PORT = 3025;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

import articleRouter from './routes/article.js';
app.use('/article', articleRouter);

app.listen(_PORT, () => {
  console.log(`Example app listening at http://localhost:${_PORT}`);
});