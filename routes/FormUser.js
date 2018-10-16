const router = require('express').Router()
const {sendmail} = require('../controllers/FormUser')
const file = require('../midleware/file')

router.post('/sendmail',sendmail)
router.post('/ktpImage',file.multer.single('ktp'),file.sendUploadToGCS,(req,res)=>{
    res.send({
        status: 200,
        message: 'Your file is successfully uploaded',
        link: req.file.cloudStoragePublicUrl
      })
})
module.exports = router