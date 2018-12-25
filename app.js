const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.set('views', './public/views/');
app.set('view-engine', 'ejs');

const mainRouter = require('./src/Routes/mainRoute')();

app.use('/', mainRouter);

app.listen(port, () => {
  debug(chalk.green(`Listening at port ${port}`));
});