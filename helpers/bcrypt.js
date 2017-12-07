var bcrypt = require('bcrypt')
require('dotenv').config()

encrypt = (password) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, process.env.SALT_BCRYPT, function(err, hash) {
        if (err) {
          
        }
      });
    })
}