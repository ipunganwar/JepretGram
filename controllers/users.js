const Users = require('../models/user')

const signin = (req, res) => {

}

const signup = (req, res) => {
  Users.create(req.body)
  .then(result => { res.status(201).json(result) })
  .catch(err => { res.status(500).json(err) })
}

module.exports = {
  signin,
  signup
}