'use strict'
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5501;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.json());

const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  // index: false,
  // maxAge: '1d',
  redirect: false,
  // setHeaders: function (res, path, stat) {
  //   res.set('x-timestamp', Date.now())
  // }
}
app.use(express.static('site', options));
// Calling the "Router's".
const index = require('./routes/indexRoutes');
app.use(index);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
