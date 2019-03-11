let express = require('express')
const app = express()

app.get('/status', function(req, res){
    res.send('Hello World')
})

let port = 8081

app.listen(port, function(){
    console.log('server on' + port)
})

app.get('/hello/:person', function(req, req){
    console.log('hello - ' + req.params.person)
    app.send('say hello with' + req.params.person)
})

app.get('/user/:userId', function(req, res){
    app.send('ดูข้อมูลผู้ใช้')
})

app.get('/users', function(req, res){
    app.send('เรียกข้อมูล ผู้ใช้ทั้งหมด')
})