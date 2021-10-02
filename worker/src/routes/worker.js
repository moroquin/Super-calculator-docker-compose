const router = require('express').Router()


router.get('/' , (req , res)=>{
   // const {op1,op2} = req.body;

    console.log("hola mundo");
    res.status(201).json({hola:"hola mundo"});
    //res.send('hola mundo');
})


module.exports  = router