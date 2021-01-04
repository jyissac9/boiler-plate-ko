const express = require('express')
const app = express()
const port = 5000

//Mongo DB 연동
const mongoose = require('mongoose')
 mongoose.connect('mongodb+srv://Jaedragoon:7410sjy1@boilerplate.szyaq.mongodb.net/boilerplate?retryWrites=true&w=majority', {
     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false //에러 방지
 }).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
