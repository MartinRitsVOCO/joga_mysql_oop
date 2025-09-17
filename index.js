import express from 'express';
import sessions from 'express-session';
import { ExpressHandlebars as hbs } from 'express-handlebars'
import path from 'path';
const _PORT = 3025;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(sessions({
  secret: 'verysecretkey',
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
  resave: false
}))

app.set('views', path.join(path.resolve(), 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs({ extname: '.hbs', defaultLayout: 'main', layoutsDir: path.join(app.get('views'), 'layouts') }));
app.use(express.static(path.join(path.resolve(), 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

import articleRouter from './routes/article.js';
app.use('/article', articleRouter);

import authorRouter from './routes/author.js';
app.use('/author', authorRouter);

import userRouter from './routes/user.js';
app.use('/user', userRouter);

app.listen(_PORT, () => {
  console.log(`Example app listening at http://localhost:${_PORT}`);
});