const express = require('express');
const app = express();
const path = require('path');
const router = require('./router');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');

// connecting to the database
app.use(cookieParser());
// automatically parse urlencoded body content and form data from incoming requests and place it in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

if (process.env.NODE_ENV === 'production')
  app.use(express.static(path.resolve(__dirname, '../dist')));
else app.use(express.static(path.resolve(__dirname, '../client')));

//route all requests to router file
app.use('/', router);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
