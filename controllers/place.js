const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Get /places')
})
module.exports = router