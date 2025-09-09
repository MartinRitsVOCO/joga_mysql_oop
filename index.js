import express from 'express';
const _PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(_PORT, () => {
  console.log(`Example app listening at http://localhost:${_PORT}`);
});