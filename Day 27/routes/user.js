const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.send('User Home')
})
router.get('/settings',(req,res)=>{
    res.send('User Setting')
})
module.exports = router