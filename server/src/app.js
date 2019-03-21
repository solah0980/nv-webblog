let express = require('express')
let bodyPaser = require('body-parser')
let cors = require('cors')
const {sequelize} = require('./models')

const app = express()

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extended: true}))
app.use(cors())

require('./routes')(app)

//API get status server
app.get('/status', function(req, res){
    res.send('Hello World')
})

app.get('/hello/:person', function(req, res){
    console.log('hello - ' + req.params.person)
    res.send('say hello with' + req.params.person)
})

let port = 8081

sequelize.sync({force: false}).then(() => {
    app.listen(port, function(){
        console.log('Server Running on ' + port)
    })
})