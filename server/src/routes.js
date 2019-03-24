const userController = require('./controllers/userController.js')
const UserAuthenController = require('./controllers/UserAuthenController')

module.exports = (app) => {
    //create user
    app.post('/user', userController.create)

    //edit user
    app.put('/user/:userId', userController.put)

    //delete user
    app.delete('/user/:userId', userController.remove)

    //get all user
    app.get('/users', userController.index)

    //get user by id
    app.get('/user/:userId', userController.show)

    //token
    app.post('/login',UserAuthenController.login)
}