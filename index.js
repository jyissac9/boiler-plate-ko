const express = require('express');
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require('./config/key')

//aplication/x-www-form-urlencoded를 분석할 수 있게 해준다.
app.use(bodyParser.urlencoded({extended: true}));

//application/json를 분석할 수 있게 해준다.
app.use(bodyParser.json());

//Mongo DB 연동
const mongoose = require('mongoose');
 mongoose.connect(config.mongoURI, {
     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false //에러 방지
 }).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! Hi'))

app.post('/register', (req, res) => {
    //회원 가입 시 필요한 정보들을 client에서 가져오면 DB에 저장해준다.
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err })
        return res.status(200).json({ success: true }) //200: 전달에 성공한 상태임을 표현
    }) //save: MongoDB method: DB에 저장
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
