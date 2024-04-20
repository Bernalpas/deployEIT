import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import hbs from 'hbs';


//importamos las rutas de la app
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import productsRouter from './routes/products.js';

const app = express();

// view engine setup
app.set('views', 'views');
app.set('view engine', 'hbs');
hbs.registerPartials('views/partials');

//usamos los middlewares de la app
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));


//utilizamos las rutas de la app
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

//pagina de error 404
app.get('*', (req, res)=>{
  res.render('error', {
    title: 'Error', 
    message: 'Página no encontrada'
  });
})

export default app;