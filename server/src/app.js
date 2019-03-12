let express = require('express')
let bodyPaser = require('body-parser')
const {sequelize} = require('./models')

const app = express()

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended: true}))

require('./routes')(app)

//controller backend
//API get status server
app.get('/status', function(req, res){
    res.send('Hello World')
})

app.get('/hello/:person', function(req, res){
    console.log('hello - ' + req.params.person)
    res.send('say hello with' + req.params.person)
})

//API get user by id 
app.get('/user/:userId', function(req, res){
    res.send('ดูข้อมูลผู้ใช้: ' + req.params.userId)
})

//API get all user 
app.get('/users/', function(req, res){
    res.send('เรียกข้อมูล ผู้ใช้ทั้งหมด')
})

//API create user
app.post('/user/', function(req, res){
    res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body))
})

//API edit user
app.put('/user/:userId', function(req, res){
    res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ':' + JSON.stringify(req.body))
})

//API delete user
app.delete('/user/:userId', function(req, res){
    res.send('ทำการลบผู้ใช้: ' + req.params.userId + ':' + JSON.stringify(req.body))
})

sequelize.sync({force: false}).then(() => {
    app.listen(port, function(){
        console.log('Server Running on ' + port)
    })
})

let port = 8081

/*app.listen(port, function(){
    console.log('server on' + port)
})*/