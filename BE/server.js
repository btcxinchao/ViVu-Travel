const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config() 
const cors = require('cors');
app.use(cors());
app.use(express.json());

const database  = require("./config/ConnectDB.js")
;

database.ConnectDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api', (req, res) => {
  res.send('đã kết nối được với backend!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
