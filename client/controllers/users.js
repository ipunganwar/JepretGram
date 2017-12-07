const Users = require('../models/user')
const bcrypt = require('../helpers/bcrypt')
var jwt = require('jsonwebtoken')


const signin = (req, res) => {
  Users.find({email: req.body.email})
  .then( response => {
    bcrypt.compare(req.body.password, response[0].password)
    .then(result => {
      if(result){
        let token =
          jwt.sign({
          id: response[0]._id,
          email: response[0].email
        }, '#@#$@@$@')
        res.status(200).json({token, id: response[0]._id})
      }
    }) 
  })

}

const signup = (req, res) => {
  bcrypt.encrypt(req.body.password)
  .then(hash => {
    let obj = {
      username: req.body.username,
      email: req.body.email,
      password: hash
    }
    Users.create(obj)
    .then(result => { res.status(201).json(result) })
    .catch(err => { res.status(500).json(err) })
  })
}

module.exports = {
  signin,
  signup
}