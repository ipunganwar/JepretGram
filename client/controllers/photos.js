const Photos = require('../models/photo')

const list = (req, res) => {
  Photos.find()
  .then(response => { res.status(200).json(response)})
  .catch(err => { res.status(500).json(err) })
}

const posting = (req, res) => {
  console.log('masuk sini')
  console.log(req.file)
  // Photos.create(req.body)
  // .then(response => { res.status(200).json(response)})
  // .catch(err => { res.status(500).json(err) })
}

// const destroy = (req, res) => {
//   Photos.deleteOne({_id: req.params.id})
//   .then(response => { res.status(200).json(response)})
//   .catch(err => { res.status(500).json(err) })
// }

// const update = (req, res) => {
//   Photos.findByIdAndUpdate({_id: req.params.id})
//   .then(photo => {
//     photo.caption = req.body.caption

//     photo.save()
//   })
// }

module.exports = {
  list,
  posting,
  // destroy,

}
