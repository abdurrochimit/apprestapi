const express = require('express');
const bodyParser = require('body-parser');

var morgan = require('morgan');
const app = express();
const port = 3000

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'))

// panggil routers
var routes = require('./routes');
routes(app);

// daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})