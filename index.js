const express = require('express');
const app = express()
const port = 3005
const mongoose = require('mongoose');
//mongoose 설치
mongoose.connect('mongodb+srv://root:1234@reactprj.ufrhnox.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('mongoDB connected!'))
.catch(err => console.log(err))





app.get('/', (req, res) => res.send("Real kk"))

app.listen(port, () => console.log(`${port} is now on loading`))

