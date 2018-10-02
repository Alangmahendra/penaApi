const router = require('express').Router()
const {sendmail} = require('../controllers/FormInstitution')

router.post('/sendmail',sendmail)

module.exports = router