const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
const db = require('./config/connectDB.js')
const cors = require('cors')
const router = require('./routes/index.routes.js')


// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
router(app)

// Kết nối MongoDB
db.ConnectDB();




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
