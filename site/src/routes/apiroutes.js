const router = require('express').Router()


router.get('/' , (req , res)=>{
    res.send('hola mundo');
})


router.get('/api1' , (req , res)=>{
    res.send('hola api')
})

module.exports  = router