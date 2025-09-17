import express from 'express';
import sessions from 'express-session';
import { create } from 'express-handlebars'
import path from 'path';
const _PORT = 3025;

const app = express();
const hbs = create({ extname: '.hbs', defaultLayout: 'main', layoutsDir: path.join(app.get('views'), 'layouts') });
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
app.engine('hbs', hbs.engine);
app.use(express.static(path.join(path.resolve(), 'public')));

app.get('/', async (_req, res) => {
  const { articles } = await fetch('http://localhost:3025/api/article').then(res => res.json());
  res.render('index', { articles: articles });
});

app.get('/article/:slug', async (req, res) => {
  const { article } = await fetch(`http://localhost:3025/api/article/slug/${req.params.slug}`).then(res => res.json());
  article.published = new Date(article.published).toLocaleDateString('et-et');
  res.render('article', { article: article });
});

import articleRouter from './routes/article.js';
app.use('/api/article', articleRouter);

import authorRouter from './routes/author.js';
app.use('/api/author', authorRouter);

import userRouter from './routes/user.js';
app.use('/api/user', userRouter);

import viewsRouter from './routes/views.js';
app.use('/', viewsRouter);

app.listen(_PORT, () => {
  console.log(`Example app listening at http://localhost:${_PORT}`);
});