const Photos = require('../models/photo')

const list = (req, res) => {
  Photos.find()
  .then(response => { res.status(200).json(response)})
  .catch(err => { res.status(500).json(err) })
}

const posting = (req, res) => {
  console.log('masuk sini')
  if (req.file) {
    let obj = {
      caption: req.body.caption,
      photo_url: req.file.filename
    }
    Photos.create(obj)
    .then( response => { res.status(201).json(response)})
    .catch(err => { res.status(500).json(err) })
  }
}

const destroy = (req, res) => {
  Photos.deleteOne({_id: req.params.id})
  .then(response => { res.status(200).json(response)})
  .catch(err => { res.status(500).json(err) })
}

// const update = (req, res) => {
//   Photos.findByIdAndUpdate({_id: req.params.id})
//   .then(photo => {
//     photo.caption = req.body.caption

//     photo.save()
//   })
// }
const like = (req, res) => {
  console.log(req.body)
  Photos.findByIdAndUpdate({_id: req.body.id})
  .then(updateQuestion => {
    if(updateQuestion.likes.length == 0) {
      updateQuestion.likes.push(req.body.idUser)
    }
    else {
      if (!updateQuestion.likes.includes(req.body.idUser)) {
        updateQuestion.likes.push(req.body.idUser)
      }
      else {
       let index = updateQuestion.likes.indexOf(req.body.idUser)
       updateQuestion.likes.splice(index, 1)
      }
    }
    updateQuestion.save()
    .then( result => { res.status(200).json(result) })
    .catch( err => { res.status(500).json(err) })
  })
}

module.exports = {
  list,
  posting,
  destroy,

}
