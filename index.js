const express = require('express');
const app = express()
const port = 3005
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {User} = require("./Models/User");

const config = require('./Config/key');

//applicatoin
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//mongoose 설치
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('mongoDB connected!'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send("Real kk"))

//회원 가입 할 때 필요한 정보를 client에서 가져오면
//그걸 db에 넣는다. 
app.post('/register', (req, res) => {

    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({
            success:true
        })
    })
})

app.listen(port, () => console.log(`${port} is now on loading`))

