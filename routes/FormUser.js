const router = require('express').Router()
const {sendmail} = require('../controllers/FormUser')
const file = require('../midleware/file')

router.post('/sendmail',sendmail)
router.post('/imagefile',file.multer.single('image'),file.sendUploadToGCS,(req,res)=>{
    res.send({
        status: 200,
        message: 'Your file is successfully uploaded',
        link: req.file.cloudStoragePublicUrl
      })
})
router.post('/zipfile',file.multer.single('zip'),file.sendUploadToGCS,(req,res)=>{
    res.send({
        status: 200,
        message: 'Your file is successfully uploaded',
        link: req.file.cloudStoragePublicUrl
      })
})

module.exports = router