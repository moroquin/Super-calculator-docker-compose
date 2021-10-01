const express = require('express');
const router = express.Router();
router.use(express.json());
//router.use(express.urlencoded());


router.get('/historial' , (req , res)=>{
    console.log('entrando a historial');
    res.json({historial:['1+1=2','5*6=25']}).status(201);
});

router.post('/operacion' , (req , res)=>{
    console.log(req.body);
    let op1 = req.body["op1"];
    let op2 = req.body["op2"];
    let result = parseInt(op1)+parseInt(op2);
    res.json({operacion:`${op1}+${op2}=${result}`}).status(201);
    //res.json({historial:['1+1=2','5*5=25']}).status(201);
});



module.exports  = router;