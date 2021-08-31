const express = require('express')
const router = express.Router()

router.get('/', (req , res) => {

    res.render('events/index.ejs') // route for views pages
})

module.exports = router;