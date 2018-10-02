const router = require('express').Router()
const BukuTamu = require('../controllers/bukuTamu')
// const auth = require('../auth/auth')
    router.get('/list',BukuTamu.findAll)
    router.post('/add',BukuTamu.add)

module.exports = router