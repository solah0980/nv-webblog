const {User} = require('../models')
module.exports = {
    //get all user
    async index (req, res) {
        try{
            const users = await User.findAll()
            res.send(users)
    } catch (err){
        res.status(500).send({
            error: 'The user infomation was incorrect'
        })
    }
    },

    //create user
    async create (req, res) {
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
    }   catch (err){
        res.status(500).send({
            error: 'create user incorrect' 
        })
    }
    },

    //Edit user
    async put (req, res) {
        try{
          await User.update(req.body, {
              where: {
                  id: req.params.userId
              }
          })  
          res.send(req.body)
        } catch (err){
            req.status(500).send({
                error: 'Update user incorrect'
            })
        }
    },

    //delete user
    async remove (req, res) {
        try{
            const user = await User.findOne({
                where: {
                    id: req.params.userId
                }
            })
            if(!user){
                return res.status(403).send({
                    error: 'The user infomation was incorrect'
                })
            }

            await user.destroy()
            res.send(user)
        }   catch (err){
            req.status(500).send({
                error: 'The user infomation was incorrect'
            })
        }
    },

    //get user by id
    async show (req, res) {
        try{
            const user = await User.findById(req.params.userId)
            res.send(user)
        } catch (err){
            req.status(500).send({
                error: 'The user infomation was incorrect'
            })
        }
    }
    
}