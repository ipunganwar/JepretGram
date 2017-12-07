const Users = require('../models/user')
const bcrypt = require('../helpers/bcrypt')

const signin = (req, res) => {

}

const signup = (req, res) => {
  bcrypt.encrypt(req.body.password)
  .then(hash => {
    let obj = {
      username: req.body.username,
      email: req.body.email,
      password: hash
    }
    Users.create(req.body)
    .then(result => { res.status(201).json(result) })
    .catch(err => { res.status(500).json(err) })
  })
}

module.exports = {
  signin,
  signup
}