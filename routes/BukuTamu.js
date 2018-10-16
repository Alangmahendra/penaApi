const router = require('express').Router()
const BukuTamu = require('../controllers/bukuTamu')

    router.get('/list',BukuTamu.findAll)
    router.post('/add',BukuTamu.add)

module.exports = router