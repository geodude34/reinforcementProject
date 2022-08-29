const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// connecting to the database

// automatically parse urlencoded body content and form data from incoming requests and place it in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') app.use(express.static(path.resolve(__dirname, '../dist')));
else app.use(express.static(path.resolve(__dirname, '../client')));

// HOMEPAGE SETUP. Note to self: might have to move this from the server.js --> views.js
// // statically serve everything in the dist folder on the route '/dist'
// // serve index.html on the route '/'
// app.use('/dist', express.static(path.join(__dirname, '../dist'))); 

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });

//ADD ROUTES HERE
//define route handlers

// 404 handler
 app.use('*', (req,res) => {
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
app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });