var bcrypt = require('bcrypt')
require('dotenv').config()
var jwt = require('jsonwebtoken')

encrypt = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, +process.env.SALT_BCRYPT, function(err, hash) {
      if (err) {
        reject(err)
      }
      else {
        resolve(hash)
      }
    });
  })
}

const compare = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, function(err, res) {
     if (err) {
       reject(err)
     }
     else {
       resolve(res)
     }
    }); 
  })
}

const tokenize = (payload) => {
  // console.log(payload)
  return new Promise((resolve, reject) => {
    jwt.sign(payload, '#@#@$@$@$%@', (err, token) => {
      console.log(token)
      if (err) {
        reject(err)
      }
      else {
        resolve(token)
      }
    })
  })
  
}

module.exports = {
  encrypt,
  compare,
  tokenize
}

