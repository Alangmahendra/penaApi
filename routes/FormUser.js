const router = require('express').Router()
const {sendmail} = require('../controllers/FormUser')

router.post('/sendmail',sendmail)

module.exports = router