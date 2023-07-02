const express=require('express')
const app = express()
const cors = require('cors')
const cookieParser=require('cookie-parser')

// Node Custom Middleware

app.use(express.json())
app.use(cors())
app.use(cookieParser())

// Services
app.use('/',(req,res)=>{
   res.status(200).send('<h1>express Server Is Running</h1>')
})

const port=3001

app.listen(port,()=> console.log('Express Server Is Running 🕒....🕒....🕒 '))