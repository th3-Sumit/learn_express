const express = require('express')
const app = express();
const cors = require('cors')
require('./config/db')
const bodyParser = require('body-parser')
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    origin: '*',
    allowedHeaders: ['Content-Type','Authorization']
  }));

  app.use(bodyParser.json());

app.use('/api/v1/auth', require('./router/Auth'))

app.listen(4000, () => {
    console.log(`Project is running on port : 4000`)
})