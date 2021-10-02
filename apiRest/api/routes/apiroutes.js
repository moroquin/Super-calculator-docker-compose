const express = require('express');
const router = express.Router();
router.use(express.json());

const axios = require('axios');

const workerhost = process.env.WORKER_HOST;
const workerport = process.env.WORKER_PORT;


router.get('/prueba',async (req,res)=>{
    console.log(workerhost+':'+workerport+'/math/');
    await axios.get('http://'+workerhost+':'+workerport+'/math/',{port: Number.parseInt(workerport)})
    .then(response => {
        console.log(response.data);
        res.status(201).json(response.data);
    })
    .catch(error => {
        console.log("error");
        console.log(error);
        res.send("funciono");
    });

  //  console.log("funciono");
   // res.send("funciono");
});



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